#!/bin/bash

# Clean dist directory
rm -rf dist
mkdir -p dist

echo "Building TypeScript files..."

# Build ESM
echo "Building ESM..."
npx tsc \
  --module esnext \
  --target es2017 \
  --outDir dist \
  --declaration \
  --noEmit false \
  --esModuleInterop true \
  --strict true \
  --skipLibCheck true \
  --resolveJsonModule true \
  --moduleResolution node \
  src/index.ts

# Build CJS
echo "Building CJS..."
npx tsc \
  --module commonjs \
  --target es2017 \
  --outDir dist/cjs \
  --declaration false \
  --noEmit false \
  --esModuleInterop true \
  --strict true \
  --skipLibCheck true \
  --resolveJsonModule true \
  --moduleResolution node \
  src/index.ts

# Rename CJS files
echo "Processing CJS files..."
for file in dist/cjs/*.js; do
  if [ -f "$file" ]; then
    base=$(basename "$file" .js)
    mv "$file" "dist/${base}.cjs"
  fi
done

# Clean up
rm -rf dist/cjs

echo "Build completed successfully!"