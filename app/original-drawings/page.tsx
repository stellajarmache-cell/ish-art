import { redirect } from "next/navigation";

export default function OriginalDrawingsPage() {
  redirect("/collections?filter=aquarium-sapientum");
}
