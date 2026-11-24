import type { Metadata } from "next";
import { LegalPage } from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read CoreDevAI's privacy policy to learn how we collect, use, and protect your information.",
};

const sections = [
  {
    title: "1. Information We Collect",
    body: [
      "When you fill out our contact form, we collect the information you provide directly — including your name, email address, a link to your product and the details of what you want tested.",
      "When you visit our website, we may automatically collect basic technical information such as your browser type, device type, pages visited, and referring URLs to help us understand how visitors use our site.",
    ],
  },
  {
    title: "2. How We Use Your Information",
    body: [
      "We use the information you provide to respond to your inquiries, prepare project proposals and quotes, and communicate with you about your project.",
      "We do not sell, rent, or trade your personal information to third parties for marketing purposes.",
    ],
  },
  {
    title: "3. Cookies and Analytics",
    body: [
      "Our website may use cookies or similar technologies to understand aggregate site usage. These do not personally identify you.",
    ],
  },
  {
    title: "4. Data Storage and Security",
    body: [
      "We take reasonable technical and organizational measures to protect the information you share with us from unauthorized access, loss, or misuse. However, no method of transmission over the internet is 100% secure.",
    ],
  },
  {
    title: "5. Third-Party Services",
    body: [
      "We may use third-party tools (such as hosting providers, email delivery services, and analytics platforms) to operate our website and respond to inquiries. These providers are only given access to information necessary to perform their functions.",
    ],
  },
  {
    title: "6. Your Rights",
    body: [
      "You may request access to, correction of, or deletion of your personal information at any time by contacting us at contact@coredevai.com. We will respond to all legitimate requests within a reasonable timeframe.",
    ],
  },
  {
    title: "7. Changes to This Policy",
    body: [
      "We may update this privacy policy from time to time. Any changes will be posted on this page with an updated revision date.",
    ],
  },
  {
    title: "8. Contact Us",
    body: [
      "If you have any questions about this privacy policy or how we handle your information, please reach out to us at contact@coredevai.com.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return <LegalPage title="Privacy policy" updated="25 November 2026" sections={sections} />;
}
