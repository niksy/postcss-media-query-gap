# PostCSS media query gap [![Build Status](https://travis-ci.org/niksy/postcss-media-query-gap.svg)](https://travis-ci.org/niksy/postcss-media-query-gap)

[PostCSS](https://github.com/postcss/postcss) plugin for applying gap on max-width/height media queries.

Useful when you want to [prevent double breakpoints](http://tzi.fr/css/prevent-double-breakpoint).

```css
/* Before */

@media screen and (min-width:600px) and (max-width:739px) {
	.foo {
		color:red;
	}
}

/* After */

@media screen and (min-width:600px) and (max-width:738px) {
	.foo {
		color:red;
	}
}
```

## Installation

```sh
npm install postcss-media-query-gap --save-dev
```

## Usage

```js
postcss([ require('postcss-media-query-gap')({ /* options */ }) ])
```

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)
