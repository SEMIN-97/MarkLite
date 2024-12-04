import { describe, expect, test } from 'vitest';
import { convertHeadings } from './headings.js';

describe('Heading tag 변환 검증', () => {
  test('#가 <h1>으로 변환된다', () => {
    const markdown = '# Heading 1';
    const html = convertHeadings(markdown);

    expect(html).toBe('<h1>Heading 1</h1>');
  });

  test('##가 <h2>으로 변환된다', () => {
    const markdown = '## Heading 2';
    const html = convertHeadings(markdown);

    expect(html).toBe('<h2>Heading 2</h2>');
  });

  test('###가 <h3>으로 변환된다', () => {
    const markdown = '### Heading 3';
    const html = convertHeadings(markdown);

    expect(html).toBe('<h3>Heading 3</h3>');
  });

  test('####가 <h4>으로 변환된다', () => {
    const markdown = '#### Heading 4';
    const html = convertHeadings(markdown);

    expect(html).toBe('<h4>Heading 4</h4>');
  });

  test('#####가 <h5>으로 변환된다', () => {
    const markdown = '##### Heading 5';
    const html = convertHeadings(markdown);

    expect(html).toBe('<h5>Heading 5</h5>');
  });

  test('######가 <h6>으로 변환된다', () => {
    const markdown = '###### Heading 6';
    const html = convertHeadings(markdown);

    expect(html).toBe('<h6>Heading 6</h6>');
  });
});
