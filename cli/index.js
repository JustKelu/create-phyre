#!/usr/bin/env node

import { chooseProjectName } from './utils/chooseProjectName.js';
import { createPhyreLog, projectReadyLog } from './utils/logs.js';
import { validateProject } from './utils/validateProject.js';
import { installDependencies } from './utils/installDependencies.js';
import { createProject } from './utils/createProject.js';

createPhyreLog();

async function create() {
    // Ask project name
    const { projectName, projectPath } = await chooseProjectName();

    // Check if the project already exists
    await validateProject(projectPath, projectName);

    // Create project
    await createProject(projectPath, projectName);

    // Ask to install dependencies
    const install = await installDependencies(projectPath); 

    projectReadyLog(projectName, install);
}

// exec
create().catch(err => {
    console.error('\n❌ Error:', err.message);
    process.exit(1);
});