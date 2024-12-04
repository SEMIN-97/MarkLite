export function convertItalic(markdown: string) {
  return markdown
    .replace(/\*(.*?)\*/g, '<i>$1</i>')
    .replace(/_(.*?)_/g, '<i>$1</i>');
}
