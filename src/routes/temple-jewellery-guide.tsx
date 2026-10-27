import { createFileRoute, Link } from "@tanstack/react-router";
import templeAsset from "@/assets/temple-motif.webp.asset.json";
import logoAsset from "@/assets/indriya-logo-official.png.asset.json";
import { BrandLinks } from "@/components/brand-information";

const SITE = "https://divine-gold-canvas.lovable.app";
const PAGE_URL = `${SITE}/temple-jewellery-guide`;

const TITLE = "Temple Jewellery Guide: Meaning, Designs & Care";
const DESCRIPTION =
  "Explore the meaning, origins and traditional designs of temple jewellery, including Lakshmi, peacock and lotus motifs, with practical jewellery care tips.";

const templeImage = templeAsset.url;
const logoImage = logoAsset.url;

export const Route = createFileRoute("/temple-jewellery-guide")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "article" },
      { property: "og:url", content: PAGE_URL },
      { property: "og:image", content: `${SITE}${templeImage}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE}${templeImage}` },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: TITLE,
          description: DESCRIPTION,
          url: PAGE_URL,
          image: `${SITE}${templeImage}`,
          author: { "@type": "Person", name: "Jasnoor" },
          dateModified: "2026-10-26",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
            { "@type": "ListItem", position: 2, name: "Temple Jewellery Guide", item: PAGE_URL },
          ],
        }),
      },
    ],
  }),
  component: TempleJewelleryGuidePage,
});

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

function TempleJewelleryGuidePage() {
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
            <a href="#meaning" className="transition-colors hover:text-gold">Meaning</a>
            <a href="#designs" className="transition-colors hover:text-gold">Designs</a>
            <a href="#care" className="transition-colors hover:text-gold">Care</a>
          </nav>
        </div>
        <div aria-hidden="true" className="rule-gold h-px w-full" />
      </header>

      <main>
        {/* HERO */}
        <section className="mx-auto max-w-3xl px-5 py-14 text-center md:py-20">
          <nav aria-label="Breadcrumb" className="mb-6 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            <ol className="flex flex-wrap justify-center gap-2">
              <li><Link to="/" className="hover:text-maroon">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-gold-deep">Temple Jewellery Guide</li>
            </ol>
          </nav>
          <SectionLabel>Indriya &middot; Journal</SectionLabel>
          <h1 className="font-display text-[2rem] leading-tight text-maroon sm:text-5xl">
            Temple Jewellery Guide: Meaning, Designs and Care
          </h1>
          <p className="mx-auto mt-5 max-w-xl font-display text-xl italic text-gold-deep">
            Discover the history, symbolism and timeless beauty of traditional Indian temple jewellery.
          </p>
          <div aria-hidden="true" className="rule-gold mx-auto mt-8 h-px w-24" />
        </section>

        {/* WHAT IS TEMPLE JEWELLERY */}
        <section id="meaning" className="scroll-mt-16 mx-auto max-w-3xl px-5 pb-16 md:pb-20">
          <SectionLabel>Meaning</SectionLabel>
          <h2 className="font-display text-3xl text-maroon sm:text-4xl">What Is Temple Jewellery?</h2>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground">
            Temple jewellery is traditional Indian jewellery inspired by Hindu deities, temple
            architecture and religious motifs. It is commonly worn during weddings, festivals and
            other auspicious occasions, especially with traditional Indian attire.
          </p>
        </section>

        {/* ORIGINS */}
        <section id="origins" className="scroll-mt-16 border-y border-gold/50 bg-maroon">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-20">
            <div>
              <SectionLabel onDark>Origins</SectionLabel>
              <h2 className="font-display text-3xl text-ivory sm:text-4xl">Origins of Temple Jewellery</h2>
              <p className="mt-5 text-base leading-relaxed text-ivory/75">
                Temple jewellery has historical roots in South Indian temple traditions. Its designs
                were associated with deities and classical dance, and over time, it became an
                important part of bridal and festive jewellery.
              </p>
            </div>
            <figure>
              <img
                src={templeImage}
                alt="Traditional South Indian temple stone carving depicting the goddess Lakshmi seated on a lotus"
                width={1000}
                height={635}
                loading="lazy"
                decoding="async"
                sizes="(max-width: 768px) 90vw, 520px"
                className="h-auto w-full rounded-[1.5rem] border-2 border-gold/50 object-cover"
              />
              <figcaption className="mt-3 text-center text-xs uppercase tracking-[0.22em] text-gold">
                The motifs of temple architecture, carved in stone
              </figcaption>
            </figure>
          </div>
        </section>

        {/* COMMON DESIGNS */}
        <section id="designs" className="scroll-mt-16 mx-auto max-w-6xl px-5 py-16 md:py-20">
          <div className="text-center">
            <SectionLabel>Designs</SectionLabel>
            <h2 className="font-display text-3xl text-maroon sm:text-4xl">Common Temple Jewellery Designs</h2>
            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Devotional motifs shape the most loved traditional designs — each carrying its own
              meaning, worn close to the heart.
            </p>
          </div>
          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {[
              {
                mark: "\u0936\u094D\u0930\u0940",
                title: "Lakshmi",
                copy: "Traditionally represents prosperity, abundance and good fortune.",
              },
              {
                mark: "\u2749",
                title: "Peacock",
                copy: "Associated with beauty, grace and artistic tradition.",
              },
              {
                mark: "\u2741",
                title: "Lotus",
                copy: "Symbolises purity, beauty and spiritual growth.",
              },
            ].map((d) => (
              <article
                key={d.title}
                className="flex h-full flex-col rounded-2xl border border-gold/50 border-t-2 border-t-maroon/50 bg-card p-7 text-center shadow-luxe"
              >
                <span
                  aria-hidden="true"
                  className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/70 font-display text-2xl text-gold-deep"
                >
                  {d.mark}
                </span>
                <h3 className="mt-5 font-display text-2xl text-maroon">{d.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d.copy}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-muted-foreground">
            See these motifs brought to life in gold —{" "}
            <Link
              to="/lakshmi-pendant"
              className="text-gold-deep underline underline-offset-4 hover:text-maroon"
            >
              explore the Shrivatsa Gold Lakshmi Pendant
            </Link>
            .
          </p>
        </section>

        {/* CARE */}
        <section id="care" className="scroll-mt-16 border-y border-gold/50 bg-secondary/70">
          <div className="mx-auto max-w-4xl px-5 py-16 md:py-20">
            <div className="text-center">
              <SectionLabel>Care</SectionLabel>
              <h2 className="font-display text-3xl text-maroon sm:text-4xl">How to Care for Temple Jewellery</h2>
            </div>
            <ul className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                {
                  title: "Store with care",
                  copy: "Store jewellery in a dry, separate jewellery box to prevent scratches.",
                },
                {
                  title: "Keep it away from chemicals",
                  copy: "Keep it away from perfumes, hairsprays and harsh chemicals.",
                },
                {
                  title: "Clean gently",
                  copy: "Clean gold jewellery gently using a method recommended by the jeweller.",
                },
                {
                  title: "Seek professional care",
                  copy: "Have valuable or intricate pieces professionally cleaned when necessary.",
                },
              ].map((tip, i) => (
                <li
                  key={tip.title}
                  className="flex items-start gap-4 rounded-2xl border border-gold/50 border-l-2 border-l-maroon/60 bg-card px-5 py-5"
                >
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gold/70 font-display text-sm text-gold-deep"
                  >
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-lg text-maroon">{tip.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{tip.copy}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* EXPLORE CTA */}
        <section className="border-t border-gold/50 bg-maroon">
          <div className="mx-auto max-w-3xl px-5 py-20 text-center">
            <div aria-hidden="true" className="rule-gold mx-auto mb-8 h-px w-24" />
            <h2 className="font-display text-3xl text-ivory sm:text-4xl">Explore Indriya Jewellery</h2>
            <p className="mt-4 text-base text-ivory/75">
              Discover traditional jewellery crafted in the spirit of these timeless motifs.
            </p>
            <div className="mt-9">
              <a
                href="https://www.indriya.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full items-center justify-center rounded-full bg-gold px-8 text-xs font-medium uppercase tracking-[0.18em] text-maroon transition-opacity hover:opacity-90 sm:w-auto sm:min-w-[12rem]"
              >
                Explore Indriya Jewellery
              </a>
            </div>
          </div>
        </section>

        {/* AUTHOR */}
        <section className="mx-auto max-w-3xl px-5 py-12 text-center">
          <div className="mx-auto flex flex-col items-center justify-center gap-4 rounded-2xl border border-gold/40 bg-card px-6 py-6 shadow-luxe sm:flex-row sm:gap-10">
            <p className="text-sm text-muted-foreground">
              <span className="text-[0.68rem] uppercase tracking-[0.22em] text-maroon">Author</span>
              <span className="mt-1 block font-display text-lg text-maroon">Jasnoor</span>
            </p>
            <span aria-hidden="true" className="hidden h-8 w-px bg-gold/50 sm:block" />
            <p className="text-sm text-muted-foreground">
              <span className="text-[0.68rem] uppercase tracking-[0.22em] text-maroon">Last Updated</span>
              <span className="mt-1 block font-display text-lg text-maroon">26 October 2026</span>
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-gold/30 bg-maroon py-8 text-center text-xs uppercase tracking-[0.25em] text-ivory/60">
        Indriya &middot; Temple Jewellery Guide
        <BrandLinks />
      </footer>
    </div>
  );
}
