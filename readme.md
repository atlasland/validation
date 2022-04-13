# Validation

Validation functions for Deno 🦕

## Validations

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
