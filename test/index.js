import assert from 'assert';
import { promises as fs } from 'fs';
import postcss from 'postcss';
import fn from '../index';

async function runPostcss(file, options) {
	const css = await fs.readFile(file, 'utf8');
	return postcss([fn(options)]).process(css);
}

async function runTest(testCase, options) {
	const [expected, actual] = await Promise.all([
		fs.readFile(`./test/fixtures/${testCase}.expected.css`, 'utf8'),
		runPostcss(`./test/fixtures/${testCase}.css`, options)
	]);
	assert.equal(expected.trim(), actual.css.trim());
}

it('screen and (max-{width/height}:{value})', function() {
	return runTest('max', {});
});

it('screen and (min-{width/height}:{value}) and (max-{width/height}:{value})', function() {
	return runTest('min-max', {});
});
