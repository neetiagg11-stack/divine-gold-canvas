import { createFileRoute, Link } from "@tanstack/react-router";
import { BrandInformationPage } from "@/components/brand-information";
import { informationHead, officialSources } from "@/lib/brand-sources";

export const Route = createFileRoute("/press")({
  head: () => informationHead("/press", "Press & Media | Shrivatsa Pendant Guide", "Press and media information for the Shrivatsa Pendant Guide, a student jewellery project, with links to official Indriya brand sources."),
  component: PressPage,
});

function PressPage() {
  return <BrandInformationPage title="Press & Media">
    <section>
      <h2>About this website</h2>
      <p>The Shrivatsa Pendant Guide is an educational student project by ATLAS students. It is not an official Indriya publication, and we have no press coverage to list at this time.</p>
    </section>
    <section>
      <h2>Official brand sources</h2>
      <p>For official brand information, visit the <a href={officialSources.brand}>Indriya brand page</a> or the <a href={officialSources.adityaBirla}>Aditya Birla Group profile</a>.</p>
    </section>
    <section>
      <h2>Media enquiries</h2>
      <p>For questions about this project, please use our <Link to="/contact">Contact page</Link>.</p>
    </section>
  </BrandInformationPage>;
}
