/**
 * @jest-environment jsdom
 */

import totalMovies from '../modules/totalItems.js';

describe('count number of elem in api', () => {
  test('should first', () => {
    const count = document.querySelectorAll('.count');
    const showCount = '(3)';
    count.innerHTML = showCount;

    setTimeout(() => {
      totalMovies();
    }, 2000);

    expect(count.innerHTML).toBe('(3)');
  });
});
