import { createFileRoute, Link } from "@tanstack/react-router";
import heroAsset from "@/assets/pendant-hero-2026.webp.asset.json";
import heroSmAsset from "@/assets/pendant-hero-sm-2026.webp.asset.json";
import macroAsset from "@/assets/pendant-macro-2026.webp.asset.json";
import wornAsset from "@/assets/pendant-worn-2026.webp.asset.json";
import craftAsset from "@/assets/pendant-craft-2026.webp.asset.json";
import bridalAsset from "@/assets/pendant-bridal-2026.webp.asset.json";
import packagingAsset from "@/assets/pendant-packaging-2026.webp.asset.json";
import logoAsset from "@/assets/indriya-logo-official.png.asset.json";

const SITE = "https://divine-gold-canvas.lovable.app";
const PAGE_URL = `${SITE}/lakshmi-pendant`;
const heroImage = heroAsset.url;
const heroImageSm = heroSmAsset.url;
const macroImage = macroAsset.url;
const wornImage = wornAsset.url;
const craftImage = craftAsset.url;
const bridalImage = bridalAsset.url;
const packagingImage = packagingAsset.url;
const logoImage = logoAsset.url;

const TITLE = "Shrivatsa Gold Lakshmi Pendant | Indriya";
const DESCRIPTION =
  "Discover the Shrivatsa Gold Lakshmi Pendant, a traditional 22K gold design inspired by divine symbolism and crafted for meaningful occasions.";

export const Route = createFileRoute("/lakshmi-pendant")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "product" },
      { property: "og:url", content: PAGE_URL },
      { property: "og:image", content: `${SITE}${heroImage}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE}${heroImage}` },
    ],
    links: [
      { rel: "canonical", href: PAGE_URL },
      {
        rel: "preload",
        href: heroImageSm,
        as: "image",
        type: "image/webp",
        imagesrcset: `${heroImageSm} 467w, ${heroImage} 933w`,
        imagesizes: "(max-width: 768px) 88vw, 420px",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Shrivatsa Gold Lakshmi Pendant",
          category: "Pendants",
          sku: "JTYYA20-DIPA967",
          productID: "JTYYA20-DIPA967",
          url: PAGE_URL,
          image: [`${SITE}${heroImage}`, `${SITE}${macroImage}`, `${SITE}${wornImage}`],
          brand: { "@type": "Brand", name: "Indriya" },
          material: "22K Yellow Gold",
          audience: { "@type": "PeopleAudience", suggestedGender: "female" },
          description:
            "Rooted in divine symbolism, this pendant reflects the grace and prosperity of Lakshmi-inspired design with a deeply traditional essence. Crafted in 22KT yellow gold with a high-polish finish, the intricate detailing is enhanced with subtle stone accents that add richness and depth.",
          weight: { "@type": "QuantitativeValue", value: 14.511, unitCode: "GRM" },
          additionalProperty: [
            { "@type": "PropertyValue", name: "Type", value: "Faith & Belief" },
            { "@type": "PropertyValue", name: "Occasion", value: "Bridal Wear" },
            { "@type": "PropertyValue", name: "Design Theme", value: "Elevated Traditional" },
            { "@type": "PropertyValue", name: "Gold Purity", value: "22K" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
            {
              "@type": "ListItem",
              position: 2,
              name: "Pendants",
              item: `${SITE}/traditional-jewellery`,
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Lakshmi Pendant",
              item: PAGE_URL,
            },
          ],
        }),
      },
    ],
  }),
  component: LakshmiPendantPage,
});

const highlights = [
  {
    title: "22K Yellow Gold",
    copy: "Crafted in 22-karat yellow gold.",
    mark: "22K",
  },
  {
    title: "Lakshmi-Inspired Design",
    copy: "Rooted in divine symbolism and traditional Indian aesthetics.",
    mark: "\u0950",
  },
  {
    title: "Elevated Traditional",
    copy: "Intricate detailing with a deeply traditional essence.",
    mark: "\u2726",
  },
  {
    title: "Bridal & Auspicious Occasions",
    copy: "Designed for bridal wear and meaningful occasions.",
    mark: "\u273F",
  },
];

const details: [string, string][] = [
  ["Product", "Shrivatsa Gold Lakshmi Pendant"],
  ["Metal", "22K Yellow Gold"],
  ["Gold Weight", "14.511 g"],
  ["Category", "Pendants"],
  ["Type", "Faith & Belief"],
  ["Gender", "Women"],
  ["Occasion", "Bridal Wear"],
  ["Design Theme", "Elevated Traditional"],
  ["Gemstone", "Synthetic gemstone"],
];

const occasions = [
  "Bridal wear",
  "Auspicious occasions",
  "Puja",
  "Festivals",
  "Traditional celebrations",
];

const styling = [
  { title: "Traditional sarees", copy: "A pendant that settles gracefully over silk drapes." },
  { title: "Bridal outfits", copy: "A devotional centrepiece within bridal jewellery layers." },
  { title: "Festive ethnic looks", copy: "Golden warmth for festive ethnic dressing." },
  { title: "Traditional occasions", copy: "A quiet, sacred presence for family ceremonies." },
];

function Btn({
  href,
  children,
  variant = "solid",
}: {
  href: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
}) {
  const base =
    "inline-flex h-12 w-full items-center justify-center rounded-full px-8 text-center text-xs font-medium uppercase tracking-[0.18em] transition-colors sm:w-auto sm:min-w-[11rem]";
  return (
    <a
      href={href}
      className={
        variant === "solid"
          ? `${base} bg-maroon text-ivory hover:bg-maroon/90`
          : `${base} border border-gold-deep/70 text-maroon hover:bg-gold/15`
      }
    >
      {children}
    </a>
  );
}

function SectionLabel({ children, onDark = false }: { children: React.ReactNode; onDark?: boolean }) {
  return (
    <p
      className={`mb-4 inline-flex items-center gap-3 text-[0.68rem] font-medium uppercase tracking-[0.32em] ${
        onDark ? "text-gold" : "text-maroon"
      }`}
    >
      <span aria-hidden="true" className={`h-px w-8 ${onDark ? "bg-gold/60" : "bg-maroon/45"}`} />
      {children}
      <span aria-hidden="true" className="h-px w-8 bg-gold" />
    </p>
  );
}

function LakshmiPendantPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <header className="border-b border-gold/50 bg-maroon">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-4">
          <a href="/" className="flex min-w-0 items-center gap-3">
            <img
              src={logoImage}
              alt="Indriya Jewellery official logo"
              width={248}
              height={76}
              loading="eager"
              decoding="async"
              className="h-10 w-auto shrink-0 brightness-0 invert sm:h-12"
            />
            <span className="sr-only">Indriya Jewellery</span>
          </a>
          <nav
            aria-label="Page sections"
            className="hidden gap-8 text-xs uppercase tracking-[0.2em] text-ivory/75 sm:flex"
          >
            <a href="#craftsmanship" className="transition-colors hover:text-gold">Craftsmanship</a>
            <a href="#details" className="transition-colors hover:text-gold">Product Details</a>
            <a href="#trust" className="transition-colors hover:text-gold">Connect</a>
          </nav>
        </div>
        <div aria-hidden="true" className="rule-gold h-px w-full" />
      </header>

      <main>
        {/* HERO */}
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 md:grid-cols-2 md:py-20">
          <div className="order-2 md:order-1">
            <nav aria-label="Breadcrumb" className="mb-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <ol className="flex flex-wrap gap-2">
                <li><a href="/" className="hover:text-maroon">Home</a></li>
                <li aria-hidden="true">/</li>
                <li>Pendants</li>
                <li aria-hidden="true">/</li>
                <li className="text-gold-deep">Lakshmi Pendant</li>
              </ol>
            </nav>
            <SectionLabel>Indriya &middot; Faith &amp; Belief</SectionLabel>
            <h1 className="font-display text-[2rem] leading-tight text-maroon sm:text-5xl lg:text-6xl">
              Shrivatsa Gold Lakshmi Pendant
            </h1>
            <p className="mt-4 max-w-md font-display text-xl italic text-gold-deep">
              A traditional Lakshmi pendant crafted in 22 karat yellow gold.
            </p>
            <p className="mt-5 max-w-md border-l-2 border-maroon/45 pl-4 text-sm leading-relaxed text-muted-foreground">
              This Goddess Lakshmi pendant from Indriya is divine jewellery in the
              truest sense — Lakshmi jewellery shaped in 22 karat gold for bridal
              jewellery moments, puja and festive occasions. A traditional Lakshmi
              pendant rooted in temple jewellery designs and traditional jewellery
              craft, made for women who wear faith close to the heart.
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-y-2 border-gold/60 py-5 sm:flex sm:flex-wrap sm:gap-x-10">
              <div className="min-w-0">
                <dt className="text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">Metal</dt>
                <dd className="mt-1 font-display text-xl text-maroon sm:text-2xl">22K Yellow Gold</dd>
              </div>
              <div className="min-w-0">
                <dt className="text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">Gold Weight</dt>
                <dd className="mt-1 font-display text-xl text-maroon sm:text-2xl">14.511 g</dd>
              </div>
              <div className="col-span-2 min-w-0">
                <dt className="text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">Price</dt>
                <dd className="mt-1 font-display text-lg text-maroon sm:text-2xl">Price available on request</dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <Btn href="#craftsmanship">Explore the Pendant</Btn>
              <Btn href="/store-locator" variant="outline">Find a Store</Btn>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="mx-auto flex aspect-square w-full max-w-md items-center justify-center overflow-hidden rounded-[2rem] border-2 border-gold/70 bg-maroon/95 p-3 shadow-luxe">
              <img
                src={heroImage}
                srcSet={`${heroImageSm} 467w, ${heroImage} 933w`}
                sizes="(max-width: 768px) 88vw, 420px"
                alt="Shrivatsa Gold Lakshmi Pendant in 22K yellow gold"
                width={933}
                height={1400}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="border-y border-gold/50 bg-maroon">
          <div className="mx-auto grid max-w-6xl gap-5 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h) => (
              <article
                key={h.title}
                className="flex h-full flex-col rounded-2xl border border-gold/35 bg-ivory/5 p-6 text-center"
              >
                <span
                  aria-hidden="true"
                  className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/70 font-display text-xl text-gold"
                >
                  {h.mark}
                </span>
                <h3 className="mt-5 font-display text-xl text-ivory">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ivory/70">{h.copy}</p>
              </article>
            ))}
          </div>
        </section>

        {/* STORY */}
        <section className="mx-auto max-w-3xl px-5 py-16 text-center md:py-20">
          <SectionLabel>The Story</SectionLabel>
          <h2 className="font-display text-3xl text-maroon sm:text-4xl">
            An Icon of Tradition and Grace
          </h2>
          <div aria-hidden="true" className="rule-gold mx-auto mt-6 h-px w-24" />
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Rooted in divine symbolism, this Goddess Lakshmi pendant reflects grace and
            prosperity through a deeply traditional design language. Lakshmi is
            invoked at every threshold of Indian life, and a traditional Lakshmi
            pendant carries that blessing quietly through the day.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            It belongs to a lineage of temple jewellery designs — devotional motifs worn
            close to the heart, carried through generations of Indian tradition. The
            same lotus, arch and goddess forms that shape temple stone shape this
            piece of Lakshmi jewellery, which is why a Lakshmi pendant for women
            feels at home with both ceremony and everyday devotion.
          </p>
          <figure className="mt-10">
            <img
              src={craftImage}
              alt="Detailed jewellery craftsmanship inspired by traditional Indian gold artistry"
              width={1400}
              height={933}
              loading="lazy"
              decoding="async"
              sizes="(max-width: 768px) 90vw, 720px"
              className="h-auto w-full rounded-[1.5rem] border-2 border-gold/50 object-cover"
            />
            <figcaption className="mt-3 text-xs uppercase tracking-[0.22em] text-maroon">
              Traditional artistry behind the motif
            </figcaption>
          </figure>
        </section>

        {/* CRAFTSMANSHIP */}
        <section id="craftsmanship" className="scroll-mt-16 border-y border-gold/50 bg-maroon">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-20">
            <div>
              <SectionLabel onDark>Craftsmanship</SectionLabel>
              <h2 className="font-display text-3xl text-ivory sm:text-4xl">
                Where Tradition Meets Craftsmanship
              </h2>
              <p className="mt-5 text-base leading-relaxed text-ivory/75">
                Crafted in 22 karat gold with a high-polish finish, the pendant's intricate
                detailing is enhanced with subtle synthetic stone accents that add richness
                and depth.
              </p>
              <p className="mt-4 text-base leading-relaxed text-ivory/75">
                The detailing follows the vocabulary of temple jewellery designs — measured
                symmetry, devotional motifs and the warm glow of high-purity gold. It is
                traditional jewellery in spirit and finish, an heirloom-minded Lakshmi
                pendant rather than a passing trend.
              </p>
              <ul className="mt-7 space-y-3 text-sm text-ivory/90">
                {[
                  "22KT yellow gold",
                  "High-polish finish",
                  "Intricate detailing",
                  "Subtle synthetic stone accents",
                  "Elevated traditional design",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 border-b border-gold/25 pb-3">
                    <span aria-hidden="true" className="text-gold">&#10022;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm">
                <Link
                  to="/traditional-jewellery"
                  className="text-gold underline underline-offset-4 hover:text-ivory"
                >
                  Explore Traditional Jewellery
                </Link>
              </p>
            </div>
            <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-[2rem] border-2 border-gold/60 bg-ivory/5 p-3 shadow-luxe">
              <img
                src={macroImage}
                alt="Close-up of the Shrivatsa Gold Lakshmi Pendant showing intricate traditional detailing"
                width={933}
                height={1400}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 88vw, 520px"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </section>

        {/* GOLD PURITY */}
        <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div className="text-center">
            <SectionLabel>Gold Purity</SectionLabel>
            <h2 className="font-display text-3xl text-maroon sm:text-4xl">
              Crafted in 22K Yellow Gold
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              The Shrivatsa Gold Lakshmi Pendant is crafted in 22KT yellow gold. Gold purity
              of 22 karat is the purity long favoured for Indian traditional jewellery,
              giving this Lakshmi pendant its deep, warm yellow tone and a stated gold
              weight of 14.511 g.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              ["22K", "Gold Purity"],
              ["14.511 g", "Gold Weight"],
              ["Yellow Gold", "Metal Colour"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="flex h-40 flex-col items-center justify-center rounded-2xl border border-gold/60 border-t-2 border-t-maroon/50 bg-card text-center shadow-luxe"
              >
                <span className="text-gold-gradient font-display text-4xl font-semibold sm:text-5xl">
                  {value}
                </span>
                <span className="mt-3 text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* OCCASIONS */}
        <section id="occasions" className="scroll-mt-16 border-y border-gold/40 bg-secondary/70">
          <div className="mx-auto max-w-4xl px-5 py-16 text-center md:py-20">
            <SectionLabel>Occasions</SectionLabel>
            <h2 className="font-display text-3xl text-maroon sm:text-4xl">
              Made for Meaningful Occasions
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              A piece of bridal jewellery with a devotional heart — equally at home as
              jewellery for puja and festivals. As Lakshmi jewellery for a wedding it sits
              beautifully within layered bridal sets, and as everyday divine jewellery it
              marks Diwali, Varalakshmi Vratam and family ceremonies with quiet grace.
            </p>
            <ul className="mt-8 flex flex-wrap justify-center gap-3">
              {occasions.map((o) => (
                <li
                  key={o}
                  className="rounded-full border border-gold/60 bg-card px-6 py-2.5 text-sm text-foreground/85 transition-colors hover:border-maroon hover:bg-maroon hover:text-ivory"
                >
                  {o}
                </li>
              ))}
            </ul>
            <figure className="mx-auto mt-10 max-w-2xl">
              <img
                src={bridalImage}
                alt="Shrivatsa Gold Lakshmi Pendant styled with traditional Indian bridal attire"
                width={1400}
                height={933}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 90vw, 640px"
                className="h-auto w-full rounded-[1.5rem] border-2 border-gold/50 object-cover"
              />
              <figcaption className="mt-3 text-xs uppercase tracking-[0.22em] text-maroon">
                Traditional bridal styling
              </figcaption>
            </figure>
            <p className="mt-8 text-sm text-muted-foreground">
              <Link
                to="/bridal-jewellery"
                className="text-gold-deep underline underline-offset-4 hover:text-maroon"
              >
                Discover Bridal Jewellery
              </Link>
            </p>
          </div>
        </section>

        {/* STYLE */}
        <section className="border-y border-gold/50 bg-maroon">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-20">
            <div className="flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-[2rem] border-2 border-gold/60 bg-ivory/5 p-3 shadow-luxe">
              <img
                src={wornImage}
                alt="Woman wearing the Shrivatsa Gold Lakshmi Pendant in a traditional bridal look"
                width={933}
                height={1400}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 88vw, 440px"
                className="h-full w-full object-contain"
              />
            </div>
            <div>
              <SectionLabel onDark>Styling</SectionLabel>
              <h2 className="font-display text-3xl text-ivory sm:text-4xl">Style It Your Way</h2>
              <p className="mt-4 text-base leading-relaxed text-ivory/75">
                Styled as a statement Lakshmi pendant, or layered within traditional
                Indian jewellery, this Lakshmi pendant for women brings a traditional
                touch to bridal and festive looks against silk, cotton and handloom
                drapes.
              </p>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {styling.map((s) => (
                  <article
                    key={s.title}
                    className="flex h-full flex-col rounded-2xl border border-gold/30 bg-ivory/5 p-5"
                  >
                    <h3 className="font-display text-lg text-gold">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-ivory/70">{s.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DETAILS */}
        <section id="details" className="scroll-mt-16 bg-background">
          <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
            <div className="text-center">
              <SectionLabel>Specifications</SectionLabel>
              <h2 className="font-display text-3xl text-maroon sm:text-4xl">Product Details</h2>
            </div>
            <dl className="mt-9 overflow-hidden rounded-2xl border-2 border-gold/55 bg-card">
              {details.map(([label, value], i) => (
                <div
                  key={label}
                  className={`flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:justify-between ${
                    i !== details.length - 1 ? "border-b border-gold/25" : ""
                  }`}
                >
                  <dt className="text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
                    {label}
                  </dt>
                  <dd
                    className={
                      label === "Metal"
                        ? "font-display text-xl text-maroon"
                        : "text-sm text-foreground/90"
                    }
                  >
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* TRUST */}
        <section
          id="trust"
          className="scroll-mt-16 border-y border-gold/40 bg-secondary/70"
        >
          <div className="mx-auto max-w-4xl px-5 py-16 text-center md:py-20">
            <SectionLabel>Indriya</SectionLabel>
            <h2 className="font-display text-3xl text-maroon sm:text-4xl">Crafted with Trust</h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Every detail shared here is drawn from the pendant's own specifications —
              nothing more, nothing less.
            </p>

            <figure className="mx-auto mt-9 max-w-xl">
              <img
                src={packagingImage}
                alt="Angled view of the Shrivatsa Gold Lakshmi Pendant showing its detailed gold design, presented in Indriya packaging"
                width={1312}
                height={1199}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 90vw, 560px"
                className="h-auto w-full rounded-[1.5rem] border-2 border-gold/50 object-cover"
              />
            </figure>

            <div className="mx-auto mt-9 max-w-md rounded-2xl border-2 border-gold/60 bg-maroon px-6 py-7 shadow-luxe">
              <span className="text-gold-gradient font-display text-5xl font-semibold">22K</span>
              <p className="mt-3 text-[0.68rem] uppercase tracking-[0.28em] text-ivory/70">
                Yellow Gold Purity
              </p>
              <p className="mt-3 text-sm leading-relaxed text-ivory/80">
                Crafted in 22 karat yellow gold, with a stated gold weight of 14.511 g.
              </p>
            </div>

            <dl className="mt-8 grid gap-4 text-left sm:grid-cols-2">
              {[
                ["Metal", "22K Yellow Gold"],
                ["Gold Weight", "14.511 g"],
                ["Category", "Pendant"],
                ["Type", "Faith & Belief"],
                ["Gender", "Women"],
                ["Occasion", "Bridal Wear"],
                ["Design Theme", "Elevated Traditional"],
                ["Gemstone", "Synthetic gemstone"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="min-w-0 rounded-2xl border border-gold/50 border-l-2 border-l-maroon/60 bg-card px-5 py-4"
                >
                  <dt className="text-[0.66rem] uppercase tracking-[0.22em] text-muted-foreground">
                    {label}
                  </dt>
                  <dd className="mt-1 text-sm text-foreground/90">{value}</dd>
                </div>
              ))}
            </dl>

            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              For availability, store locations and further information on this pendant,
              connect with Indriya.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Btn href="#details">Explore Product Details</Btn>
              <Btn href="#details" variant="outline">Check Availability</Btn>
              <Btn href="#final-cta" variant="outline">Connect with Indriya</Btn>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section id="final-cta" className="scroll-mt-16 border-t border-gold/50 bg-maroon">
          <div className="mx-auto max-w-3xl px-5 py-20 text-center">
            <div aria-hidden="true" className="rule-gold mx-auto mb-8 h-px w-24" />
            <h2 className="font-display text-4xl text-ivory sm:text-5xl">
              Carry a Touch of Divinity
            </h2>
            <p className="mt-4 text-base text-ivory/75">
              Discover the timeless elegance of the Shrivatsa Gold Lakshmi Pendant.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href="#craftsmanship"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-gold px-8 text-xs font-medium uppercase tracking-[0.18em] text-maroon transition-opacity hover:opacity-90 sm:w-auto sm:min-w-[11rem]"
              >
                Explore the Pendant
              </a>
              <Link
                to="/store-locator"
                className="inline-flex h-12 w-full items-center justify-center rounded-full border border-gold/70 px-8 text-xs font-medium uppercase tracking-[0.18em] text-ivory transition-colors hover:bg-gold/15 sm:w-auto sm:min-w-[11rem]"
              >
                Find a Store Near You
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-gold/30 bg-maroon py-8 text-center text-xs uppercase tracking-[0.25em] text-ivory/60">
        Indriya &middot; Shrivatsa Gold Lakshmi Pendant
      </footer>
    </div>
  );
}
