var postcss = require('postcss');
var parse = require('postcss-value-parser');

module.exports = postcss.plugin('postcss-media-query-gap', function ( opts ) {

	opts = opts || {};

	return function ( css, result ) {
		css.walkAtRules(function ( rule ) {

			var ast = parse(rule.params);

			if ( rule.name === 'media' ) {

				ast.walk(function ( node, index, nodes ) {

					if ( node.type === 'function' ) {

						var values = node.nodes;
						var maxQuery = values.some(function ( item ) {
							return /max\-(?:width|height)/.test(item.value);
						});

						// If we are working with max-width/height query
						if ( maxQuery ) {
							values

								// Work only with pixel and em values
								.filter(function ( item ) {
									var value = parse.unit(item.value);
									return item.type === 'word' && (value && /px|em/.test(value.unit));
								})

								// Apply gap
								.map(function ( item ) {
									var value = parse.unit(item.value);
									var step = value.unit === 'px' ? 1 : 0.01;
									item.value = [Number(value.number) - step, value.unit].join('');
									return item;
								});
						}

					}

				});

				rule.params = ast.toString();

			}

		});
	};

});
