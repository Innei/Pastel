#!/usr/bin/env node

import { execSync } from 'child_process';
import { mkdirSync, rmSync } from 'fs';
import { join } from 'path';

const outDir = 'dist';

// Clean dist directory
try {
  rmSync(outDir, { recursive: true, force: true });
} catch (e) {
  // Directory doesn't exist, that's fine
}

// Create dist directory
mkdirSync(outDir, { recursive: true });

console.log('Building TypeScript files...');

// Build ESM
execSync('npx tsc --module esnext --outDir dist --declaration --emitDeclarationOnly false --noEmit false', {
  stdio: 'inherit'
});

// Build CJS
execSync('npx tsc --module commonjs --outDir dist/cjs --declaration false --noEmit false', {
  stdio: 'inherit'
});

// Rename CJS files to .cjs extension
execSync('find dist/cjs -name "*.js" -exec sh -c \'mv "$1" "${1%.js}.cjs"\' _ {} \\;', {
  stdio: 'inherit'
});

// Move CJS files to dist root
execSync('find dist/cjs -name "*.cjs" -exec sh -c \'mv "$1" "dist/$(basename "$1")"\' _ {} \\;', {
  stdio: 'inherit'
});

// Clean up cjs directory
rmSync('dist/cjs', { recursive: true, force: true });

console.log('Build completed successfully!');