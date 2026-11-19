const test = require('node:test');
const assert = require('node:assert');
const { calculateFine } = require('../src/fine');

test('хоцроогүй бол торгууль 0', () => {
  assert.strictEqual(calculateFine(0), 0);
});

test('3 хоног хоцорвол 300', () => {
  assert.strictEqual(calculateFine(3), 300);
});
