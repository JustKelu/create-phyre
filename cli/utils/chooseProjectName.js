import prompts from "prompts";
import path from 'path';

export async function chooseProjectName() {
    let projectName;

    if (process.argv[2]) {
        projectName = process.argv[2];
    } else {
        projectName = await prompts({
            type: 'text',
            name: 'name',
            message: 'Project name:',
            initial: 'my-phyre-app',
            validate: (value) => {
                if (!value) return 'Name is required';
                if (!/^[a-z0-9-_]+$/.test(value)) {
                    return 'Use only lowercase letters, numbers, - and _';
                }
                return true;
            }
        });
    }
    
    if (!projectName) {
        console.log('\n❌ Operation cancelled');
        process.exit(1);
    }
    
    const projectPath = path.join(process.cwd(), projectName?.name || projectName);

    return { projectName, projectPath };
}