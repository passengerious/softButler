const fs = require('fs');
const path = require('path');

const files = [
  'src/pages/services/FunctionalTesting.tsx',
  'src/pages/services/IntegrationTesting.tsx',
  'src/pages/services/PerformanceTesting.tsx',
  'src/pages/services/RegressionTesting.tsx',
  'src/pages/services/SystemTesting.tsx'
];

for (const file of files) {
  const fullPath = path.join(__dirname, '..', file);
  if (!fs.existsSync(fullPath)) {
    console.log(`Skipping ${file} - not found`);
    continue;
  }
  let content = fs.readFileSync(fullPath, 'utf8');
  content = content.replace('return (\n    <ServiceTemplate', 'return (\n    <>\n      <ServiceTemplate');
  content = content.replace(/ \/>\n      <SEO (.*) \/>\n  \);\n}/, ' />\n      <SEO $1 />\n    </>\n  );\n}');
  fs.writeFileSync(fullPath, content, 'utf8');
  console.log(`Fixed ${file}`);
}
