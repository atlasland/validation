# validation

A set of validation functions

## Validations

### Email

Validates an email according to [RFC5322](https://tools.ietf.org/html/rfc5322#section-3.4) (or as close as possible).

```ts
import { email } from "https://deno.land/x/validation/email.ts";

if (email('test@example.com')) {
	console.log('valid')
}
```
