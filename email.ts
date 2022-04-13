/**
 * Validates an email according to RFC5322 (or as close as possible).
 *
 * @param value The email string to be validated
 * @see https://www.regular-expressions.info/email.html
 * @see https://tools.ietf.org/html/rfc5322#section-3.4
 * @see https://stackoverflow.com/a/201378/1001673
 */
export function valid(value: string): boolean {
  return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    .test(
      value,
    );
}
