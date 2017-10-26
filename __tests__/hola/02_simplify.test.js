import func from '../../hola/02_simplify';

const emptyString = '';
const abc = 'abcdefghijklmnopqrstuvwxyz';
const abcabc = 'abc abc';
const xyz = 'xyz';
const a = 'a';
const b = 'b';
const c = 'c';
const z = 'z';

test('function returns correct values', () => {
  expect(func(emptyString, a, b)).toBe(-1);
  expect(func(abc, a, b)).toBe(1);
  expect(func(abc, b, a)).toBe(1);
  expect(func(abc, a, c)).toBe(2);
  expect(func(abc, c, a)).toBe(2);
  expect(func(abc, c, z)).toBe(25);
  expect(func(abc, z, c)).toBe(25);
  expect(func(abcabc, a, b)).toBe(5);
  expect(func(abcabc, b, a)).toBe(5);
  expect(func(abcabc, a, z)).toBe(4);
  expect(func(xyz, a, b)).toBe(-1);
});
