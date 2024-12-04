export function convertLink(markdown: string) {
  return markdown.replace(/\[(.*?)]\((.*?)\)/g, '<a href="$2">$1</a>');
}
