import type { Metadata } from "next";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Briefcase,
  Code2,
  Server,
  Database,
  Cloud,
  Network,
  Users,
  GraduationCap,
  BookOpen,
  Sparkles,
  ArrowRight,
  Layers,
  Palette,
  Boxes,
  Webhook,
  MessagesSquare,
  ShieldCheck,
  TestTube2,
  Bot,
  CreditCard,
  GitBranch,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Dasitha Tharinda — Senior Software Engineer",
  description:
    "Dasitha Tharinda — Senior Software Engineer, New Zealand (open to relocation). Nearly 5 years building scalable fintech, crypto, and business-management platforms, including CoinBureau and Simplebooks.",
};

const PROFILE = {
  name: "Dasitha Tharinda",
  title: "Senior Software Engineer",
  location: "New Zealand — open to relocation",
  email: "dasitha98@gmail.com",
  phone: "022 417 8796",
  github: "https://github.com/dasitha98",
  linkedin: "https://www.linkedin.com/in/dasitha-tharinda-6193a9206/",
};

const projects = [
  {
    title: "WelTec Hospitality Inventory System",
    role: "Software Engineer Intern · Whitireia and WelTec",
    description:
      "Scalable web application modernising ingredient ordering, inventory, and cost tracking for the School of Hospitality.",
    tech: ["Clean Architecture", "Microsoft SQL Server", "Jest"],
    achievements: [
      "Delivered real-time stock tracking and automated cost analysis",
      "Reduced manual processing time and improved data accuracy",
    ],
  },
  {
    title: "Business Management System",
    role: "Senior Software Engineer · Simplebooks",
    description:
      "Unified platform integrating registration, invoicing, payroll, and accounting for the business.",
    tech: ["React", "Node.js", "TypeScript", "WebXPay", "Microsoft SQL Server"],
    achievements: [
      "Owned development priorities and delivery across the SDLC",
      "Integrated WebXPay for local payment processing",
    ],
  },
  {
    title: "Tax Tool",
    role: "Senior Software Engineer · Simplebooks",
    description:
      "A tax calculation tool delivering real-time calculations and compliance checks within the Business Management System.",
    tech: ["React", "Node.js", "TypeScript", "Microsoft SQL Server"],
    achievements: [
      "Delivered real-time tax calculations and compliance checks",
      "Applied rigorous testing and code review to reduce production bugs",
    ],
  },
  {
    title: "CoinBureau",
    role: "Software Engineer · Sonic Labs",
    description:
      "One of the world's leading crypto education and analytics platforms. Built and maintained the platform, implementing OAuth/JWT-based authentication and automated CI/CD pipelines.",
    tech: ["TypeScript", "Next.js", "Node.js", "MongoDB", "OAuth/JWT"],
    achievements: [
      "Implemented OAuth/JWT-based authentication",
      "Automated CI/CD pipelines for reliable releases",
    ],
  },
  {
    title: "CoinBureau Hub",
    role: "Software Engineer · Sonic Labs",
    description:
      "CoinBureau's trading marketplace and content-sharing platform, built on a microservices architecture.",
    tech: ["React", "Node.js", "MongoDB", "Microservices", "RabbitMQ"],
    achievements: [
      "Developed the trading marketplace and content-sharing features",
      "Partnered with UX/UI designers, contributing to a 50% increase in user satisfaction scores",
    ],
  },
];

const experience = [
  {
    company: "Whitireia and WelTec",
    role: "Software Engineer Intern",
    period: "Jul 2025 – Dec 2025",
    location: "New Zealand",
    bullets: [
      "Led end-to-end development of a scalable web application, applying Clean Architecture and Agile/SDLC practices, to modernise ingredient ordering, inventory and cost tracking for the School of Hospitality.",
      "Applied unit testing with Jest to maintain code quality and reliability throughout development.",
      "Delivered real-time stock tracking and automated cost analysis using Microsoft SQL Server, improving data accuracy and reducing manual processing time.",
      "Mentored a fellow software engineer, driving collaboration and knowledge sharing within a small development team.",
    ],
  },
  {
    company: "Simplebooks",
    role: "Senior Software Engineer",
    period: "Aug 2024 – May 2025",
    location: "",
    bullets: [
      "Owned development priorities and delivery timelines across the SDLC for core product features.",
      "Built the Business Management System, a unified platform integrating registration, invoicing, payroll and accounting.",
      "Integrated WebXPay for local payment processing and delivered a Tax Tool with real-time calculations and compliance checks.",
      "Applied rigorous testing and code review practices to maintain reliability, and led cross-functional/IT support across the business.",
    ],
  },
  {
    company: "Sonic Labs (Pvt) Ltd",
    role: "Software Engineer",
    period: "Aug 2022 – Aug 2024",
    location: "",
    bullets: [
      "Built and maintained CoinBureau and CoinBureau Hub, cryptocurrency/blockchain platforms, implementing OAuth/JWT authentication and automated CI/CD pipelines.",
      "Developed CoinBureau Hub's trading marketplace and content-sharing features using a microservices architecture.",
      "Partnered with UX/UI designers on feedback-driven improvements, contributing to a 50% increase in user satisfaction scores.",
      "Coordinated Agile sprint delivery across a cross-functional team, consistently shipping on schedule and within budget.",
    ],
  },
  {
    company: "Code94 Labs",
    role: "Associate Software Engineer",
    period: "Feb 2022 – Aug 2022",
    location: "",
    bullets: [
      "Developed customer-facing web applications and optimised SQL database schemas for efficient data management.",
      "Collaborated with senior engineers on requirements definition and sprint planning within an Agile/Scrum workflow.",
      "Resolved bugs and conducted code reviews to uphold product quality and reliability standards.",
    ],
  },
  {
    company: "Future CX Lanka PVT LTD",
    role: "Trainee Software Engineer",
    period: "Jul 2021 – Jan 2022",
    location: "",
    bullets: [
      "Gained hands-on full-stack development experience across front-end and back-end components of live web applications.",
      "Built an automated deployment system in Golang, using Terraform to provision and integrate DigitalOcean and Azure cloud infrastructure.",
      "Worked with senior developers on code reviews and bug fixes, and participated in structured technical training.",
    ],
  },
];

const skillGroups = [
  {
    icon: Code2,
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "C#", "Go (Golang)", "PHP"],
  },
  {
    icon: Layers,
    title: "Frontend Frameworks & Libraries",
    skills: ["React.js", "Next.js", "React Native", "Vue.js"],
  },
  {
    icon: Server,
    title: "Backend",
    skills: ["Node.js", "Nest.js", "ASP.NET Core (C#)"],
  },
  {
    icon: Webhook,
    title: "API Design",
    skills: ["OpenAPI"],
  },
  {
    icon: Boxes,
    title: "State Management",
    skills: ["Redux Toolkit", "TanStack Query", "Zustand"],
  },
  {
    icon: Palette,
    title: "Styling & UI",
    skills: ["CSS", "Tailwind CSS", "Material UI"],
  },
  {
    icon: Database,
    title: "Databases & ORM",
    skills: ["MongoDB", "Microsoft SQL Server", "Firebase", "Redis", "TypeORM"],
  },
  {
    icon: MessagesSquare,
    title: "Message Brokers",
    skills: ["RabbitMQ"],
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    skills: [
      "Azure",
      "DigitalOcean",
      "Docker",
      "Kubernetes",
      "Terraform",
      "CI/CD",
      "Railway",
    ],
  },
  {
    icon: Network,
    title: "Software Architecture",
    skills: [
      "Microservices",
      "Feature-based Architecture",
      "Clean Architecture",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Authentication",
    skills: ["OAuth", "JWT"],
  },
  {
    icon: TestTube2,
    title: "Testing",
    skills: ["Jest"],
  },
  {
    icon: Bot,
    title: "AI-Assisted Development",
    skills: ["Claude", "Cursor", "Google Antigravity"],
  },
  {
    icon: CreditCard,
    title: "Payment Gateways",
    skills: ["Stripe", "PayPal", "CoinPayments", "WebXPay"],
  },
  {
    icon: Users,
    title: "Practices",
    skills: ["Agile", "Scrum", "SDLC", "Code Review"],
  },
  {
    icon: GitBranch,
    title: "Version Control",
    skills: ["Git", "GitHub", "GitHub Actions"],
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

export default function PortfolioPage() {
  return (
    <main className="bg-background">
      {/* HERO */}
      <section
        id="top"
        className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-[hsl(222,40%,16%)] text-white"
      >
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, hsl(45 99% 54% / 0.25), transparent 40%), radial-gradient(circle at 80% 60%, hsl(222 90% 50% / 0.25), transparent 45%)",
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          aria-hidden
          style={{
            backgroundImage:
              "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-20 md:py-32 grid md:grid-cols-[1fr_340px] gap-12 items-center">
          <div className="animate-fade-in">
            <Badge className="mb-5 bg-gold/15 text-gold border border-gold/30 hover:bg-gold/20">
              <Sparkles className="mr-1.5 h-3 w-3" /> Available for new
              opportunities
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight">
              {PROFILE.name.split(" ")[0]}{" "}
              <span className="block bg-gradient-to-r from-gold to-amber-200 bg-clip-text text-transparent">
                {PROFILE.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>
            <p className="mt-5 text-lg md:text-xl font-medium text-white/85">
              {PROFILE.title}
            </p>
            <p className="mt-1 text-sm text-white/55">
              Open to Junior Software Engineer, Software Engineer &amp; Senior
              Software Engineer roles
            </p>
            <div className="mt-2 flex items-center gap-2 text-white/65 text-sm">
              <MapPin className="h-4 w-4" /> {PROFILE.location}
            </div>
            <div className="mt-3 flex flex-wrap gap-2 text-xs text-white/70">
              <span className="px-2.5 py-1 rounded-full border border-white/15 bg-white/5">
                Open Work Visa
              </span>
              <span className="px-2.5 py-1 rounded-full border border-white/15 bg-white/5">
                Full NZ Driver&apos;s Licence
              </span>
              <span className="px-2.5 py-1 rounded-full border border-white/15 bg-white/5">
                Immediately Available
              </span>
            </div>
            <p className="mt-6 text-base md:text-lg text-white/75 leading-relaxed max-w-2xl">
              Nearly 5 years building scalable applications across fintech,
              cryptocurrency, and business-management platforms, including
              hands-on New Zealand project experience through Whitireia and
              WelTec. I own the full SDLC, integrate secure authentication and
              payment systems, and apply Agile and AI-assisted development
              practices.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button
                asChild
                size="lg"
                className="bg-gold hover:bg-gold/90 text-navy font-semibold shadow-lg shadow-gold/20"
              >
                <a href="#projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/5 text-white hover:bg-white/10 hover:text-white backdrop-blur"
              >
                <a href="#contact">
                  <Mail className="mr-2 h-4 w-4" /> Contact Me
                </a>
              </Button>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="h-10 w-10 rounded-full grid place-items-center bg-white/5 border border-white/15 text-white/80 hover:text-gold hover:border-gold/50 transition"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="h-10 w-10 rounded-full grid place-items-center bg-white/5 border border-white/15 text-white/80 hover:text-gold hover:border-gold/50 transition"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                aria-label="Email"
                className="h-10 w-10 rounded-full grid place-items-center bg-white/5 border border-white/15 text-white/80 hover:text-gold hover:border-gold/50 transition"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="justify-self-center md:justify-self-end">
            <div className="relative animate-fade-in">
              <div
                className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-gold/50 via-gold/10 to-blue-400/30 blur-2xl"
                aria-hidden
              />
              <div className="relative rounded-[2rem] p-1.5 bg-gradient-to-br from-gold/60 via-white/10 to-white/5 backdrop-blur">
                <Image
                  src="/images/portfolio-dasitha.jpg"
                  alt={`${PROFILE.name}, Senior Software Engineer`}
                  width={340}
                  height={420}
                  className="w-64 md:w-80 h-80 md:h-[26rem] object-cover rounded-[1.75rem]"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold mb-3">
              Skills & Tooling
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-navy">
              Tech I work with
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {skillGroups.map((g) => {
              const Icon = g.icon;
              return (
                <Card
                  key={g.title}
                  className="border-border/60 bg-white/80 backdrop-blur hover:-translate-y-1 hover:shadow-lg hover:border-gold/40 transition-all"
                >
                  <CardContent className="p-5">
                    <div className="flex items-center gap-2.5 mb-3.5">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-navy to-navy/80 text-gold shadow">
                        <Icon className="h-4 w-4" />
                      </span>
                      <h3 className="text-sm font-bold text-navy leading-tight">
                        {g.title}
                      </h3>
                    </div>
                    <ul className="flex flex-wrap gap-1.5">
                      {g.skills.map((s) => (
                        <li
                          key={s}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-white border border-border text-navy/80 hover:border-gold/50 hover:text-navy transition"
                        >
                          {s}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-20">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold mb-3">
              About Me
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-navy">
              Engineer. Architect. Team lead.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m a Senior Software Engineer with nearly 5 years of
              experience across{" "}
              <span className="text-navy font-semibold">fintech</span>,{" "}
              <span className="text-navy font-semibold">cryptocurrency</span>,
              and{" "}
              <span className="text-navy font-semibold">
                business-management
              </span>{" "}
              platforms — owning the full software development lifecycle,
              integrating secure authentication and payment systems, and
              applying Agile and AI-assisted development practices.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;ve contributed to international platforms including{" "}
              <span className="text-navy font-semibold">CoinBureau</span> and{" "}
              <span className="text-navy font-semibold">Simplebooks</span>, and
              bring hands-on New Zealand project experience through Whitireia
              and WelTec. I have a consistent track record of{" "}
              <span className="text-navy font-semibold">mentoring peers</span>{" "}
              and driving cross-functional delivery. I&apos;m open to Junior
              Software Engineer, Software Engineer, and Senior Software Engineer
              opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="bg-soft-gray">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-20">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold mb-3">
              Featured Projects
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-navy">
              Selected work
            </h2>
            <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
              Production platforms I&apos;ve architected, led, or shipped —
              across fintech, SaaS, education, and operations.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((p) => (
              <Card
                key={p.title}
                className="group relative overflow-hidden border-border/60 bg-white/80 backdrop-blur hover:-translate-y-1 hover:shadow-xl hover:border-gold/50 transition-all duration-300"
              >
                <div className="h-1 w-full bg-gradient-to-r from-gold via-amber-300 to-gold/40" />
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-bold text-navy">{p.title}</h3>
                    <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition" />
                  </div>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-gold">
                    {p.role}
                  </p>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                    {p.description}
                  </p>

                  <ul className="mt-4 space-y-1.5">
                    {p.achievements.map((a) => (
                      <li key={a} className="text-sm text-navy/80 flex gap-2">
                        <span className="text-gold mt-1">▸</span>
                        <span>{a}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-5 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[11px] font-medium px-2 py-1 rounded-md bg-navy/5 text-navy/80 border border-navy/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <Button
                    asChild
                    variant="ghost"
                    size="sm"
                    className="mt-5 -ml-2 text-navy hover:text-gold hover:bg-transparent"
                  >
                    <a href="#contact">
                      View Project <ArrowRight className="ml-1 h-3.5 w-3.5" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-20">
          <div className="text-center mb-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold mb-3">
              Experience
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-navy">
              Professional journey
            </h2>
          </div>

          <ol className="relative border-l-2 border-gold/30 ml-3 space-y-10">
            {experience.map((e) => (
              <li key={e.company} className="pl-8 relative">
                <span className="absolute -left-[11px] top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-gold ring-4 ring-white shadow">
                  <Briefcase className="h-3 w-3 text-navy" />
                </span>
                <div className="rounded-2xl border border-border/60 bg-white p-6 shadow-sm hover:shadow-md hover:border-gold/40 transition-all">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h3 className="text-lg font-bold text-navy">
                      {e.role}{" "}
                      <span className="text-muted-foreground font-medium">
                        · {e.company}
                      </span>
                    </h3>
                    {e.period && (
                      <span className="text-sm text-gold font-semibold">
                        {e.period}
                      </span>
                    )}
                  </div>
                  <ul className="mt-3 space-y-1.5 text-muted-foreground text-sm">
                    {e.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="text-gold mt-1">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PUBLICATIONS */}
      <section id="research" className="bg-white">
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-20">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold mb-3">
              Research & Publications
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-navy">
              Published work
            </h2>
          </div>

          <Card className="overflow-hidden border-border/60 bg-gradient-to-br from-white to-soft-gray">
            <CardContent className="p-8 md:p-10 grid md:grid-cols-[auto_1fr] gap-6 items-start">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-gold to-amber-300 text-navy shadow">
                <BookOpen className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-navy leading-snug">
                  Pre-Interview Reviewer using Natural Language Processing for
                  Software Engineers
                </h3>
                <p className="mt-3 text-muted-foreground">
                  Research applying NLP techniques to automate pre-interview
                  technical screening and feedback for software engineering
                  candidates.
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Badge className="bg-navy text-white hover:bg-navy/90">
                    IEEE Xplore
                  </Badge>
                  <Badge variant="outline" className="border-gold/40 text-navy">
                    ICAC3N 2022
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* EDUCATION */}
      <section id="education" className="bg-soft-gray">
        <div className="max-w-5xl mx-auto px-4 md:px-8 py-20">
          <div className="text-center mb-10">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gold mb-3">
              Education
            </p>
            <h2 className="text-3xl md:text-5xl font-bold text-navy">
              Academic background
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {education.map((ed) => (
              <Card
                key={ed.degree}
                className="border-border/60 bg-white hover:shadow-md transition"
              >
                <CardContent className="p-6 flex gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-navy text-gold">
                    <GraduationCap className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="font-bold text-navy">{ed.degree}</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {ed.school} · {ed.location}
                    </p>
                    <p className="text-xs text-gold font-semibold mt-1">
                      {ed.period}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


      {/* CONTACT */}
      <section
        id="contact"
        className="relative overflow-hidden bg-gradient-to-br from-navy via-navy to-[hsl(222,40%,16%)] text-white"
      >
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(circle at 70% 30%, hsl(45 99% 54% / 0.3), transparent 45%)",
          }}
        />
        <div className="relative max-w-4xl mx-auto px-4 md:px-8 py-20 md:py-28 text-center">
          <Badge className="mb-5 bg-gold/15 text-gold border border-gold/30 hover:bg-gold/20">
            Let&apos;s connect
          </Badge>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            Let&apos;s Build Something{" "}
            <span className="bg-gradient-to-r from-gold to-amber-200 bg-clip-text text-transparent">
              Great Together
            </span>
          </h2>
          <p className="mt-5 text-white/75 text-lg max-w-2xl mx-auto">
            I&apos;m open to Junior Software Engineer, Software Engineer, and
            Senior Software Engineer roles, plus contract work and
            collaborations. Reach out — I reply within 24 hours.
          </p>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <a
              href={`mailto:${PROFILE.email}`}
              className="group rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-gold/50 backdrop-blur p-5 text-left transition"
            >
              <Mail className="h-5 w-5 text-gold" />
              <p className="mt-3 text-xs uppercase tracking-wider text-white/60">
                Email
              </p>
              <p className="mt-1 text-sm font-semibold break-all">
                {PROFILE.email}
              </p>
            </a>
            <a
              href={`tel:${PROFILE.phone.replace(/\s/g, "")}`}
              className="group rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-gold/50 backdrop-blur p-5 text-left transition"
            >
              <Phone className="h-5 w-5 text-gold" />
              <p className="mt-3 text-xs uppercase tracking-wider text-white/60">
                Phone
              </p>
              <p className="mt-1 text-sm font-semibold">{PROFILE.phone}</p>
            </a>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-gold/50 backdrop-blur p-5 text-left transition"
            >
              <Linkedin className="h-5 w-5 text-gold" />
              <p className="mt-3 text-xs uppercase tracking-wider text-white/60">
                LinkedIn
              </p>
              <p className="mt-1 text-sm font-semibold">Click Here</p>
            </a>
            <a
              href={PROFILE.github}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-white/15 bg-white/5 hover:bg-white/10 hover:border-gold/50 backdrop-blur p-5 text-left transition"
            >
              <Github className="h-5 w-5 text-gold" />
              <p className="mt-3 text-xs uppercase tracking-wider text-white/60">
                GitHub
              </p>
              <p className="mt-1 text-sm font-semibold">Click Here</p>
            </a>
          </div>

          <div className="mt-10">
            <Button
              asChild
              size="lg"
              className="bg-gold hover:bg-gold/90 text-navy font-semibold shadow-lg shadow-gold/20"
            >
              <a href={`mailto:${PROFILE.email}`}>
                <Mail className="mr-2 h-4 w-4" /> Send me a message
              </a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
