const fs = require('fs');
const content = fs.readFileSync('src/app/layout.tsx', 'utf8');
const fixed = content.replace('<!-- <ThemeProvider', '{/* <ThemeProvider').replace('-->', '*/}');
fs.writeFileSync('src/app/layout.tsx', fixed);
console.log('Fixed layout.tsx');
