export function createPhyreLog() {
    console.log(`
╔═══════════════════════════════════╗
║       🚀 Create Phyre App         ║
╚═══════════════════════════════════╝
`);
}

export function projectReadyLog(projectName, install) {
    console.log(`
╔═══════════════════════════════════╗
║         ✅ Project ready!         ║
╚═══════════════════════════════════╝

Next steps:

    cd ${projectName.name ? projectName.name : projectName}
    ${install ? '' : 'npm install\n  '}npm run dev

Your app will be avaible on:
→ http://localhost:3000

Good coding! 🚀
`);
}