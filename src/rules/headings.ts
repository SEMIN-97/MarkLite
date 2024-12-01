export function convertHeadings(markdown: string) {
  return markdown.replace(/^# (.*$)/gim, '<h1>$1</h1>');
}