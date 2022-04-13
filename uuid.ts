type UuidOptions = {
  version?: "v1" | "v4" | "v5";
};

export function valid(value: string, options?: UuidOptions): boolean {
  const v = (options?.version ?? "v4").substring(1);
  return new RegExp(
    `^[0-9a-f]{8}-[0-9a-f]{4}-${v}[0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$`,
    "i",
  ).test(value);
}
