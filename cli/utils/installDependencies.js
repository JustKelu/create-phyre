import prompts from "prompts";
import { spawn } from 'node:child_process';

export async function installDependencies(projectPath) {
    const { install } = await prompts({
        type: 'confirm',
        name: 'install',
        message: 'Install dependencies now?',
        initial: true
    });
    
    if (install) {
        console.log('\n📦 Installing dependencies...\n');
        await runCommand('npm', ['install'], projectPath);
        console.log('\n✅ Dependencies installed!');
    }

    return install;
}

// Helper: execute command
function runCommand(command, args, cwd) {
    return new Promise((resolve, reject) => {
        const child = spawn(command, args, {
            cwd,
            shell: true,
            stdio: 'inherit'
        });
        
        child.on('close', (code) => {
            if (code !== 0) {
                reject(new Error(`Command failed with code ${code}`));
            } else {
                resolve();
            }
        });
    });
}