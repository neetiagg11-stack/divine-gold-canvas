import { test } from "node:test";
import assert from "node:assert/strict";
import { brandOrganization, officialSources, suppliedReferences, websiteSchema } from "./brand-sources";
import { pendantWebPage } from "./editorial-details";

test("includes the three user-supplied reference destinations", () => {
  assert.deepEqual(suppliedReferences.map((reference) => reference.url), [
    "https://x.com/indriyajewels?lang=en",
    "https://www.reddit.com/r/GoldIndia/comments/1vrfwmp/found_a_design_i_really_like_at_indriya_by_aditya/",
    "https://www.instagram.com/indriyajewels?dlrf=cTF1eXE0emdkOHhi",
  ]);
});

test("does not treat a community discussion as brand identity or a product citation", () => {
  const reddit = suppliedReferences.find((reference) => reference.name === "Reddit");
  assert.ok(reddit);
  assert.equal(reddit.kind, "Community discussion");
  assert.equal(brandOrganization.sameAs.includes(reddit.url), false);
  assert.deepEqual(pendantWebPage.citation.map((citation) => citation.url), [officialSources.product]);
  assert.equal("sameAs" in websiteSchema, false);
});