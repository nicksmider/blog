#!/usr/bin/env node
import { writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import * as readline from 'readline/promises';

const __dirname = dirname(fileURLToPath(import.meta.url));
const postsDir = join(__dirname, '../src/content/blog');

const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

const title = await rl.question('Title: ');
const summary = await rl.question('Summary: ');
const tags = await rl.question('Tags (comma-separated): ');
rl.close();

const slug = title
  .toLowerCase()
  .replace(/[^a-z0-9\s-]/g, '')
  .trim()
  .replace(/\s+/g, '-');

const date = new Date().toISOString().split('T')[0];
const tagList = tags.split(',').map(t => `'${t.trim()}'`).join(', ');
const filePath = join(postsDir, `${slug}.mdx`);

if (existsSync(filePath)) {
  console.error(`File already exists: ${filePath}`);
  process.exit(1);
}

const content = `---
title: ${title}
date: '${date}'
tags: [${tagList}]
draft: true
summary: '${summary}'
---

`;

writeFileSync(filePath, content);
console.log(`Created: src/content/blog/${slug}.mdx`);
