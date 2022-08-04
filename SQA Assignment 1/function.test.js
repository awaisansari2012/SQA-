const functions = require("./funtions");

test("2+2 will be 4", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("a+5 will give: 'Only numbers are allowed'", () => {
  expect(functions.add("a", 5)).toBe('Only numbers are allowed!');
});

test("{a: 10} + 1 will give: 'Only numbers are allowed'", () => {
  expect(functions.add({'a': 10}, 0)).toBe('Only numbers are allowed!');
});

test("-2+0 will givr: 'Numbers greater than zero are allowed only!'", () => {
  expect(functions.add(-2, 0)).toBe('Numbers greater than zero are allowed only!');
});

test("20+30 will be 50", () => {
  expect(functions.add(20, 30)).toBe(50);
});
