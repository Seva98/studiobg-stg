export function getFormDataValues<T extends string>(formData: FormData, keys: T[]): Record<T, string | null> {
  const result: Partial<Record<T, string | null>> = {};
  keys.forEach((key) => {
    result[key] = formData.get(key) as string | null;
  });
  return result as Record<T, string | null>;
}
