export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
}

export interface WorkItem {
  title: string;
  label: string;
  problem: string;
  approach: string;
  outcome: string;
  image: string;
}

export interface Service {
  title: string;
  slug: string;
  summary: string;
  solves: string;
  outcomes: string;
}
