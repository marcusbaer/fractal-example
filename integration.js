'use strict';

const path = require('path');
const fs = require('fs');

const fractal = module.exports = require('@frctl/fractal').create();

/*
 * Fractal export command.
 *
 * Exports all view templates into a directory in the root of the project.
 * Templates are exported in a flat structure with the filenames in the format of {handle}.{ext}
 *
 * Any @handle references in the templates (for partial includes etc) are re-written
 * to reference the appropriate template path.
 *
 * Run by using the command `fractal export` in the root of the project directory.
 */
function exportTemplates(args, done) {

    const app = this.fractal;
    const items = app.components.flattenDeep().toArray();

    const jobs = [];

    for (const item of items) {

        const exportPath = path.join('./', args.options.output || 'exported', `${item.alias || item.handle}${app.get('components.ext')}`);
        const job = item.getContent().then(str => {
            return str.replace(/\@([0-9a-zA-Z\-\_]*)/g, function(match, handle){
                return `${handle}${app.get('components.ext')}`;
            });
        }).then(str => {
            return fs.writeFileSync(exportPath, str);
        });

        jobs.push(job);
    }

    return Promise.all(jobs);
}


fractal.set('project.title', 'Hello World');

fractal.components.set('path', path.join(__dirname, 'components'));
fractal.components.set('default.preview', '@preview');

fractal.docs.set('path', path.join(__dirname, 'docs'));

fractal.web.set('static.path', path.join(__dirname, 'public'));
fractal.web.set('builder.dest', __dirname + '/build');

fractal.cli.command('export', exportTemplates,  {
    description: 'Export all component templates',
    options: [
        ['-o, --output <output-dir>', 'The directory to export components into, relative to the CWD.'],
    ]
});

fractal.cli.exec('export')
