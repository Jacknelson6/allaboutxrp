import { redirect } from "next/navigation";

export const dynamic = "force-static";

export default function PartnershipsRedirect() {
  redirect("/learn/partnerships");
}
