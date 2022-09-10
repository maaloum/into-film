import commentCounter from '../modules/commentCounter.js';

describe('Counting the number of comments on a movie', () => {
  test('should return the length of an array', () => {
    const arr = commentCounter('film');
    expect(arr).toEqual(4);
  });
});
