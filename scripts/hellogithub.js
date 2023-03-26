import fs from 'fs';
import path from 'path';

const pattern = new RegExp('HelloGitHub\([0-9]+)');

function fsm(content) {
    const lines = content.split('\n');
    const meta = {};
    let yearStatus = null;
    let monthStatus = null;
    let i = 0;
    while (i < lines.length) {
        const line = lines[i];
        if (line.startsWith('| [')) {
            let arr = line.split('|')
            arr.forEach(element => {
                if (element.includes(' [第')) {
                    let number = parseInt(element.slice(3,7).trim())
                    meta[number] = [];
                    const issue = pattern.exec(element)[0];
                    meta[number].push(issue)
                }
            });
        }
        i++;
    }
    return meta;
}

function parseWeeklyReadme(dir) {
    const files = fs.readFileSync(path.join(dir, 'README.md'));
    return fsm(files.toString());
}

let meta = parseWeeklyReadme('./HelloGitHub-master');
console.log(JSON.stringify(meta));