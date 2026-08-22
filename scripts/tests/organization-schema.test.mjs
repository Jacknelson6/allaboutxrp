import assert from "node:assert/strict";
import test from "node:test";

import {
  EDITORIAL_EMAIL,
  GENERAL_EMAIL,
  ORGANIZATION_ID,
  organizationSchema,
} from "../../src/lib/seo/organization.ts";

test("the Organization entity keeps its canonical node id", () => {
  assert.equal(organizationSchema["@type"], "Organization");
  assert.equal(organizationSchema["@id"], ORGANIZATION_ID);
  assert.equal(ORGANIZATION_ID, "https://allaboutxrp.com/#organization");
});

test("a postal address is published with a country", () => {
  const address = organizationSchema.address;
  assert.equal(address["@type"], "PostalAddress");
  assert.equal(address.addressCountry, "US");
  assert.equal(address.addressRegion, "WY");
});

test("both published inboxes are exposed as typed contact points", () => {
  const contactPoints = organizationSchema.contactPoint;
  assert.ok(Array.isArray(contactPoints) && contactPoints.length >= 2);

  for (const point of contactPoints) {
    assert.equal(point["@type"], "ContactPoint");
    assert.ok(point.contactType, "every contact point needs a contactType");
    assert.match(point.email, /@allaboutxrp\.com$/);
    assert.equal(point.url, "https://allaboutxrp.com/contact");
  }

  const emails = contactPoints.map((point) => point.email);
  assert.ok(emails.includes(EDITORIAL_EMAIL));
  assert.ok(emails.includes(GENERAL_EMAIL));

  const types = contactPoints.map((point) => point.contactType);
  assert.ok(types.includes("editorial"));
  assert.ok(types.includes("customer support"));
});

test("the entity still carries the fields other schemas reference", () => {
  assert.equal(organizationSchema.url, "https://allaboutxrp.com");
  assert.equal(organizationSchema.name, "AllAboutXRP");
  assert.equal(organizationSchema.logo["@type"], "ImageObject");
  assert.equal(organizationSchema.founder["@type"], "Person");
});

test("the schema serializes to valid JSON-LD", () => {
  const parsed = JSON.parse(JSON.stringify(organizationSchema));
  assert.equal(parsed["@context"], "https://schema.org");
  assert.ok(!JSON.stringify(parsed).includes("undefined"));
});
