const add = require('../main');

let input = [
  'ITEM000001',
  'ITEM000001',
  'ITEM000001',
  'ITEM000001',
  'ITEM000001',
  'ITEM000003-2',
  'ITEM000005',
  'ITEM000005',
  'ITEM000005'
]

it ('should display receipt', () => {
    expect(printReceipt(input)).toBe(5);
});