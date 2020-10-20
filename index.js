import mediaQueryGap from 'media-query-gap';

const plugin = () => {
	return {
		postcssPlugin: 'postcss-media-query-gap',
		AtRule: {
			media: (rule) => {
				rule.params = mediaQueryGap(rule.params);
			}
		}
	};
};
plugin.postcss = true;

export default plugin;
