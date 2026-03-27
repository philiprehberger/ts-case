# @philiprehberger/case

[![CI](https://github.com/philiprehberger/ts-case/actions/workflows/ci.yml/badge.svg)](https://github.com/philiprehberger/ts-case/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@philiprehberger/case)](https://www.npmjs.com/package/@philiprehberger/case)
[![License](https://img.shields.io/github/license/philiprehberger/ts-case)](LICENSE)
[![Sponsor](https://img.shields.io/badge/sponsor-GitHub%20Sponsors-ec6cb9)](https://github.com/sponsors/philiprehberger)

String case conversion — camel, snake, kebab, pascal, title, and deep object key conversion.

## Installation

```bash
npm install @philiprehberger/case
```

## Usage

```ts
import { camelCase, snakeCase, kebabCase } from '@philiprehberger/case';

camelCase('hello_world');  // "helloWorld"
snakeCase('helloWorld');   // "hello_world"
kebabCase('helloWorld');   // "hello-world"
```

Acronyms are handled correctly:

```ts
import { camelCase, kebabCase } from '@philiprehberger/case';

camelCase('XMLParser');    // "xmlParser"
kebabCase('getHTTPSUrl');  // "get-https-url"
```

Deep object key conversion:

```ts
import { camelCaseKeys } from '@philiprehberger/case';

camelCaseKeys({ user_name: { first_name: 'Alice' } });
// { userName: { firstName: 'Alice' } }
```

## API

### Case functions

| Function | Description | Example |
| --- | --- | --- |
| `camelCase(str)` | Convert to camelCase | `"hello_world"` → `"helloWorld"` |
| `snakeCase(str)` | Convert to snake_case | `"helloWorld"` → `"hello_world"` |
| `kebabCase(str)` | Convert to kebab-case | `"helloWorld"` → `"hello-world"` |
| `pascalCase(str)` | Convert to PascalCase | `"hello_world"` → `"HelloWorld"` |
| `titleCase(str)` | Convert to Title Case | `"helloWorld"` → `"Hello World"` |
| `constantCase(str)` | Convert to CONSTANT_CASE | `"helloWorld"` → `"HELLO_WORLD"` |
| `sentenceCase(str)` | Convert to Sentence case | `"helloWorld"` → `"Hello world"` |
| `dotCase(str)` | Convert to dot.case | `"helloWorld"` → `"hello.world"` |
| `pathCase(str)` | Convert to path/case | `"helloWorld"` → `"hello/world"` |

### Key conversion functions

| Function | Description |
| --- | --- |
| `camelCaseKeys(obj)` | Recursively convert all object keys to camelCase |
| `snakeCaseKeys(obj)` | Recursively convert all object keys to snake_case |
| `kebabCaseKeys(obj)` | Recursively convert all object keys to kebab-case |

## Development

```bash
npm install
npm run build
npm test
```

## License

MIT
