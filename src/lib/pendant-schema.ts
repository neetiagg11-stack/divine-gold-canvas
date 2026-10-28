import { officialSources, SITE_URL } from "./brand-sources";

export function pendantSchema(images: string[]) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: "Shrivatsa Gold Lakshmi Pendant",
    category: "Pendants",
    sku: "JTYYA20-DIPA967",
    productID: "JTYYA20-DIPA967",
    url: `${SITE_URL}/lakshmi-pendant`,
    sameAs: officialSources.product,
    image: images,
    brand: { "@type": "Brand", name: "Indriya", url: officialSources.home },
    material: "22K Yellow Gold",
    audience: { "@type": "PeopleAudience", suggestedGender: "female" },
    description: "A 22K yellow gold Lakshmi pendant for women, with a stated gold weight of 14.511 g. Type: Faith & Belief. Occasion: Bridal Wear. Design theme: Elevated Traditional.",
    additionalProperty: [
      { "@type": "PropertyValue", name: "Gold Weight", value: 14.511, unitText: "g" },
      { "@type": "PropertyValue", name: "Gross Weight", value: 15.945, unitText: "g" },
      { "@type": "PropertyValue", name: "Type", value: "Faith & Belief" },
      { "@type": "PropertyValue", name: "Occasion", value: "Bridal Wear" },
      { "@type": "PropertyValue", name: "Design Theme", value: "Elevated Traditional" },
      { "@type": "PropertyValue", name: "Gold Purity", value: "22K" },
    ],
  };
}