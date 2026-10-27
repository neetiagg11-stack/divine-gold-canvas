import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shrivatsa Pendant Guide — Indriya Jewellery" },
      { name: "description", content: "Product information and traditional jewellery guidance for the Indriya Shrivatsa Gold Lakshmi Pendant." },
      { property: "og:title", content: "Shrivatsa Pendant Guide — Indriya Jewellery" },
      { property: "og:description", content: "Explore the Indriya Shrivatsa Gold Lakshmi Pendant and its product specifications." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  beforeLoad: () => {
    throw redirect({ to: "/lakshmi-pendant" });
  },
});
