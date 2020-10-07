import mediaQueryGap from 'media-query-gap';

export default () => {
	return {
		postcssPlugin: 'postcss-media-query-gap',
		AtRule: {
			media: (rule) => {
				rule.params = mediaQueryGap(rule.params);
			}
		}
	};
};
