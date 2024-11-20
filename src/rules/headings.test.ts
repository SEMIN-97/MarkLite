import { describe, expect, test } from 'vitest';
import { convertHeadings } from './headings.js';

describe('Heading tag 변환 검증', () => {
  test('#가 <h1>으로 변환된다', () => {
    const markdown = '# Heading 1';
    const html = convertHeadings(markdown);

    expect(html).toBe('<h1>Heading 1</h1>')
  });
})