import { describe, it } from 'node:test';
import assert from 'node:assert/strict';
import {
  camelCase,
  snakeCase,
  kebabCase,
  pascalCase,
  titleCase,
  constantCase,
  sentenceCase,
  dotCase,
  pathCase,
  camelCaseKeys,
  snakeCaseKeys,
  kebabCaseKeys,
} from '../../dist/index.js';

describe('camelCase', () => {
  it('converts space-separated words', () => {
    assert.equal(camelCase('hello world'), 'helloWorld');
  });

  it('converts snake_case', () => {
    assert.equal(camelCase('hello_world'), 'helloWorld');
  });

  it('converts kebab-case', () => {
    assert.equal(camelCase('hello-world'), 'helloWorld');
  });

  it('converts PascalCase', () => {
    assert.equal(camelCase('HelloWorld'), 'helloWorld');
  });

  it('converts CONSTANT_CASE', () => {
    assert.equal(camelCase('HELLO_WORLD'), 'helloWorld');
  });

  it('handles acronyms like XMLParser', () => {
    assert.equal(camelCase('XMLParser'), 'xmlParser');
  });

  it('handles acronyms like getHTTPSUrl', () => {
    assert.equal(camelCase('getHTTPSUrl'), 'getHttpsUrl');
  });

  it('returns empty string for empty input', () => {
    assert.equal(camelCase(''), '');
  });

  it('returns single word unchanged', () => {
    assert.equal(camelCase('hello'), 'hello');
  });
});

describe('snakeCase', () => {
  it('converts camelCase', () => {
    assert.equal(snakeCase('helloWorld'), 'hello_world');
  });

  it('converts PascalCase', () => {
    assert.equal(snakeCase('HelloWorld'), 'hello_world');
  });

  it('converts kebab-case', () => {
    assert.equal(snakeCase('hello-world'), 'hello_world');
  });

  it('handles acronyms', () => {
    assert.equal(snakeCase('XMLParser'), 'xml_parser');
  });
});

describe('kebabCase', () => {
  it('converts camelCase', () => {
    assert.equal(kebabCase('helloWorld'), 'hello-world');
  });

  it('converts snake_case', () => {
    assert.equal(kebabCase('hello_world'), 'hello-world');
  });

  it('handles acronyms', () => {
    assert.equal(kebabCase('XMLParser'), 'xml-parser');
  });
});

describe('pascalCase', () => {
  it('converts space-separated words', () => {
    assert.equal(pascalCase('hello world'), 'HelloWorld');
  });

  it('converts snake_case', () => {
    assert.equal(pascalCase('hello_world'), 'HelloWorld');
  });

  it('converts camelCase', () => {
    assert.equal(pascalCase('helloWorld'), 'HelloWorld');
  });
});

describe('titleCase', () => {
  it('converts snake_case', () => {
    assert.equal(titleCase('hello_world'), 'Hello World');
  });

  it('converts camelCase', () => {
    assert.equal(titleCase('helloWorld'), 'Hello World');
  });
});

describe('constantCase', () => {
  it('converts camelCase', () => {
    assert.equal(constantCase('helloWorld'), 'HELLO_WORLD');
  });

  it('converts kebab-case', () => {
    assert.equal(constantCase('hello-world'), 'HELLO_WORLD');
  });
});

describe('sentenceCase', () => {
  it('converts snake_case', () => {
    assert.equal(sentenceCase('hello_world'), 'Hello world');
  });

  it('converts camelCase', () => {
    assert.equal(sentenceCase('helloWorld'), 'Hello world');
  });
});

describe('dotCase', () => {
  it('converts camelCase', () => {
    assert.equal(dotCase('helloWorld'), 'hello.world');
  });
});

describe('pathCase', () => {
  it('converts camelCase', () => {
    assert.equal(pathCase('helloWorld'), 'hello/world');
  });
});

describe('camelCaseKeys', () => {
  it('converts flat object keys', () => {
    assert.deepEqual(camelCaseKeys({ hello_world: 1 }), { helloWorld: 1 });
  });

  it('converts nested object keys', () => {
    assert.deepEqual(
      camelCaseKeys({ user_name: { first_name: 'a' } }),
      { userName: { firstName: 'a' } },
    );
  });

  it('converts keys inside arrays', () => {
    assert.deepEqual(
      camelCaseKeys([{ foo_bar: 1 }]),
      [{ fooBar: 1 }],
    );
  });

  it('passes non-objects through unchanged', () => {
    assert.equal(camelCaseKeys('hello'), 'hello');
    assert.equal(camelCaseKeys(42), 42);
    assert.equal(camelCaseKeys(null), null);
  });
});

describe('snakeCaseKeys', () => {
  it('converts flat object keys', () => {
    assert.deepEqual(snakeCaseKeys({ helloWorld: 1 }), { hello_world: 1 });
  });
});

describe('kebabCaseKeys', () => {
  it('converts flat object keys', () => {
    assert.deepEqual(kebabCaseKeys({ helloWorld: 1 }), { 'hello-world': 1 });
  });
});
