import type { Metadata } from "next";

import { InfoPage } from "@/components/info-page";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact details for the minimal art storefront.",
};

export default function ContactPage() {
  return (
    <InfoPage
      title="Studio Contact"
      sections={[
        {
          body: "Email stelllajarmache@gmail.com for questions about editions, works on paper, and printed matter. Messages are typically answered within two business days.",
        },
      ]}
    />
  );
}
