#!/usr/bin/env node

import lintExamples from '../src/lintExamples.ts';

console.log('Typechecking TSX docs code examples...');

lintExamples({
  command: 'tsc',
  extension: 'tsx',
  writeBack: false,
});
