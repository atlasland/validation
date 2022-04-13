# Validation

Validation functions for Deno 🦕

## Validations

### Email

Validates an email according to
[RFC5322](https://tools.ietf.org/html/rfc5322#section-3.4) (or as close as
possible).

```ts
import { email } from "https://deno.land/x/validation/mod.ts";

if (email.valid("test@example.com")) {
  console.log("valid");
}
```
