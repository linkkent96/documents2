#!/usr/bin/env node

import lintExamples from '../src/lintExamples.ts';

console.log('Linting TSX docs code examples...');

lintExamples({
  command: 'eslint',
  args: ['--max-warnings=0', '.'],
  extension: 'tsx',
  writeBack: true,
});
