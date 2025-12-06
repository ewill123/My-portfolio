#!/bin/bash

echo "Cleaning up..."
rm -rf .next
rm -rf node_modules

echo "Installing dependencies..."
npm install

echo "Creating ESLint config..."
cat > .eslintrc.json << 'ESLINT'
{
  "extends": "next/core-web-vitals",
  "rules": {
    "react/no-unescaped-entities": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "react-hooks/exhaustive-deps": "warn"
  }
}
ESLINT

echo "Building..."
npm run build

echo "Done!"
