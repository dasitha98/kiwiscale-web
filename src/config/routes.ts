export const ROUTES = {
  home: "/",
  services: "/services",
  work: "/work",
  workDetail: (id: string | number) => `/work/${id}`,
  contact: "/contact",
  portfolio: "/portfolio",
  privacy: "/privacy",
  terms: "/terms",
} as const;
