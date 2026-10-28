import { Link } from "@tanstack/react-router";
import logoAsset from "@/assets/indriya-logo-official.png.asset.json";
import { corporateProfiles, officialSocials, officialSources, suppliedReferences } from "@/lib/brand-sources";
import type { ReactNode } from "react";

export function BrandLinks() {
  return (
    <nav aria-label="Brand information" className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 px-5 text-xs tracking-normal text-ivory/90">
      <Link to="/about" className="underline underline-offset-4 hover:text-gold">About</Link>
      <Link to="/contact" className="underline underline-offset-4 hover:text-gold">Contact</Link>
      <a href={officialSources.home} className="underline underline-offset-4 hover:text-gold" aria-label="Official Indriya website">Indriya.com</a>
      <a href={officialSources.adityaBirla} className="underline underline-offset-4 hover:text-gold" aria-label="About Indriya on the Aditya Birla Group website">About Indriya</a>
      {officialSocials.filter((social) => social.name !== "Instagram").map((social) => (
        <a key={social.name} href={social.url} className="underline underline-offset-4 hover:text-gold" aria-label={`Indriya on ${social.name}`}>{social.name}</a>
      ))}
      {corporateProfiles.filter((profile) => profile.name === "LinkedIn").map((profile) => (
        <a key={profile.name} href={profile.url} className="underline underline-offset-4 hover:text-gold" aria-label={profile.kind}>{profile.name}</a>
      ))}
      {suppliedReferences.map((reference) => (
        <a key={reference.name} href={reference.url} className="underline underline-offset-4 hover:text-gold" aria-label={`${reference.name}: ${reference.kind}`}>{reference.name === "Reddit" ? "Reddit discussion" : reference.name}</a>
      ))}
    </nav>
  );
}

export function BrandInformationPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-gold/50 bg-maroon">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5 px-5 py-4">
          <Link to="/lakshmi-pendant">
            <img src={logoAsset.url} alt="Indriya Jewellery official logo" width={248} height={76} className="h-10 w-auto brightness-0 invert sm:h-12" />
          </Link>
          <nav aria-label="Site pages" className="flex flex-wrap gap-5 text-sm text-ivory">
            <Link to="/lakshmi-pendant" className="hover:text-gold">Pendant</Link>
            <Link to="/about" className="hover:text-gold">About</Link>
            <Link to="/contact" className="hover:text-gold">Contact</Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-5 py-16 md:py-20">
        <p className="mb-4 text-xs uppercase text-gold-deep">Indriya · Product information</p>
        <h1 className="font-display text-4xl text-maroon sm:text-5xl">{title}</h1>
        <div aria-hidden="true" className="rule-gold mt-6 h-px w-24" />
        <div className="mt-8 space-y-10 text-base leading-relaxed text-muted-foreground [&_a]:break-words [&_a]:text-maroon [&_a]:underline [&_a]:underline-offset-4 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:text-maroon [&_p]:mt-4">{children}</div>
      </main>
      <footer className="border-t border-gold/30 bg-maroon py-8 text-center text-xs text-ivory/75">
        Shrivatsa Pendant Guide
        <BrandLinks />
      </footer>
    </div>
  );
}