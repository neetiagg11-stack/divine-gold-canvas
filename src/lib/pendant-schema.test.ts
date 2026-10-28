import { describe, test } from "node:test";
import assert from "node:assert/strict";
import { pendantSchema } from "./pendant-schema";
import { brandOrganization, websiteSchema } from "./brand-sources";

describe("Verified SEO facts", () => {
  test("does not fabricate an offer or price", () => {
    const schema = pendantSchema([]);
    assert.equal("offers" in schema, false);
    assert.equal("price" in schema, false);
  });
  test("does not fabricate reviews or ratings", () => {
    const schema = pendantSchema([]);
    assert.equal("aggregateRating" in schema, false);
    assert.equal("review" in schema, false);
  });
  test("distinguishes the stated 14.511 g gold weight from total weight", () => {
    const schema = pendantSchema([]);
    assert.equal("weight" in schema, false);
    const goldWeight = schema.additionalProperty.find((property) => property.name === "Gold Weight");
    assert.equal(goldWeight?.value, 14.511);
    assert.equal(goldWeight?.unitText, "g");
  });
  test("records the stated 15.945 g gross weight as a named property", () => {
    const schema = pendantSchema([]);
    const grossWeight = schema.additionalProperty.find((property) => property.name === "Gross Weight");
    assert.equal(grossWeight?.value, 15.945);
    assert.equal(grossWeight?.unitText, "g");
  });
  test("does not attribute this site's publication to the external brand", () => {
    assert.equal(websiteSchema.url, "https://divine-gold-canvas.lovable.app");
    assert.equal(brandOrganization.url, "https://www.indriya.com/");
    assert.equal("publisher" in websiteSchema, false);
  });
});