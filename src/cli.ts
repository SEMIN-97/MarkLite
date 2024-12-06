#!/usr/bin/env node

import fs from 'fs';
import markdownToHtml from './index.js';

// Get file paths from command-line arguments
const args = process.argv.slice(2);
if (args.length === 0) {
  console.error(
    '❌ No input file provided. Usage: marklite <input.md> [output.html]',
  );
  process.exit(1);
}

const inputFilePath = args[0]!;
const outputFilePath = args[1] || inputFilePath.replace(/\.md$/, '.html'); // 두 번째 인자 또는 기본값

// Validate input file path
if (!inputFilePath) {
  console.error('❌ Input file path is missing.');
  process.exit(1);
}

if (!fs.existsSync(inputFilePath)) {
  console.error(`❌ File not found: ${inputFilePath}`);
  process.exit(1);
}

// Read the Markdown file
const markdownContent = fs.readFileSync(inputFilePath, 'utf-8');

// Convert Markdown to HTML
const htmlContent = markdownToHtml(markdownContent);

// Write the HTML to the output file
fs.writeFileSync(outputFilePath, htmlContent, 'utf-8');
console.log(`✅ Converted ${inputFilePath} to ${outputFilePath}`);
