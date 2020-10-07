# postcss-media-query-gap

[![Build Status][ci-img]][ci]

[PostCSS][postcss] plugin for applying gap on max-width/height media queries.

Useful when you want to
[prevent double breakpoints](http://tzi.fr/css/prevent-double-breakpoint).

## Install

```sh
npm install postcss-media-query-gap --save
```

## Usage

```js
const postcss = require('postcss');
const mediaQueryGap = require('postcss-media-query-gap');

postcss([
	mediaQueryGap({
		/* options */
	})
]);
```

```css
/* Before */

@media screen and (min-width: 600px) and (max-width: 739px) {
	.foo {
		color: red;
	}
}

/* After */

@media screen and (min-width: 600px) and (max-width: 738px) {
	.foo {
		color: red;
	}
}
```

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)

<!-- prettier-ignore-start -->

[ci]: https://travis-ci.com/niksy/postcss-media-query-gap
[ci-img]: https://travis-ci.com/niksy/postcss-media-query-gap.svg?branch=master

<!-- prettier-ignore-end -->
