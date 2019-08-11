const sum = require('./sum');

test("expect 1 + 2 to be 3", () => {
    expect( sum(1, 2) ).toBe(3);
});

test("expect 3 + 5 to be 8", () => {
    expect( sum(3, 5) ).toBe(8);
});
