import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Read the terms of service governing your use of CoreDevAI's website and engagement with our services.",
};

const sections = [
  {
    title: "1. Acceptance of Terms",
    body: [
      "By accessing or using the CoreDevAI website, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website.",
    ],
  },
  {
    title: "2. Services Described",
    body: [
      "CoreDevAI is a QA testing and test automation studio offering launch testing, Playwright automation, API testing, AI app testing and AI automation. Information on this website is provided for general informational purposes and does not constitute a binding offer.",
      "Specific project terms, deliverables, timelines, and pricing are agreed upon separately in a signed proposal or contract between CoreDevAI and the client.",
    ],
  },
  {
    title: "3. Use of This Website",
    body: [
      "You agree to use this website only for lawful purposes and in a way that does not infringe the rights of, or restrict or inhibit the use of, this website by anyone else.",
      "You may not attempt to gain unauthorized access to any part of this website, the server on which it is hosted, or any associated systems.",
    ],
  },
  {
    title: "4. Intellectual Property",
    body: [
      "All content on this website — including text, graphics, logos, and code — is the property of CoreDevAI unless otherwise stated, and is protected by applicable intellectual property laws.",
      "Project work delivered to clients is governed by the intellectual property terms specified in the individual client agreement, not by this website's terms.",
    ],
  },
  {
    title: "5. Submissions Through Contact Forms",
    body: [
      "Any information you submit through our contact form is provided voluntarily for the purpose of discussing a potential project. We will treat this information in accordance with our Privacy Policy.",
    ],
  },
  {
    title: "6. Third-Party Links",
    body: [
      "Our website may contain links to third-party websites (such as social media or messaging platforms). We are not responsible for the content, privacy practices, or availability of these external sites.",
    ],
  },
  {
    title: "7. Limitation of Liability",
    body: [
      "This website and its content are provided on an 'as is' basis without warranties of any kind. CoreDevAI shall not be liable for any indirect, incidental, or consequential damages arising from your use of this website.",
    ],
  },
  {
    title: "8. Changes to These Terms",
    body: [
      "We may revise these terms at any time by updating this page. Continued use of the website after changes are posted constitutes acceptance of the revised terms.",
    ],
  },
  {
    title: "9. Contact Us",
    body: [
      "If you have any questions about these Terms of Service, please contact us at contact@coredevai.com.",
    ],
  },
];

export default function TermsPage() {
  return <LegalPage title="Terms of service" updated="25 November 2026" sections={sections} />;
}
