const { lstatSync, readdirSync } = require('fs')
const { resolve, basename } = require('path');

function generateAppsConfig (prependEntry) {
    const appsSrc = 'php/js/src';
    const appsDist = 'php/js/dist/';

    prependEntry = prependEntry || [];


    const isDirectory = source => lstatSync(source).isDirectory();

    // Get all subdirectories in the ./src/apps,
    // so we can just add a new folder there and
    // have automatically the entry points updated

    const getDirectories = source =>
        readdirSync(source)
            .map(name => resolve(source, name))
            .filter(isDirectory);

    const appsDirs = getDirectories(appsSrc);


    const entry = appsDirs.reduce((entry, dir) => {
        entry[appsDist + basename(dir) + '/bundle'] =  prependEntry.concat([`${dir}/index.js`]);
        return entry;
    }, {});


    return {
        entry
    };
};

module.exports = generateAppsConfig;
