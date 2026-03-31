import { redirect } from "next/navigation";

export default function WaitlistPage() {
  redirect("/accueil#waitlist-form");
}
