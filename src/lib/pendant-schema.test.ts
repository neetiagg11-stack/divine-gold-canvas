import { describe, expect, test } from "bun:test";
import { pendantSchema } from "./pendant-schema";
import { brandOrganization, websiteSchema } from "./brand-sources";

describe("Verified SEO facts", () => {
  test("does not fabricate an offer or price", () => {
    const schema = pendantSchema([]);
    expect(schema).not.toHaveProperty("offers");
    expect(schema).not.toHaveProperty("price");
  });
  test("does not fabricate reviews or ratings", () => {
    const schema = pendantSchema([]);
    expect(schema).not.toHaveProperty("aggregateRating");
    expect(schema).not.toHaveProperty("review");
  });
  test("distinguishes the stated 14.511 g gold weight from total weight", () => {
    const schema = pendantSchema([]);
    expect(schema).not.toHaveProperty("weight");
    expect(schema.additionalProperty.find((property) => property.name === "Gold Weight")).toMatchObject({ value: 14.511, unitText: "g" });
  });
  test("does not attribute this site's publication to the external brand", () => {
    expect(websiteSchema.url).toBe("https://divine-gold-canvas.lovable.app");
    expect(brandOrganization.url).toBe("https://www.indriya.com/");
    expect(websiteSchema).not.toHaveProperty("publisher");
  });
});