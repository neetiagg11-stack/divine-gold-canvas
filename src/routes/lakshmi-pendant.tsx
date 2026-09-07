import { createFileRoute, Link } from "@tanstack/react-router";
import heroAsset from "@/assets/lakshmi-pendant-hero-optimized.webp.asset.json";
import detailAsset from "@/assets/lakshmi-pendant-detail-optimized.webp.asset.json";
import stylingAsset from "@/assets/lakshmi-pendant-styling-optimized.webp.asset.json";

const SITE = "https://divine-gold-canvas.lovable.app";
const PAGE_URL = `${SITE}/lakshmi-pendant`;
const heroImage = heroAsset.url;
const detailImage = detailAsset.url;
const stylingImage = stylingAsset.url;

const TITLE = "Lakshmi Pendant | Traditional 22K Gold Jewellery";
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
      { rel: "preload", href: heroImage, as: "image", type: "image/webp" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: "Shrivatsa Gold Lakshmi Pendant",
          category: "Pendants",
          url: PAGE_URL,
          image: [`${SITE}${heroImage}`, `${SITE}${detailImage}`, `${SITE}${stylingImage}`],
          brand: { "@type": "Brand", name: "Indriya Jewellery" },
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
            { "@type": "ListItem", position: 2, name: "Pendants", item: PAGE_URL },
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
          ? `${base} bg-primary text-primary-foreground hover:bg-primary/90`
          : `${base} border border-gold/70 text-foreground hover:bg-secondary`
      }
    >
      {children}
    </a>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="mb-4 text-[0.68rem] font-medium uppercase tracking-[0.32em] text-maroon">
      {children}
    </p>
  );
}

function LakshmiPendantPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <span className="font-display text-xl tracking-[0.35em] text-primary">INDRIYA</span>
          <nav aria-label="Page sections" className="hidden gap-8 text-xs uppercase tracking-[0.2em] text-muted-foreground sm:flex">
            <a href="#craftsmanship" className="hover:text-primary">Craftsmanship</a>
            <a href="#details" className="hover:text-primary">Product Details</a>
            <a href="#trust" className="hover:text-primary">Connect</a>
          </nav>
        </div>
      </header>

      <main>
        {/* HERO */}
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 md:grid-cols-2 md:py-20">
          <div className="order-2 md:order-1">
            <nav aria-label="Breadcrumb" className="mb-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
              <ol className="flex flex-wrap gap-2">
                <li><a href="/" className="hover:text-primary">Home</a></li>
                <li aria-hidden="true">/</li>
                <li>Pendants</li>
                <li aria-hidden="true">/</li>
                <li className="text-gold-deep">Lakshmi Pendant</li>
              </ol>
            </nav>
            <h1 className="font-display text-[2rem] leading-tight text-primary sm:text-5xl lg:text-6xl">
              Shrivatsa Gold Lakshmi Pendant
            </h1>
            <p className="mt-4 max-w-md font-display text-xl italic text-foreground/80">
              A timeless Lakshmi-inspired design crafted in 22K yellow gold.
            </p>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground">
              This Lakshmi pendant carries a sacred, traditional presence — divine
              symbolism shaped in gold for bridal wear and auspicious occasions.
            </p>

            <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-y border-border py-5 sm:flex sm:flex-wrap sm:gap-x-10">
              <div className="min-w-0">
                <dt className="text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">Metal</dt>
                <dd className="mt-1 font-display text-xl text-primary sm:text-2xl">22K Yellow Gold</dd>
              </div>
              <div className="min-w-0">
                <dt className="text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">Gold Weight</dt>
                <dd className="mt-1 font-display text-xl text-primary sm:text-2xl">14.511 g</dd>
              </div>
              <div className="col-span-2 min-w-0">
                <dt className="text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">Price</dt>
                <dd className="mt-1 font-display text-lg text-primary sm:text-2xl">Price available on request</dd>
              </div>
            </dl>

            <div className="mt-8 flex flex-wrap gap-3">
              <Btn href="#craftsmanship">Explore the Pendant</Btn>
              <Btn href="#trust" variant="outline">Find a Store</Btn>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="mx-auto flex aspect-square w-full max-w-md items-center justify-center rounded-[2rem] border border-gold/40 bg-secondary p-6 shadow-luxe">
              <img
                src={heroImage}
                alt="Shrivatsa Gold Lakshmi Pendant in 22K yellow gold with kundan stones, elephant motifs and pearl drops"
                width={741}
                height={1000}
                loading="eager"
                fetchPriority="high"
                decoding="async"
                sizes="(max-width: 768px) 90vw, 420px"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="border-y border-border bg-secondary/60">
          <div className="mx-auto grid max-w-6xl gap-5 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h) => (
              <article
                key={h.title}
                className="flex h-full flex-col rounded-2xl border border-gold/35 bg-card p-6 text-center"
              >
                <span
                  aria-hidden="true"
                  className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 font-display text-xl text-gold-deep"
                >
                  {h.mark}
                </span>
                <h3 className="mt-5 font-display text-xl text-primary">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.copy}</p>
              </article>
            ))}
          </div>
        </section>

        {/* STORY */}
        <section className="mx-auto max-w-3xl px-5 py-16 text-center md:py-20">
          <SectionLabel>The Story</SectionLabel>
          <h2 className="font-display text-3xl text-primary sm:text-4xl">
            An Icon of Tradition and Grace
          </h2>
          <div aria-hidden="true" className="rule-gold mx-auto mt-6 h-px w-24" />
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            Rooted in divine symbolism, this Goddess Lakshmi pendant reflects grace and
            prosperity through a deeply traditional design language.
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            It belongs to a lineage of temple jewellery designs — devotional motifs worn
            close to the heart, carried through generations of Indian tradition.
          </p>
        </section>

        {/* CRAFTSMANSHIP */}
        <section id="craftsmanship" className="border-y border-border bg-secondary/60 scroll-mt-16">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-20">
            <div>
              <SectionLabel>Craftsmanship</SectionLabel>
              <h2 className="font-display text-3xl text-primary sm:text-4xl">
                Where Tradition Meets Craftsmanship
              </h2>
              <p className="mt-5 text-base leading-relaxed text-muted-foreground">
                Crafted in 22 karat gold with a high-polish finish, the pendant's intricate
                detailing is enhanced with subtle synthetic stone accents that add richness
                and depth.
              </p>
              <ul className="mt-7 space-y-3 text-sm text-foreground/85">
                {[
                  "22KT yellow gold",
                  "High-polish finish",
                  "Intricate detailing",
                  "Subtle synthetic stone accents",
                  "Elevated traditional design",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 border-b border-border/70 pb-3">
                    <span aria-hidden="true" className="text-gold-deep">&#10022;</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted-foreground">
                <Link
                  to="/traditional-jewellery"
                  className="text-gold-deep underline underline-offset-4 hover:text-primary"
                >
                  Explore Traditional Jewellery
                </Link>
              </p>
            </div>
            <div className="flex aspect-square w-full items-center justify-center overflow-hidden rounded-[2rem] border border-gold/40 bg-card p-4 shadow-luxe">
              <img
                src={detailImage}
                alt="Close-up of the Lakshmi-inspired detailing, kundan stones and elephant motifs on the Shrivatsa Gold Pendant"
                width={960}
                height={800}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 90vw, 520px"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </section>

        {/* GOLD PURITY */}
        <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div className="text-center">
            <SectionLabel>Gold Purity</SectionLabel>
            <h2 className="font-display text-3xl text-primary sm:text-4xl">
              Crafted in 22K Yellow Gold
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              The Shrivatsa Gold Lakshmi Pendant is crafted in 22KT yellow gold.
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
                className="flex h-40 flex-col items-center justify-center rounded-2xl border border-gold/45 bg-card text-center shadow-luxe"
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
        <section id="occasions" className="border-y border-border bg-secondary/60 scroll-mt-16">
          <div className="mx-auto max-w-4xl px-5 py-16 text-center md:py-20">
            <SectionLabel>Occasions</SectionLabel>
            <h2 className="font-display text-3xl text-primary sm:text-4xl">
              Made for Meaningful Occasions
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
              A piece of bridal jewellery with a devotional heart — equally at home as
              jewellery for puja and festivals.
            </p>
            <ul className="mt-8 flex flex-wrap justify-center gap-3">
              {occasions.map((o) => (
                <li
                  key={o}
                  className="rounded-full border border-gold/50 bg-card px-6 py-2.5 text-sm text-foreground/85"
                >
                  {o}
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-muted-foreground">
              <Link
                to="/bridal-jewellery"
                className="text-gold-deep underline underline-offset-4 hover:text-primary"
              >
                Discover Bridal Jewellery
              </Link>
            </p>
          </div>
        </section>

        {/* STYLE */}
        <section className="mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div className="flex aspect-[4/5] w-full items-center justify-center overflow-hidden rounded-[2rem] border border-gold/40 bg-card p-3 shadow-luxe">
              <img
                src={stylingImage}
                alt="Woman in a cream saree wearing the Shrivatsa Gold Lakshmi Pendant on a fine gold chain"
                width={720}
                height={972}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 68vw, 360px"
                className="h-auto w-3/4 object-contain"
              />
            </div>
            <div>
              <SectionLabel>Styling</SectionLabel>
              <h2 className="font-display text-3xl text-primary sm:text-4xl">Style It Your Way</h2>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                {styling.map((s) => (
                  <article
                    key={s.title}
                    className="flex h-full flex-col rounded-2xl border border-maroon/15 bg-card p-5"
                  >
                    <h3 className="font-display text-lg text-primary">{s.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.copy}</p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* DETAILS */}
        <section id="details" className="border-y border-border bg-secondary/60 scroll-mt-16">
          <div className="mx-auto max-w-3xl px-5 py-16 md:py-20">
            <div className="text-center">
              <SectionLabel>Specifications</SectionLabel>
              <h2 className="font-display text-3xl text-primary sm:text-4xl">Product Details</h2>
            </div>
            <dl className="mt-9 overflow-hidden rounded-2xl border border-gold/40 bg-card">
              {details.map(([label, value], i) => (
                <div
                  key={label}
                  className={`flex flex-col gap-1 px-6 py-4 sm:flex-row sm:items-center sm:justify-between ${
                    i !== details.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <dt className="text-[0.7rem] uppercase tracking-[0.22em] text-muted-foreground">
                    {label}
                  </dt>
                  <dd
                    className={
                      label === "Metal"
                        ? "font-display text-xl text-primary"
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
        <section id="trust" className="mx-auto max-w-4xl px-5 py-16 text-center md:py-20 scroll-mt-16">
          <SectionLabel>Indriya</SectionLabel>
          <h2 className="font-display text-3xl text-primary sm:text-4xl">Crafted with Trust</h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
            Every detail shared here is drawn from the pendant's own specifications —
            nothing more, nothing less.
          </p>

          <div className="mx-auto mt-9 max-w-md rounded-2xl border border-gold/50 bg-card px-6 py-7 shadow-luxe">
            <span className="text-gold-gradient font-display text-5xl font-semibold">22K</span>
            <p className="mt-3 text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground">
              Yellow Gold Purity
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
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
                className="min-w-0 rounded-2xl border border-maroon/15 bg-card px-5 py-4"
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
        </section>

        {/* FINAL CTA */}
        <section id="final-cta" className="border-t border-border bg-primary scroll-mt-16">
          <div className="mx-auto max-w-3xl px-5 py-20 text-center">
            <h2 className="font-display text-4xl text-primary-foreground sm:text-5xl">
              Carry a Touch of Divinity
            </h2>
            <p className="mt-4 text-base text-primary-foreground/80">
              Discover the timeless elegance of the Shrivatsa Gold Lakshmi Pendant.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-3">
              <a
                href="#craftsmanship"
                className="inline-flex h-12 w-full items-center sm:w-auto sm:min-w-[11rem] justify-center rounded-full bg-accent px-8 text-xs font-medium uppercase tracking-[0.18em] text-accent-foreground transition-opacity hover:opacity-90"
              >
                Explore the Pendant
              </a>
              <Link
                to="/store-locator"
                className="inline-flex h-12 w-full items-center sm:w-auto sm:min-w-[11rem] justify-center rounded-full border border-primary-foreground/50 px-8 text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Find a Store
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary/95 py-8 text-center text-xs uppercase tracking-[0.25em] text-primary-foreground/70">
        Indriya &middot; Shrivatsa Gold Lakshmi Pendant
      </footer>
    </div>
  );
}
