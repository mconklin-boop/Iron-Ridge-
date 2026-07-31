export const siteConfig = {
  name: "Iron Ridge Service Group",
  shortName: "Iron Ridge",
  divisions: {
    mobile: "Iron Ridge Mobile Service",
    shop: "Iron Ridge Auto & Diesel",
    logistics: "Iron Ridge Logistics",
  },
  phone: "720-460-0337",
  emergencyPhone: "720-460-0337",
  email: "info@example.com",
  emails: {
    mobile: "mobile@example.com",
    shop: "service@example.com",
    logistics: "logistics@example.com",
  },
  address: "Shop address to be confirmed, Colorado",
  serviceArea: "Colorado service area to be confirmed",
  hours: "Business hours to be confirmed",
  authority: {
    usdot: "USDOT number to be confirmed",
    mc: "MC number to be confirmed",
  },
  social: {
    facebook: "https://www.facebook.com/profile.php?id=61592518599033",
    instagram: "#",
    linkedin: "#",
    googleBusinessProfile: "#",
  },
  forms: {
    general: process.env.NEXT_PUBLIC_GENERAL_FORM_ENDPOINT || "",
    service: process.env.NEXT_PUBLIC_SERVICE_FORM_ENDPOINT || "",
    logistics: process.env.NEXT_PUBLIC_LOGISTICS_FORM_ENDPOINT || "",
  },
  links: {
    phone: "tel:+17204600337",
    emergencyPhone: "tel:+17204600337",
    email: "mailto:info@example.com",
  },
} as const;

export type SiteConfig = typeof siteConfig;
