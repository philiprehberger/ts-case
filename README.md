# @philiprehberger/case

[![CI](https://github.com/philiprehberger/ts-case/actions/workflows/ci.yml/badge.svg)](https://github.com/philiprehberger/ts-case/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/@philiprehberger/case.svg)](https://www.npmjs.com/package/@philiprehberger/case)
[![Last updated](https://img.shields.io/github/last-commit/philiprehberger/ts-case)](https://github.com/philiprehberger/ts-case/commits/main)

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

## Support

If you find this project useful:

⭐ [Star the repo](https://github.com/philiprehberger/ts-case)

🐛 [Report issues](https://github.com/philiprehberger/ts-case/issues?q=is%3Aissue+is%3Aopen+label%3Abug)

💡 [Suggest features](https://github.com/philiprehberger/ts-case/issues?q=is%3Aissue+is%3Aopen+label%3Aenhancement)

❤️ [Sponsor development](https://github.com/sponsors/philiprehberger)

🌐 [All Open Source Projects](https://philiprehberger.com/open-source-packages)

💻 [GitHub Profile](https://github.com/philiprehberger)

🔗 [LinkedIn Profile](https://www.linkedin.com/in/philiprehberger)

## License

[MIT](LICENSE)
