import fs from 'fs';
import path from 'path';
import sass from 'sass';
import chokidar from 'chokidar';
import { fileURLToPath } from 'url';

const getDirname = () => path.dirname(fileURLToPath(import.meta.url));
const SCSS_DIR = path.resolve(getDirname(), '../components');

// const SCSS_DIR = path.resolve(__dirname, '../components'); // Adjust this to your project structure

// const SCSS_DIR = '../components'; // Adjust to your SCSS directory

function convertScssToJs(scssFile) {
  if (!fs.existsSync(SCSS_DIR)) {
    console.error(`❌ Directory not found: ${SCSS_DIR}`);
    process.exit(1); // Stop execution if the directory doesn't exist
  }
  const scssPath = path.resolve(scssFile);
  const jsFile = scssFile.replace('.lit.scss', '.lit.scss.js');

  try {
    // Compile SCSS to CSS
    const result = sass.compile(scssPath, { style: "compressed" });

    // Convert CSS to a JS module
    const jsContent = `export default \`${result.css}\`;`;

    // Write to .lit.scss.js file
    fs.writeFileSync(jsFile, jsContent);
    console.log(`✅ Converted: ${scssFile} → ${jsFile}`);
  } catch (error) {
    console.error(`❌ Error processing ${scssFile}:`, error.message);
  }
}

// Watch for changes and automatically update files
chokidar.watch(`${SCSS_DIR}/**/*.lit.scss`).on('change', convertScssToJs);

// Convert existing SCSS files on startup
fs.readdirSync(SCSS_DIR)
  .filter(file => file.endsWith('.lit.scss'))
  .forEach(file => convertScssToJs(path.join(SCSS_DIR, file)));
