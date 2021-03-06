# [MishaMesh](http://z3bbster.github.io/MishaMesh/) [![Build Status](https://secure.travis-ci.org/z3bbster/MishaMesh.png?branch=master)](https://travis-ci.org/z3bbster/MishaMesh) [![Gittip](http://badgr.co/gittip/z3bbster.png)](https://www.gittip.com/z3bbster/)

A set of web development centric tools in [Less](http://lesscss.org) and Javascript for faster and completer development process. Use it as a boilerplate or companion it with your existing project.

[Quick start](#quick-start) | [Bug tracker](#bug-tracker) | [Authors](#authors) | [Contributing](#contributing) | [License](#copyright-and-license)

## Quick start

All available quick start options: 

+ Clone the repo: `git clone git@github.com:z3bbster/MishaMesh.git`.
+ Download the latest [release](https://github.com/z3bbster/MishaMesh/zipball/master).
+ Clone in [Desktop](github-windows://openRepo/https://github.com/z3bbster/MishaMesh).
+ Install with [Bower](http://bower.io): `bower install MishaMesh`.

## What do i get?

This file/folder structure you will find in this package.
```
MishaMesh/
├── less/
│   ├── comments/
│   │	└── comments.less
│   ├── fonts/
│   │	├── web-fonts.less
│   │	├── font-load.less
│   │	├── font-stacks.less
│   │	└── font-sizes.less
│   ├── resets
│   │	└── resets.less
├── scripts/
│   └── mQuery-mini.js
└── examples/

```

## Less mixins framework

Most mixins in this framework are split in multiple files sorted by there functionality. Just simply use the less directive [@import](http://lesscss.org/features/#import-directives-feature) to get the mixins you will need in your own project by there according folder/file.

**Mixins naming convention** - All mixins provided here have an easy to remember naming convention structure like ```#<functionName>-<propertyname>();``` Note that every mixin start with a ```#``` hash character and names are devided/split by ```-``` slash character.

**All comment mixins** - Add this line ```@import "comments/comments.less";``` on top of your .less file.

	#comment-autogenerated();
	#comment-masterminded();
	#comment-hr-hash();
	#comment-hr-star();
	#comment-hr-equal();
	#comment-hr-single();
	#comment-hr-underscore();
	#comment-hr-dot();
	#comment-hr-dot-line();
	#comment-hr-circle-line();
	#comment-hr-exclamation();
	#comment-hr-ill();
	#comment-hr-dot-line();
	#comment-hr-dot-line-reversed();
	#comment-hr-plus();
	#comment-hr-plus-reverse();
	#comment-bump();
	#comment-bump-reverse();
	#comment-diamond();
	#comment-diamond-reverse();
	#comment-bells();
	#comment-bells-reverse();

	// LETSSSSSSS TEST DRIVE!!!!!!!!!!!
	//#comment-test-all-mixins();

**All web-font mixins** - Add this line ```@import "fonts/webfonts.less";``` on top of your .less file.
	
	.web-font-serif-definition(1);

**All font-load mixins** - Add this line ```@import "fonts/font-load.less";``` on top of your .less file.

	.load-webfont(myFontName);
	.load-font-face();
	.load-font-faces();
	.load-icon-font();

**All font-stacks mixins** - Add this line ```@import "fonts/font-stacks.less";``` on top of your .less file.

	.create-font-families();

**All font-sizes mixins** - Add this line ```@import "fonts/font-sizes.less";``` on top of your .less file.

	.fontsizes();

**All reset mixins** - Add this line ```@import "fonts/resets.less";``` on top of your .less file and use **one** of the reset mixins below.

	#reset-normalize();
	#reset-EricMeyer();
	#reset-HTML5Doctor();
	#reset-Mini();
	#reset-Minimalist1();
	#reset-Minimalist2();
	#reset-Minimalist3();
	#reset-PoorMan();
	#reset-ShaunInman();
	#reset-Simpler();
	#reset-Siolon();
	#reset-TantekCelik();
	#reset-Tripoli();
	#reset-Universal();
	#reset-Vanilla();
	#reset-YUI2();
	#reset-YUI3();
	#reset();

## Bug tracker

Have a bug, enhancement, idea or question? Please create an issue here on GitHub!

https://github.com/z3bbster/MishaMesh/issues

## Authors

**z3bbster**

+ http://github.com/z3bbster

## Contributing

1. Fork it
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Create new Pull Request

## Copyright and license

Code and documentation copyright 2011-2014 z3bbster. Code released under the [MIT license](https://github.com/twbs/bootstrap/blob/master/LICENSE). Docs released under [Creative Commons](https://github.com/twbs/bootstrap/blob/master/docs/LICENSE).

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
