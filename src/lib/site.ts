// Site-wide facts. Every claim here comes from Jawad's brand file, his public bug report
// (Team Management Web App, 57 bugs) or the live projects he built. Nothing is invented.

export const site = {
  name: "CoreDevAI",
  url: "https://coredevai.com",
  email: "contact@coredevai.com",
  whatsapp: "https://wa.me/923343709700",
  linkedin: "https://www.linkedin.com/company/coredevai/",
  instagram: "https://www.instagram.com/coredevai",
  founder: "Jawad Mughal",
  mainAction: "Book a Money Flow Check",
  reply: "We reply within 24 hours.",
  description:
    "Founder-led QA testing and test automation studio for SaaS teams: launch testing, Playwright automation, API testing and AI app testing.",
};

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
];

export type Service = {
  slug: string;
  name: string;
  short: string;
  value: string;
  title: string;
  h1: string;
  lead: string;
  description: string;
  includes: { name: string; detail: string }[];
  steps: { name: string; detail: string }[];
  faq: { q: string; a: string }[];
  keywords: string[];
};

export const services: Service[] = [
  {
    slug: "saas-launch-testing",
    name: "Money Flow Check",
    short: "Signup, login and checkout tested on the web, one Android phone and one iPhone.",
    value: "Report in 48 hours",
    title: "SaaS launch testing: the Money Flow Check",
    h1: "Launch testing for SaaS signup and payments",
    lead:
      "We test the flows that make you money on the web, one Android phone and one iPhone, and send a bug report sorted by severity within 48 hours.",
    description:
      "Pre-launch QA for SaaS: signup, login and checkout tested on web, Android and iPhone, with a severity-sorted bug report in 48 hours.",
    includes: [
      { name: "Signup and login", detail: "Sign up, email confirm, log in, reset the password, log out." },
      { name: "Checkout and payments", detail: "Plans, card entry, failed cards, receipts and upgrades." },
      { name: "Three devices", detail: "Desktop browser, one Android phone and one iPhone." },
      { name: "The bug report", detail: "Each bug with steps, actual and expected result, sorted by severity." },
    ],
    steps: [
      { name: "Send a staging link", detail: "Plus two test accounts and a test card. No code access needed." },
      { name: "We test the money flows", detail: "Happy paths first, then wrong input, long text, back buttons and slow networks." },
      { name: "Get the report in 48 hours", detail: "High bugs first, with the fix order we would follow." },
    ],
    faq: [
      { q: "What does it cost?", a: "It depends on the size of the app. Send a link and we reply with a fixed price." },
      { q: "Do you need our source code?", a: "No. A staging link, two test accounts and a test card are enough." },
      { q: "What if you find nothing?", a: "You get the report anyway, with every flow and case we checked." },
    ],
    keywords: ["saas launch testing", "pre-launch qa", "checkout testing", "signup flow testing"],
  },
  {
    slug: "playwright-test-automation",
    name: "Playwright test automation",
    short: "Playwright tests for your critical paths, running in GitHub Actions on every pull request.",
    value: "Runs on every PR",
    title: "Playwright test automation for SaaS teams",
    h1: "Playwright test automation for SaaS teams",
    lead:
      "We write Playwright tests for the flows your business depends on and run them in GitHub Actions, so a broken signup fails the pull request, not the launch.",
    description:
      "Playwright end-to-end tests for SaaS critical paths, set up in your repo and run in GitHub Actions on every pull request.",
    includes: [
      { name: "Set-up in your repo", detail: "Playwright config, test accounts, environments and secrets." },
      { name: "Critical-path tests", detail: "Signup, login, checkout and the two flows your users use most." },
      { name: "CI on every pull request", detail: "GitHub Actions runs the suite and blocks a failing merge." },
      { name: "Reports and traces", detail: "HTML report and trace files for every failed test." },
    ],
    steps: [
      { name: "Pick the flows", detail: "We agree on the five to ten flows that would hurt most if they broke." },
      { name: "Write the tests", detail: "Readable tests with stable locators, no fixed waits." },
      { name: "Hand over", detail: "A short guide so your developers can add the next test themselves." },
    ],
    faq: [
      { q: "Why Playwright and not Cypress?", a: "Playwright runs Chromium, Firefox and WebKit from one test and handles tabs and iframes well." },
      { q: "Do you aim for full coverage?", a: "No. We cover the flows that cost money when they break, and keep the suite fast." },
      { q: "Who owns the tests?", a: "You do. They live in your repository from the first commit." },
    ],
    keywords: ["playwright automation", "playwright testing services", "e2e testing", "github actions playwright"],
  },
  {
    slug: "api-testing",
    name: "API testing",
    short: "Postman collections that check status codes, auth, wrong input and limits.",
    value: "Postman and Newman",
    title: "API testing with Postman for SaaS backends",
    h1: "API testing for SaaS backends",
    lead:
      "We test your REST endpoints in Postman for status codes, auth, wrong input and edge cases, then run the collection in CI with Newman.",
    description:
      "API testing for SaaS backends with Postman and Newman: auth, validation, negative cases and contract checks, run in CI.",
    includes: [
      { name: "Endpoint coverage", detail: "Every endpoint in your docs, called with good and bad input." },
      { name: "Auth and roles", detail: "Expired tokens, wrong roles and requests for another user's data." },
      { name: "Validation", detail: "Missing fields, long strings, negative numbers and wrong types." },
      { name: "CI run", detail: "The collection runs with Newman in your pipeline." },
    ],
    steps: [
      { name: "Share the API docs", detail: "An OpenAPI file or a Postman workspace and a test environment." },
      { name: "We build the collection", detail: "Requests, tests and environments, grouped by feature." },
      { name: "Get the findings", detail: "A bug list plus the collection, ready to run again." },
    ],
    faq: [
      { q: "Do you test GraphQL?", a: "Yes, through Postman's GraphQL requests, with the same checks." },
      { q: "Can you load test?", a: "Light checks only. For real load testing we recommend a dedicated tool." },
      { q: "Do you need production access?", a: "No. A staging environment with test data is better." },
    ],
    keywords: ["api testing services", "postman api testing", "rest api testing", "newman ci"],
  },
  {
    slug: "ai-app-testing",
    name: "AI app testing",
    short: "Chatbots and LLM features checked for wrong answers, unsafe replies and prompt regressions.",
    value: "LLM and chatbot QA",
    title: "AI app testing for chatbots and LLM features",
    h1: "Testing for AI chatbots and LLM features",
    lead:
      "We test AI features the way users will break them: wrong facts, made-up answers, unsafe replies and old answers that change after a prompt update.",
    description:
      "QA for AI chatbots and LLM features: wrong and made-up answers, unsafe replies, edge cases and prompt regression tests.",
    includes: [
      { name: "Answer checks", detail: "A set of real questions with the answers you expect." },
      { name: "Edge cases", detail: "Empty input, long input, other languages and attempts to bypass rules." },
      { name: "Regression set", detail: "Questions re-run after every prompt or model change." },
      { name: "UI around the AI", detail: "Loading states, errors, streaming text and retry buttons." },
    ],
    steps: [
      { name: "Define good answers", detail: "We agree what a right, a wrong and an unsafe answer looks like." },
      { name: "Test and record", detail: "Each question, the reply and whether it passed." },
      { name: "Automate the set", detail: "The questions become a test you run before each release." },
    ],
    faq: [
      { q: "Which models do you test?", a: "Any model behind your product: the test looks at the replies, not the provider." },
      { q: "Can AI answers be tested at all?", a: "Yes. Not word for word, but for facts, rules and format." },
      { q: "Do you test voice or image AI?", a: "Text features today. Ask us about others." },
    ],
    keywords: ["ai testing", "llm testing", "chatbot testing", "ai app qa"],
  },
  {
    slug: "ai-automation",
    name: "AI automation",
    short: "Repetitive work moved to AI workflows, tested before your team relies on them.",
    value: "Workflows that are tested",
    title: "AI automation for small teams",
    h1: "AI automation for small business workflows",
    lead:
      "We turn repetitive work, such as sorting leads, drafting replies or moving data between tools, into AI workflows, and test them before your team relies on them.",
    description:
      "AI automation for small teams: repetitive tasks turned into AI workflows that are tested for wrong output before go-live.",
    includes: [
      { name: "Workflow map", detail: "Where the time goes today and which steps a model can take." },
      { name: "The build", detail: "The workflow in the tools you already use, with a human check where it matters." },
      { name: "Testing", detail: "Real past examples run through it, with wrong outputs fixed before launch." },
      { name: "Handover", detail: "How it works, how to pause it and what to watch." },
    ],
    steps: [
      { name: "Show us the task", detail: "A screen recording of the work as it is done today." },
      { name: "We build and test", detail: "On your own past data before anything goes live." },
      { name: "Go live with a check", detail: "A person approves the output until it has earned trust." },
    ],
    faq: [
      { q: "Which tools do you use?", a: "The ones your team already has where possible. We pick after seeing the task." },
      { q: "Will it replace people?", a: "It takes the repetitive part. A person still checks what matters." },
      { q: "What if the AI gets it wrong?", a: "That is why we test it on your past data first and keep a human check." },
    ],
    keywords: ["ai automation", "ai workflow automation", "business process automation"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export const projects = [
  { name: "Gymanger", slug: "gymanger", kind: "SaaS", url: "https://www.gymanger.com", line: "Gym management SaaS: memberships, bookings, payroll, POS and door access.", stack: "Next.js, TypeScript, PostgreSQL" },
  { name: "Right Way Garage Doors", slug: "rwgaragedoors", kind: "Business site", url: "https://www.rwgaragedoors.com", line: "Service pages, online scheduling and lead capture for a Northern California firm.", stack: "WordPress, Elementor" },
  { name: "MedWing Express", slug: "medwingexpress", kind: "Healthcare", url: "https://medwingexpress.com", line: "Air medical transport company site with a quote request flow.", stack: "WordPress, Elementor" },
  { name: "Wonders of Heaven PK", slug: "wondersofheaven", kind: "E-commerce", url: "https://wondersofheavenpk.com", line: "WooCommerce store for a hair care brand: catalogue, combos and checkout.", stack: "WordPress, WooCommerce" },
  { name: "Denka CRM", slug: "denka-crm", kind: "CRM", url: "https://denka-crm.netlify.app", line: "Lead tracking, sales pipeline and analytics dashboard.", stack: "React, TypeScript" },
  { name: "BA Money Market", slug: "ba-money-market", kind: "Fintech", url: "https://ba-money-market.netlify.app", line: "Investor dashboard with portfolio tracking and yield reports.", stack: "React, Node.js" },
  { name: "SoulMatchh", slug: "soulmatchh", kind: "Social", url: "https://soulmatchh.netlify.app", line: "Matchmaking app with profiles, chat and subscription tiers.", stack: "React, Node.js" },
  { name: "Ambient Weaving", slug: "ambient-weaving", kind: "Interactive", url: "https://ambientweaving.lab.zozo.jp", line: "Interactive web piece for ZOZO Labs on fashion and ambient computing.", stack: "React, Three.js, WebGL" },
];

// Facts from Jawad's public bug report: "Bug Report: Team Management Web App".
export const report = {
  product: "Team management web app",
  scope: "Tested as Admin, from login and invitations to payroll and settings.",
  total: 57,
  high: 19,
  medium: 28,
  low: 10,
  enhancements: 9,
  patterns: 6,
  verdict:
    "The biggest risk in this build was numbers that don't add up, not crashes. Managers could plan work and pay people from wrong data, and no error would say so.",
  bugs: [
    { id: "BUG-024", severity: "High", title: "31 hours assigned to one person in one day", module: "Assignments", actual: "Two projects on the same day add up to 31 hours. The app saves it.", expected: "Block anything over 24 hours a day and say why." },
    { id: "BUG-014", severity: "High", title: "A fine of 10²⁶ shows as 1e+26", module: "Fines", actual: "A very large amount is accepted and displayed in scientific notation.", expected: "Limit the amount and show it as a normal number." },
    { id: "BUG-033", severity: "High", title: "A password of one letter and spaces is accepted", module: "Password reset", actual: "The reset saves it, and the new password logs in.", expected: "Ignore spaces in the length rule and reject weak passwords." },
  ],
};
