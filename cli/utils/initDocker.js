import * as p from "@clack/prompts";
import { fileURLToPath } from 'url';
import { copyFile } from 'fs/promises';
import { join, dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dockerTemplatesPath = join(__dirname, `../templates/docker`);

export async function initDocker(projectPath) {
    const answer = await askForDocker();

    if (answer.useDocker) {
        await cloneFile('Dockerfile');

        switch (answer.dbService) {
            case 'postgres':
                await cloneFile('psql-compose.yml', projectPath, 'psql.env');
                break;
            case 'mongo':
                await cloneFile('mongo-compose.yml', projectPath, 'mongo.env');
                break;
            case 'none':
                await cloneFile('default-compose.yml', projectPath);
                break;
        }
    }
}

async function askForDocker() {
    const answer = await p.select({
        message: 'Do you want to use Docker?',
        options: [
            { value: true, label: 'Yes' },
            { value: false, label: 'No' }
        ],
        initialValue: false
    });

    if (answer) {
        const dbService = await p.select({
            message: "Do you want a Database service?",
            options: [
                { value: 'postgres', label: 'PostgreSQL' },
                { value: 'mongo', label: 'MongoDB' },
                { value: 'none', label: 'No Database' }
            ],
            initialValue: 'none'
        });

        return { useDocker: true, dbService };
    } else {
        return { useDocker: false, dbService: null };
    }
}

async function cloneFile(fileName, projectPath, envName = '') {
    const inFilePath = join(dockerTemplatesPath, fileName);
    let outFilePath;

    if (fileName === 'Dockerfile') {
        outFilePath = join(projectPath, fileName);
    } else {
        outFilePath = join(projectPath, 'docker-compose.yml');
    }

    await copyFile(inFilePath, outFilePath);

    if (envName) {
        const inEnvPath = join(dockerTemplatesPath, envName);
        const outEnvPath = join(projectPath, '.env');
        await copyFile(inEnvPath, outEnvPath);
    }
};