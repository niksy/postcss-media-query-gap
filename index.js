import mediaQueryGap from 'media-query-gap';

const processed = Symbol('processed');

const plugin = () => {
	return {
		postcssPlugin: 'postcss-media-query-gap',
		AtRule: {
			media: (rule) => {
				if (!rule[processed]) {
					rule.params = mediaQueryGap(rule.params);
					rule[processed] = true;
				}
			}
		}
	};
};
plugin.postcss = true;

export default plugin;
