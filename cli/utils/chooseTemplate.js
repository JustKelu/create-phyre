import * as p from "@clack/prompts";
import { join } from 'path';

export async function chooseTemplate() {
    const packageTemplate = await p.confirm({
        message: 'Do you want to use Packages Structure?',
        initialValue: false
    });

    const tsTemplate = await p.confirm({
        message: 'Do you want to use Typescript?',
        initialValue: true
    });

    let template;

    switch(packageTemplate) {
        case true:
            template = join(tsTemplate ? 'ts' : 'js', 'packages-app');
            break;
        case false:
            template = join(tsTemplate ? 'ts' : 'js', 'src-app');
            break;
        default:
            template = 'template';
            break;
    }

    return template;
}