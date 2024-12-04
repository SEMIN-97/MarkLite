import { describe, expect, test } from 'vitest';
import { convertItalic } from './italic.js';

describe('Italic tag 변환 검증', () => {
  test('*text*가 <i>로 변환된다', () => {
    const markdown = '*italic*';
    const html = convertItalic(markdown);

    expect(html).toBe('<i>italic</i>');
  });

  test('_text_가 <i>로 변환된다', () => {
    const markdown = '_italic_';
    const html = convertItalic(markdown);

    expect(html).toBe('<i>italic</i>');
  });
});
