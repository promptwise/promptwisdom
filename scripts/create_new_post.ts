import * as fs from 'fs';
import * as path from 'path';
import { execSync } from 'child_process';

// Retrieve the title argument from the command line
const titleArg = process.argv[2];

if (!titleArg) {
  console.error('Error: No title provided.');
  process.exit(1);
}

// Generate a snake_case version of the title
const snakeCaseTitle = titleArg
  .toLowerCase()
  .split(' ')
  .join('_')
  .replace(/[^\w_]/g, '');

// Generate the current date in YYYY_MM_DD format
const currentDate = new Date()
  .toISOString()
  .slice(0, 10)
  .replace(/-/g, '_');

// Generate the filename
const fileName = `${currentDate}_${snakeCaseTitle}.md`;

// Set the target directory and file path
const targetDirectory = 'posts';
const targetFilePath = path.join(targetDirectory, fileName);

// Define the content of the new blog post
const content = `---
title: "${titleArg}"
date: "${currentDate.replace(/_/g, '-')}"
---

# ${titleArg}

<!-- Start writing your blog post here -->
`;

// Create the new blog post file
fs.writeFileSync(targetFilePath, content);

// Git add, commit, and push the new blog post
try {
  execSync(`git add ${targetFilePath}`);
  execSync(`git commit -m "Add new blog post: ${titleArg}"`);
  execSync('git push');
  console.log(`New blog post created: ${targetFilePath}`);
} catch (error) {
  console.error('Error while executing git commands:', error.message);
}
