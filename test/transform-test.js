'use strict';

const babel = require('babel-core');
const fs = require('fs');
const glob = require('glob');
const path = require('path');
const test = require('tap').test;

const thisPluginPath = require.resolve('..');
const testPaths = glob.sync(path.join(__dirname, 'fixtures/**/actual.js'));

for (const actualPath of testPaths) {
  test(actualPath, t => {
    const optsPath = findOptionsPath(actualPath);
    const expectedPath = path.join(actualPath, '../expected.js');
    const throwsPath = path.join(actualPath, '../throws.txt');

    const actualText = fs.readFileSync(actualPath, 'utf8');
    const optsContents = fs.readFileSync(optsPath, 'utf8')
      .replace('"transform-inline-imports-commonjs"', `"${thisPluginPath}"`);

    const opts = JSON.parse(optsContents);

    if (fs.existsSync(expectedPath)) {
      const expectedText = fs.readFileSync(expectedPath, 'utf8').trim();
      const code = babel.transform(actualText, opts).code;
      t.equal(code, expectedText);
    } else if (fs.existsSync(throwsPath)) {
      const throwsText = fs.readFileSync(throwsPath, 'utf8').trim();
      t.throws(() => {
        babel.transform(actualText, opts);
      }, new RegExp(throwsText));
    } else {
      t.fail('Could not find anything to test against.');
    }

    t.end();
  });
}

function findOptionsPath(current) {
  do {
    const filename = path.join(current, 'options.json');
    if (fs.existsSync(filename)) return filename;
    current = path.join(current, '..');
  } while (current !== __dirname);
}
