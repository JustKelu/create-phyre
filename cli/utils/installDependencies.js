import * as p from "@clack/prompts";
import { spawn } from 'node:child_process';

export async function installDependencies(projectPath) {
    const install = await p.confirm({
        message: 'Do you want to install dependencies?',
        initialValue: true
    })
    
    if (install) {
        await runCommand('npm', ['install'], projectPath);
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