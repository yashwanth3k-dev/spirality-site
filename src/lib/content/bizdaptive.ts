/**
 * Facts taken from the public Bizdaptive pages (bizdaptive.app), with rupee
 * prices removed. Do not add a legal identifier that those pages do not show.
 */

export const BIZDAPTIVE = {
  product: "Bizdaptive",
  legalName: "Spirality Solutions Private Limited",
  metaAppName: "Spirality AI",
  updated: "14 October 2026",
  email: "info@spiralitysolutions.com",
  phoneDisplay: "75500 12565",
  phoneTel: "+917550012565",
  addressLines: [
    "18A, Durairaj Street",
    "Gandhi Nagar",
    "Chennai, Tamil Nadu 600087",
    "India",
  ],
  addressInline:
    "18A, Durairaj Street, Gandhi Nagar, Chennai, Tamil Nadu 600087, India",
  appUrl: "https://bizdaptive.app",
  signInUrl: "https://bizdaptive.app/signin",
  /** Stays on the app host. Documented on the product privacy policy. */
  dataDeletionCallback: "https://bizdaptive.app/api/meta/data-deletion",
} as const;
