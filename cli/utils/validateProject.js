import fs from 'fs/promises'

export async function validateProject(projectPath, projectName) {
    try {
        await fs.access(projectPath);
        throw new Error(`Folder "${projectName}" already exists!`);
    } catch (err) {
        if (err.code !== 'ENOENT') throw err;
        // Path is available
    }
}