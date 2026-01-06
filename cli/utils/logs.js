export function createPhyreLog() {
    console.log(`
╔═══════════════════════════════════╗
║          Create Phyre App         ║
╚═══════════════════════════════════╝
`);
}

export function projectReadyLog(projectName, install) {
    console.log(`
╔═══════════════════════════════════╗
║           Project ready!          ║
╚═══════════════════════════════════╝

Next steps:

    cd ${projectName}
    ${install ? 'npm run dev' : 'npm install\n    npm run dev'}

Your app will be available on:
http://localhost:3000

Good coding!
`);
}