import { convertHeadings } from './rules/headings.js';
import { convertBold } from './rules/bold.js';
import { convertItalic } from './rules/italic.js';
import { convertLink } from './rules/link.js';
import { convertParagraphs } from './rules/paragraphs.js';

export default function markdownToHtml(markdown: string) {
  let html = markdown;
  html = convertHeadings(html);
  html = convertBold(html);
  html = convertItalic(html);
  html = convertLink(html);
  html = convertParagraphs(html);

  return html;
}
