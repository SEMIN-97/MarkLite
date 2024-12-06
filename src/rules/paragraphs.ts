export function convertParagraphs(markdown: string) {
  return markdown
    .split('\n\n')
    .map((block) => isWrappedWithTags(block))
    .join('\n\n');
}

function isWrappedWithTags(block: string): string {
  const tagPattern = /^\s*<(h\d|ul|ol|li|pre|code|blockquote|table|hr)/;

  return tagPattern.test(block) ? block : `<p>${block.trim()}</p>`;
}
