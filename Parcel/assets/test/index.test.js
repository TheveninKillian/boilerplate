const recover = require("../js/index");

test("récuperer prénom", () => {
  expect(recover("Joe")).toBe("Joe");
});
