import { describe, expect, test } from 'vitest';
import { convertBold } from './bold.js';

describe('strong tag 변환 검증', () => {
  test('**text**가 <strong>으로 변환된다', () => {
    const markdown = '**bold**';
    const html = convertBold(markdown);

    expect(html).toBe('<strong>bold</strong>');
  });

  test('__text__가 <strong>으로 변환된다', () => {
    const markdown = '__bold__';
    const html = convertBold(markdown);

    expect(html).toBe('<strong>bold</strong>');
  });
});
