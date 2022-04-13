import { asserts } from "./deps.ts";
import { uuid } from "./mod.ts";

const { assertEquals } = asserts;

Deno.test("[uuid] v1 valid", () => {
  const valid = [
    "8e2952ac-bb72-11ec-8422-0242ac120002",
    "8899b304-bb72-11ec-8422-0242ac120002",
  ];

  for (const v1 of valid) {
    assertEquals(
      uuid.valid(v1, { version: "v1" }),
      true,
      `${v1} is a valid uuid v1`,
    );
  }
});

Deno.test("[uuid] v1 invalid", () => {
  const invalid = [
    "5d1b8a8c-7ce4-4841-9a96-3ecbae26517f",
    "5d1b8a8c-7ce4-5841-9a96-3ecbae26517f",
    "some-invalid-string",
    "",
  ];

  for (const v1 of invalid) {
    assertEquals(
      uuid.valid(v1, { version: "v1" }),
      false,
      `${v1} is an invalid uuid v1`,
    );
  }
});

Deno.test("[uuid] v4 valid", () => {
  const valid = [
    "a5a8f17d-5b9c-4b1f-a451-0a36dd00ec32",
    "c9d45f37-0063-4dad-8a92-17802e0f7b1f",
    "74456ec1-c839-44d2-979d-d49ef84b19bf",
  ];

  for (const v4 of valid) {
    assertEquals(uuid.valid(v4), true, `${v4} is a valid uuid v4`);
  }
});

Deno.test("[uuid] v4 invalid", () => {
  const invalid = [
    "5d1b8a8c-7ce4-1841-9a96-3ecbae26517f",
    "5d1b8a8c-7ce4-5841-9a96-3ecbae26517f",
    "some-invalid-string",
    "",
  ];

  for (const v4 of invalid) {
    assertEquals(
      uuid.valid(v4, { version: "v4" }),
      false,
      `${v4} is an invalid uuid v4`,
    );
  }
});

Deno.test("[uuid] v5 valid", () => {
  const valid = [
    "4b4f2adc-5b27-57b5-8e3a-c4c4bcf94f05",
    "c9d45f37-0063-5dad-8a92-17802e0f7b1f",
    "74456ec1-c839-54d2-979d-d49ef84b19bf",
  ];

  for (const v5 of valid) {
    assertEquals(
      uuid.valid(v5, { version: "v5" }),
      true,
      `${v5} is a valid uuid v5`,
    );
  }
});

Deno.test("[uuid] v5 invalid", () => {
  const invalid = [
    "5d1b8a8c-7ce4-1841-9a96-3ecbae26517f",
    "74456ec1-c839-44d2-979d-d49ef84b19bf",
    "some-invalid-string",
    "",
  ];

  for (const v5 of invalid) {
    assertEquals(
      uuid.valid(v5, { version: "v5" }),
      false,
      `${v5} is an invalid uuid v5`,
    );
  }
});
