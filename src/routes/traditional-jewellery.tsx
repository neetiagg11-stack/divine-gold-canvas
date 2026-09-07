import { createFileRoute, Link } from "@tanstack/react-router";

const SITE = "https://divine-gold-canvas.lovable.app";
const PAGE_URL = `${SITE}/traditional-jewellery`;

const TITLE = "Traditional Jewellery | Indriya";
const DESCRIPTION =
  "Explore Indriya's traditional jewellery collection — timeless gold designs rooted in Indian heritage, crafted for auspicious occasions and everyday elegance.";

export const Route = createFileRoute("/traditional-jewellery")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { name: "robots", content: "index, follow" },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: PAGE_URL },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
  }),
  component: TraditionalJewelleryPage,
});

function TraditionalJewelleryPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border/70">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-5">
          <Link to="/" className="font-display text-xl tracking-[0.35em] text-primary">
            INDRIYA
          </Link>
          <nav aria-label="Page sections" className="hidden gap-8 text-xs uppercase tracking-[0.2em] text-muted-foreground sm:flex">
            <Link to="/bridal-jewellery" className="hover:text-primary">Bridal Jewellery</Link>
            <Link to="/store-locator" className="hover:text-primary">Store Locator</Link>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-5 py-16 text-center md:py-24">
        <p className="mb-4 text-[0.68rem] font-medium uppercase tracking-[0.32em] text-maroon">
          Indriya Collection
        </p>
        <h1 className="font-display text-4xl text-primary sm:text-5xl">
          Traditional Jewellery
        </h1>
        <div aria-hidden="true" className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
        <p className="mt-6 text-base leading-relaxed text-muted-foreground">
          Our traditional jewellery celebrates the forms, motifs, and craftsmanship passed down through generations of Indian goldsmithing. Each piece is designed to honour ritual, heritage, and personal meaning.
        </p>

        <section className="mt-12 text-left">
          <h2 className="font-display text-2xl text-primary">Featured Piece</h2>
          <div className="mt-6 rounded-2xl border border-gold/40 bg-card p-6 shadow-luxe">
            <h3 className="font-display text-xl text-primary">Shrivatsa Gold Lakshmi Pendant</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              A 22K yellow gold Lakshmi-inspired pendant with intricate detailing, subtle stone accents, and a high-polish finish. Crafted for bridal wear and auspicious occasions.
            </p>
            <div className="mt-5">
              <Link
                to="/lakshmi-pendant"
                className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground transition-colors hover:bg-primary/90"
              >
                View the Lakshmi Pendant
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-primary/95 py-8 text-center text-xs uppercase tracking-[0.25em] text-primary-foreground/70">
        Indriya &middot; Traditional Jewellery
      </footer>
    </div>
  );
}
