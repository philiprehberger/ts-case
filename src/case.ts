function splitWords(str: string): string[] {
  if (!str) return [];

  return str
    // Insert separator before uppercase letters following lowercase
    .replace(/([a-z])([A-Z])/g, '$1\0$2')
    // Insert separator before uppercase letter followed by lowercase (handles acronyms)
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1\0$2')
    // Replace common separators with null char
    .replace(/[-_.\s]+/g, '\0')
    // Split on null char and filter empty
    .split('\0')
    .filter(Boolean);
}

export function camelCase(str: string): string {
  const words = splitWords(str);
  if (words.length === 0) return '';
  return words
    .map((w, i) =>
      i === 0
        ? w.toLowerCase()
        : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase(),
    )
    .join('');
}

export function pascalCase(str: string): string {
  return splitWords(str)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join('');
}

export function snakeCase(str: string): string {
  return splitWords(str)
    .map((w) => w.toLowerCase())
    .join('_');
}

export function kebabCase(str: string): string {
  return splitWords(str)
    .map((w) => w.toLowerCase())
    .join('-');
}

export function constantCase(str: string): string {
  return splitWords(str)
    .map((w) => w.toUpperCase())
    .join('_');
}

export function titleCase(str: string): string {
  return splitWords(str)
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
    .join(' ');
}

export function sentenceCase(str: string): string {
  const words = splitWords(str);
  if (words.length === 0) return '';
  return words
    .map((w, i) =>
      i === 0
        ? w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
        : w.toLowerCase(),
    )
    .join(' ');
}

export function dotCase(str: string): string {
  return splitWords(str)
    .map((w) => w.toLowerCase())
    .join('.');
}

export function pathCase(str: string): string {
  return splitWords(str)
    .map((w) => w.toLowerCase())
    .join('/');
}
