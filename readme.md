# @gabrielizaias/validation

This is a set of validation functions that I often find myself using on projects.

## Validations

### Email

Validates an email according to [RFC5322](https://tools.ietf.org/html/rfc5322#section-3.4) (or as close as possible).

```js
import { email } from "@gabrielizaias/validation/email.js";

if (email('test@example.com')) {
	console.log('valid')
}
```
