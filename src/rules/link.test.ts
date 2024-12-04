import { describe, expect, test } from 'vitest';
import { convertLink } from './link.js';

describe('link 변환 검증', () => {
  test('[text](url)이 <a>로 변환된다', () => {
    const markdown = '[Google](https://google.com)';
    const html = convertLink(markdown);

    expect(html).toBe('<a href="https://google.com">Google</a>');
  });
});
