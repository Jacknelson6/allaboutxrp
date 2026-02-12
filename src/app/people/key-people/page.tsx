import { redirect } from "next/navigation";

export const dynamic = "force-static";

export default function KeyPeopleRedirect() {
  redirect("/learn/key-people");
}
