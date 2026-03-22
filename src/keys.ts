import {
  camelCase,
  snakeCase,
  kebabCase,
} from './case';

type PlainObject = Record<string, unknown>;

function isPlainObject(value: unknown): value is PlainObject {
  if (typeof value !== 'object' || value === null) return false;
  const proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
}

function convertKeys(
  obj: unknown,
  converter: (key: string) => string,
): unknown {
  if (Array.isArray(obj)) {
    return obj.map((item) => convertKeys(item, converter));
  }

  if (isPlainObject(obj)) {
    const result: PlainObject = {};
    for (const key of Object.keys(obj)) {
      result[converter(key)] = convertKeys(obj[key], converter);
    }
    return result;
  }

  return obj;
}

export function camelCaseKeys<T>(obj: T): T {
  return convertKeys(obj, camelCase) as T;
}

export function snakeCaseKeys<T>(obj: T): T {
  return convertKeys(obj, snakeCase) as T;
}

export function kebabCaseKeys<T>(obj: T): T {
  return convertKeys(obj, kebabCase) as T;
}
