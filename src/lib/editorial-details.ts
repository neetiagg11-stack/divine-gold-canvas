import { officialSources, SITE_URL, suppliedReferences } from "./brand-sources";

export const editorialDetails = {
  author: "ATLAS students",
  role: "Students",
  lastUpdated: "2026-10-27",
  lastUpdatedLabel: "27 October 2026",
  scheduledPublication: "2026-10-28",
  scheduledPublicationLabel: "28 October 2026",
  contact: "8433624951",
};

export const studentAuthor = {
  "@type": "Organization",
  "@id": `${SITE_URL}/about#authors`,
  name: editorialDetails.author,
  description: "Student authors of this jewellery information project.",
  url: `${SITE_URL}/about`,
  telephone: editorialDetails.contact,
};

export const pendantWebPage = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${SITE_URL}/lakshmi-pendant#webpage`,
  url: `${SITE_URL}/lakshmi-pendant`,
  name: "Shrivatsa Gold Lakshmi Pendant | Indriya",
  author: studentAuthor,
  dateModified: editorialDetails.lastUpdated,
  isPartOf: { "@id": `${SITE_URL}/#website` },
  mainEntity: { "@type": "Product", name: "Shrivatsa Gold Lakshmi Pendant", sku: "JTYYA20-DIPA967" },
  citation: [
    { "@type": "WebPage", name: "Official Shrivatsa Gold Lakshmi Pendant specifications", url: officialSources.product },
  ],
  relatedLink: suppliedReferences.map((reference) => reference.url),
};