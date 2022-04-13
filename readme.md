<p align="center">
  <h1 align="center">Validation</h1>
</p>

<p align="center">
  <a href="https://deno.land/x/validation" target="_blank">
    <img src="https://img.shields.io/badge/-deno.land/x/validation-000.svg?logo=deno&labelColor=000" alt="denoland" />
  </a>
  <a href="https://codecov.io/gh/atlasland/validation" target="_blank">
    <img src="https://codecov.io/gh/atlasland/validation/branch/main/graph/badge.svg?token=UWBLBL4S0W" alt="codecov" />
  </a>
  <a href="https://github.com/atlasland/atlas/blob/main/license" target="_blank">
    <img src="https://img.shields.io/badge/license-MIT-green.svg?labelColor=000" alt="license" />
  </a>
</p>

Validation functions for Deno 🦕

## Documentation

Visit
[https://doc.deno.land](https://doc.deno.land/https://deno.land/x/validation/mod.ts)
to view the up to date documentation.

### Email

Validates an email according to
[RFC5322](https://tools.ietf.org/html/rfc5322#section-3.4) (or as close as
possible).

```ts
import { email } from "https://deno.land/x/validation/mod.ts";

email.valid("test@example.com"); // true
```

### UUID

Validates an UUID according to
[RFC4122](https://datatracker.ietf.org/doc/html/rfc4122).

```ts
import { uuid } from "https://deno.land/x/validation/mod.ts";

// v4 (default)
uuid.valid("a5a8f17d-5b9c-4b1f-a451-0a36dd00ec32"); // true
uuid.valid("c9d45f37-0063-4dad-8a92-17802e0f7b1f", { version: "v4" }); // true

// v1
uuid.valid("8e2952ac-bb72-11ec-8422-0242ac120002", { version: "v1" }); // true

// v5
uuid.valid("4b4f2adc-5b27-57b5-8e3a-c4c4bcf94f05", { version: "v5" }); // true
```
