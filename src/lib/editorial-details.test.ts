import { test } from "node:test";
import assert from "node:assert/strict";
import { editorialDetails, pendantWebPage, studentAuthor } from "./editorial-details";

test("attributes the project to ATLAS students without professional credentials", () => {
  assert.equal(studentAuthor.name, "ATLAS students");
  assert.equal(editorialDetails.role, "Students");
  assert.equal("hasCredential" in studentAuthor, false);
});
test("stores the requested 28 October 2026 as scheduled, not a completed publication", () => {
  assert.equal(editorialDetails.scheduledPublication, "2026-10-28");
  assert.equal("datePublished" in pendantWebPage, false);
});
test("records a completed update before the scheduled publication", () => {
  assert.equal(pendantWebPage.dateModified, "2026-10-27");
  assert.ok(pendantWebPage.dateModified < editorialDetails.scheduledPublication);
});
test("uses the user-supplied project contact", () => {
  assert.equal(editorialDetails.contact, "8433624951");
  assert.equal(studentAuthor.telephone, "8433624951");
});