import type { Metadata } from "next";
import type { ComponentType, ReactNode } from "react";
import SectionNav from "./section-nav";
import {
  ArrowUpRight,
  BadgeCheck,
  Briefcase,
  CalendarCheck,
  Car,
  Cloud,
  Code2,
  CreditCard,
  Database,
  FileText,
  GitBranch,
  Github,
  GraduationCap,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Network,
  Phone,
  Server,
  Sparkles,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dasitha Tharinda — Full-Stack Software Engineer | Portfolio",
  description:
    "Dasitha Tharinda — full-stack software engineer based in New Zealand with an Open Work Visa. 5+ years building scalable fintech, crypto and business-management platforms, including CoinBureau and Simplebooks.",
};

/* ------------------------------------------------------------------ */
/* Content                                                             */
/* ------------------------------------------------------------------ */

const PROFILE = {
  name: "Dasitha Tharinda",
  headline: "Full-Stack Software Engineer",
  stackLine: "TypeScript, JavaScript, C#",
  seeking:
    "Open to software engineering roles at all levels",
  location: "New Zealand — open to relocation",
  email: "dasitha98@gmail.com",
  phone: "022 417 8796",
  phoneIntl: "+64224178796",
  github: "https://github.com/dasitha98",
  linkedin: "https://www.linkedin.com/in/dasitha-tharinda-6193a9206/",
};

const quickFacts = [
  { icon: BadgeCheck, label: "Work rights", value: "Open Work Visa" },
  { icon: CalendarCheck, label: "Availability", value: "Immediately available" },
  { icon: Car, label: "Licence", value: "Full NZ driver's licence" },
  { icon: MapPin, label: "Location", value: "New Zealand · open to relocation" },
  { icon: Briefcase, label: "Experience", value: "5+ years, full stack" },
];

const highlights = [
  { value: "5+ yrs", label: "Commercial software experience" },
  { value: "NZ", label: "Local project experience at Whitireia and WelTec" },
];

const experience = [
  {
    role: "Software Engineer (Industry Placement)",
    company: "Whitireia and WelTec",
    location: "New Zealand",
    period: "Jul 2025 – Dec 2025",
    nz: true,
    bullets: [
      "Led end-to-end modernisation of a business application, translating stakeholder requirements into a scalable full-stack web solution.",
      "Improved data accuracy by an estimated 70% and cut manual processing by about 3 hours per week through workflow optimisation.",
      "Mentored a junior software engineer, promoting code quality and Agile delivery practices.",
    ],
    tech: [
      "C#",
      "ASP.NET Core Web API (.NET)",
      "React",
      "Microsoft SQL Server",
      "Entity Framework",
      "Clean Architecture",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Simplebooks",
    location: "Sri Lanka",
    period: "Aug 2024 – May 2025",
    bullets: [
      "Owned end-to-end delivery of the Business Management System and Tax Tool, driving planning, stakeholder alignment, prioritisation and release milestones.",
      "Led architecture and technical design reviews across both products, establishing scalable, maintainable system designs and reliable external service integrations.",
      "Integrated the WebXPay payment gateway for secure online transactions and built automation features, cutting manual processing time by an estimated 40%.",
      "Strengthened release quality by introducing structured testing strategies and code review practices, reducing production bugs by an estimated 25%.",
    ],
    tech: ["Node.js", "React", "Next.js", "NestJS", "Firebase", "WebXPay"],
  },
  {
    role: "Software Engineer",
    company: "The Coin Bureau",
    location: "Dubai, UAE",
    period: "Aug 2022 – Aug 2024",
    bullets: [
      "Built and maintained CoinBureau and CoinBureau Hub, cryptocurrency market analysis and content platforms with secure authentication and data encryption.",
      "Engineered trading marketplace features across multiple web and mobile applications, contributing to architecture and design reviews.",
      "Integrated Stripe and PayPal payment gateways and secure OAuth/JWT authentication across customer-facing platforms, while facilitating Scrum ceremonies including sprint planning and backlog prioritisation.",
      "Partnered with UX/UI designers to ship feedback-driven improvements, contributing to a 50% increase in user satisfaction.",
    ],
    tech: [
      "TypeScript",
      "Next.js",
      "React",
      "NestJS",
      "React Native",
      "C#",
      "ASP.NET Core",
      "Redux Toolkit",
      "Jest",
      "Stripe",
      "PayPal",
      "Event-Driven Architecture",
      "Microservices Architecture",
    ],
  },
  {
    role: "Associate Software Engineer",
    company: "Code94 Labs",
    location: "Sri Lanka",
    period: "Feb 2022 – Aug 2022",
    bullets: [
      "Developed responsive, customer-facing e-commerce applications, building reusable UI components and improving front-end performance and usability.",
      "Optimised database schemas and aggregation pipelines, improving query performance by an estimated 35%.",
      "Implemented event-driven, message-based services and supported containerised deployments.",
    ],
    tech: [
      "JavaScript",
      "React",
      "Express.js",
      "MongoDB",
      "RabbitMQ",
      "Docker",
      "Kubernetes",
      "Git",
      "Event-Driven Architecture",
    ],
  },
  {
    role: "Trainee Software Engineer",
    company: "Future CX Lanka (Pvt) Ltd",
    location: "Sri Lanka",
    period: "Jul 2021 – Jan 2022",
    bullets: [
      "Automated cloud provisioning and deployment pipelines, cutting release time from several hours to under 15 minutes, while building front-end and back-end components for live applications.",
    ],
    tech: [
      "Terraform",
      "Infrastructure as Code",
      "DigitalOcean",
      "Microsoft Azure",
    ],
  },
];

type Project = {
  title: string;
  subtitle: string;
  url?: string;
  current?: boolean;
  /** One sentence about the system. */
  description: string;
};

const projects: Project[] = [
  {
    title: "Manaliya.lk",
    subtitle: "Personal project · Dating platform",
    url: "https://manaliya.lk/",
    current: true,
    description:
      "A dating app for web and mobile that helps people find compatible matches and connect safely.",
  },
  {
    title: "CoinBureau",
    url: "https://coinbureau.com",
    subtitle: "The Coin Bureau",
    description:
      "A crypto media and education platform that gives traders and investors market analysis, reviews, guides and newsletters.",
  },
  {
    title: "CoinBureau Hub",
    url: "https://hub.coinbureau.com",
    subtitle: "The Coin Bureau",
    description:
      "Coin Bureau's members' club for web and mobile, giving subscribers premium crypto content, member-only tools and a trading marketplace.",
  },
  {
    title: "Business Management System",
    url: "https://dashboard.simplebooks.com",
    subtitle: "Simplebooks",
    description:
      "An all-in-one dashboard that helps small businesses manage registration, invoicing, payroll and accounting.",
  },
  {
    title: "Tax Tool",
    url: "https://tax.simplebooks.com",
    subtitle: "Simplebooks",
    description:
      "An online tax-filing tool that makes it easy for people to calculate and file their income tax.",
  },
  {
    title: "Hospitality Inventory System",
    subtitle: "Whitireia and WelTec",
    description:
      "A web app that helps the School of Hospitality manage ingredient ordering, stock levels and cost tracking.",
  },
];

type SkillGroup = {
  icon: ComponentType<{ className?: string }>;
  title: string;
  items: string[];
};

// One line per category so recruiters can scan the whole stack at a glance.
const skillGroups: SkillGroup[] = [
  { icon: Code2, title: "Languages", items: ["TypeScript", "JavaScript", "C#", "Go"] },
  {
    icon: Layers,
    title: "Frontend & Mobile",
    items: ["React", "Next.js", "React Native", "Redux Toolkit", "Tailwind CSS", "CSS"],
  },
  {
    icon: Server,
    title: "Backend & APIs",
    items: ["Node.js", "Express.js", "NestJS", "ASP.NET Core Web API", "RabbitMQ", "OpenAPI"],
  },
  {
    icon: Database,
    title: "Databases & ORMs",
    items: ["Microsoft SQL Server", "MongoDB", "Firebase", "Redis", "TypeORM", "Entity Framework"],
  },
  {
    icon: Sparkles,
    title: "AI Integration",
    items: ["OpenAI API", "RAG chatbots", "AI-assisted development"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    items: ["Microsoft Azure", "DigitalOcean", "Docker", "Kubernetes", "Terraform"],
  },
  {
    icon: GitBranch,
    title: "Testing & CI/CD",
    items: ["Jest", "Git", "GitHub", "GitHub Actions"],
  },
  {
    icon: Network,
    title: "Architecture",
    items: ["Clean Architecture", "Microservices", "Event-Driven", "Feature-based"],
  },
  {
    icon: CreditCard,
    title: "Payments",
    items: ["Stripe", "PayPal", "WebXPay"],
  },
];

const education = [
  {
    degree: "Master of Information Technology",
    school: "Whitireia and WelTec",
    location: "New Zealand",
    period: "2025 – 2026",
  },
  {
    degree: "BSc (Hons) Information Technology — Software Engineering",
    school: "SLIIT",
    location: "Sri Lanka",
    period: "2019 – 2023",
  },
];

// Order matches the page: projects and skills first, as recruiters screen those.
const navLinks = [
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

/* ------------------------------------------------------------------ */
/* Building blocks                                                     */
/* ------------------------------------------------------------------ */

function Section({
  id,
  eyebrow,
  title,
  intro,
  muted = false,
  children,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  muted?: boolean;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`scroll-mt-(--portfolio-offset,8rem) border-t border-slate-200 dark:border-slate-800 ${
        muted ? "bg-slate-50 dark:bg-slate-900/50" : "bg-white dark:bg-slate-950"
      }`}
    >
      <div className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-14">
        <header className="mb-6 max-w-2xl md:mb-7">
          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-teal-700 dark:text-teal-400">
            {eyebrow}
          </p>
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl dark:text-white">
            {title}
          </h2>
          {intro && (
            <p className="mt-2 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              {intro}
            </p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
}

function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded border border-slate-200 bg-white px-1.5 py-0.5 text-xs font-medium text-slate-800 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100">
      {children}
    </span>
  );
}

function Bullet({ children }: { children: ReactNode }) {
  return (
    <li className="flex gap-2.5">
      <span
        className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-teal-600 dark:bg-teal-400"
        aria-hidden
      />
      <span>{children}</span>
    </li>
  );
}

/* ------------------------------------------------------------------ */
/* Page                                                                */
/* ------------------------------------------------------------------ */

export default function PortfolioPage() {
  return (
    <main className="bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      {/* HEADER — name, headline, contact and work rights up front (NZ CV style) */}
      <section
        id="top"
        className="relative overflow-hidden bg-linear-to-b from-teal-50/80 to-white dark:from-teal-950/40 dark:to-slate-950"
      >
        <div
          className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-teal-200/40 blur-3xl dark:bg-teal-800/20"
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-6xl gap-8 px-5 pb-8 pt-10 md:px-8 md:pb-10 md:pt-12 lg:grid-cols-[1fr_340px] lg:items-start">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-teal-200 bg-white px-3 py-1 text-sm font-medium text-teal-800 shadow-sm dark:border-teal-800 dark:bg-teal-950 dark:text-teal-300">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-teal-500 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-teal-600" />
              </span>
              Available now · Open Work Visa
            </p>

            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl dark:text-white">
              {PROFILE.name}
            </h1>
            <p className="mt-3 text-xl font-semibold text-teal-700 md:text-2xl dark:text-teal-400">
              {PROFILE.headline}
            </p>
            <p className="mt-2 text-lg font-medium text-slate-600 dark:text-slate-400">
              {PROFILE.stackLine}
            </p>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-slate-700 dark:text-slate-300">
              
            </p>
            <p className="mt-3 inline-flex items-center gap-2 rounded-lg border-l-4 border-teal-600 bg-teal-50/70 px-3 py-2 text-base font-medium text-teal-900 dark:border-teal-400 dark:bg-teal-950/50 dark:text-teal-200">
              <Briefcase className="h-4 w-4 shrink-0" />
              {PROFILE.seeking}
            </p>

            {/* Contact line */}
            <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-base text-slate-700 dark:text-slate-300">
              <li>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="inline-flex items-center gap-2 hover:text-teal-700 dark:hover:text-teal-400"
                >
                  <Mail className="h-4 w-4 text-teal-700 dark:text-teal-400" />
                  {PROFILE.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PROFILE.phoneIntl}`}
                  className="inline-flex items-center gap-2 hover:text-teal-700 dark:hover:text-teal-400"
                >
                  <Phone className="h-4 w-4 text-teal-700 dark:text-teal-400" />
                  {PROFILE.phone}
                </a>
              </li>
              <li className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-teal-700 dark:text-teal-400" />
                {PROFILE.location}
              </li>
            </ul>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-teal-700 px-5 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-teal-800 dark:bg-teal-500 dark:text-slate-950 dark:hover:bg-teal-400"
              >
                <Mail className="h-4 w-4" /> Email me
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-base font-semibold text-slate-800 transition hover:border-teal-600 hover:text-teal-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-teal-400 dark:hover:text-teal-400"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-3 text-base font-semibold text-slate-800 transition hover:border-teal-600 hover:text-teal-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:border-teal-400 dark:hover:text-teal-400"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </div>
          </div>

          {/* At a glance */}
          <aside className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg shadow-slate-200/60 dark:border-slate-800 dark:bg-slate-900 dark:shadow-none">
            <h2 className="text-sm font-semibold uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
              At a glance
            </h2>
            <dl className="mt-3 divide-y divide-slate-100 dark:divide-slate-800">
              {quickFacts.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.label} className="flex items-start gap-3 py-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-400">
                      <Icon className="h-4.5 w-4.5" />
                    </span>
                    <div>
                      <dt className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
                        {f.label}
                      </dt>
                      <dd className="text-base font-semibold text-slate-900 dark:text-white">
                        {f.value}
                      </dd>
                    </div>
                  </div>
                );
              })}
            </dl>
          </aside>
        </div>

        {/* Key numbers */}
        <div className="relative mx-auto max-w-6xl px-5 pb-8 md:px-8 md:pb-10">
          <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-3 text-center sm:grid-cols-2 md:gap-4">
            {highlights.map((h) => (
              <div
                key={h.label}
                className="rounded-xl border border-slate-200 bg-white/80 p-4 md:p-5 dark:border-slate-800 dark:bg-slate-900/80"
              >
                <dt className="sr-only">{h.label}</dt>
                <dd>
                  <span className="block text-2xl font-extrabold tracking-tight text-teal-700 md:text-3xl dark:text-teal-400">
                    {h.value}
                  </span>
                  <span className="mt-1 block text-sm leading-snug text-slate-600 dark:text-slate-400">
                    {h.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Sticky section menu with scroll-spy */}
      <SectionNav links={navLinks} />

      {/* PROJECTS */}
      <Section
        id="projects"
        eyebrow="Projects"
        title="Key projects"
        intro="Production platforms I've built and led, across fintech, crypto, SaaS, education and AI."
        muted
      >
        <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.title}
              className={`flex flex-col rounded-lg border bg-white p-4 transition hover:shadow-md dark:bg-slate-900 ${
                p.current
                  ? "border-teal-400 ring-1 ring-teal-400/40 dark:border-teal-600"
                  : "border-slate-200 hover:border-teal-300 dark:border-slate-800 dark:hover:border-teal-700"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                  {p.subtitle}
                </p>
                {p.current && (
                  <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-semibold text-teal-800 dark:bg-teal-950 dark:text-teal-300">
                    <span className="h-1.5 w-1.5 rounded-full bg-teal-600" />
                    In development
                  </span>
                )}
              </div>
              <h3 className="mt-0.5 text-base font-bold text-slate-900 dark:text-white">
                {p.url ? (
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1 hover:text-teal-700 dark:hover:text-teal-400"
                  >
                    {p.title}
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                ) : (
                  p.title
                )}
              </h3>
              <p className="mt-1.5 text-sm leading-snug text-slate-700 dark:text-slate-300">
                {p.description}
              </p>
            </article>
          ))}
        </div>
      </Section>

      {/* SKILLS — one line per category, two columns: the full stack in half a screen */}
      <Section
        id="skills"
        eyebrow="Key skills"
        title="Technical skills"
        intro="Full-stack TypeScript and .NET, from user interface to cloud infrastructure."
      >
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          <dl className="grid lg:grid-cols-2">
            {skillGroups.map((g, i) => {
              const Icon = g.icon;
              const n = skillGroups.length;
              const isLast = i === n - 1;
              // Odd count: the last row spans both columns.
              const spansBoth = isLast && n % 2 === 1;
              // Even count: the second-to-last row is also on the bottom line.
              const onBottomRowLg = isLast || (i === n - 2 && n % 2 === 0);
              return (
                <div
                  key={g.title}
                  className={[
                    "flex flex-col gap-2 border-slate-100 px-4 py-2.5 sm:flex-row sm:items-center sm:gap-3 dark:border-slate-800",
                    isLast ? "" : "border-b",
                    onBottomRowLg && !isLast ? "lg:border-b-0" : "",
                    spansBoth ? "lg:col-span-2" : "lg:odd:border-r",
                  ].join(" ")}
                >
                  <dt className="flex w-44 shrink-0 items-center gap-2 text-sm font-bold text-slate-900 dark:text-white">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-400">
                      <Icon className="h-4 w-4" />
                    </span>
                    {g.title}
                  </dt>
                  <dd className="flex flex-wrap gap-1">
                    {g.items.map((s) => (
                      <Tag key={s}>{s}</Tag>
                    ))}
                  </dd>
                </div>
              );
            })}
          </dl>
        </div>
      </Section>

      {/* EXPERIENCE — reverse chronological, compact */}
      <Section
        id="experience"
        eyebrow="Work history"
        title="Work experience"
        intro="Most recent first."
        muted
      >
        <ol className="space-y-2.5">
          {experience.map((e) => (
            <li
              key={e.company}
              className="rounded-lg border border-slate-200 bg-white px-4 py-3 dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {e.role}
                  <span className="font-medium text-slate-600 dark:text-slate-400">
                    {" "}
                    · {e.company}
                    {e.location && `, ${e.location}`}
                  </span>
                  {e.nz && (
                    <span className="ml-2 inline-block rounded-full bg-teal-50 px-2 py-0.5 align-middle text-xs font-semibold text-teal-800 dark:bg-teal-950 dark:text-teal-300">
                      NZ experience
                    </span>
                  )}
                </h3>
                <p className="text-sm font-semibold text-teal-700 dark:text-teal-400">
                  {e.period}
                </p>
              </div>
              <ul className="mt-1.5 space-y-0.5 text-sm leading-snug text-slate-700 dark:text-slate-300">
                {e.bullets.map((b) => (
                  <Bullet key={b}>{b}</Bullet>
                ))}
              </ul>
              <div className="mt-2 flex flex-wrap items-center gap-1">
                <span className="mr-1 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                  Tech
                </span>
                {e.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </Section>

      {/* EDUCATION & PUBLICATIONS */}
      <Section
        id="education"
        eyebrow="Qualifications"
        title="Education & publications"
        muted
      >
        <div className="grid gap-3 md:grid-cols-2">
            {education.map((ed) => (
              <article
                key={ed.degree}
                className="flex gap-3 rounded-lg border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-50 text-teal-700 dark:bg-teal-950 dark:text-teal-400">
                  <GraduationCap className="h-4 w-4" />
                </span>
                <div>
                  <h3 className="text-base font-bold leading-snug text-slate-900 dark:text-white">
                    {ed.degree}
                  </h3>
                  <p className="mt-0.5 text-sm text-slate-700 dark:text-slate-300">
                    {ed.school}, {ed.location}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-teal-700 dark:text-teal-400">
                    {ed.period}
                  </p>
                </div>
              </article>
            ))}
        </div>
      </Section>

      {/* CONTACT & REFEREES */}
      <section
        id="contact"
        className="scroll-mt-(--portfolio-offset,8rem) bg-slate-900 text-white dark:bg-slate-900"
      >
        <div className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-14">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr] lg:items-center">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.14em] text-teal-400">
                Contact
              </p>
              <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
                Let&apos;s talk about your next hire
              </h2>
              <p className="mt-4 max-w-xl text-lg leading-relaxed text-slate-300">
                {PROFILE.seeking}. I hold an Open Work Visa, can start
                immediately and usually reply within 24 hours.
              </p>
              <p className="mt-6 inline-flex items-center gap-2 rounded-lg border border-slate-700 bg-slate-800/60 px-4 py-2.5 text-base text-slate-200">
                <FileText className="h-4 w-4 text-teal-400" />
                Referees available on request
              </p>
            </div>

            <ul className="grid gap-3 sm:grid-cols-2">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: PROFILE.email,
                  href: `mailto:${PROFILE.email}`,
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: PROFILE.phone,
                  href: `tel:${PROFILE.phoneIntl}`,
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  value: "View profile",
                  href: PROFILE.linkedin,
                  external: true,
                },
                {
                  icon: Github,
                  label: "GitHub",
                  value: "github.com/dasitha98",
                  href: PROFILE.github,
                  external: true,
                },
              ].map((c) => {
                const Icon = c.icon;
                return (
                  <li key={c.label}>
                    <a
                      href={c.href}
                      {...(c.external
                        ? { target: "_blank", rel: "noreferrer" }
                        : {})}
                      className="group flex h-full items-start gap-3 rounded-xl border border-slate-700 bg-slate-800/50 p-4 transition hover:border-teal-400 hover:bg-slate-800"
                    >
                      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-teal-400" />
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm text-slate-400">
                          {c.label}
                        </span>
                        <span className="block break-all text-base font-semibold text-white">
                          {c.value}
                        </span>
                      </span>
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-slate-500 transition group-hover:text-teal-400" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
