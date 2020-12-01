const recover = require("../../dist/script.dev");

test("récuperer prénom", () => {
  expect(recover("Joe")).toBe("Joe");
});
