import prompts from 'prompts';

export async function chooseTemplate() {
    let { packageTemplate } = await prompts({
        type: 'confirm',
        name: 'packageTemplate',
        message: 'Do you want to use Packages Structure?',
        initial: false
    });

    let { tsTemplate } = await prompts({
        type: 'confirm',
        name: 'tsTemplate',
        message: 'Do you want to use Typescript?',
        initial: true
    });

    let template;

    switch(packageTemplate) {
        case true:
            template = tsTemplate ? 'package-ts-template' : 'package-template';
            break;
        case false:
            template = tsTemplate ? 'ts-template' : 'template';
            break;
        default:
            template = 'template';
            break;
    }

    return template;
}