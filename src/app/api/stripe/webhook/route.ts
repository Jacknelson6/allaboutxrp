import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(req: Request) {
  if (!process.env.STRIPE_SECRET_KEY || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: "Stripe not configured yet" }, { status: 503 });
  }

  const Stripe = (await import("stripe")).default;
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

  const body = await req.text();
  const sig = req.headers.get("stripe-signature")!;

  let event;
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error("Webhook signature verification failed:", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  );

  switch (event.type) {
    case "checkout.session.completed": {
      const session = event.data.object as unknown as Record<string, unknown>;
      const customerId = session.customer as string;
      const subscriptionId = session.subscription as string;
      const userId = (session.metadata as Record<string, string>)?.supabase_user_id;
      const email = session.customer_email as string || (session.customer_details as Record<string, string>)?.email;

      // Get subscription details for period end
      const sub = await stripe.subscriptions.retrieve(subscriptionId) as unknown as Record<string, unknown>;

      await supabase.from("pro_subscriptions").upsert(
        {
          user_id: userId,
          email,
          stripe_customer_id: customerId,
          stripe_subscription_id: subscriptionId,
          status: "active",
          current_period_end: new Date((sub.current_period_end as number) * 1000).toISOString(),
          updated_at: new Date().toISOString(),
        },
        { onConflict: "email" }
      );
      break;
    }

    case "customer.subscription.updated": {
      const sub = event.data.object as unknown as Record<string, unknown>;
      const status = sub.status as string;
      const mappedStatus =
        status === "active" ? "active" :
        status === "past_due" ? "past_due" :
        status === "canceled" ? "canceled" : "inactive";

      await supabase
        .from("pro_subscriptions")
        .update({
          status: mappedStatus,
          current_period_end: new Date((sub.current_period_end as number) * 1000).toISOString(),
          updated_at: new Date().toISOString(),
        })
        .eq("stripe_subscription_id", sub.id as string);
      break;
    }

    case "customer.subscription.deleted": {
      const sub = event.data.object as unknown as Record<string, unknown>;
      await supabase
        .from("pro_subscriptions")
        .update({
          status: "canceled",
          updated_at: new Date().toISOString(),
        })
        .eq("stripe_subscription_id", sub.id as string);
      break;
    }
  }

  return NextResponse.json({ received: true });
}
