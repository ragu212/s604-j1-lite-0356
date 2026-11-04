const test = require('node:test');
const assert = require('node:assert');
const { multiply } = require('../index');
test('multiply', () => { assert.strictEqual(multiply(4, 5), 20); });
