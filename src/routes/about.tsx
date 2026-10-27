import { createFileRoute, Link } from "@tanstack/react-router";
import { BrandInformationPage } from "@/components/brand-information";
import { brandOrganization, informationHead, officialSources, websiteSchema } from "@/lib/brand-sources";
import { editorialDetails, studentAuthor } from "@/lib/editorial-details";

export const Route = createFileRoute("/about")({
  head: () => ({
    ...informationHead("/about", "About Indriya & Our Product Sources | Shrivatsa Pendant Guide", "Learn about Indriya, its official brand sources and how this Shrivatsa pendant guide distinguishes product specifications from styling guidance."),
    scripts: [brandOrganization, websiteSchema, { "@context": "https://schema.org", ...studentAuthor }].map((schema) => ({ type: "application/ld+json", children: JSON.stringify(schema) })),
  }),
  component: AboutPage,
});

function AboutPage() {
  return <BrandInformationPage title="About Indriya & This Guide">
    <section id="authors">
      <h2>About this student project</h2>
      <p>This jewellery information website is authored by {editorialDetails.author} ({editorialDetails.role.toLowerCase()}). It explores the Shrivatsa Gold Lakshmi Pendant and traditional jewellery using linked product sources. It is a student project, not the official Indriya online store.</p>
      <p>Scheduled publication: <time dateTime={editorialDetails.scheduledPublication}>{editorialDetails.scheduledPublicationLabel}</time>. For enquiries about this website, visit <Link to="/contact">our Contact page</Link>.</p>
      <p>Last updated: <time dateTime={editorialDetails.lastUpdated}>{editorialDetails.lastUpdatedLabel}</time>.</p>
    </section>
    <section id="student-background">
      <h2>Author background & credentials</h2>
      <p>We are ATLAS students creating an educational jewellery information project. Our role is student research and writing, not professional jewellery appraisal, gemmology or brand customer service. We do not claim professional certifications or an endorsement from Indriya.</p>
    </section>
    <section>
      <h2>Indriya and its official website</h2>
      <p>Indriya is a jewellery brand. Its official website is owned and operated by Novel Jewels Limited, an Aditya Birla Group entity, according to its <a href={officialSources.terms}>Terms & Conditions</a>. Explore the brand's own story on the <a href={officialSources.brand}>official Indriya brand page</a>.</p>
    </section>
    <section>
      <h2>Where the product information comes from</h2>
      <p>The <Link to="/lakshmi-pendant">Shrivatsa Gold Lakshmi Pendant</Link> information is sourced from <a href={officialSources.product}>Indriya's official product listing</a>, identified by JTYYA20-DIPA967. That listing states 22K yellow gold, a gold weight of 14.511 g, bridal wear and an Elevated Traditional design theme.</p>
      <p>Gold weight is not the same as the total weight of the piece. Styling photographs do not establish which accessories are included. Confirm price, current availability and what is included directly with Indriya before purchasing.</p>
    </section>
    <section>
      <h2>Our sourcing approach</h2>
      <p>This site presents product information alongside cultural context, frequently asked questions and styling guidance. It does not claim personal product testing, professional credentials or verified customer ratings. References to the brand are not a claim that Indriya has authored or reviewed this guide.</p>
      <p>Official source pages were checked on <time dateTime="2026-10-27">27 October 2026</time>. For customer enquiries, visit <Link to="/contact">Contact</Link>.</p>
    </section>
    <section id="editorial-policy">
      <h2>Editorial policy & corrections</h2>
      <p>We distinguish the product listing's stated specifications from our cultural explanations and styling suggestions. Photographs are not evidence of included accessories, certifications or purchase benefits. We link to original brand sources so readers can check the information for themselves.</p>
      <p>Our contribution is organising the product details, explaining devotional motifs and preparing answers to common questions. This is source-based student work, not a hands-on product test or an account of visiting an Indriya store.</p>
      <p>We do not accept orders, set prices or promise discounts, returns, shipping or warranties. Purchase terms must be confirmed with Indriya. We do not publish fabricated reviews or customer ratings.</p>
      <p>To report an error or request a correction, call the student project contact at <a href={`tel:${editorialDetails.contact}`}>{editorialDetails.contact}</a> and identify the page and source. For product support, use the separately identified official details on our <Link to="/contact">Contact page</Link>.</p>
    </section>
  </BrandInformationPage>;
}