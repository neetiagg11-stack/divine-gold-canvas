export const SITE_URL = "https://divine-gold-canvas.lovable.app";
// Stable CDN URL of the official Indriya logo asset (src/assets/indriya-logo-official.png.asset.json).
export const LOGO_URL = `${SITE_URL}/__l5e/assets-v1/abde71c7-70ed-4a90-b979-843dd18aaa10/indriya-logo-official.png`;
export const SITE_NAME = "Shrivatsa Pendant Guide";
export const SOURCE_CHECKED = "2026-10-27";
export const officialSources = {
  home: "https://www.indriya.com/",
  brand: "https://www.indriya.com/brand",
  terms: "https://www.indriya.com/terms-and-conditions",
  privacy: "https://www.indriya.com/privacy",
  stores: "https://www.indriya.com/jewellery-stores",
  storeSearch: "https://www.indriya.com/jewellery-stores/search",
  product: "https://www.indriya.com/jewellery-products/shrivatsa-gold-lakshmi-pendant-jtyya20-dipa967",
  adityaBirla: "https://www.adityabirla.com/en/businesses/companies/indriya",
};
// Verified corporate profiles (checked 28 October 2026).
export const corporateProfiles = [
  { name: "Aditya Birla Group", url: "https://www.adityabirla.com/en/businesses/companies/indriya", kind: "Official Indriya page on the Aditya Birla Group website" },
  { name: "LinkedIn", url: "https://www.linkedin.com/company/novel-jewels-ltd/", kind: "Novel Jewels Limited (Aditya Birla Group) company page" },
];
export const officialSocials = [
  { name: "Instagram", url: "https://www.instagram.com/indriyajewels/?hl=en" },
  { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61560479585835" },
  { name: "YouTube", url: "https://www.youtube.com/@indriyajewels" },
];
// User-supplied references are not proof of brand ownership or product endorsement.
export const suppliedReferences = [
  { name: "X", url: "https://x.com/indriyajewels?lang=en", kind: "Brand-related profile" },
  { name: "Reddit", url: "https://www.reddit.com/r/GoldIndia/comments/1vrfwmp/found_a_design_i_really_like_at_indriya_by_aditya/", kind: "Community discussion" },
  { name: "Instagram", url: "https://www.instagram.com/indriyajewels?dlrf=cTF1eXE0emdkOHhi", kind: "Indriya Instagram profile" },
];
export const brandOrganization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.indriya.com/#organization",
  name: "Indriya",
  url: officialSources.home,
  logo: { "@type": "ImageObject", url: LOGO_URL },
  sameAs: [...officialSocials.map((social) => social.url), ...corporateProfiles.map((profile) => profile.url)],
};
export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  inLanguage: "en",
  about: { "@id": brandOrganization["@id"] },
};
export function informationHead(path: string, title: string, description: string, type = "website") {
  return {
    meta: [
      { title },
      { name: "description", content: description },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: type },
      { property: "og:url", content: `${SITE_URL}${path}` },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: `${SITE_URL}${path}` }],
  };
}