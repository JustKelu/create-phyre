import * as p from "@clack/prompts";
import path from 'path';

export async function chooseProjectName() {
    let projectName;

    if (process.argv[2]) {
        projectName = process.argv[2];
    } else {
        projectName = await p.text({

            message: 'Project name:',
            placeholder: 'my-phyre-app',
            validate: (value) => {
                if (!value) return 'Name is required';
            }
        })
    }
    
    if (!projectName) {
        console.log('\n❌ Operation cancelled');
        process.exit(1);
    }
    
    const projectPath = path.join(process.cwd(), projectName);

    return { projectName, projectPath };
}