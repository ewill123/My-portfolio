const fs = require('fs');

// Files to fix with line numbers
const filesToFix = [
  { file: 'src/app/components/Experience.tsx', lines: [202] },
  { file: 'src/app/components/Footer.tsx', lines: [51, 202] },
  { file: 'src/app/components/Projects.tsx', lines: [244, 324, 371, 636, 640] },
];

filesToFix.forEach(({ file, lines }) => {
  if (!fs.existsSync(file)) {
    console.log(`File not found: ${file}`);
    return;
  }
  
  let content = fs.readFileSync(file, 'utf8');
  const linesArray = content.split('\n');
  
  lines.forEach(lineNum => {
    const index = lineNum - 1;
    if (linesArray[index]) {
      // Replace apostrophe with HTML entity
      linesArray[index] = linesArray[index].replace(/'/g, '&apos;');
    }
  });
  
  fs.writeFileSync(file, linesArray.join('\n'));
  console.log(`Fixed ${file}`);
});
