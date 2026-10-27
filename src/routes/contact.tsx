import { createFileRoute } from "@tanstack/react-router";
import { BrandInformationPage } from "@/components/brand-information";
import { informationHead, officialSources } from "@/lib/brand-sources";
import { editorialDetails } from "@/lib/editorial-details";

export const Route = createFileRoute("/contact")({
  head: () => informationHead("/contact", "Contact ATLAS Students & Indriya Sources | Shrivatsa Pendant Guide", "Contact the ATLAS students website project and find separately identified official Indriya product, store and customer support sources."),
  component: ContactPage,
});

function ContactPage() {
  return <BrandInformationPage title="Contact">
    <section>
      <h2>Contact the website project</h2>
      <p>For enquiries about this student website, contact {editorialDetails.author} at <a href={`tel:${editorialDetails.contact}`}>{editorialDetails.contact}</a>. This is the website project's contact number, not an official Indriya support line.</p>
    </section>
    <section>
      <h2>Product enquiries and store visits</h2>
      <p>Indriya publishes <a href="tel:18002108383">1800-210-8383</a> on its <a href={officialSources.home}>official website</a>. Ask the brand about the Shrivatsa Gold Lakshmi Pendant, current pricing, availability and any accessories included.</p>
      <p>Use the <a href={officialSources.stores}>official Indriya store locator</a> for current store addresses and visit information.</p>
    </section>
    <section>
      <h2>Grievance-related enquiries</h2>
      <p>Indriya's <a href={officialSources.privacy}>Privacy Policy</a> lists <a href="mailto:Wecare@Indriya.com">Wecare@Indriya.com</a> and 1800-210-8383 specifically for grievance-related queries. These details belong to Indriya, not to this guide.</p>
    </section>
    <section>
      <h2>Check the original sources</h2>
      <p>Contact sources were checked on <time dateTime="2026-10-27">27 October 2026</time>. Follow the linked official pages for the latest information. This guide does not accept orders or handle customer-service requests on the brand's behalf.</p>
    </section>
  </BrandInformationPage>;
}