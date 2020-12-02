const recover = require('../js/about');

test('récuperer prénom', () => {
  expect(recover('Joe')).toBe('Joe');
});
