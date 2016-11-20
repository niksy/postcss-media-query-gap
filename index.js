'use strict';

const postcss = require('postcss');
const mediaQueryGap = require('media-query-gap');

module.exports = postcss.plugin('postcss-media-query-gap', () => {
	return ( css ) => {
		css.walkAtRules(( rule ) => {
			if ( rule.name === 'media' ) {
				rule.params = mediaQueryGap(rule.params);
			}
		});
	};
});
