const fs = require('fs');
const path = require('path');

const corePages = {
  'Home.tsx': 'home',
  'Services.tsx': 'services',
  'WhoWeAre.tsx': 'whoWeAre',
  'Contact.tsx': 'contact',
  'Careers.tsx': 'careers'
};

const industryPages = {
  'FinTech.tsx': 'fintech',
  'SaaS.tsx': 'saas',
  'EdTech.tsx': 'edtech',
  'Ecommerce.tsx': 'ecommerce',
  'Logistics.tsx': 'logistics',
  'Retail.tsx': 'retail'
};

const servicePages = {
  'QAAudit.tsx': 'qaAudit',
  'AutomationNitro.tsx': 'automationNitro',
  'ReleaseAcceleration.tsx': 'releaseAcceleration',
  'QACandidateAssessment.tsx': 'qaCandidateAssessment',
  'FunctionalTesting.tsx': 'functional',
  'IntegrationTesting.tsx': 'integration',
  'PerformanceTesting.tsx': 'performance',
  'RegressionTesting.tsx': 'regression',
  'SystemTesting.tsx': 'systemTesting',
};

function injectSEO(filePath, pageKey, importPath) {
  let content = fs.readFileSync(filePath, 'utf8');
  
  if (content.includes('<SEO')) {
    console.log(`SEO already injected in ${filePath}`);
    return;
  }

  // Put import at the very top of the file
  const importStatement = `import SEO from '${importPath}';\n`;
  content = importStatement + content;

  // Insert <SEO pageKey="..." /> after the first `return (` or `return <`
  const exportMatch = content.match(/export default function \w+\(.*\) \{/);
  
  if (exportMatch) {
    const afterExport = content.slice(exportMatch.index);
    const returnMatch = afterExport.match(/return\s*\(\s*<[a-zA-Z]+/);
    if (returnMatch) {
      const globalReturnIndex = exportMatch.index + returnMatch.index + returnMatch[0].length;
      const tagStartIndex = globalReturnIndex - returnMatch[0].match(/<[a-zA-Z]+/)[0].length;
      const tagEndIndex = content.indexOf('>', tagStartIndex);
      
      const insertPos = tagEndIndex + 1;
      content = content.slice(0, insertPos) + `\n      <SEO pageKey="${pageKey}" />` + content.slice(insertPos);
    } else {
      // try matching `return <` directly
      const simpleReturnMatch = afterExport.match(/return\s*<[a-zA-Z]+/);
      if (simpleReturnMatch) {
        const globalReturnIndex = exportMatch.index + simpleReturnMatch.index + simpleReturnMatch[0].length;
        const tagStartIndex = globalReturnIndex - simpleReturnMatch[0].match(/<[a-zA-Z]+/)[0].length;
        const tagEndIndex = content.indexOf('>', tagStartIndex);
        
        const insertPos = tagEndIndex + 1;
        content = content.slice(0, insertPos) + `\n      <SEO pageKey="${pageKey}" />` + content.slice(insertPos);
      }
    }
  } else {
    // try matching `const ComponentName = ...`
    const constMatch = content.match(/const \w+\s*=\s*(?:function)?\(.*\)\s*=>\s*\{/);
    if (constMatch) {
      const afterExport = content.slice(constMatch.index);
      const returnMatch = afterExport.match(/return\s*\(\s*<[a-zA-Z]+/);
      if (returnMatch) {
        const globalReturnIndex = constMatch.index + returnMatch.index + returnMatch[0].length;
        const tagStartIndex = globalReturnIndex - returnMatch[0].match(/<[a-zA-Z]+/)[0].length;
        const tagEndIndex = content.indexOf('>', tagStartIndex);
        
        const insertPos = tagEndIndex + 1;
        content = content.slice(0, insertPos) + `\n      <SEO pageKey="${pageKey}" />` + content.slice(insertPos);
      }
    }
  }

  fs.writeFileSync(filePath, content, 'utf8');
  console.log(`Injected SEO into ${filePath}`);
}

Object.entries(corePages).forEach(([file, key]) => {
  const fp = path.join(__dirname, '../src/pages', file);
  if (fs.existsSync(fp)) injectSEO(fp, key, '../components/SEO');
});

Object.entries(industryPages).forEach(([file, key]) => {
  const fp = path.join(__dirname, '../src/pages/industries', file);
  if (fs.existsSync(fp)) injectSEO(fp, key, '../../components/SEO');
});

Object.entries(servicePages).forEach(([file, key]) => {
  const fp = path.join(__dirname, '../src/pages/services', file);
  if (fs.existsSync(fp)) injectSEO(fp, key, '../../components/SEO');
});
