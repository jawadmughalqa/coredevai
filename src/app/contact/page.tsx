import type { Metadata } from "next";
import { site } from "@/lib/site";
import { BookForm } from "@/components/BookForm";
import { InnerHero } from "@/components/InnerHero";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Book a Money Flow Check",
  description: "Send a link to your product and the flows that matter. We reply within 24 hours with a fixed price and a start date.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <main id="top">
        <InnerHero
          kicker={site.reply}
          title="Book a Money Flow Check"
          lead="Tell us what the product does and which flows matter most. We reply with a fixed price and a start date. Prefer to talk first? Message us on WhatsApp."
          primary={null}
          secondary={{ href: site.whatsapp, label: "Message us on WhatsApp" }}
          visual={<div className="panel-card" style={{ height: "100%" }}><BookForm /></div>}
        />
      </main>
      <SiteFooter href="#f-name" />
    </>
  );
}
