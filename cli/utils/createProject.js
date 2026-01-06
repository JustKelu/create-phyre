import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
import { chooseTemplate } from './chooseTemplate.js';
import { initDocker } from "./initDocker.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function createProject(projectPath, projectName) {
    let template = await chooseTemplate();

    const templatePath = path.join(__dirname, `../templates/${template}`);
    
    await copyDir(templatePath, projectPath);

    await initDocker(projectPath);

    //Update package.json name property
    const pkgPath = path.join(projectPath, 'package.json');
    const pkgContent = await fs.readFile(pkgPath, 'utf-8');
    const pkg = JSON.parse(pkgContent);
    pkg.name = projectName;
    await fs.writeFile(pkgPath, JSON.stringify(pkg, null, 2));
}

async function copyDir(src, dest) {
    await fs.mkdir(dest, { recursive: true });
    const entries = await fs.readdir(src, { withFileTypes: true });
    
    for (const entry of entries) {
        //Avoid node_modules and dist
        if (entry.name === 'node_modules' || 
            entry.name === 'dist' || 
            entry.name === '.git') {
            continue;
        }
        
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);
        
        if (entry.isDirectory()) {
            await copyDir(srcPath, destPath);
        } else {
            await fs.copyFile(srcPath, destPath);
        }
    }
}