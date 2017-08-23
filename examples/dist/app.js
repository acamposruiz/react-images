require=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _componentsGallery = require('./components/Gallery');

var _componentsGallery2 = _interopRequireDefault(_componentsGallery);

function makeUnsplashSrc(id) {
	return 'https://images.unsplash.com/photo-' + id + '?dpr=2&auto=format&w=1024&h=1024';
}
function makeUnsplashSrcSet(id, size) {
	return 'https://images.unsplash.com/photo-' + id + '?dpr=2&auto=format&w=' + size + ' ' + size + 'w';
}
function makeUnsplashThumbnail(id) {
	var orientation = arguments.length <= 1 || arguments[1] === undefined ? 'landscape' : arguments[1];

	var dimensions = orientation === 'square' ? 'w=300&h=300' : 'w=240&h=159';

	return 'https://images.unsplash.com/photo-' + id + '?dpr=2&auto=format&crop=faces&fit=crop&' + dimensions;
}

// Unsplash images from the "Spirit Animals" collection
// https://unsplash.com/collections/158825/spirit-animals

var DEFAULT_IMAGES = [{ id: '1470619549108-b85c56fe5be8', caption: 'Photo by Alan Emery', orientation: 'square', useForDemo: true }, // https://unsplash.com/photos/SYzUF6XcWBY (Flamingo)
{ id: '1471079502516-250c19af6928', caption: 'Photo by Jeremy Bishop', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/GIpGxe2_cT4 (Turtle)
{ id: '1454023492550-5696f8ff10e1', caption: 'Photo by Jessica Weiller', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/LmVSKeDy6EA (Tiger)
{ id: '1470854989922-5be2f7456d78', caption: 'Photo by Piotr Łaskawski', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/GXMr7BadXQo (Hedgehog)
{ id: '1470317596697-cbdeda56f999', caption: 'Photo by Michel Bosma', orientation: 'landscape', useForDemo: true }];
// https://unsplash.com/photos/XgF9e93Tkt0 (Ladybug)
var THEMED_IMAGES = [{ id: '1471101173712-b9884175254e', caption: 'Photo by Pedro Lastra', orientation: 'square', useForDemo: true }, // https://unsplash.com/photos/5oRzZU5uwSM (Dragonfly)
{ id: '1471127432458-65206be149c9', caption: 'Photo by Ernesto Velázquez', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/Kpgt4pl03O0 (Deer)
{ id: '1470777639313-60af88918203', caption: 'Photo by Cris Saur', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/GNUcUx-iObg (Koala)
{ id: '1453550486481-aa4175b013ea', caption: 'Photo by Benjamin Pley', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/WiSeaZ4E6ZI (Elephant)
{ id: '1415904663467-dfdc16cae794', caption: 'Photo by Levi Saunders', orientation: 'landscape', useForDemo: true }];
// https://unsplash.com/photos/NUMlxTPsznM (Coyote)
var THUMBNAIL_IMAGES = [{ id: '1454991727061-be514eae86f7', caption: 'Photo by Thomas Kelley', orientation: 'square', useForDemo: true }, // https://unsplash.com/photos/t20pc32VbrU (Hump Back Whale)
{ id: '1455717974081-0436a066bb96', caption: 'Photo by Teddy Kelley', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/cmKPOUgdmWc (Deer)
{ id: '1460899960812-f6ee1ecaf117', caption: 'Photo by Jay Ruzesky', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/h13Y8vyIXNU (Walrus)
{ id: '1456926631375-92c8ce872def', caption: 'Photo by Gwen Weustink', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/I3C1sSXj1i8 (Leopard)
{ id: '1452274381522-521513015433', caption: 'Photo by Adam Willoughby-Knox', orientation: 'landscape', useForDemo: true }, // https://unsplash.com/photos/_snqARKTgoc (Mother and Cubs)
{ id: '1471145653077-54c6f0aae511', caption: 'Photo by Boris Smokrovic', orientation: 'landscape' }, // https://unsplash.com/photos/n0feC_PWFdk (Dragonfly)
{ id: '1471005197911-88e9d4a7834d', caption: 'Photo by Gaetano Cessati', orientation: 'landscape' }, // https://unsplash.com/photos/YOX8ZMTo7hk (Baby Crocodile)
{ id: '1470583190240-bd6bbde8a569', caption: 'Photo by Alan Emery', orientation: 'landscape' }, // https://unsplash.com/photos/emTCWiq2txk (Beetle)
{ id: '1470688090067-6d429c0b2600', caption: 'Photo by Ján Jakub Naništa', orientation: 'landscape' }, // https://unsplash.com/photos/xqjO-lx39B4 (Scottish Highland Cow)
{ id: '1470742292565-de43c4b02b57', caption: 'Photo by Eric Knoll', orientation: 'landscape' }];

// https://unsplash.com/photos/DmOCkOnx-MQ (Cheetah)
// https://unsplash.com/photos/NUMlxTPsznM coyote?
var theme = {
	// container
	container: {
		background: 'rgba(255, 255, 255, 0.9)'
	},

	// arrows
	arrow: {
		backgroundColor: 'rgba(255, 255, 255, 0.8)',
		fill: '#222',
		opacity: 0.6,
		transition: 'opacity 200ms',

		':hover': {
			opacity: 1
		}
	},
	arrow__size__medium: {
		borderRadius: 40,
		height: 40,
		marginTop: -20,

		'@media (min-width: 768px)': {
			height: 70,
			padding: 15
		}
	},
	arrow__direction__left: { marginLeft: 10 },
	arrow__direction__right: { marginRight: 10 },
	close: {
		fill: '#D40000',
		opacity: 0.6,
		transition: 'all 200ms',
		':hover': {
			opacity: 1
		}
	},

	// footer
	footer: {
		color: 'black'
	},
	footerCount: {
		color: 'rgba(0, 0, 0, 0.6)'
	},

	// thumbnails
	thumbnail: {},
	thumbnail__active: {
		boxShadow: '0 0 0 2px #00D8FF'
	}
};

(0, _reactDom.render)(_react2['default'].createElement(
	'div',
	null,
	_react2['default'].createElement(
		'div',
		{ style: { marginBottom: 40 } },
		_react2['default'].createElement(
			'p',
			null,
			'Photos courtesy of ',
			_react2['default'].createElement(
				'a',
				{ href: 'https://unsplash.com/', target: '_blank' },
				'Unsplash'
			),
			'. Use your keyboard to navigate ',
			_react2['default'].createElement(
				'kbd',
				null,
				'left'
			),
			' ',
			_react2['default'].createElement(
				'kbd',
				null,
				'right'
			),
			' ',
			_react2['default'].createElement(
				'kbd',
				null,
				'esc'
			),
			' — Also, try resizing your browser window.'
		)
	),
	_react2['default'].createElement(
		'h3',
		null,
		'Default Options'
	),
	_react2['default'].createElement(_componentsGallery2['default'], { images: DEFAULT_IMAGES.map(function (_ref) {
			var caption = _ref.caption;
			var id = _ref.id;
			var orientation = _ref.orientation;
			var useForDemo = _ref.useForDemo;
			return {
				src: makeUnsplashSrc(id),
				thumbnail: makeUnsplashThumbnail(id, orientation),
				srcset: [makeUnsplashSrcSet(id, 1024), makeUnsplashSrcSet(id, 800), makeUnsplashSrcSet(id, 500), makeUnsplashSrcSet(id, 320)],
				caption: caption,
				orientation: orientation,
				useForDemo: useForDemo
			};
		}) }),
	_react2['default'].createElement(
		'h3',
		null,
		'With Thumbnails'
	),
	_react2['default'].createElement(_componentsGallery2['default'], { images: THUMBNAIL_IMAGES.map(function (_ref2) {
			var caption = _ref2.caption;
			var id = _ref2.id;
			var orientation = _ref2.orientation;
			var useForDemo = _ref2.useForDemo;
			return {
				src: makeUnsplashSrc(id),
				thumbnail: makeUnsplashThumbnail(id, orientation),
				srcset: [makeUnsplashSrcSet(id, 1024), makeUnsplashSrcSet(id, 800), makeUnsplashSrcSet(id, 500), makeUnsplashSrcSet(id, 320)],
				caption: caption,
				orientation: orientation,
				useForDemo: useForDemo
			};
		}), showThumbnails: true }),
	_react2['default'].createElement(
		'h3',
		null,
		'Themed Lightbox'
	),
	_react2['default'].createElement(_componentsGallery2['default'], { images: THEMED_IMAGES.map(function (_ref3) {
			var caption = _ref3.caption;
			var id = _ref3.id;
			var orientation = _ref3.orientation;
			var useForDemo = _ref3.useForDemo;
			return {
				src: makeUnsplashSrc(id),
				thumbnail: makeUnsplashThumbnail(id, orientation),
				srcset: [makeUnsplashSrcSet(id, 1024), makeUnsplashSrcSet(id, 800), makeUnsplashSrcSet(id, 500), makeUnsplashSrcSet(id, 320)],
				caption: caption,
				orientation: orientation,
				useForDemo: useForDemo
			};
		}), theme: theme, showThumbnails: true }),
	_react2['default'].createElement(
		'h3',
		null,
		'Themed Texts'
	),
	_react2['default'].createElement(_componentsGallery2['default'], { images: THEMED_IMAGES.map(function (_ref4) {
			var caption = _ref4.caption;
			var id = _ref4.id;
			var orientation = _ref4.orientation;
			var useForDemo = _ref4.useForDemo;
			return {
				src: makeUnsplashSrc(id),
				thumbnail: makeUnsplashThumbnail(id, orientation),
				srcset: [makeUnsplashSrcSet(id, 1024), makeUnsplashSrcSet(id, 800), makeUnsplashSrcSet(id, 500), makeUnsplashSrcSet(id, 320)],
				caption: caption,
				orientation: orientation,
				useForDemo: useForDemo
			};
		}), theme: theme, showThumbnails: true })
), document.getElementById('example'));

},{"./components/Gallery":2,"react":undefined,"react-dom":undefined}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _aphroditeNoImportant = require('aphrodite/no-important');

var _reactImages = require('react-images');

var _reactImages2 = _interopRequireDefault(_reactImages);

var Gallery = (function (_Component) {
	_inherits(Gallery, _Component);

	function Gallery(props) {
		_classCallCheck(this, Gallery);

		_get(Object.getPrototypeOf(Gallery.prototype), 'constructor', this).call(this, props);

		var itemType = undefined;

		if (this.props.images) {
			itemType = 'images';
		} else if (this.props.texts) {
			itemType = 'texts';
		} else {
			itemType = 'videos';
		}

		this.state = {
			lightboxIsOpen: false,
			currentItem: 0,
			itemType: itemType
		};

		this.closeLightbox = this.closeLightbox.bind(this);
		this.gotoNext = this.gotoNext.bind(this);
		this.gotoPrevious = this.gotoPrevious.bind(this);
		this.gotoItem = this.gotoItem.bind(this);
		this.handleClickItem = this.handleClickItem.bind(this);
		this.openLightbox = this.openLightbox.bind(this);
	}

	_createClass(Gallery, [{
		key: 'openLightbox',
		value: function openLightbox(index, event) {
			event.preventDefault();
			this.setState({
				currentItem: index,
				lightboxIsOpen: true
			});
		}
	}, {
		key: 'closeLightbox',
		value: function closeLightbox() {
			this.setState({
				currentItem: 0,
				lightboxIsOpen: false
			});
		}
	}, {
		key: 'gotoPrevious',
		value: function gotoPrevious() {
			this.setState({
				currentItem: this.state.currentItem - 1
			});
		}
	}, {
		key: 'gotoNext',
		value: function gotoNext() {
			this.setState({
				currentItem: this.state.currentItem + 1
			});
		}
	}, {
		key: 'gotoItem',
		value: function gotoItem(index) {
			this.setState({
				currentItem: index
			});
		}
	}, {
		key: 'handleClickItem',
		value: function handleClickItem() {
			if (this.state.currentItem === this.props[this.state.itemType].length - 1) return;

			this.gotoNext();
		}
	}, {
		key: 'renderGallery',
		value: function renderGallery() {
			var _this = this;

			if (this.state.itemType == 'images') {
				var images = this.props.images;

				if (!images) return;

				var gallery = images.filter(function (i) {
					return i.useForDemo;
				}).map(function (obj, i) {
					return _react2['default'].createElement(
						'a',
						{
							href: obj.src,
							className: (0, _aphroditeNoImportant.css)(classes.thumbnail, classes[obj.orientation]),
							key: i,
							onClick: function (e) {
								return _this.openLightbox(i, e);
							}
						},
						_react2['default'].createElement('img', { src: obj.thumbnail, className: (0, _aphroditeNoImportant.css)(classes.source) })
					);
				});

				return _react2['default'].createElement(
					'div',
					{ className: (0, _aphroditeNoImportant.css)(classes.gallery) },
					gallery
				);
			} else if (this.state.itemType == 'texts') {
				var texts = this.props.texts;

				if (!texts) return;

				var gallery = texts.map(function (text, i) {
					return _react2['default'].createElement(
						'a',
						{
							className: 'text-thumbail',
							key: i,
							onClick: function (e) {
								return _this.openLightbox(i, e);
							}
						},
						text
					);
				});

				return _react2['default'].createElement(
					'div',
					{ className: (0, _aphroditeNoImportant.css)(classes.gallery) },
					gallery
				);
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2['default'].createElement(
				'div',
				{ className: 'section' },
				this.props.heading && _react2['default'].createElement(
					'h2',
					null,
					this.props.heading
				),
				this.props.subheading && _react2['default'].createElement(
					'p',
					null,
					this.props.subheading
				),
				this.renderGallery(),
				_react2['default'].createElement(_reactImages2['default'], {
					currentItem: this.state.currentItem,
					items: { type: this.state.itemType, items: this.props[this.state.itemType] },
					isOpen: this.state.lightboxIsOpen,
					onClickImage: this.handleClickItem,
					onClickNext: this.gotoNext,
					onClickPrev: this.gotoPrevious,
					onClickThumbnail: this.gotoItem,
					onClose: this.closeLightbox,
					showThumbnails: this.props.showThumbnails,
					theme: this.props.theme
				})
			);
		}
	}]);

	return Gallery;
})(_react.Component);

Gallery.displayName = 'Gallery';
Gallery.propTypes = {
	heading: _propTypes2['default'].string,
	images: _propTypes2['default'].array,
	texts: _propTypes2['default'].array,
	showThumbnails: _propTypes2['default'].bool,
	subheading: _propTypes2['default'].string
};

var gutter = {
	small: 2,
	large: 4
};
var classes = _aphroditeNoImportant.StyleSheet.create({
	gallery: {
		marginRight: -gutter.small,
		overflow: 'hidden',

		'@media (min-width: 500px)': {
			marginRight: -gutter.large
		}
	},

	// anchor
	thumbnail: {
		boxSizing: 'border-box',
		display: 'block',
		float: 'left',
		lineHeight: 0,
		paddingRight: gutter.small,
		paddingBottom: gutter.small,
		overflow: 'hidden',

		'@media (min-width: 500px)': {
			paddingRight: gutter.large,
			paddingBottom: gutter.large
		}
	},

	// orientation
	landscape: {
		width: '30%'
	},
	square: {
		paddingBottom: 0,
		width: '40%',

		'@media (min-width: 500px)': {
			paddingBottom: 0
		}
	},

	// actual <img />
	source: {
		border: 0,
		display: 'block',
		height: 'auto',
		maxWidth: '100%',
		width: 'auto'
	}
});

exports['default'] = Gallery;
module.exports = exports['default'];

},{"aphrodite/no-important":8,"prop-types":undefined,"react":undefined,"react-images":undefined}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _inlineStylePrefixerStatic = require('inline-style-prefixer/static');

var _inlineStylePrefixerStatic2 = _interopRequireDefault(_inlineStylePrefixerStatic);

var _util = require('./util');

/**
 * Generate CSS for a selector and some styles.
 *
 * This function handles the media queries, pseudo selectors, and descendant
 * styles that can be used in aphrodite styles.
 *
 * @param {string} selector: A base CSS selector for the styles to be generated
 *     with.
 * @param {Object} styleTypes: A list of properties of the return type of
 *     StyleSheet.create, e.g. [styles.red, styles.blue].
 * @param stringHandlers: See `generateCSSRuleset`
 * @param useImportant: See `generateCSSRuleset`
 *
 * To actually generate the CSS special-construct-less styles are passed to
 * `generateCSSRuleset`.
 *
 * For instance, a call to
 *
 *     generateCSSInner(".foo", {
 *       color: "red",
 *       "@media screen": {
 *         height: 20,
 *         ":hover": {
 *           backgroundColor: "black"
 *         }
 *       },
 *       ":active": {
 *         fontWeight: "bold",
 *         ">>bar": {
 *           _names: { "foo_bar": true },
 *           height: 10,
 *         }
 *       }
 *     });
 *
 * will make 5 calls to `generateCSSRuleset`:
 *
 *     generateCSSRuleset(".foo", { color: "red" }, ...)
 *     generateCSSRuleset(".foo:active", { fontWeight: "bold" }, ...)
 *     generateCSSRuleset(".foo:active .foo_bar", { height: 10 }, ...)
 *     // These 2 will be wrapped in @media screen {}
 *     generateCSSRuleset(".foo", { height: 20 }, ...)
 *     generateCSSRuleset(".foo:hover", { backgroundColor: "black" }, ...)
 */
var generateCSS = function generateCSS(selector, styleTypes, stringHandlers, useImportant) {
    var merged = styleTypes.reduce(_util.recursiveMerge);

    var declarations = {};
    var mediaQueries = {};
    var pseudoStyles = {};

    Object.keys(merged).forEach(function (key) {
        if (key[0] === ':') {
            pseudoStyles[key] = merged[key];
        } else if (key[0] === '@') {
            mediaQueries[key] = merged[key];
        } else {
            declarations[key] = merged[key];
        }
    });

    return generateCSSRuleset(selector, declarations, stringHandlers, useImportant) + Object.keys(pseudoStyles).map(function (pseudoSelector) {
        return generateCSSRuleset(selector + pseudoSelector, pseudoStyles[pseudoSelector], stringHandlers, useImportant);
    }).join("") + Object.keys(mediaQueries).map(function (mediaQuery) {
        var ruleset = generateCSS(selector, [mediaQueries[mediaQuery]], stringHandlers, useImportant);
        return mediaQuery + '{' + ruleset + '}';
    }).join("");
};

exports.generateCSS = generateCSS;
/**
 * Helper method of generateCSSRuleset to facilitate custom handling of certain
 * CSS properties. Used for e.g. font families.
 *
 * See generateCSSRuleset for usage and documentation of paramater types.
 */
var runStringHandlers = function runStringHandlers(declarations, stringHandlers) {
    var result = {};

    Object.keys(declarations).forEach(function (key) {
        // If a handler exists for this particular key, let it interpret
        // that value first before continuing
        if (stringHandlers && stringHandlers.hasOwnProperty(key)) {
            result[key] = stringHandlers[key](declarations[key]);
        } else {
            result[key] = declarations[key];
        }
    });

    return result;
};

/**
 * Generate a CSS ruleset with the selector and containing the declarations.
 *
 * This function assumes that the given declarations don't contain any special
 * children (such as media queries, pseudo-selectors, or descendant styles).
 *
 * Note that this method does not deal with nesting used for e.g.
 * psuedo-selectors or media queries. That responsibility is left to  the
 * `generateCSS` function.
 *
 * @param {string} selector: the selector associated with the ruleset
 * @param {Object} declarations: a map from camelCased CSS property name to CSS
 *     property value.
 * @param {Object.<string, function>} stringHandlers: a map from camelCased CSS
 *     property name to a function which will map the given value to the value
 *     that is output.
 * @param {bool} useImportant: A boolean saying whether to append "!important"
 *     to each of the CSS declarations.
 * @returns {string} A string of raw CSS.
 *
 * Examples:
 *
 *    generateCSSRuleset(".blah", { color: "red" })
 *    -> ".blah{color: red !important;}"
 *    generateCSSRuleset(".blah", { color: "red" }, {}, false)
 *    -> ".blah{color: red}"
 *    generateCSSRuleset(".blah", { color: "red" }, {color: c => c.toUpperCase})
 *    -> ".blah{color: RED}"
 *    generateCSSRuleset(".blah:hover", { color: "red" })
 *    -> ".blah:hover{color: red}"
 */
var generateCSSRuleset = function generateCSSRuleset(selector, declarations, stringHandlers, useImportant) {
    var handledDeclarations = runStringHandlers(declarations, stringHandlers);

    var prefixedDeclarations = (0, _inlineStylePrefixerStatic2['default'])(handledDeclarations);

    var prefixedRules = (0, _util.flatten)((0, _util.objectToPairs)(prefixedDeclarations).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2);

        var key = _ref2[0];
        var value = _ref2[1];

        if (Array.isArray(value)) {
            var _ret = (function () {
                // inline-style-prefix-all returns an array when there should be
                // multiple rules, we will flatten to single rules

                var prefixedValues = [];
                var unprefixedValues = [];

                value.forEach(function (v) {
                    if (v.indexOf('-') === 0) {
                        prefixedValues.push(v);
                    } else {
                        unprefixedValues.push(v);
                    }
                });

                prefixedValues.sort();
                unprefixedValues.sort();

                return {
                    v: prefixedValues.concat(unprefixedValues).map(function (v) {
                        return [key, v];
                    })
                };
            })();

            if (typeof _ret === 'object') return _ret.v;
        }
        return [[key, value]];
    }));

    var rules = prefixedRules.map(function (_ref3) {
        var _ref32 = _slicedToArray(_ref3, 2);

        var key = _ref32[0];
        var value = _ref32[1];

        var stringValue = (0, _util.stringifyValue)(key, value);
        var ret = (0, _util.kebabifyStyleName)(key) + ':' + stringValue + ';';
        return useImportant === false ? ret : (0, _util.importantify)(ret);
    }).join("");

    if (rules) {
        return selector + '{' + rules + '}';
    } else {
        return "";
    }
};
exports.generateCSSRuleset = generateCSSRuleset;
},{"./util":7,"inline-style-prefixer/static":28}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _util = require('./util');

var _inject = require('./inject');

var StyleSheet = {
    create: function create(sheetDefinition) {
        return (0, _util.mapObj)(sheetDefinition, function (_ref) {
            var _ref2 = _slicedToArray(_ref, 2);

            var key = _ref2[0];
            var val = _ref2[1];

            return [key, {
                // TODO(emily): Make a 'production' mode which doesn't prepend
                // the class name here, to make the generated CSS smaller.
                _name: key + '_' + (0, _util.hashObject)(val),
                _definition: val
            }];
        });
    },

    rehydrate: function rehydrate() {
        var renderedClassNames = arguments.length <= 0 || arguments[0] === undefined ? [] : arguments[0];

        (0, _inject.addRenderedClassNames)(renderedClassNames);
    }
};

/**
 * Utilities for using Aphrodite server-side.
 */
var StyleSheetServer = {
    renderStatic: function renderStatic(renderFunc) {
        (0, _inject.reset)();
        (0, _inject.startBuffering)();
        var html = renderFunc();
        var cssContent = (0, _inject.flushToString)();

        return {
            html: html,
            css: {
                content: cssContent,
                renderedClassNames: (0, _inject.getRenderedClassNames)()
            }
        };
    }
};

/**
 * Utilities for using Aphrodite in tests.
 *
 * Not meant to be used in production.
 */
var StyleSheetTestUtils = {
    /**
     * Prevent styles from being injected into the DOM.
     *
     * This is useful in situations where you'd like to test rendering UI
     * components which use Aphrodite without any of the side-effects of
     * Aphrodite happening. Particularly useful for testing the output of
     * components when you have no DOM, e.g. testing in Node without a fake DOM.
     *
     * Should be paired with a subsequent call to
     * clearBufferAndResumeStyleInjection.
     */
    suppressStyleInjection: function suppressStyleInjection() {
        (0, _inject.reset)();
        (0, _inject.startBuffering)();
    },

    /**
     * Opposite method of preventStyleInject.
     */
    clearBufferAndResumeStyleInjection: function clearBufferAndResumeStyleInjection() {
        (0, _inject.reset)();
    }
};

var css = function css() {
    for (var _len = arguments.length, styleDefinitions = Array(_len), _key = 0; _key < _len; _key++) {
        styleDefinitions[_key] = arguments[_key];
    }

    var useImportant = true; // Append !important to all style definitions
    return (0, _inject.injectAndGetClassName)(useImportant, styleDefinitions);
};

exports['default'] = {
    StyleSheet: StyleSheet,
    StyleSheetServer: StyleSheetServer,
    StyleSheetTestUtils: StyleSheetTestUtils,
    css: css
};
module.exports = exports['default'];
},{"./inject":5,"./util":7}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _asap = require('asap');

var _asap2 = _interopRequireDefault(_asap);

var _generate = require('./generate');

var _util = require('./util');

// The current <style> tag we are inserting into, or null if we haven't
// inserted anything yet. We could find this each time using
// `document.querySelector("style[data-aphrodite"])`, but holding onto it is
// faster.
var styleTag = null;

// Inject a string of styles into a <style> tag in the head of the document. This
// will automatically create a style tag and then continue to use it for
// multiple injections. It will also use a style tag with the `data-aphrodite`
// tag on it if that exists in the DOM. This could be used for e.g. reusing the
// same style tag that server-side rendering inserts.
var injectStyleTag = function injectStyleTag(cssContents) {
    if (styleTag == null) {
        // Try to find a style tag with the `data-aphrodite` attribute first.
        styleTag = document.querySelector("style[data-aphrodite]");

        // If that doesn't work, generate a new style tag.
        if (styleTag == null) {
            // Taken from
            // http://stackoverflow.com/questions/524696/how-to-create-a-style-tag-with-javascript
            var head = document.head || document.getElementsByTagName('head')[0];
            styleTag = document.createElement('style');

            styleTag.type = 'text/css';
            styleTag.setAttribute("data-aphrodite", "");
            head.appendChild(styleTag);
        }
    }

    if (styleTag.styleSheet) {
        styleTag.styleSheet.cssText += cssContents;
    } else {
        styleTag.appendChild(document.createTextNode(cssContents));
    }
};

// Custom handlers for stringifying CSS values that have side effects
// (such as fontFamily, which can cause @font-face rules to be injected)
var stringHandlers = {
    // With fontFamily we look for objects that are passed in and interpret
    // them as @font-face rules that we need to inject. The value of fontFamily
    // can either be a string (as normal), an object (a single font face), or
    // an array of objects and strings.
    fontFamily: function fontFamily(val) {
        if (Array.isArray(val)) {
            return val.map(fontFamily).join(",");
        } else if (typeof val === "object") {
            injectStyleOnce(val.fontFamily, "@font-face", [val], false);
            return '"' + val.fontFamily + '"';
        } else {
            return val;
        }
    },

    // With animationName we look for an object that contains keyframes and
    // inject them as an `@keyframes` block, returning a uniquely generated
    // name. The keyframes object should look like
    //  animationName: {
    //    from: {
    //      left: 0,
    //      top: 0,
    //    },
    //    '50%': {
    //      left: 15,
    //      top: 5,
    //    },
    //    to: {
    //      left: 20,
    //      top: 20,
    //    }
    //  }
    // TODO(emily): `stringHandlers` doesn't let us rename the key, so I have
    // to use `animationName` here. Improve that so we can call this
    // `animation` instead of `animationName`.
    animationName: function animationName(val) {
        if (typeof val !== "object") {
            return val;
        }

        // Generate a unique name based on the hash of the object. We can't
        // just use the hash because the name can't start with a number.
        // TODO(emily): this probably makes debugging hard, allow a custom
        // name?
        var name = 'keyframe_' + (0, _util.hashObject)(val);

        // Since keyframes need 3 layers of nesting, we use `generateCSS` to
        // build the inner layers and wrap it in `@keyframes` ourselves.
        var finalVal = '@keyframes ' + name + '{';
        Object.keys(val).forEach(function (key) {
            finalVal += (0, _generate.generateCSS)(key, [val[key]], stringHandlers, false);
        });
        finalVal += '}';

        injectGeneratedCSSOnce(name, finalVal);

        return name;
    }
};

// This is a map from Aphrodite's generated class names to `true` (acting as a
// set of class names)
var alreadyInjected = {};

// This is the buffer of styles which have not yet been flushed.
var injectionBuffer = "";

// A flag to tell if we are already buffering styles. This could happen either
// because we scheduled a flush call already, so newly added styles will
// already be flushed, or because we are statically buffering on the server.
var isBuffering = false;

var injectGeneratedCSSOnce = function injectGeneratedCSSOnce(key, generatedCSS) {
    if (!alreadyInjected[key]) {
        if (!isBuffering) {
            // We should never be automatically buffering on the server (or any
            // place without a document), so guard against that.
            if (typeof document === "undefined") {
                throw new Error("Cannot automatically buffer without a document");
            }

            // If we're not already buffering, schedule a call to flush the
            // current styles.
            isBuffering = true;
            (0, _asap2['default'])(flushToStyleTag);
        }

        injectionBuffer += generatedCSS;
        alreadyInjected[key] = true;
    }
};

var injectStyleOnce = function injectStyleOnce(key, selector, definitions, useImportant) {
    if (!alreadyInjected[key]) {
        var generated = (0, _generate.generateCSS)(selector, definitions, stringHandlers, useImportant);

        injectGeneratedCSSOnce(key, generated);
    }
};

exports.injectStyleOnce = injectStyleOnce;
var reset = function reset() {
    injectionBuffer = "";
    alreadyInjected = {};
    isBuffering = false;
    styleTag = null;
};

exports.reset = reset;
var startBuffering = function startBuffering() {
    if (isBuffering) {
        throw new Error("Cannot buffer while already buffering");
    }
    isBuffering = true;
};

exports.startBuffering = startBuffering;
var flushToString = function flushToString() {
    isBuffering = false;
    var ret = injectionBuffer;
    injectionBuffer = "";
    return ret;
};

exports.flushToString = flushToString;
var flushToStyleTag = function flushToStyleTag() {
    var cssContent = flushToString();
    if (cssContent.length > 0) {
        injectStyleTag(cssContent);
    }
};

exports.flushToStyleTag = flushToStyleTag;
var getRenderedClassNames = function getRenderedClassNames() {
    return Object.keys(alreadyInjected);
};

exports.getRenderedClassNames = getRenderedClassNames;
var addRenderedClassNames = function addRenderedClassNames(classNames) {
    classNames.forEach(function (className) {
        alreadyInjected[className] = true;
    });
};

exports.addRenderedClassNames = addRenderedClassNames;
/**
 * Inject styles associated with the passed style definition objects, and return
 * an associated CSS class name.
 *
 * @param {boolean} useImportant If true, will append !important to generated
 *     CSS output. e.g. {color: red} -> "color: red !important".
 * @param {Object[]} styleDefinitions style definition objects as returned as
 *     properties of the return value of StyleSheet.create().
 */
var injectAndGetClassName = function injectAndGetClassName(useImportant, styleDefinitions) {
    // Filter out falsy values from the input, to allow for
    // `css(a, test && c)`
    var validDefinitions = styleDefinitions.filter(function (def) {
        return def;
    });

    // Break if there aren't any valid styles.
    if (validDefinitions.length === 0) {
        return "";
    }

    var className = validDefinitions.map(function (s) {
        return s._name;
    }).join("-o_O-");
    injectStyleOnce(className, '.' + className, validDefinitions.map(function (d) {
        return d._definition;
    }), useImportant);

    return className;
};
exports.injectAndGetClassName = injectAndGetClassName;
},{"./generate":3,"./util":7,"asap":9}],6:[function(require,module,exports){
// Module with the same interface as the core aphrodite module,
// except that styles injected do not automatically have !important
// appended to them.
//
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _inject = require('./inject');

var _indexJs = require('./index.js');

var css = function css() {
    for (var _len = arguments.length, styleDefinitions = Array(_len), _key = 0; _key < _len; _key++) {
        styleDefinitions[_key] = arguments[_key];
    }

    var useImportant = false; // Don't append !important to style definitions
    return (0, _inject.injectAndGetClassName)(useImportant, styleDefinitions);
};

exports.StyleSheet = _indexJs.StyleSheet;
exports.StyleSheetServer = _indexJs.StyleSheetServer;
exports.StyleSheetTestUtils = _indexJs.StyleSheetTestUtils;
exports.css = css;
},{"./index.js":4,"./inject":5}],7:[function(require,module,exports){
// {K1: V1, K2: V2, ...} -> [[K1, V1], [K2, V2]]
'use strict';

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var objectToPairs = function objectToPairs(obj) {
    return Object.keys(obj).map(function (key) {
        return [key, obj[key]];
    });
};

exports.objectToPairs = objectToPairs;
// [[K1, V1], [K2, V2]] -> {K1: V1, K2: V2, ...}
var pairsToObject = function pairsToObject(pairs) {
    var result = {};
    pairs.forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2);

        var key = _ref2[0];
        var val = _ref2[1];

        result[key] = val;
    });
    return result;
};

var mapObj = function mapObj(obj, fn) {
    return pairsToObject(objectToPairs(obj).map(fn));
};

exports.mapObj = mapObj;
// Flattens an array one level
// [[A], [B, C, [D]]] -> [A, B, C, [D]]
var flatten = function flatten(list) {
    return list.reduce(function (memo, x) {
        return memo.concat(x);
    }, []);
};

exports.flatten = flatten;
var UPPERCASE_RE = /([A-Z])/g;
var MS_RE = /^ms-/;

var kebabify = function kebabify(string) {
    return string.replace(UPPERCASE_RE, '-$1').toLowerCase();
};
var kebabifyStyleName = function kebabifyStyleName(string) {
    return kebabify(string).replace(MS_RE, '-ms-');
};

exports.kebabifyStyleName = kebabifyStyleName;
var recursiveMerge = function recursiveMerge(a, b) {
    // TODO(jlfwong): Handle malformed input where a and b are not the same
    // type.

    if (typeof a !== 'object') {
        return b;
    }

    var ret = _extends({}, a);

    Object.keys(b).forEach(function (key) {
        if (ret.hasOwnProperty(key)) {
            ret[key] = recursiveMerge(a[key], b[key]);
        } else {
            ret[key] = b[key];
        }
    });

    return ret;
};

exports.recursiveMerge = recursiveMerge;
/**
 * CSS properties which accept numbers but are not in units of "px".
 * Taken from React's CSSProperty.js
 */
var isUnitlessNumber = {
    animationIterationCount: true,
    borderImageOutset: true,
    borderImageSlice: true,
    borderImageWidth: true,
    boxFlex: true,
    boxFlexGroup: true,
    boxOrdinalGroup: true,
    columnCount: true,
    flex: true,
    flexGrow: true,
    flexPositive: true,
    flexShrink: true,
    flexNegative: true,
    flexOrder: true,
    gridRow: true,
    gridColumn: true,
    fontWeight: true,
    lineClamp: true,
    lineHeight: true,
    opacity: true,
    order: true,
    orphans: true,
    tabSize: true,
    widows: true,
    zIndex: true,
    zoom: true,

    // SVG-related properties
    fillOpacity: true,
    floodOpacity: true,
    stopOpacity: true,
    strokeDasharray: true,
    strokeDashoffset: true,
    strokeMiterlimit: true,
    strokeOpacity: true,
    strokeWidth: true
};

/**
 * Taken from React's CSSProperty.js
 *
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */
function prefixKey(prefix, key) {
    return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}

/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 * Taken from React's CSSProperty.js
 */
var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
// Taken from React's CSSProperty.js
Object.keys(isUnitlessNumber).forEach(function (prop) {
    prefixes.forEach(function (prefix) {
        isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
    });
});

var stringifyValue = function stringifyValue(key, prop) {
    if (typeof prop === "number") {
        if (isUnitlessNumber[key]) {
            return "" + prop;
        } else {
            return prop + "px";
        }
    } else {
        return prop;
    }
};

exports.stringifyValue = stringifyValue;
/**
 * JS Implementation of MurmurHash2
 *
 * @author <a href="mailto:gary.court@gmail.com">Gary Court</a>
 * @see http://github.com/garycourt/murmurhash-js
 * @author <a href="mailto:aappleby@gmail.com">Austin Appleby</a>
 * @see http://sites.google.com/site/murmurhash/
 *
 * @param {string} str ASCII only
 * @return {string} Base 36 encoded hash result
 */
function murmurhash2_32_gc(str) {
    var l = str.length;
    var h = l;
    var i = 0;
    var k = undefined;

    while (l >= 4) {
        k = str.charCodeAt(i) & 0xff | (str.charCodeAt(++i) & 0xff) << 8 | (str.charCodeAt(++i) & 0xff) << 16 | (str.charCodeAt(++i) & 0xff) << 24;

        k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);
        k ^= k >>> 24;
        k = (k & 0xffff) * 0x5bd1e995 + (((k >>> 16) * 0x5bd1e995 & 0xffff) << 16);

        h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16) ^ k;

        l -= 4;
        ++i;
    }

    switch (l) {
        case 3:
            h ^= (str.charCodeAt(i + 2) & 0xff) << 16;
        case 2:
            h ^= (str.charCodeAt(i + 1) & 0xff) << 8;
        case 1:
            h ^= str.charCodeAt(i) & 0xff;
            h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    }

    h ^= h >>> 13;
    h = (h & 0xffff) * 0x5bd1e995 + (((h >>> 16) * 0x5bd1e995 & 0xffff) << 16);
    h ^= h >>> 15;

    return (h >>> 0).toString(36);
}

// Hash a javascript object using JSON.stringify. This is very fast, about 3
// microseconds on my computer for a sample object:
// http://jsperf.com/test-hashfnv32a-hash/5
//
// Note that this uses JSON.stringify to stringify the objects so in order for
// this to produce consistent hashes browsers need to have a consistent
// ordering of objects. Ben Alpert says that Facebook depends on this, so we
// can probably depend on this too.
var hashObject = function hashObject(object) {
    return murmurhash2_32_gc(JSON.stringify(object));
};

exports.hashObject = hashObject;
var IMPORTANT_RE = /^([^:]+:.*?)( !important)?;$/;

// Given a single style rule string like "a: b;", adds !important to generate
// "a: b !important;".
var importantify = function importantify(string) {
    return string.replace(IMPORTANT_RE, function (_, base, important) {
        return base + " !important;";
    });
};
exports.importantify = importantify;
},{}],8:[function(require,module,exports){
module.exports = require('./lib/no-important.js');

},{"./lib/no-important.js":6}],9:[function(require,module,exports){
"use strict";

// rawAsap provides everything we need except exception management.
var rawAsap = require("./raw");
// RawTasks are recycled to reduce GC churn.
var freeTasks = [];
// We queue errors to ensure they are thrown in right order (FIFO).
// Array-as-queue is good enough here, since we are just dealing with exceptions.
var pendingErrors = [];
var requestErrorThrow = rawAsap.makeRequestCallFromTimer(throwFirstError);

function throwFirstError() {
    if (pendingErrors.length) {
        throw pendingErrors.shift();
    }
}

/**
 * Calls a task as soon as possible after returning, in its own event, with priority
 * over other events like animation, reflow, and repaint. An error thrown from an
 * event will not interrupt, nor even substantially slow down the processing of
 * other events, but will be rather postponed to a lower priority event.
 * @param {{call}} task A callable object, typically a function that takes no
 * arguments.
 */
module.exports = asap;
function asap(task) {
    var rawTask;
    if (freeTasks.length) {
        rawTask = freeTasks.pop();
    } else {
        rawTask = new RawTask();
    }
    rawTask.task = task;
    rawAsap(rawTask);
}

// We wrap tasks with recyclable task objects.  A task object implements
// `call`, just like a function.
function RawTask() {
    this.task = null;
}

// The sole purpose of wrapping the task is to catch the exception and recycle
// the task object after its single use.
RawTask.prototype.call = function () {
    try {
        this.task.call();
    } catch (error) {
        if (asap.onerror) {
            // This hook exists purely for testing purposes.
            // Its name will be periodically randomized to break any code that
            // depends on its existence.
            asap.onerror(error);
        } else {
            // In a web browser, exceptions are not fatal. However, to avoid
            // slowing down the queue of pending tasks, we rethrow the error in a
            // lower priority turn.
            pendingErrors.push(error);
            requestErrorThrow();
        }
    } finally {
        this.task = null;
        freeTasks[freeTasks.length] = this;
    }
};

},{"./raw":10}],10:[function(require,module,exports){
(function (global){
"use strict";

// Use the fastest means possible to execute a task in its own turn, with
// priority over other events including IO, animation, reflow, and redraw
// events in browsers.
//
// An exception thrown by a task will permanently interrupt the processing of
// subsequent tasks. The higher level `asap` function ensures that if an
// exception is thrown by a task, that the task queue will continue flushing as
// soon as possible, but if you use `rawAsap` directly, you are responsible to
// either ensure that no exceptions are thrown from your task, or to manually
// call `rawAsap.requestFlush` if an exception is thrown.
module.exports = rawAsap;
function rawAsap(task) {
    if (!queue.length) {
        requestFlush();
        flushing = true;
    }
    // Equivalent to push, but avoids a function call.
    queue[queue.length] = task;
}

var queue = [];
// Once a flush has been requested, no further calls to `requestFlush` are
// necessary until the next `flush` completes.
var flushing = false;
// `requestFlush` is an implementation-specific method that attempts to kick
// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
// the event queue before yielding to the browser's own event loop.
var requestFlush;
// The position of the next task to execute in the task queue. This is
// preserved between calls to `flush` so that it can be resumed if
// a task throws an exception.
var index = 0;
// If a task schedules additional tasks recursively, the task queue can grow
// unbounded. To prevent memory exhaustion, the task queue will periodically
// truncate already-completed tasks.
var capacity = 1024;

// The flush function processes all tasks that have been scheduled with
// `rawAsap` unless and until one of those tasks throws an exception.
// If a task throws an exception, `flush` ensures that its state will remain
// consistent and will resume where it left off when called again.
// However, `flush` does not make any arrangements to be called again if an
// exception is thrown.
function flush() {
    while (index < queue.length) {
        var currentIndex = index;
        // Advance the index before calling the task. This ensures that we will
        // begin flushing on the next task the task throws an error.
        index = index + 1;
        queue[currentIndex].call();
        // Prevent leaking memory for long chains of recursive calls to `asap`.
        // If we call `asap` within tasks scheduled by `asap`, the queue will
        // grow, but to avoid an O(n) walk for every task we execute, we don't
        // shift tasks off the queue after they have been executed.
        // Instead, we periodically shift 1024 tasks off the queue.
        if (index > capacity) {
            // Manually shift all values starting at the index back to the
            // beginning of the queue.
            for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
                queue[scan] = queue[scan + index];
            }
            queue.length -= index;
            index = 0;
        }
    }
    queue.length = 0;
    index = 0;
    flushing = false;
}

// `requestFlush` is implemented using a strategy based on data collected from
// every available SauceLabs Selenium web driver worker at time of writing.
// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593

// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

/* globals self */
var scope = typeof global !== "undefined" ? global : self;
var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver;

// MutationObservers are desirable because they have high priority and work
// reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7
if (typeof BrowserMutationObserver === "function") {
    requestFlush = makeRequestCallFromMutationObserver(flush);

// MessageChannels are desirable because they give direct access to the HTML
// task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
// 11-12, and in web workers in many engines.
// Although message channels yield to any queued rendering and IO tasks, they
// would be better than imposing the 4ms delay of timers.
// However, they do not work reliably in Internet Explorer or Safari.

// Internet Explorer 10 is the only browser that has setImmediate but does
// not have MutationObservers.
// Although setImmediate yields to the browser's renderer, it would be
// preferrable to falling back to setTimeout since it does not have
// the minimum 4ms penalty.
// Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
// Desktop to a lesser extent) that renders both setImmediate and
// MessageChannel useless for the purposes of ASAP.
// https://github.com/kriskowal/q/issues/396

// Timers are implemented universally.
// We fall back to timers in workers in most engines, and in foreground
// contexts in the following browsers.
// However, note that even this simple case requires nuances to operate in a
// broad spectrum of browsers.
//
// - Firefox 3-13
// - Internet Explorer 6-9
// - iPad Safari 4.3
// - Lynx 2.8.7
} else {
    requestFlush = makeRequestCallFromTimer(flush);
}

// `requestFlush` requests that the high priority event queue be flushed as
// soon as possible.
// This is useful to prevent an error thrown in a task from stalling the event
// queue if the exception handled by Node.js’s
// `process.on("uncaughtException")` or by a domain.
rawAsap.requestFlush = requestFlush;

// To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".
function makeRequestCallFromMutationObserver(callback) {
    var toggle = 1;
    var observer = new BrowserMutationObserver(callback);
    var node = document.createTextNode("");
    observer.observe(node, {characterData: true});
    return function requestCall() {
        toggle = -toggle;
        node.data = toggle;
    };
}

// The message channel technique was discovered by Malte Ubl and was the
// original foundation for this library.
// http://www.nonblocking.io/2011/06/windownexttick.html

// Safari 6.0.5 (at least) intermittently fails to create message ports on a
// page's first load. Thankfully, this version of Safari supports
// MutationObservers, so we don't need to fall back in that case.

// function makeRequestCallFromMessageChannel(callback) {
//     var channel = new MessageChannel();
//     channel.port1.onmessage = callback;
//     return function requestCall() {
//         channel.port2.postMessage(0);
//     };
// }

// For reasons explained above, we are also unable to use `setImmediate`
// under any circumstances.
// Even if we were, there is another bug in Internet Explorer 10.
// It is not sufficient to assign `setImmediate` to `requestFlush` because
// `setImmediate` must be called *by name* and therefore must be wrapped in a
// closure.
// Never forget.

// function makeRequestCallFromSetImmediate(callback) {
//     return function requestCall() {
//         setImmediate(callback);
//     };
// }

// Safari 6.0 has a problem where timers will get lost while the user is
// scrolling. This problem does not impact ASAP because Safari 6.0 supports
// mutation observers, so that implementation is used instead.
// However, if we ever elect to use timers in Safari, the prevalent work-around
// is to add a scroll event listener that calls for a flush.

// `setTimeout` does not call the passed callback if the delay is less than
// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
// even then.

function makeRequestCallFromTimer(callback) {
    return function requestCall() {
        // We dispatch a timeout with a specified delay of 0 for engines that
        // can reliably accommodate that request. This will usually be snapped
        // to a 4 milisecond delay, but once we're flushing, there's no delay
        // between events.
        var timeoutHandle = setTimeout(handleTimer, 0);
        // However, since this timer gets frequently dropped in Firefox
        // workers, we enlist an interval handle that will try to fire
        // an event 20 times per second until it succeeds.
        var intervalHandle = setInterval(handleTimer, 50);

        function handleTimer() {
            // Whichever timer succeeds will cancel both timers and
            // execute the callback.
            clearTimeout(timeoutHandle);
            clearInterval(intervalHandle);
            callback();
        }
    };
}

// This is for `asap.js` only.
// Its name will be periodically randomized to break any code that depends on
// its existence.
rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer;

// ASAP was originally a nextTick shim included in Q. This was factored out
// into this ASAP package. It was later adapted to RSVP which made further
// amendments. These decisions, particularly to marginalize MessageChannel and
// to capture the MutationObserver implementation in a closure, were integrated
// back into ASAP proper.
// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],11:[function(require,module,exports){
'use strict';

var uppercasePattern = /[A-Z]/g;
var msPattern = /^ms-/;
var cache = {};

function hyphenateStyleName(string) {
    return string in cache
    ? cache[string]
    : cache[string] = string
      .replace(uppercasePattern, '-$&')
      .toLowerCase()
      .replace(msPattern, '-ms-');
}

module.exports = hyphenateStyleName;

},{}],12:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = calc;

var _joinPrefixedValue = require('../../utils/joinPrefixedValue');

var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

var _isPrefixedValue = require('../../utils/isPrefixedValue');

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function calc(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.indexOf('calc(') > -1) {
    return (0, _joinPrefixedValue2.default)(property, value, function (prefix, value) {
      return value.replace(/calc\(/g, prefix + 'calc(');
    });
  }
}
module.exports = exports['default'];
},{"../../utils/isPrefixedValue":25,"../../utils/joinPrefixedValue":26}],13:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = cursor;

var _joinPrefixedValue = require('../../utils/joinPrefixedValue');

var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var values = {
  'zoom-in': true,
  'zoom-out': true,
  grab: true,
  grabbing: true
};

function cursor(property, value) {
  if (property === 'cursor' && values[value]) {
    return (0, _joinPrefixedValue2.default)(property, value);
  }
}
module.exports = exports['default'];
},{"../../utils/joinPrefixedValue":26}],14:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flex;
var values = { flex: true, 'inline-flex': true };

function flex(property, value) {
  if (property === 'display' && values[value]) {
    return {
      display: ['-webkit-box', '-moz-box', '-ms-' + value + 'box', '-webkit-' + value, value]
    };
  }
}
module.exports = exports['default'];
},{}],15:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxIE;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var alternativeValues = {
  'space-around': 'distribute',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end'
};
var alternativeProps = {
  alignContent: 'msFlexLinePack',
  alignSelf: 'msFlexItemAlign',
  alignItems: 'msFlexAlign',
  justifyContent: 'msFlexPack',
  order: 'msFlexOrder',
  flexGrow: 'msFlexPositive',
  flexShrink: 'msFlexNegative',
  flexBasis: 'msPreferredSize'
};

function flexboxIE(property, value) {
  if (alternativeProps[property]) {
    return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
  }
}
module.exports = exports['default'];
},{}],16:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = flexboxOld;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var alternativeValues = {
  'space-around': 'justify',
  'space-between': 'justify',
  'flex-start': 'start',
  'flex-end': 'end',
  'wrap-reverse': 'multiple',
  wrap: 'multiple'
};

var alternativeProps = {
  alignItems: 'WebkitBoxAlign',
  justifyContent: 'WebkitBoxPack',
  flexWrap: 'WebkitBoxLines'
};

function flexboxOld(property, value) {
  if (property === 'flexDirection' && typeof value === 'string') {
    return {
      WebkitBoxOrient: value.indexOf('column') > -1 ? 'vertical' : 'horizontal',
      WebkitBoxDirection: value.indexOf('reverse') > -1 ? 'reverse' : 'normal'
    };
  }
  if (alternativeProps[property]) {
    return _defineProperty({}, alternativeProps[property], alternativeValues[value] || value);
  }
}
module.exports = exports['default'];
},{}],17:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = gradient;

var _joinPrefixedValue = require('../../utils/joinPrefixedValue');

var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

var _isPrefixedValue = require('../../utils/isPrefixedValue');

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var values = /linear-gradient|radial-gradient|repeating-linear-gradient|repeating-radial-gradient/;

function gradient(property, value) {
  if (typeof value === 'string' && !(0, _isPrefixedValue2.default)(value) && value.match(values) !== null) {
    return (0, _joinPrefixedValue2.default)(property, value);
  }
}
module.exports = exports['default'];
},{"../../utils/isPrefixedValue":25,"../../utils/joinPrefixedValue":26}],18:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = position;
function position(property, value) {
  if (property === 'position' && value === 'sticky') {
    return { position: ['-webkit-sticky', 'sticky'] };
  }
}
module.exports = exports['default'];
},{}],19:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sizing;

var _joinPrefixedValue = require('../../utils/joinPrefixedValue');

var _joinPrefixedValue2 = _interopRequireDefault(_joinPrefixedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var properties = {
  maxHeight: true,
  maxWidth: true,
  width: true,
  height: true,
  columnWidth: true,
  minWidth: true,
  minHeight: true
};
var values = {
  'min-content': true,
  'max-content': true,
  'fill-available': true,
  'fit-content': true,
  'contain-floats': true
};

function sizing(property, value) {
  if (properties[property] && values[value]) {
    return (0, _joinPrefixedValue2.default)(property, value);
  }
}
module.exports = exports['default'];
},{"../../utils/joinPrefixedValue":26}],20:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = transition;

var _hyphenateStyleName = require('hyphenate-style-name');

var _hyphenateStyleName2 = _interopRequireDefault(_hyphenateStyleName);

var _capitalizeString = require('../../utils/capitalizeString');

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

var _isPrefixedValue = require('../../utils/isPrefixedValue');

var _isPrefixedValue2 = _interopRequireDefault(_isPrefixedValue);

var _prefixProps = require('../prefixProps');

var _prefixProps2 = _interopRequireDefault(_prefixProps);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var properties = {
  transition: true,
  transitionProperty: true,
  WebkitTransition: true,
  WebkitTransitionProperty: true
};

function transition(property, value) {
  // also check for already prefixed transitions
  if (typeof value === 'string' && properties[property]) {
    var _ref2;

    var outputValue = prefixValue(value);
    var webkitOutput = outputValue.split(/,(?![^()]*(?:\([^()]*\))?\))/g).filter(function (value) {
      return value.match(/-moz-|-ms-/) === null;
    }).join(',');

    // if the property is already prefixed
    if (property.indexOf('Webkit') > -1) {
      return _defineProperty({}, property, webkitOutput);
    }

    return _ref2 = {}, _defineProperty(_ref2, 'Webkit' + (0, _capitalizeString2.default)(property), webkitOutput), _defineProperty(_ref2, property, outputValue), _ref2;
  }
}

function prefixValue(value) {
  if ((0, _isPrefixedValue2.default)(value)) {
    return value;
  }

  // only split multi values, not cubic beziers
  var multipleValues = value.split(/,(?![^()]*(?:\([^()]*\))?\))/g);

  // iterate each single value and check for transitioned properties
  // that need to be prefixed as well
  multipleValues.forEach(function (val, index) {
    multipleValues[index] = Object.keys(_prefixProps2.default).reduce(function (out, prefix) {
      var dashCasePrefix = '-' + prefix.toLowerCase() + '-';

      Object.keys(_prefixProps2.default[prefix]).forEach(function (prop) {
        var dashCaseProperty = (0, _hyphenateStyleName2.default)(prop);

        if (val.indexOf(dashCaseProperty) > -1 && dashCaseProperty !== 'order') {
          // join all prefixes and create a new value
          out = val.replace(dashCaseProperty, dashCasePrefix + dashCaseProperty) + ',' + out;
        }
      });
      return out;
    }, val);
  });

  return multipleValues.join(',');
}
module.exports = exports['default'];
},{"../../utils/capitalizeString":23,"../../utils/isPrefixedValue":25,"../prefixProps":22,"hyphenate-style-name":11}],21:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = prefixAll;

var _prefixProps = require('./prefixProps');

var _prefixProps2 = _interopRequireDefault(_prefixProps);

var _capitalizeString = require('../utils/capitalizeString');

var _capitalizeString2 = _interopRequireDefault(_capitalizeString);

var _sortPrefixedStyle = require('../utils/sortPrefixedStyle');

var _sortPrefixedStyle2 = _interopRequireDefault(_sortPrefixedStyle);

var _position = require('./plugins/position');

var _position2 = _interopRequireDefault(_position);

var _calc = require('./plugins/calc');

var _calc2 = _interopRequireDefault(_calc);

var _cursor = require('./plugins/cursor');

var _cursor2 = _interopRequireDefault(_cursor);

var _flex = require('./plugins/flex');

var _flex2 = _interopRequireDefault(_flex);

var _sizing = require('./plugins/sizing');

var _sizing2 = _interopRequireDefault(_sizing);

var _gradient = require('./plugins/gradient');

var _gradient2 = _interopRequireDefault(_gradient);

var _transition = require('./plugins/transition');

var _transition2 = _interopRequireDefault(_transition);

var _flexboxIE = require('./plugins/flexboxIE');

var _flexboxIE2 = _interopRequireDefault(_flexboxIE);

var _flexboxOld = require('./plugins/flexboxOld');

var _flexboxOld2 = _interopRequireDefault(_flexboxOld);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// special flexbox specifications


var plugins = [_position2.default, _calc2.default, _cursor2.default, _sizing2.default, _gradient2.default, _transition2.default, _flexboxIE2.default, _flexboxOld2.default, _flex2.default];

/**
 * Returns a prefixed version of the style object using all vendor prefixes
 * @param {Object} styles - Style object that gets prefixed properties added
 * @returns {Object} - Style object with prefixed properties and values
 */
function prefixAll(styles) {
  Object.keys(styles).forEach(function (property) {
    var value = styles[property];
    if (value instanceof Object && !Array.isArray(value)) {
      // recurse through nested style objects
      styles[property] = prefixAll(value);
    } else {
      Object.keys(_prefixProps2.default).forEach(function (prefix) {
        var properties = _prefixProps2.default[prefix];
        // add prefixes if needed
        if (properties[property]) {
          styles[prefix + (0, _capitalizeString2.default)(property)] = value;
        }
      });
    }
  });

  Object.keys(styles).forEach(function (property) {
    [].concat(styles[property]).forEach(function (value, index) {
      // resolve every special plugins
      plugins.forEach(function (plugin) {
        return assignStyles(styles, plugin(property, value));
      });
    });
  });

  return (0, _sortPrefixedStyle2.default)(styles);
}

function assignStyles(base) {
  var extend = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

  Object.keys(extend).forEach(function (property) {
    var baseValue = base[property];
    if (Array.isArray(baseValue)) {
      [].concat(extend[property]).forEach(function (value) {
        var valueIndex = baseValue.indexOf(value);
        if (valueIndex > -1) {
          base[property].splice(valueIndex, 1);
        }
        base[property].push(value);
      });
    } else {
      base[property] = extend[property];
    }
  });
}
module.exports = exports['default'];
},{"../utils/capitalizeString":23,"../utils/sortPrefixedStyle":27,"./plugins/calc":12,"./plugins/cursor":13,"./plugins/flex":14,"./plugins/flexboxIE":15,"./plugins/flexboxOld":16,"./plugins/gradient":17,"./plugins/position":18,"./plugins/sizing":19,"./plugins/transition":20,"./prefixProps":22}],22:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = { "Webkit": { "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "backfaceVisibility": true, "perspective": true, "perspectiveOrigin": true, "transformStyle": true, "transformOriginZ": true, "animation": true, "animationDelay": true, "animationDirection": true, "animationFillMode": true, "animationDuration": true, "animationIterationCount": true, "animationName": true, "animationPlayState": true, "animationTimingFunction": true, "appearance": true, "userSelect": true, "fontKerning": true, "textEmphasisPosition": true, "textEmphasis": true, "textEmphasisStyle": true, "textEmphasisColor": true, "boxDecorationBreak": true, "clipPath": true, "maskImage": true, "maskMode": true, "maskRepeat": true, "maskPosition": true, "maskClip": true, "maskOrigin": true, "maskSize": true, "maskComposite": true, "mask": true, "maskBorderSource": true, "maskBorderMode": true, "maskBorderSlice": true, "maskBorderWidth": true, "maskBorderOutset": true, "maskBorderRepeat": true, "maskBorder": true, "maskType": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "filter": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true, "flex": true, "flexBasis": true, "flexDirection": true, "flexGrow": true, "flexFlow": true, "flexShrink": true, "flexWrap": true, "alignContent": true, "alignItems": true, "alignSelf": true, "justifyContent": true, "order": true, "transition": true, "transitionDelay": true, "transitionDuration": true, "transitionProperty": true, "transitionTimingFunction": true, "backdropFilter": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "shapeImageThreshold": true, "shapeImageMargin": true, "shapeImageOutside": true, "hyphens": true, "flowInto": true, "flowFrom": true, "regionFragment": true, "textSizeAdjust": true }, "Moz": { "appearance": true, "userSelect": true, "boxSizing": true, "textAlignLast": true, "textDecorationStyle": true, "textDecorationSkip": true, "textDecorationLine": true, "textDecorationColor": true, "tabSize": true, "hyphens": true, "fontFeatureSettings": true, "breakAfter": true, "breakBefore": true, "breakInside": true, "columnCount": true, "columnFill": true, "columnGap": true, "columnRule": true, "columnRuleColor": true, "columnRuleStyle": true, "columnRuleWidth": true, "columns": true, "columnSpan": true, "columnWidth": true }, "ms": { "flex": true, "flexBasis": false, "flexDirection": true, "flexGrow": false, "flexFlow": true, "flexShrink": false, "flexWrap": true, "alignContent": false, "alignItems": false, "alignSelf": false, "justifyContent": false, "order": false, "transform": true, "transformOrigin": true, "transformOriginX": true, "transformOriginY": true, "userSelect": true, "wrapFlow": true, "wrapThrough": true, "wrapMargin": true, "scrollSnapType": true, "scrollSnapPointsX": true, "scrollSnapPointsY": true, "scrollSnapDestination": true, "scrollSnapCoordinate": true, "touchAction": true, "hyphens": true, "flowInto": true, "flowFrom": true, "breakBefore": true, "breakAfter": true, "breakInside": true, "regionFragment": true, "gridTemplateColumns": true, "gridTemplateRows": true, "gridTemplateAreas": true, "gridTemplate": true, "gridAutoColumns": true, "gridAutoRows": true, "gridAutoFlow": true, "grid": true, "gridRowStart": true, "gridColumnStart": true, "gridRowEnd": true, "gridRow": true, "gridColumn": true, "gridColumnEnd": true, "gridColumnGap": true, "gridRowGap": true, "gridArea": true, "gridGap": true, "textSizeAdjust": true } };
module.exports = exports["default"];
},{}],23:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// helper to capitalize strings

exports.default = function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

module.exports = exports["default"];
},{}],24:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (property) {
  return property.match(/^(Webkit|Moz|O|ms)/) !== null;
};

module.exports = exports["default"];
},{}],25:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (value) {
  if (Array.isArray(value)) value = value.join(',');

  return value.match(/-webkit-|-moz-|-ms-/) !== null;
};

module.exports = exports['default'];
},{}],26:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// returns a style object with a single concated prefixed value string

exports.default = function (property, value) {
  var replacer = arguments.length <= 2 || arguments[2] === undefined ? function (prefix, value) {
    return prefix + value;
  } : arguments[2];
  return _defineProperty({}, property, ['-webkit-', '-moz-', ''].map(function (prefix) {
    return replacer(prefix, value);
  }));
};

module.exports = exports['default'];
},{}],27:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = sortPrefixedStyle;

var _isPrefixedProperty = require('./isPrefixedProperty');

var _isPrefixedProperty2 = _interopRequireDefault(_isPrefixedProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function sortPrefixedStyle(style) {
  return Object.keys(style).sort(function (left, right) {
    if ((0, _isPrefixedProperty2.default)(left) && !(0, _isPrefixedProperty2.default)(right)) {
      return -1;
    } else if (!(0, _isPrefixedProperty2.default)(left) && (0, _isPrefixedProperty2.default)(right)) {
      return 1;
    }
    return 0;
  }).reduce(function (sortedStyle, prop) {
    sortedStyle[prop] = style[prop];
    return sortedStyle;
  }, {});
}
module.exports = exports['default'];
},{"./isPrefixedProperty":24}],28:[function(require,module,exports){
module.exports = require('./lib/static/prefixAll')

},{"./lib/static/prefixAll":21}]},{},[1])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvVXNlcnMvYW50b25pby9Eb2N1bWVudHMvUHJveWVjdG9zL25wbV9wcm9qdHMvcmVhY3QtaW1hZ2VzL2V4YW1wbGVzL3NyYy9hcHAuanMiLCIvVXNlcnMvYW50b25pby9Eb2N1bWVudHMvUHJveWVjdG9zL25wbV9wcm9qdHMvcmVhY3QtaW1hZ2VzL2V4YW1wbGVzL3NyYy9jb21wb25lbnRzL0dhbGxlcnkuanMiLCJub2RlX21vZHVsZXMvYXBocm9kaXRlL2xpYi9nZW5lcmF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9hcGhyb2RpdGUvbGliL2luZGV4LmpzIiwibm9kZV9tb2R1bGVzL2FwaHJvZGl0ZS9saWIvaW5qZWN0LmpzIiwibm9kZV9tb2R1bGVzL2FwaHJvZGl0ZS9saWIvbm8taW1wb3J0YW50LmpzIiwibm9kZV9tb2R1bGVzL2FwaHJvZGl0ZS9saWIvdXRpbC5qcyIsIm5vZGVfbW9kdWxlcy9hcGhyb2RpdGUvbm8taW1wb3J0YW50LmpzIiwibm9kZV9tb2R1bGVzL2FzYXAvYnJvd3Nlci1hc2FwLmpzIiwibm9kZV9tb2R1bGVzL2FzYXAvYnJvd3Nlci1yYXcuanMiLCJub2RlX21vZHVsZXMvaHlwaGVuYXRlLXN0eWxlLW5hbWUvaW5kZXguanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9zdGF0aWMvcGx1Z2lucy9jYWxjLmpzIiwibm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvc3RhdGljL3BsdWdpbnMvY3Vyc29yLmpzIiwibm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvc3RhdGljL3BsdWdpbnMvZmxleC5qcyIsIm5vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3N0YXRpYy9wbHVnaW5zL2ZsZXhib3hJRS5qcyIsIm5vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3N0YXRpYy9wbHVnaW5zL2ZsZXhib3hPbGQuanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9zdGF0aWMvcGx1Z2lucy9ncmFkaWVudC5qcyIsIm5vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3N0YXRpYy9wbHVnaW5zL3Bvc2l0aW9uLmpzIiwibm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvc3RhdGljL3BsdWdpbnMvc2l6aW5nLmpzIiwibm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvc3RhdGljL3BsdWdpbnMvdHJhbnNpdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvbGliL3N0YXRpYy9wcmVmaXhBbGwuanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi9zdGF0aWMvcHJlZml4UHJvcHMuanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi91dGlscy9jYXBpdGFsaXplU3RyaW5nLmpzIiwibm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvdXRpbHMvaXNQcmVmaXhlZFByb3BlcnR5LmpzIiwibm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvdXRpbHMvaXNQcmVmaXhlZFZhbHVlLmpzIiwibm9kZV9tb2R1bGVzL2lubGluZS1zdHlsZS1wcmVmaXhlci9saWIvdXRpbHMvam9pblByZWZpeGVkVmFsdWUuanMiLCJub2RlX21vZHVsZXMvaW5saW5lLXN0eWxlLXByZWZpeGVyL2xpYi91dGlscy9zb3J0UHJlZml4ZWRTdHlsZS5qcyIsIm5vZGVfbW9kdWxlcy9pbmxpbmUtc3R5bGUtcHJlZml4ZXIvc3RhdGljLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztxQkNBa0IsT0FBTzs7Ozt3QkFDRixXQUFXOztpQ0FDZCxzQkFBc0I7Ozs7QUFFMUMsU0FBUyxl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RCxPQUFNLEVBQUU7QUFDUCxRQUFNLEVBQUUsQ0FBQztBQUNULFNBQU8sRUFBRSxPQUFPO0FBQ2hCLFFBQU0sRUFBRSxNQUFNO0FBQ2QsVUFBUSxFQUFFLE1BQU07QUFDaEIsT0FBSyxFQUFFLE1BQU07RUFDYjtDQUNELENBQUMsQ0FBQzs7cUJBRVksT0FBTzs7OztBQ3RNdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdE1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeE9BO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQ2xFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FDL05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBHYWxsZXJ5IGZyb20gJy4vY29tcG9uZW50cy9HYWxsZXJ5JztcblxuZnVuY3Rpb24gbWFrZVVuc3BsYXNoU3JjIChpZCkge1xuXHRyZXR1cm4gYGh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0ke2lkfT9kcHI9MiZhdXRvPWZvcm1hdCZ3PTEwMjQmaD0xMDI0YDtcbn1cbmZ1bmN0aW9uIG1ha2VVbnNwbGFzaFNyY1NldCAoaWQsIHNpemUpIHtcblx0cmV0dXJuIGBodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tJHtpZH0/ZHByPTImYXV0bz1mb3JtYXQmdz0ke3NpemV9ICR7c2l6ZX13YDtcbn1cbmZ1bmN0aW9uIG1ha2VVbnNwbGFzaFRodW1ibmFpbCAoaWQsIG9yaWVudGF0aW9uID0gJ2xhbmRzY2FwZScpIHtcblx0Y29uc3QgZGltZW5zaW9ucyA9IG9yaWVudGF0aW9uID09PSAnc3F1YXJlJ1xuXHRcdD8gJ3c9MzAwJmg9MzAwJ1xuXHRcdDogJ3c9MjQwJmg9MTU5JztcblxuXHRyZXR1cm4gYGh0dHBzOi8vaW1hZ2VzLnVuc3BsYXNoLmNvbS9waG90by0ke2lkfT9kcHI9MiZhdXRvPWZvcm1hdCZjcm9wPWZhY2VzJmZpdD1jcm9wJiR7ZGltZW5zaW9uc31gO1xufVxuXG4vLyBVbnNwbGFzaCBpbWFnZXMgZnJvbSB0aGUgXCJTcGlyaXQgQW5pbWFsc1wiIGNvbGxlY3Rpb25cbi8vIGh0dHBzOi8vdW5zcGxhc2guY29tL2NvbGxlY3Rpb25zLzE1ODgyNS9zcGlyaXQtYW5pbWFsc1xuXG5jb25zdCBERUZBVUxUX0lNQUdFUyA9IFtcblx0eyBpZDogJzE0NzA2MTk1NDkxMDgtYjg1YzU2ZmU1YmU4JywgY2FwdGlvbjogJ1Bob3RvIGJ5IEFsYW4gRW1lcnknLCBvcmllbnRhdGlvbjogJ3NxdWFyZScsIHVzZUZvckRlbW86IHRydWUgfSwgLy8gaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL1NZelVGNlhjV0JZIChGbGFtaW5nbylcblx0eyBpZDogJzE0NzEwNzk1MDI1MTYtMjUwYzE5YWY2OTI4JywgY2FwdGlvbjogJ1Bob3RvIGJ5IEplcmVteSBCaXNob3AnLCBvcmllbnRhdGlvbjogJ2xhbmRzY2FwZScsIHVzZUZvckRlbW86IHRydWUgfSwgLy8gaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL0dJcEd4ZTJfY1Q0IChUdXJ0bGUpXG5cdHsgaWQ6ICcxNDU0MDIzNDkyNTUwLTU2OTZmOGZmMTBlMScsIGNhcHRpb246ICdQaG90byBieSBKZXNzaWNhIFdlaWxsZXInLCBvcmllbnRhdGlvbjogJ2xhbmRzY2FwZScsIHVzZUZvckRlbW86IHRydWUgfSwgLy8gaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL0xtVlNLZUR5NkVBIChUaWdlcilcblx0eyBpZDogJzE0NzA4NTQ5ODk5MjItNWJlMmY3NDU2ZDc4JywgY2FwdGlvbjogJ1Bob3RvIGJ5IFBpb3RyIMWBYXNrYXdza2knLCBvcmllbnRhdGlvbjogJ2xhbmRzY2FwZScsIHVzZUZvckRlbW86IHRydWUgfSwgLy8gaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL0dYTXI3QmFkWFFvIChIZWRnZWhvZylcblx0eyBpZDogJzE0NzAzMTc1OTY2OTctY2JkZWRhNTZmOTk5JywgY2FwdGlvbjogJ1Bob3RvIGJ5IE1pY2hlbCBCb3NtYScsIG9yaWVudGF0aW9uOiAnbGFuZHNjYXBlJywgdXNlRm9yRGVtbzogdHJ1ZSB9LCAvLyBodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvWGdGOWU5M1RrdDAgKExhZHlidWcpXG5dO1xuY29uc3QgVEhFTUVEX0lNQUdFUyA9IFtcblx0eyBpZDogJzE0NzExMDExNzM3MTItYjk4ODQxNzUyNTRlJywgY2FwdGlvbjogJ1Bob3RvIGJ5IFBlZHJvIExhc3RyYScsIG9yaWVudGF0aW9uOiAnc3F1YXJlJywgdXNlRm9yRGVtbzogdHJ1ZSB9LCAvLyBodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvNW9SelpVNXV3U00gKERyYWdvbmZseSlcblx0eyBpZDogJzE0NzExMjc0MzI0NTgtNjUyMDZiZTE0OWM5JywgY2FwdGlvbjogJ1Bob3RvIGJ5IEVybmVzdG8gVmVsw6F6cXVleicsIG9yaWVudGF0aW9uOiAnbGFuZHNjYXBlJywgdXNlRm9yRGVtbzogdHJ1ZSB9LCAvLyBodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvS3BndDRwbDAzTzAgKERlZXIpXG5cdHsgaWQ6ICcxNDcwNzc3NjM5MzEzLTYwYWY4ODkxODIwMycsIGNhcHRpb246ICdQaG90byBieSBDcmlzIFNhdXInLCBvcmllbnRhdGlvbjogJ2xhbmRzY2FwZScsIHVzZUZvckRlbW86IHRydWUgfSwgLy8gaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL0dOVWNVeC1pT2JnIChLb2FsYSlcblx0eyBpZDogJzE0NTM1NTA0ODY0ODEtYWE0MTc1YjAxM2VhJywgY2FwdGlvbjogJ1Bob3RvIGJ5IEJlbmphbWluIFBsZXknLCBvcmllbnRhdGlvbjogJ2xhbmRzY2FwZScsIHVzZUZvckRlbW86IHRydWUgfSwgLy8gaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL1dpU2VhWjRFNlpJIChFbGVwaGFudClcblx0eyBpZDogJzE0MTU5MDQ2NjM0NjctZGZkYzE2Y2FlNzk0JywgY2FwdGlvbjogJ1Bob3RvIGJ5IExldmkgU2F1bmRlcnMnLCBvcmllbnRhdGlvbjogJ2xhbmRzY2FwZScsIHVzZUZvckRlbW86IHRydWUgfSwgLy8gaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL05VTWx4VFBzem5NIChDb3lvdGUpXG5dO1xuY29uc3QgVEhVTUJOQUlMX0lNQUdFUyA9IFtcblx0eyBpZDogJzE0NTQ5OTE3MjcwNjEtYmU1MTRlYWU4NmY3JywgY2FwdGlvbjogJ1Bob3RvIGJ5IFRob21hcyBLZWxsZXknLCBvcmllbnRhdGlvbjogJ3NxdWFyZScsIHVzZUZvckRlbW86IHRydWUgfSwgLy8gaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL3QyMHBjMzJWYnJVIChIdW1wIEJhY2sgV2hhbGUpXG5cdHsgaWQ6ICcxNDU1NzE3OTc0MDgxLTA0MzZhMDY2YmI5NicsIGNhcHRpb246ICdQaG90byBieSBUZWRkeSBLZWxsZXknLCBvcmllbnRhdGlvbjogJ2xhbmRzY2FwZScsIHVzZUZvckRlbW86IHRydWUgfSwgLy8gaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL2NtS1BPVWdkbVdjIChEZWVyKVxuXHR7IGlkOiAnMTQ2MDg5OTk2MDgxMi1mNmVlMWVjYWYxMTcnLCBjYXB0aW9uOiAnUGhvdG8gYnkgSmF5IFJ1emVza3knLCBvcmllbnRhdGlvbjogJ2xhbmRzY2FwZScsIHVzZUZvckRlbW86IHRydWUgfSwgLy8gaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL2gxM1k4dnlJWE5VIChXYWxydXMpXG5cdHsgaWQ6ICcxNDU2OTI2NjMxMzc1LTkyYzhjZTg3MmRlZicsIGNhcHRpb246ICdQaG90byBieSBHd2VuIFdldXN0aW5rJywgb3JpZW50YXRpb246ICdsYW5kc2NhcGUnLCB1c2VGb3JEZW1vOiB0cnVlIH0sIC8vIGh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9JM0Mxc1NYajFpOCAoTGVvcGFyZClcblx0eyBpZDogJzE0NTIyNzQzODE1MjItNTIxNTEzMDE1NDMzJywgY2FwdGlvbjogJ1Bob3RvIGJ5IEFkYW0gV2lsbG91Z2hieS1Lbm94Jywgb3JpZW50YXRpb246ICdsYW5kc2NhcGUnLCB1c2VGb3JEZW1vOiB0cnVlIH0sIC8vIGh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9fc25xQVJLVGdvYyAoTW90aGVyIGFuZCBDdWJzKVxuXHR7IGlkOiAnMTQ3MTE0NTY1MzA3Ny01NGM2ZjBhYWU1MTEnLCBjYXB0aW9uOiAnUGhvdG8gYnkgQm9yaXMgU21va3JvdmljJywgb3JpZW50YXRpb246ICdsYW5kc2NhcGUnIH0sIC8vIGh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9uMGZlQ19QV0ZkayAoRHJhZ29uZmx5KVxuXHR7IGlkOiAnMTQ3MTAwNTE5NzkxMS04OGU5ZDRhNzgzNGQnLCBjYXB0aW9uOiAnUGhvdG8gYnkgR2FldGFubyBDZXNzYXRpJywgb3JpZW50YXRpb246ICdsYW5kc2NhcGUnIH0sIC8vIGh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9ZT1g4Wk1UbzdoayAoQmFieSBDcm9jb2RpbGUpXG5cdHsgaWQ6ICcxNDcwNTgzMTkwMjQwLWJkNmJiZGU4YTU2OScsIGNhcHRpb246ICdQaG90byBieSBBbGFuIEVtZXJ5Jywgb3JpZW50YXRpb246ICdsYW5kc2NhcGUnIH0sIC8vIGh0dHBzOi8vdW5zcGxhc2guY29tL3Bob3Rvcy9lbVRDV2lxMnR4ayAoQmVldGxlKVxuXHR7IGlkOiAnMTQ3MDY4ODA5MDA2Ny02ZDQyOWMwYjI2MDAnLCBjYXB0aW9uOiAnUGhvdG8gYnkgSsOhbiBKYWt1YiBOYW5pxaF0YScsIG9yaWVudGF0aW9uOiAnbGFuZHNjYXBlJyB9LCAvLyBodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MveHFqTy1seDM5QjQgKFNjb3R0aXNoIEhpZ2hsYW5kIENvdylcblx0eyBpZDogJzE0NzA3NDIyOTI1NjUtZGU0M2M0YjAyYjU3JywgY2FwdGlvbjogJ1Bob3RvIGJ5IEVyaWMgS25vbGwnLCBvcmllbnRhdGlvbjogJ2xhbmRzY2FwZScgfSwgLy8gaHR0cHM6Ly91bnNwbGFzaC5jb20vcGhvdG9zL0RtT0NrT254LU1RIChDaGVldGFoKVxuXHQvLyBodHRwczovL3Vuc3BsYXNoLmNvbS9waG90b3MvTlVNbHhUUHN6bk0gY295b3RlP1xuXTtcblxuY29uc3QgdGhlbWUgPSB7XG5cdC8vIGNvbnRhaW5lclxuXHRjb250YWluZXI6IHtcblx0XHRiYWNrZ3JvdW5kOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjkpJyxcblx0fSxcblxuXHQvLyBhcnJvd3Ncblx0YXJyb3c6IHtcblx0XHRiYWNrZ3JvdW5kQ29sb3I6ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuOCknLFxuXHRcdGZpbGw6ICcjMjIyJyxcblx0XHRvcGFjaXR5OiAwLjYsXG5cdFx0dHJhbnNpdGlvbjogJ29wYWNpdHkgMjAwbXMnLFxuXG5cdFx0Jzpob3Zlcic6IHtcblx0XHRcdG9wYWNpdHk6IDEsXG5cdFx0fSxcblx0fSxcblx0YXJyb3dfX3NpemVfX21lZGl1bToge1xuXHRcdGJvcmRlclJhZGl1czogNDAsXG5cdFx0aGVpZ2h0OiA0MCxcblx0XHRtYXJnaW5Ub3A6IC0yMCxcblxuXHRcdCdAbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpJzoge1xuXHRcdFx0aGVpZ2h0OiA3MCxcblx0XHRcdHBhZGRpbmc6IDE1LFxuXHRcdH0sXG5cdH0sXG5cdGFycm93X19kaXJlY3Rpb25fX2xlZnQ6IHsgbWFyZ2luTGVmdDogMTAgfSxcblx0YXJyb3dfX2RpcmVjdGlvbl9fcmlnaHQ6IHsgbWFyZ2luUmlnaHQ6IDEwIH0sXG5cdGNsb3NlOiB7XG5cdFx0ZmlsbDogJyNENDAwMDAnLFxuXHRcdG9wYWNpdHk6IDAuNixcblx0XHR0cmFuc2l0aW9uOiAnYWxsIDIwMG1zJyxcblx0XHQnOmhvdmVyJzoge1xuXHRcdFx0b3BhY2l0eTogMSxcblx0XHR9LFxuXHR9LFxuXG5cdC8vIGZvb3RlclxuXHRmb290ZXI6IHtcblx0XHRjb2xvcjogJ2JsYWNrJyxcblx0fSxcblx0Zm9vdGVyQ291bnQ6IHtcblx0XHRjb2xvcjogJ3JnYmEoMCwgMCwgMCwgMC42KScsXG5cdH0sXG5cblx0Ly8gdGh1bWJuYWlsc1xuXHR0aHVtYm5haWw6IHtcblx0fSxcblx0dGh1bWJuYWlsX19hY3RpdmU6IHtcblx0XHRib3hTaGFkb3c6ICcwIDAgMCAycHggIzAwRDhGRicsXG5cdH0sXG59O1xuXG5yZW5kZXIoXG5cdDxkaXY+XG5cdFx0PGRpdiBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDQwIH19PlxuXHRcdFx0PHA+UGhvdG9zIGNvdXJ0ZXN5IG9mIDxhIGhyZWY9XCJodHRwczovL3Vuc3BsYXNoLmNvbS9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5VbnNwbGFzaDwvYT4uIFVzZSB5b3VyIGtleWJvYXJkIHRvIG5hdmlnYXRlIDxrYmQ+bGVmdDwva2JkPiA8a2JkPnJpZ2h0PC9rYmQ+IDxrYmQ+ZXNjPC9rYmQ+ICZtZGFzaDsgQWxzbywgdHJ5IHJlc2l6aW5nIHlvdXIgYnJvd3NlciB3aW5kb3cuPC9wPlxuXHRcdDwvZGl2PlxuXHRcdDxoMz5EZWZhdWx0IE9wdGlvbnM8L2gzPlxuXHRcdDxHYWxsZXJ5IGltYWdlcz17REVGQVVMVF9JTUFHRVMubWFwKCh7IGNhcHRpb24sIGlkLCBvcmllbnRhdGlvbiwgdXNlRm9yRGVtbyB9KSA9PiAoe1xuXHRcdFx0c3JjOiBtYWtlVW5zcGxhc2hTcmMoaWQpLFxuXHRcdFx0dGh1bWJuYWlsOiBtYWtlVW5zcGxhc2hUaHVtYm5haWwoaWQsIG9yaWVudGF0aW9uKSxcblx0XHRcdHNyY3NldDogW1xuXHRcdFx0XHRtYWtlVW5zcGxhc2hTcmNTZXQoaWQsIDEwMjQpLFxuXHRcdFx0XHRtYWtlVW5zcGxhc2hTcmNTZXQoaWQsIDgwMCksXG5cdFx0XHRcdG1ha2VVbnNwbGFzaFNyY1NldChpZCwgNTAwKSxcblx0XHRcdFx0bWFrZVVuc3BsYXNoU3JjU2V0KGlkLCAzMjApLFxuXHRcdFx0XSxcblx0XHRcdGNhcHRpb24sXG5cdFx0XHRvcmllbnRhdGlvbixcblx0XHRcdHVzZUZvckRlbW8sXG5cdFx0fSkpfSAvPlxuXG5cdFx0PGgzPldpdGggVGh1bWJuYWlsczwvaDM+XG5cdFx0PEdhbGxlcnkgaW1hZ2VzPXtUSFVNQk5BSUxfSU1BR0VTLm1hcCgoeyBjYXB0aW9uLCBpZCwgb3JpZW50YXRpb24sIHVzZUZvckRlbW8gfSkgPT4gKHtcblx0XHRcdHNyYzogbWFrZVVuc3BsYXNoU3JjKGlkKSxcblx0XHRcdHRodW1ibmFpbDogbWFrZVVuc3BsYXNoVGh1bWJuYWlsKGlkLCBvcmllbnRhdGlvbiksXG5cdFx0XHRzcmNzZXQ6IFtcblx0XHRcdFx0bWFrZVVuc3BsYXNoU3JjU2V0KGlkLCAxMDI0KSxcblx0XHRcdFx0bWFrZVVuc3BsYXNoU3JjU2V0KGlkLCA4MDApLFxuXHRcdFx0XHRtYWtlVW5zcGxhc2hTcmNTZXQoaWQsIDUwMCksXG5cdFx0XHRcdG1ha2VVbnNwbGFzaFNyY1NldChpZCwgMzIwKSxcblx0XHRcdF0sXG5cdFx0XHRjYXB0aW9uLFxuXHRcdFx0b3JpZW50YXRpb24sXG5cdFx0XHR1c2VGb3JEZW1vLFxuXHRcdH0pKX0gc2hvd1RodW1ibmFpbHMgLz5cblxuXHRcdDxoMz5UaGVtZWQgTGlnaHRib3g8L2gzPlxuXHRcdDxHYWxsZXJ5IGltYWdlcz17VEhFTUVEX0lNQUdFUy5tYXAoKHsgY2FwdGlvbiwgaWQsIG9yaWVudGF0aW9uLCB1c2VGb3JEZW1vIH0pID0+ICh7XG5cdFx0XHRzcmM6IG1ha2VVbnNwbGFzaFNyYyhpZCksXG5cdFx0XHR0aHVtYm5haWw6IG1ha2VVbnNwbGFzaFRodW1ibmFpbChpZCwgb3JpZW50YXRpb24pLFxuXHRcdFx0c3Jjc2V0OiBbXG5cdFx0XHRcdG1ha2VVbnNwbGFzaFNyY1NldChpZCwgMTAyNCksXG5cdFx0XHRcdG1ha2VVbnNwbGFzaFNyY1NldChpZCwgODAwKSxcblx0XHRcdFx0bWFrZVVuc3BsYXNoU3JjU2V0KGlkLCA1MDApLFxuXHRcdFx0XHRtYWtlVW5zcGxhc2hTcmNTZXQoaWQsIDMyMCksXG5cdFx0XHRdLFxuXHRcdFx0Y2FwdGlvbixcblx0XHRcdG9yaWVudGF0aW9uLFxuXHRcdFx0dXNlRm9yRGVtbyxcblx0XHR9KSl9IHRoZW1lPXt0aGVtZX0gc2hvd1RodW1ibmFpbHMgLz5cblxuXHRcdDxoMz5UaGVtZWQgVGV4dHM8L2gzPlxuXHRcdDxHYWxsZXJ5IGltYWdlcz17VEhFTUVEX0lNQUdFUy5tYXAoKHsgY2FwdGlvbiwgaWQsIG9yaWVudGF0aW9uLCB1c2VGb3JEZW1vIH0pID0+ICh7XG5cdFx0XHRzcmM6IG1ha2VVbnNwbGFzaFNyYyhpZCksXG5cdFx0XHR0aHVtYm5haWw6IG1ha2VVbnNwbGFzaFRodW1ibmFpbChpZCwgb3JpZW50YXRpb24pLFxuXHRcdFx0c3Jjc2V0OiBbXG5cdFx0XHRcdG1ha2VVbnNwbGFzaFNyY1NldChpZCwgMTAyNCksXG5cdFx0XHRcdG1ha2VVbnNwbGFzaFNyY1NldChpZCwgODAwKSxcblx0XHRcdFx0bWFrZVVuc3BsYXNoU3JjU2V0KGlkLCA1MDApLFxuXHRcdFx0XHRtYWtlVW5zcGxhc2hTcmNTZXQoaWQsIDMyMCksXG5cdFx0XHRdLFxuXHRcdFx0Y2FwdGlvbixcblx0XHRcdG9yaWVudGF0aW9uLFxuXHRcdFx0dXNlRm9yRGVtbyxcblx0XHR9KSl9IHRoZW1lPXt0aGVtZX0gc2hvd1RodW1ibmFpbHMgLz5cblx0PC9kaXY+LFxuXHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZXhhbXBsZScpXG4pO1xuIiwiaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjc3MsIFN0eWxlU2hlZXQgfSBmcm9tICdhcGhyb2RpdGUvbm8taW1wb3J0YW50JztcbmltcG9ydCBMaWdodGJveCBmcm9tICdyZWFjdC1pbWFnZXMnO1xuXG5jbGFzcyBHYWxsZXJ5IGV4dGVuZHMgQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IgKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXG5cdFx0bGV0IGl0ZW1UeXBlO1xuXG5cdFx0aWYgKHRoaXMucHJvcHMuaW1hZ2VzKSB7XG4gICAgICAgICAgICBpdGVtVHlwZSA9ICdpbWFnZXMnXG5cdFx0fSBlbHNlIGlmICh0aGlzLnByb3BzLnRleHRzKSB7XG4gICAgICAgICAgICBpdGVtVHlwZSA9ICd0ZXh0cydcblx0XHR9IGVsc2Uge1xuICAgICAgICAgICAgaXRlbVR5cGUgPSAndmlkZW9zJ1xuXHRcdH1cblxuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRsaWdodGJveElzT3BlbjogZmFsc2UsXG5cdFx0XHRjdXJyZW50SXRlbTogMCxcbiAgICAgICAgICAgIGl0ZW1UeXBlOiBpdGVtVHlwZSxcblx0XHR9O1xuXG5cdFx0dGhpcy5jbG9zZUxpZ2h0Ym94ID0gdGhpcy5jbG9zZUxpZ2h0Ym94LmJpbmQodGhpcyk7XG5cdFx0dGhpcy5nb3RvTmV4dCA9IHRoaXMuZ290b05leHQuYmluZCh0aGlzKTtcblx0XHR0aGlzLmdvdG9QcmV2aW91cyA9IHRoaXMuZ290b1ByZXZpb3VzLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5nb3RvSXRlbSA9IHRoaXMuZ290b0l0ZW0uYmluZCh0aGlzKTtcblx0XHR0aGlzLmhhbmRsZUNsaWNrSXRlbSA9IHRoaXMuaGFuZGxlQ2xpY2tJdGVtLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5vcGVuTGlnaHRib3ggPSB0aGlzLm9wZW5MaWdodGJveC5iaW5kKHRoaXMpO1xuXHR9XG5cdG9wZW5MaWdodGJveCAoaW5kZXgsIGV2ZW50KSB7XG5cdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGN1cnJlbnRJdGVtOiBpbmRleCxcblx0XHRcdGxpZ2h0Ym94SXNPcGVuOiB0cnVlLFxuXHRcdH0pO1xuXHR9XG5cdGNsb3NlTGlnaHRib3ggKCkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe1xuXHRcdFx0Y3VycmVudEl0ZW06IDAsXG5cdFx0XHRsaWdodGJveElzT3BlbjogZmFsc2UsXG5cdFx0fSk7XG5cdH1cblx0Z290b1ByZXZpb3VzICgpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtcblx0XHRcdGN1cnJlbnRJdGVtOiB0aGlzLnN0YXRlLmN1cnJlbnRJdGVtIC0gMSxcblx0XHR9KTtcblx0fVxuXHRnb3RvTmV4dCAoKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRjdXJyZW50SXRlbTogdGhpcy5zdGF0ZS5jdXJyZW50SXRlbSArIDEsXG5cdFx0fSk7XG5cdH1cblx0Z290b0l0ZW0gKGluZGV4KSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7XG5cdFx0XHRjdXJyZW50SXRlbTogaW5kZXgsXG5cdFx0fSk7XG5cdH1cblx0aGFuZGxlQ2xpY2tJdGVtICgpIHtcblx0XHRpZiAodGhpcy5zdGF0ZS5jdXJyZW50SXRlbSA9PT0gdGhpcy5wcm9wc1t0aGlzLnN0YXRlLml0ZW1UeXBlXS5sZW5ndGggLSAxKSByZXR1cm47XG5cblx0XHR0aGlzLmdvdG9OZXh0KCk7XG5cdH1cblx0cmVuZGVyR2FsbGVyeSAoKSB7XG5cdFx0aWYgKHRoaXMuc3RhdGUuaXRlbVR5cGUgPT0gJ2ltYWdlcycpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgaW1hZ2VzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgICAgICBpZiAoIWltYWdlcykgcmV0dXJuO1xuXG4gICAgICAgICAgICBjb25zdCBnYWxsZXJ5ID0gaW1hZ2VzLmZpbHRlcihpID0+IGkudXNlRm9yRGVtbykubWFwKChvYmosIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuXHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRocmVmPXtvYmouc3JjfVxuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lPXtjc3MoY2xhc3Nlcy50aHVtYm5haWwsIGNsYXNzZXNbb2JqLm9yaWVudGF0aW9uXSl9XG5cdFx0XHRcdFx0XHRrZXk9e2l9XG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4gdGhpcy5vcGVuTGlnaHRib3goaSwgZSl9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0PGltZyBzcmM9e29iai50aHVtYm5haWx9IGNsYXNzTmFtZT17Y3NzKGNsYXNzZXMuc291cmNlKX0gLz5cblx0XHRcdFx0XHQ8L2E+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT17Y3NzKGNsYXNzZXMuZ2FsbGVyeSl9PlxuICAgICAgICAgICAgICAgICAgICB7Z2FsbGVyeX1cblx0XHRcdFx0PC9kaXY+XG4gICAgICAgICAgICApO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5zdGF0ZS5pdGVtVHlwZSA9PSAndGV4dHMnKSB7XG4gICAgICAgICAgICBjb25zdCB7IHRleHRzIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgICAgICAgICBpZiAoIXRleHRzKSByZXR1cm47XG5cbiAgICAgICAgICAgIGNvbnN0IGdhbGxlcnkgPSB0ZXh0cy5tYXAoKHRleHQsIGkpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuXHRcdFx0XHRcdDxhXG5cdFx0XHRcdFx0XHRjbGFzc05hbWU9J3RleHQtdGh1bWJhaWwnXG5cdFx0XHRcdFx0XHRrZXk9e2l9XG5cdFx0XHRcdFx0XHRvbkNsaWNrPXsoZSkgPT4gdGhpcy5vcGVuTGlnaHRib3goaSwgZSl9XG5cdFx0XHRcdFx0PlxuXHRcdFx0XHRcdFx0e3RleHR9XG5cdFx0XHRcdFx0PC9hPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgcmV0dXJuIChcblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e2NzcyhjbGFzc2VzLmdhbGxlcnkpfT5cbiAgICAgICAgICAgICAgICAgICAge2dhbGxlcnl9XG5cdFx0XHRcdDwvZGl2PlxuICAgICAgICAgICAgKTtcblx0XHR9XG5cdH1cblx0cmVuZGVyICgpIHtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uXCI+XG5cdFx0XHRcdHt0aGlzLnByb3BzLmhlYWRpbmcgJiYgPGgyPnt0aGlzLnByb3BzLmhlYWRpbmd9PC9oMj59XG5cdFx0XHRcdHt0aGlzLnByb3BzLnN1YmhlYWRpbmcgJiYgPHA+e3RoaXMucHJvcHMuc3ViaGVhZGluZ308L3A+fVxuXHRcdFx0XHR7dGhpcy5yZW5kZXJHYWxsZXJ5KCl9XG5cdFx0XHRcdDxMaWdodGJveFxuXHRcdFx0XHRcdGN1cnJlbnRJdGVtPXt0aGlzLnN0YXRlLmN1cnJlbnRJdGVtfVxuXHRcdFx0XHRcdGl0ZW1zPXt7dHlwZTp0aGlzLnN0YXRlLml0ZW1UeXBlLGl0ZW1zOnRoaXMucHJvcHNbdGhpcy5zdGF0ZS5pdGVtVHlwZV19fVxuXHRcdFx0XHRcdGlzT3Blbj17dGhpcy5zdGF0ZS5saWdodGJveElzT3Blbn1cblx0XHRcdFx0XHRvbkNsaWNrSW1hZ2U9e3RoaXMuaGFuZGxlQ2xpY2tJdGVtfVxuXHRcdFx0XHRcdG9uQ2xpY2tOZXh0PXt0aGlzLmdvdG9OZXh0fVxuXHRcdFx0XHRcdG9uQ2xpY2tQcmV2PXt0aGlzLmdvdG9QcmV2aW91c31cblx0XHRcdFx0XHRvbkNsaWNrVGh1bWJuYWlsPXt0aGlzLmdvdG9JdGVtfVxuXHRcdFx0XHRcdG9uQ2xvc2U9e3RoaXMuY2xvc2VMaWdodGJveH1cblx0XHRcdFx0XHRzaG93VGh1bWJuYWlscz17dGhpcy5wcm9wcy5zaG93VGh1bWJuYWlsc31cblx0XHRcdFx0XHR0aGVtZT17dGhpcy5wcm9wcy50aGVtZX1cblx0XHRcdFx0Lz5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdH1cbn1cblxuR2FsbGVyeS5kaXNwbGF5TmFtZSA9ICdHYWxsZXJ5JztcbkdhbGxlcnkucHJvcFR5cGVzID0ge1xuXHRoZWFkaW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxuXHRpbWFnZXM6IFByb3BUeXBlcy5hcnJheSxcblx0dGV4dHM6IFByb3BUeXBlcy5hcnJheSxcblx0c2hvd1RodW1ibmFpbHM6IFByb3BUeXBlcy5ib29sLFxuXHRzdWJoZWFkaW5nOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuY29uc3QgZ3V0dGVyID0ge1xuXHRzbWFsbDogMixcblx0bGFyZ2U6IDQsXG59O1xuY29uc3QgY2xhc3NlcyA9IFN0eWxlU2hlZXQuY3JlYXRlKHtcblx0Z2FsbGVyeToge1xuXHRcdG1hcmdpblJpZ2h0OiAtZ3V0dGVyLnNtYWxsLFxuXHRcdG92ZXJmbG93OiAnaGlkZGVuJyxcblxuXHRcdCdAbWVkaWEgKG1pbi13aWR0aDogNTAwcHgpJzoge1xuXHRcdFx0bWFyZ2luUmlnaHQ6IC1ndXR0ZXIubGFyZ2UsXG5cdFx0fSxcblx0fSxcblxuXHQvLyBhbmNob3Jcblx0dGh1bWJuYWlsOiB7XG5cdFx0Ym94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG5cdFx0ZGlzcGxheTogJ2Jsb2NrJyxcblx0XHRmbG9hdDogJ2xlZnQnLFxuXHRcdGxpbmVIZWlnaHQ6IDAsXG5cdFx0cGFkZGluZ1JpZ2h0OiBndXR0ZXIuc21hbGwsXG5cdFx0cGFkZGluZ0JvdHRvbTogZ3V0dGVyLnNtYWxsLFxuXHRcdG92ZXJmbG93OiAnaGlkZGVuJyxcblxuXHRcdCdAbWVkaWEgKG1pbi13aWR0aDogNTAwcHgpJzoge1xuXHRcdFx0cGFkZGluZ1JpZ2h0OiBndXR0ZXIubGFyZ2UsXG5cdFx0XHRwYWRkaW5nQm90dG9tOiBndXR0ZXIubGFyZ2UsXG5cdFx0fSxcblx0fSxcblxuXHQvLyBvcmllbnRhdGlvblxuXHRsYW5kc2NhcGU6IHtcblx0XHR3aWR0aDogJzMwJScsXG5cdH0sXG5cdHNxdWFyZToge1xuXHRcdHBhZGRpbmdCb3R0b206IDAsXG5cdFx0d2lkdGg6ICc0MCUnLFxuXG5cdFx0J0BtZWRpYSAobWluLXdpZHRoOiA1MDBweCknOiB7XG5cdFx0XHRwYWRkaW5nQm90dG9tOiAwLFxuXHRcdH0sXG5cdH0sXG5cblx0Ly8gYWN0dWFsIDxpbWcgLz5cblx0c291cmNlOiB7XG5cdFx0Ym9yZGVyOiAwLFxuXHRcdGRpc3BsYXk6ICdibG9jaycsXG5cdFx0aGVpZ2h0OiAnYXV0bycsXG5cdFx0bWF4V2lkdGg6ICcxMDAlJyxcblx0XHR3aWR0aDogJ2F1dG8nLFxuXHR9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEdhbGxlcnk7XG4iLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfc2xpY2VkVG9BcnJheSA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pWydyZXR1cm4nXSkgX2lbJ3JldHVybiddKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfSByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IHJldHVybiBhcnI7IH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7IHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7IH0gZWxzZSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UnKTsgfSB9OyB9KSgpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfaW5saW5lU3R5bGVQcmVmaXhlclN0YXRpYyA9IHJlcXVpcmUoJ2lubGluZS1zdHlsZS1wcmVmaXhlci9zdGF0aWMnKTtcblxudmFyIF9pbmxpbmVTdHlsZVByZWZpeGVyU3RhdGljMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2lubGluZVN0eWxlUHJlZml4ZXJTdGF0aWMpO1xuXG52YXIgX3V0aWwgPSByZXF1aXJlKCcuL3V0aWwnKTtcblxuLyoqXG4gKiBHZW5lcmF0ZSBDU1MgZm9yIGEgc2VsZWN0b3IgYW5kIHNvbWUgc3R5bGVzLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gaGFuZGxlcyB0aGUgbWVkaWEgcXVlcmllcywgcHNldWRvIHNlbGVjdG9ycywgYW5kIGRlc2NlbmRhbnRcbiAqIHN0eWxlcyB0aGF0IGNhbiBiZSB1c2VkIGluIGFwaHJvZGl0ZSBzdHlsZXMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yOiBBIGJhc2UgQ1NTIHNlbGVjdG9yIGZvciB0aGUgc3R5bGVzIHRvIGJlIGdlbmVyYXRlZFxuICogICAgIHdpdGguXG4gKiBAcGFyYW0ge09iamVjdH0gc3R5bGVUeXBlczogQSBsaXN0IG9mIHByb3BlcnRpZXMgb2YgdGhlIHJldHVybiB0eXBlIG9mXG4gKiAgICAgU3R5bGVTaGVldC5jcmVhdGUsIGUuZy4gW3N0eWxlcy5yZWQsIHN0eWxlcy5ibHVlXS5cbiAqIEBwYXJhbSBzdHJpbmdIYW5kbGVyczogU2VlIGBnZW5lcmF0ZUNTU1J1bGVzZXRgXG4gKiBAcGFyYW0gdXNlSW1wb3J0YW50OiBTZWUgYGdlbmVyYXRlQ1NTUnVsZXNldGBcbiAqXG4gKiBUbyBhY3R1YWxseSBnZW5lcmF0ZSB0aGUgQ1NTIHNwZWNpYWwtY29uc3RydWN0LWxlc3Mgc3R5bGVzIGFyZSBwYXNzZWQgdG9cbiAqIGBnZW5lcmF0ZUNTU1J1bGVzZXRgLlxuICpcbiAqIEZvciBpbnN0YW5jZSwgYSBjYWxsIHRvXG4gKlxuICogICAgIGdlbmVyYXRlQ1NTSW5uZXIoXCIuZm9vXCIsIHtcbiAqICAgICAgIGNvbG9yOiBcInJlZFwiLFxuICogICAgICAgXCJAbWVkaWEgc2NyZWVuXCI6IHtcbiAqICAgICAgICAgaGVpZ2h0OiAyMCxcbiAqICAgICAgICAgXCI6aG92ZXJcIjoge1xuICogICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJibGFja1wiXG4gKiAgICAgICAgIH1cbiAqICAgICAgIH0sXG4gKiAgICAgICBcIjphY3RpdmVcIjoge1xuICogICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcbiAqICAgICAgICAgXCI+PmJhclwiOiB7XG4gKiAgICAgICAgICAgX25hbWVzOiB7IFwiZm9vX2JhclwiOiB0cnVlIH0sXG4gKiAgICAgICAgICAgaGVpZ2h0OiAxMCxcbiAqICAgICAgICAgfVxuICogICAgICAgfVxuICogICAgIH0pO1xuICpcbiAqIHdpbGwgbWFrZSA1IGNhbGxzIHRvIGBnZW5lcmF0ZUNTU1J1bGVzZXRgOlxuICpcbiAqICAgICBnZW5lcmF0ZUNTU1J1bGVzZXQoXCIuZm9vXCIsIHsgY29sb3I6IFwicmVkXCIgfSwgLi4uKVxuICogICAgIGdlbmVyYXRlQ1NTUnVsZXNldChcIi5mb286YWN0aXZlXCIsIHsgZm9udFdlaWdodDogXCJib2xkXCIgfSwgLi4uKVxuICogICAgIGdlbmVyYXRlQ1NTUnVsZXNldChcIi5mb286YWN0aXZlIC5mb29fYmFyXCIsIHsgaGVpZ2h0OiAxMCB9LCAuLi4pXG4gKiAgICAgLy8gVGhlc2UgMiB3aWxsIGJlIHdyYXBwZWQgaW4gQG1lZGlhIHNjcmVlbiB7fVxuICogICAgIGdlbmVyYXRlQ1NTUnVsZXNldChcIi5mb29cIiwgeyBoZWlnaHQ6IDIwIH0sIC4uLilcbiAqICAgICBnZW5lcmF0ZUNTU1J1bGVzZXQoXCIuZm9vOmhvdmVyXCIsIHsgYmFja2dyb3VuZENvbG9yOiBcImJsYWNrXCIgfSwgLi4uKVxuICovXG52YXIgZ2VuZXJhdGVDU1MgPSBmdW5jdGlvbiBnZW5lcmF0ZUNTUyhzZWxlY3Rvciwgc3R5bGVUeXBlcywgc3RyaW5nSGFuZGxlcnMsIHVzZUltcG9ydGFudCkge1xuICAgIHZhciBtZXJnZWQgPSBzdHlsZVR5cGVzLnJlZHVjZShfdXRpbC5yZWN1cnNpdmVNZXJnZSk7XG5cbiAgICB2YXIgZGVjbGFyYXRpb25zID0ge307XG4gICAgdmFyIG1lZGlhUXVlcmllcyA9IHt9O1xuICAgIHZhciBwc2V1ZG9TdHlsZXMgPSB7fTtcblxuICAgIE9iamVjdC5rZXlzKG1lcmdlZCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmIChrZXlbMF0gPT09ICc6Jykge1xuICAgICAgICAgICAgcHNldWRvU3R5bGVzW2tleV0gPSBtZXJnZWRba2V5XTtcbiAgICAgICAgfSBlbHNlIGlmIChrZXlbMF0gPT09ICdAJykge1xuICAgICAgICAgICAgbWVkaWFRdWVyaWVzW2tleV0gPSBtZXJnZWRba2V5XTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlY2xhcmF0aW9uc1trZXldID0gbWVyZ2VkW2tleV07XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiBnZW5lcmF0ZUNTU1J1bGVzZXQoc2VsZWN0b3IsIGRlY2xhcmF0aW9ucywgc3RyaW5nSGFuZGxlcnMsIHVzZUltcG9ydGFudCkgKyBPYmplY3Qua2V5cyhwc2V1ZG9TdHlsZXMpLm1hcChmdW5jdGlvbiAocHNldWRvU2VsZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIGdlbmVyYXRlQ1NTUnVsZXNldChzZWxlY3RvciArIHBzZXVkb1NlbGVjdG9yLCBwc2V1ZG9TdHlsZXNbcHNldWRvU2VsZWN0b3JdLCBzdHJpbmdIYW5kbGVycywgdXNlSW1wb3J0YW50KTtcbiAgICB9KS5qb2luKFwiXCIpICsgT2JqZWN0LmtleXMobWVkaWFRdWVyaWVzKS5tYXAoZnVuY3Rpb24gKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgdmFyIHJ1bGVzZXQgPSBnZW5lcmF0ZUNTUyhzZWxlY3RvciwgW21lZGlhUXVlcmllc1ttZWRpYVF1ZXJ5XV0sIHN0cmluZ0hhbmRsZXJzLCB1c2VJbXBvcnRhbnQpO1xuICAgICAgICByZXR1cm4gbWVkaWFRdWVyeSArICd7JyArIHJ1bGVzZXQgKyAnfSc7XG4gICAgfSkuam9pbihcIlwiKTtcbn07XG5cbmV4cG9ydHMuZ2VuZXJhdGVDU1MgPSBnZW5lcmF0ZUNTUztcbi8qKlxuICogSGVscGVyIG1ldGhvZCBvZiBnZW5lcmF0ZUNTU1J1bGVzZXQgdG8gZmFjaWxpdGF0ZSBjdXN0b20gaGFuZGxpbmcgb2YgY2VydGFpblxuICogQ1NTIHByb3BlcnRpZXMuIFVzZWQgZm9yIGUuZy4gZm9udCBmYW1pbGllcy5cbiAqXG4gKiBTZWUgZ2VuZXJhdGVDU1NSdWxlc2V0IGZvciB1c2FnZSBhbmQgZG9jdW1lbnRhdGlvbiBvZiBwYXJhbWF0ZXIgdHlwZXMuXG4gKi9cbnZhciBydW5TdHJpbmdIYW5kbGVycyA9IGZ1bmN0aW9uIHJ1blN0cmluZ0hhbmRsZXJzKGRlY2xhcmF0aW9ucywgc3RyaW5nSGFuZGxlcnMpIHtcbiAgICB2YXIgcmVzdWx0ID0ge307XG5cbiAgICBPYmplY3Qua2V5cyhkZWNsYXJhdGlvbnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAvLyBJZiBhIGhhbmRsZXIgZXhpc3RzIGZvciB0aGlzIHBhcnRpY3VsYXIga2V5LCBsZXQgaXQgaW50ZXJwcmV0XG4gICAgICAgIC8vIHRoYXQgdmFsdWUgZmlyc3QgYmVmb3JlIGNvbnRpbnVpbmdcbiAgICAgICAgaWYgKHN0cmluZ0hhbmRsZXJzICYmIHN0cmluZ0hhbmRsZXJzLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHJlc3VsdFtrZXldID0gc3RyaW5nSGFuZGxlcnNba2V5XShkZWNsYXJhdGlvbnNba2V5XSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHRba2V5XSA9IGRlY2xhcmF0aW9uc1trZXldO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xufTtcblxuLyoqXG4gKiBHZW5lcmF0ZSBhIENTUyBydWxlc2V0IHdpdGggdGhlIHNlbGVjdG9yIGFuZCBjb250YWluaW5nIHRoZSBkZWNsYXJhdGlvbnMuXG4gKlxuICogVGhpcyBmdW5jdGlvbiBhc3N1bWVzIHRoYXQgdGhlIGdpdmVuIGRlY2xhcmF0aW9ucyBkb24ndCBjb250YWluIGFueSBzcGVjaWFsXG4gKiBjaGlsZHJlbiAoc3VjaCBhcyBtZWRpYSBxdWVyaWVzLCBwc2V1ZG8tc2VsZWN0b3JzLCBvciBkZXNjZW5kYW50IHN0eWxlcykuXG4gKlxuICogTm90ZSB0aGF0IHRoaXMgbWV0aG9kIGRvZXMgbm90IGRlYWwgd2l0aCBuZXN0aW5nIHVzZWQgZm9yIGUuZy5cbiAqIHBzdWVkby1zZWxlY3RvcnMgb3IgbWVkaWEgcXVlcmllcy4gVGhhdCByZXNwb25zaWJpbGl0eSBpcyBsZWZ0IHRvICB0aGVcbiAqIGBnZW5lcmF0ZUNTU2AgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHNlbGVjdG9yOiB0aGUgc2VsZWN0b3IgYXNzb2NpYXRlZCB3aXRoIHRoZSBydWxlc2V0XG4gKiBAcGFyYW0ge09iamVjdH0gZGVjbGFyYXRpb25zOiBhIG1hcCBmcm9tIGNhbWVsQ2FzZWQgQ1NTIHByb3BlcnR5IG5hbWUgdG8gQ1NTXG4gKiAgICAgcHJvcGVydHkgdmFsdWUuXG4gKiBAcGFyYW0ge09iamVjdC48c3RyaW5nLCBmdW5jdGlvbj59IHN0cmluZ0hhbmRsZXJzOiBhIG1hcCBmcm9tIGNhbWVsQ2FzZWQgQ1NTXG4gKiAgICAgcHJvcGVydHkgbmFtZSB0byBhIGZ1bmN0aW9uIHdoaWNoIHdpbGwgbWFwIHRoZSBnaXZlbiB2YWx1ZSB0byB0aGUgdmFsdWVcbiAqICAgICB0aGF0IGlzIG91dHB1dC5cbiAqIEBwYXJhbSB7Ym9vbH0gdXNlSW1wb3J0YW50OiBBIGJvb2xlYW4gc2F5aW5nIHdoZXRoZXIgdG8gYXBwZW5kIFwiIWltcG9ydGFudFwiXG4gKiAgICAgdG8gZWFjaCBvZiB0aGUgQ1NTIGRlY2xhcmF0aW9ucy5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IEEgc3RyaW5nIG9mIHJhdyBDU1MuXG4gKlxuICogRXhhbXBsZXM6XG4gKlxuICogICAgZ2VuZXJhdGVDU1NSdWxlc2V0KFwiLmJsYWhcIiwgeyBjb2xvcjogXCJyZWRcIiB9KVxuICogICAgLT4gXCIuYmxhaHtjb2xvcjogcmVkICFpbXBvcnRhbnQ7fVwiXG4gKiAgICBnZW5lcmF0ZUNTU1J1bGVzZXQoXCIuYmxhaFwiLCB7IGNvbG9yOiBcInJlZFwiIH0sIHt9LCBmYWxzZSlcbiAqICAgIC0+IFwiLmJsYWh7Y29sb3I6IHJlZH1cIlxuICogICAgZ2VuZXJhdGVDU1NSdWxlc2V0KFwiLmJsYWhcIiwgeyBjb2xvcjogXCJyZWRcIiB9LCB7Y29sb3I6IGMgPT4gYy50b1VwcGVyQ2FzZX0pXG4gKiAgICAtPiBcIi5ibGFoe2NvbG9yOiBSRUR9XCJcbiAqICAgIGdlbmVyYXRlQ1NTUnVsZXNldChcIi5ibGFoOmhvdmVyXCIsIHsgY29sb3I6IFwicmVkXCIgfSlcbiAqICAgIC0+IFwiLmJsYWg6aG92ZXJ7Y29sb3I6IHJlZH1cIlxuICovXG52YXIgZ2VuZXJhdGVDU1NSdWxlc2V0ID0gZnVuY3Rpb24gZ2VuZXJhdGVDU1NSdWxlc2V0KHNlbGVjdG9yLCBkZWNsYXJhdGlvbnMsIHN0cmluZ0hhbmRsZXJzLCB1c2VJbXBvcnRhbnQpIHtcbiAgICB2YXIgaGFuZGxlZERlY2xhcmF0aW9ucyA9IHJ1blN0cmluZ0hhbmRsZXJzKGRlY2xhcmF0aW9ucywgc3RyaW5nSGFuZGxlcnMpO1xuXG4gICAgdmFyIHByZWZpeGVkRGVjbGFyYXRpb25zID0gKDAsIF9pbmxpbmVTdHlsZVByZWZpeGVyU3RhdGljMlsnZGVmYXVsdCddKShoYW5kbGVkRGVjbGFyYXRpb25zKTtcblxuICAgIHZhciBwcmVmaXhlZFJ1bGVzID0gKDAsIF91dGlsLmZsYXR0ZW4pKCgwLCBfdXRpbC5vYmplY3RUb1BhaXJzKShwcmVmaXhlZERlY2xhcmF0aW9ucykubWFwKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgIHZhciBfcmVmMiA9IF9zbGljZWRUb0FycmF5KF9yZWYsIDIpO1xuXG4gICAgICAgIHZhciBrZXkgPSBfcmVmMlswXTtcbiAgICAgICAgdmFyIHZhbHVlID0gX3JlZjJbMV07XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICB2YXIgX3JldCA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy8gaW5saW5lLXN0eWxlLXByZWZpeC1hbGwgcmV0dXJucyBhbiBhcnJheSB3aGVuIHRoZXJlIHNob3VsZCBiZVxuICAgICAgICAgICAgICAgIC8vIG11bHRpcGxlIHJ1bGVzLCB3ZSB3aWxsIGZsYXR0ZW4gdG8gc2luZ2xlIHJ1bGVzXG5cbiAgICAgICAgICAgICAgICB2YXIgcHJlZml4ZWRWYWx1ZXMgPSBbXTtcbiAgICAgICAgICAgICAgICB2YXIgdW5wcmVmaXhlZFZhbHVlcyA9IFtdO1xuXG4gICAgICAgICAgICAgICAgdmFsdWUuZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodi5pbmRleE9mKCctJykgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWZpeGVkVmFsdWVzLnB1c2godik7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB1bnByZWZpeGVkVmFsdWVzLnB1c2godik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHByZWZpeGVkVmFsdWVzLnNvcnQoKTtcbiAgICAgICAgICAgICAgICB1bnByZWZpeGVkVmFsdWVzLnNvcnQoKTtcblxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHY6IHByZWZpeGVkVmFsdWVzLmNvbmNhdCh1bnByZWZpeGVkVmFsdWVzKS5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBba2V5LCB2XTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSkoKTtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBfcmV0ID09PSAnb2JqZWN0JykgcmV0dXJuIF9yZXQudjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW1trZXksIHZhbHVlXV07XG4gICAgfSkpO1xuXG4gICAgdmFyIHJ1bGVzID0gcHJlZml4ZWRSdWxlcy5tYXAoZnVuY3Rpb24gKF9yZWYzKSB7XG4gICAgICAgIHZhciBfcmVmMzIgPSBfc2xpY2VkVG9BcnJheShfcmVmMywgMik7XG5cbiAgICAgICAgdmFyIGtleSA9IF9yZWYzMlswXTtcbiAgICAgICAgdmFyIHZhbHVlID0gX3JlZjMyWzFdO1xuXG4gICAgICAgIHZhciBzdHJpbmdWYWx1ZSA9ICgwLCBfdXRpbC5zdHJpbmdpZnlWYWx1ZSkoa2V5LCB2YWx1ZSk7XG4gICAgICAgIHZhciByZXQgPSAoMCwgX3V0aWwua2ViYWJpZnlTdHlsZU5hbWUpKGtleSkgKyAnOicgKyBzdHJpbmdWYWx1ZSArICc7JztcbiAgICAgICAgcmV0dXJuIHVzZUltcG9ydGFudCA9PT0gZmFsc2UgPyByZXQgOiAoMCwgX3V0aWwuaW1wb3J0YW50aWZ5KShyZXQpO1xuICAgIH0pLmpvaW4oXCJcIik7XG5cbiAgICBpZiAocnVsZXMpIHtcbiAgICAgICAgcmV0dXJuIHNlbGVjdG9yICsgJ3snICsgcnVsZXMgKyAnfSc7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxufTtcbmV4cG9ydHMuZ2VuZXJhdGVDU1NSdWxlc2V0ID0gZ2VuZXJhdGVDU1NSdWxlc2V0OyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9zbGljZWRUb0FycmF5ID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbJ3JldHVybiddKSBfaVsncmV0dXJuJ10oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9IHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgcmV0dXJuIGFycjsgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHsgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTsgfSBlbHNlIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZScpOyB9IH07IH0pKCk7XG5cbnZhciBfdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG52YXIgX2luamVjdCA9IHJlcXVpcmUoJy4vaW5qZWN0Jyk7XG5cbnZhciBTdHlsZVNoZWV0ID0ge1xuICAgIGNyZWF0ZTogZnVuY3Rpb24gY3JlYXRlKHNoZWV0RGVmaW5pdGlvbikge1xuICAgICAgICByZXR1cm4gKDAsIF91dGlsLm1hcE9iaikoc2hlZXREZWZpbml0aW9uLCBmdW5jdGlvbiAoX3JlZikge1xuICAgICAgICAgICAgdmFyIF9yZWYyID0gX3NsaWNlZFRvQXJyYXkoX3JlZiwgMik7XG5cbiAgICAgICAgICAgIHZhciBrZXkgPSBfcmVmMlswXTtcbiAgICAgICAgICAgIHZhciB2YWwgPSBfcmVmMlsxXTtcblxuICAgICAgICAgICAgcmV0dXJuIFtrZXksIHtcbiAgICAgICAgICAgICAgICAvLyBUT0RPKGVtaWx5KTogTWFrZSBhICdwcm9kdWN0aW9uJyBtb2RlIHdoaWNoIGRvZXNuJ3QgcHJlcGVuZFxuICAgICAgICAgICAgICAgIC8vIHRoZSBjbGFzcyBuYW1lIGhlcmUsIHRvIG1ha2UgdGhlIGdlbmVyYXRlZCBDU1Mgc21hbGxlci5cbiAgICAgICAgICAgICAgICBfbmFtZToga2V5ICsgJ18nICsgKDAsIF91dGlsLmhhc2hPYmplY3QpKHZhbCksXG4gICAgICAgICAgICAgICAgX2RlZmluaXRpb246IHZhbFxuICAgICAgICAgICAgfV07XG4gICAgICAgIH0pO1xuICAgIH0sXG5cbiAgICByZWh5ZHJhdGU6IGZ1bmN0aW9uIHJlaHlkcmF0ZSgpIHtcbiAgICAgICAgdmFyIHJlbmRlcmVkQ2xhc3NOYW1lcyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IFtdIDogYXJndW1lbnRzWzBdO1xuXG4gICAgICAgICgwLCBfaW5qZWN0LmFkZFJlbmRlcmVkQ2xhc3NOYW1lcykocmVuZGVyZWRDbGFzc05hbWVzKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIFV0aWxpdGllcyBmb3IgdXNpbmcgQXBocm9kaXRlIHNlcnZlci1zaWRlLlxuICovXG52YXIgU3R5bGVTaGVldFNlcnZlciA9IHtcbiAgICByZW5kZXJTdGF0aWM6IGZ1bmN0aW9uIHJlbmRlclN0YXRpYyhyZW5kZXJGdW5jKSB7XG4gICAgICAgICgwLCBfaW5qZWN0LnJlc2V0KSgpO1xuICAgICAgICAoMCwgX2luamVjdC5zdGFydEJ1ZmZlcmluZykoKTtcbiAgICAgICAgdmFyIGh0bWwgPSByZW5kZXJGdW5jKCk7XG4gICAgICAgIHZhciBjc3NDb250ZW50ID0gKDAsIF9pbmplY3QuZmx1c2hUb1N0cmluZykoKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaHRtbDogaHRtbCxcbiAgICAgICAgICAgIGNzczoge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IGNzc0NvbnRlbnQsXG4gICAgICAgICAgICAgICAgcmVuZGVyZWRDbGFzc05hbWVzOiAoMCwgX2luamVjdC5nZXRSZW5kZXJlZENsYXNzTmFtZXMpKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICB9XG59O1xuXG4vKipcbiAqIFV0aWxpdGllcyBmb3IgdXNpbmcgQXBocm9kaXRlIGluIHRlc3RzLlxuICpcbiAqIE5vdCBtZWFudCB0byBiZSB1c2VkIGluIHByb2R1Y3Rpb24uXG4gKi9cbnZhciBTdHlsZVNoZWV0VGVzdFV0aWxzID0ge1xuICAgIC8qKlxuICAgICAqIFByZXZlbnQgc3R5bGVzIGZyb20gYmVpbmcgaW5qZWN0ZWQgaW50byB0aGUgRE9NLlxuICAgICAqXG4gICAgICogVGhpcyBpcyB1c2VmdWwgaW4gc2l0dWF0aW9ucyB3aGVyZSB5b3UnZCBsaWtlIHRvIHRlc3QgcmVuZGVyaW5nIFVJXG4gICAgICogY29tcG9uZW50cyB3aGljaCB1c2UgQXBocm9kaXRlIHdpdGhvdXQgYW55IG9mIHRoZSBzaWRlLWVmZmVjdHMgb2ZcbiAgICAgKiBBcGhyb2RpdGUgaGFwcGVuaW5nLiBQYXJ0aWN1bGFybHkgdXNlZnVsIGZvciB0ZXN0aW5nIHRoZSBvdXRwdXQgb2ZcbiAgICAgKiBjb21wb25lbnRzIHdoZW4geW91IGhhdmUgbm8gRE9NLCBlLmcuIHRlc3RpbmcgaW4gTm9kZSB3aXRob3V0IGEgZmFrZSBET00uXG4gICAgICpcbiAgICAgKiBTaG91bGQgYmUgcGFpcmVkIHdpdGggYSBzdWJzZXF1ZW50IGNhbGwgdG9cbiAgICAgKiBjbGVhckJ1ZmZlckFuZFJlc3VtZVN0eWxlSW5qZWN0aW9uLlxuICAgICAqL1xuICAgIHN1cHByZXNzU3R5bGVJbmplY3Rpb246IGZ1bmN0aW9uIHN1cHByZXNzU3R5bGVJbmplY3Rpb24oKSB7XG4gICAgICAgICgwLCBfaW5qZWN0LnJlc2V0KSgpO1xuICAgICAgICAoMCwgX2luamVjdC5zdGFydEJ1ZmZlcmluZykoKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogT3Bwb3NpdGUgbWV0aG9kIG9mIHByZXZlbnRTdHlsZUluamVjdC5cbiAgICAgKi9cbiAgICBjbGVhckJ1ZmZlckFuZFJlc3VtZVN0eWxlSW5qZWN0aW9uOiBmdW5jdGlvbiBjbGVhckJ1ZmZlckFuZFJlc3VtZVN0eWxlSW5qZWN0aW9uKCkge1xuICAgICAgICAoMCwgX2luamVjdC5yZXNldCkoKTtcbiAgICB9XG59O1xuXG52YXIgY3NzID0gZnVuY3Rpb24gY3NzKCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBzdHlsZURlZmluaXRpb25zID0gQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIHN0eWxlRGVmaW5pdGlvbnNbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgfVxuXG4gICAgdmFyIHVzZUltcG9ydGFudCA9IHRydWU7IC8vIEFwcGVuZCAhaW1wb3J0YW50IHRvIGFsbCBzdHlsZSBkZWZpbml0aW9uc1xuICAgIHJldHVybiAoMCwgX2luamVjdC5pbmplY3RBbmRHZXRDbGFzc05hbWUpKHVzZUltcG9ydGFudCwgc3R5bGVEZWZpbml0aW9ucyk7XG59O1xuXG5leHBvcnRzWydkZWZhdWx0J10gPSB7XG4gICAgU3R5bGVTaGVldDogU3R5bGVTaGVldCxcbiAgICBTdHlsZVNoZWV0U2VydmVyOiBTdHlsZVNoZWV0U2VydmVyLFxuICAgIFN0eWxlU2hlZXRUZXN0VXRpbHM6IFN0eWxlU2hlZXRUZXN0VXRpbHMsXG4gICAgY3NzOiBjc3Ncbn07XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9hc2FwID0gcmVxdWlyZSgnYXNhcCcpO1xuXG52YXIgX2FzYXAyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfYXNhcCk7XG5cbnZhciBfZ2VuZXJhdGUgPSByZXF1aXJlKCcuL2dlbmVyYXRlJyk7XG5cbnZhciBfdXRpbCA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG4vLyBUaGUgY3VycmVudCA8c3R5bGU+IHRhZyB3ZSBhcmUgaW5zZXJ0aW5nIGludG8sIG9yIG51bGwgaWYgd2UgaGF2ZW4ndFxuLy8gaW5zZXJ0ZWQgYW55dGhpbmcgeWV0LiBXZSBjb3VsZCBmaW5kIHRoaXMgZWFjaCB0aW1lIHVzaW5nXG4vLyBgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcInN0eWxlW2RhdGEtYXBocm9kaXRlXCJdKWAsIGJ1dCBob2xkaW5nIG9udG8gaXQgaXNcbi8vIGZhc3Rlci5cbnZhciBzdHlsZVRhZyA9IG51bGw7XG5cbi8vIEluamVjdCBhIHN0cmluZyBvZiBzdHlsZXMgaW50byBhIDxzdHlsZT4gdGFnIGluIHRoZSBoZWFkIG9mIHRoZSBkb2N1bWVudC4gVGhpc1xuLy8gd2lsbCBhdXRvbWF0aWNhbGx5IGNyZWF0ZSBhIHN0eWxlIHRhZyBhbmQgdGhlbiBjb250aW51ZSB0byB1c2UgaXQgZm9yXG4vLyBtdWx0aXBsZSBpbmplY3Rpb25zLiBJdCB3aWxsIGFsc28gdXNlIGEgc3R5bGUgdGFnIHdpdGggdGhlIGBkYXRhLWFwaHJvZGl0ZWBcbi8vIHRhZyBvbiBpdCBpZiB0aGF0IGV4aXN0cyBpbiB0aGUgRE9NLiBUaGlzIGNvdWxkIGJlIHVzZWQgZm9yIGUuZy4gcmV1c2luZyB0aGVcbi8vIHNhbWUgc3R5bGUgdGFnIHRoYXQgc2VydmVyLXNpZGUgcmVuZGVyaW5nIGluc2VydHMuXG52YXIgaW5qZWN0U3R5bGVUYWcgPSBmdW5jdGlvbiBpbmplY3RTdHlsZVRhZyhjc3NDb250ZW50cykge1xuICAgIGlmIChzdHlsZVRhZyA9PSBudWxsKSB7XG4gICAgICAgIC8vIFRyeSB0byBmaW5kIGEgc3R5bGUgdGFnIHdpdGggdGhlIGBkYXRhLWFwaHJvZGl0ZWAgYXR0cmlidXRlIGZpcnN0LlxuICAgICAgICBzdHlsZVRhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJzdHlsZVtkYXRhLWFwaHJvZGl0ZV1cIik7XG5cbiAgICAgICAgLy8gSWYgdGhhdCBkb2Vzbid0IHdvcmssIGdlbmVyYXRlIGEgbmV3IHN0eWxlIHRhZy5cbiAgICAgICAgaWYgKHN0eWxlVGFnID09IG51bGwpIHtcbiAgICAgICAgICAgIC8vIFRha2VuIGZyb21cbiAgICAgICAgICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTI0Njk2L2hvdy10by1jcmVhdGUtYS1zdHlsZS10YWctd2l0aC1qYXZhc2NyaXB0XG4gICAgICAgICAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmhlYWQgfHwgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgICAgICAgICAgIHN0eWxlVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICAgICAgICAgICAgc3R5bGVUYWcudHlwZSA9ICd0ZXh0L2Nzcyc7XG4gICAgICAgICAgICBzdHlsZVRhZy5zZXRBdHRyaWJ1dGUoXCJkYXRhLWFwaHJvZGl0ZVwiLCBcIlwiKTtcbiAgICAgICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoc3R5bGVUYWcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHN0eWxlVGFnLnN0eWxlU2hlZXQpIHtcbiAgICAgICAgc3R5bGVUYWcuc3R5bGVTaGVldC5jc3NUZXh0ICs9IGNzc0NvbnRlbnRzO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHN0eWxlVGFnLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzc0NvbnRlbnRzKSk7XG4gICAgfVxufTtcblxuLy8gQ3VzdG9tIGhhbmRsZXJzIGZvciBzdHJpbmdpZnlpbmcgQ1NTIHZhbHVlcyB0aGF0IGhhdmUgc2lkZSBlZmZlY3RzXG4vLyAoc3VjaCBhcyBmb250RmFtaWx5LCB3aGljaCBjYW4gY2F1c2UgQGZvbnQtZmFjZSBydWxlcyB0byBiZSBpbmplY3RlZClcbnZhciBzdHJpbmdIYW5kbGVycyA9IHtcbiAgICAvLyBXaXRoIGZvbnRGYW1pbHkgd2UgbG9vayBmb3Igb2JqZWN0cyB0aGF0IGFyZSBwYXNzZWQgaW4gYW5kIGludGVycHJldFxuICAgIC8vIHRoZW0gYXMgQGZvbnQtZmFjZSBydWxlcyB0aGF0IHdlIG5lZWQgdG8gaW5qZWN0LiBUaGUgdmFsdWUgb2YgZm9udEZhbWlseVxuICAgIC8vIGNhbiBlaXRoZXIgYmUgYSBzdHJpbmcgKGFzIG5vcm1hbCksIGFuIG9iamVjdCAoYSBzaW5nbGUgZm9udCBmYWNlKSwgb3JcbiAgICAvLyBhbiBhcnJheSBvZiBvYmplY3RzIGFuZCBzdHJpbmdzLlxuICAgIGZvbnRGYW1pbHk6IGZ1bmN0aW9uIGZvbnRGYW1pbHkodmFsKSB7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHZhbCkpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWwubWFwKGZvbnRGYW1pbHkpLmpvaW4oXCIsXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiB2YWwgPT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIGluamVjdFN0eWxlT25jZSh2YWwuZm9udEZhbWlseSwgXCJAZm9udC1mYWNlXCIsIFt2YWxdLCBmYWxzZSk7XG4gICAgICAgICAgICByZXR1cm4gJ1wiJyArIHZhbC5mb250RmFtaWx5ICsgJ1wiJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gV2l0aCBhbmltYXRpb25OYW1lIHdlIGxvb2sgZm9yIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGtleWZyYW1lcyBhbmRcbiAgICAvLyBpbmplY3QgdGhlbSBhcyBhbiBgQGtleWZyYW1lc2AgYmxvY2ssIHJldHVybmluZyBhIHVuaXF1ZWx5IGdlbmVyYXRlZFxuICAgIC8vIG5hbWUuIFRoZSBrZXlmcmFtZXMgb2JqZWN0IHNob3VsZCBsb29rIGxpa2VcbiAgICAvLyAgYW5pbWF0aW9uTmFtZToge1xuICAgIC8vICAgIGZyb206IHtcbiAgICAvLyAgICAgIGxlZnQ6IDAsXG4gICAgLy8gICAgICB0b3A6IDAsXG4gICAgLy8gICAgfSxcbiAgICAvLyAgICAnNTAlJzoge1xuICAgIC8vICAgICAgbGVmdDogMTUsXG4gICAgLy8gICAgICB0b3A6IDUsXG4gICAgLy8gICAgfSxcbiAgICAvLyAgICB0bzoge1xuICAgIC8vICAgICAgbGVmdDogMjAsXG4gICAgLy8gICAgICB0b3A6IDIwLFxuICAgIC8vICAgIH1cbiAgICAvLyAgfVxuICAgIC8vIFRPRE8oZW1pbHkpOiBgc3RyaW5nSGFuZGxlcnNgIGRvZXNuJ3QgbGV0IHVzIHJlbmFtZSB0aGUga2V5LCBzbyBJIGhhdmVcbiAgICAvLyB0byB1c2UgYGFuaW1hdGlvbk5hbWVgIGhlcmUuIEltcHJvdmUgdGhhdCBzbyB3ZSBjYW4gY2FsbCB0aGlzXG4gICAgLy8gYGFuaW1hdGlvbmAgaW5zdGVhZCBvZiBgYW5pbWF0aW9uTmFtZWAuXG4gICAgYW5pbWF0aW9uTmFtZTogZnVuY3Rpb24gYW5pbWF0aW9uTmFtZSh2YWwpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB2YWwgIT09IFwib2JqZWN0XCIpIHtcbiAgICAgICAgICAgIHJldHVybiB2YWw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBHZW5lcmF0ZSBhIHVuaXF1ZSBuYW1lIGJhc2VkIG9uIHRoZSBoYXNoIG9mIHRoZSBvYmplY3QuIFdlIGNhbid0XG4gICAgICAgIC8vIGp1c3QgdXNlIHRoZSBoYXNoIGJlY2F1c2UgdGhlIG5hbWUgY2FuJ3Qgc3RhcnQgd2l0aCBhIG51bWJlci5cbiAgICAgICAgLy8gVE9ETyhlbWlseSk6IHRoaXMgcHJvYmFibHkgbWFrZXMgZGVidWdnaW5nIGhhcmQsIGFsbG93IGEgY3VzdG9tXG4gICAgICAgIC8vIG5hbWU/XG4gICAgICAgIHZhciBuYW1lID0gJ2tleWZyYW1lXycgKyAoMCwgX3V0aWwuaGFzaE9iamVjdCkodmFsKTtcblxuICAgICAgICAvLyBTaW5jZSBrZXlmcmFtZXMgbmVlZCAzIGxheWVycyBvZiBuZXN0aW5nLCB3ZSB1c2UgYGdlbmVyYXRlQ1NTYCB0b1xuICAgICAgICAvLyBidWlsZCB0aGUgaW5uZXIgbGF5ZXJzIGFuZCB3cmFwIGl0IGluIGBAa2V5ZnJhbWVzYCBvdXJzZWx2ZXMuXG4gICAgICAgIHZhciBmaW5hbFZhbCA9ICdAa2V5ZnJhbWVzICcgKyBuYW1lICsgJ3snO1xuICAgICAgICBPYmplY3Qua2V5cyh2YWwpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgZmluYWxWYWwgKz0gKDAsIF9nZW5lcmF0ZS5nZW5lcmF0ZUNTUykoa2V5LCBbdmFsW2tleV1dLCBzdHJpbmdIYW5kbGVycywgZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICAgICAgZmluYWxWYWwgKz0gJ30nO1xuXG4gICAgICAgIGluamVjdEdlbmVyYXRlZENTU09uY2UobmFtZSwgZmluYWxWYWwpO1xuXG4gICAgICAgIHJldHVybiBuYW1lO1xuICAgIH1cbn07XG5cbi8vIFRoaXMgaXMgYSBtYXAgZnJvbSBBcGhyb2RpdGUncyBnZW5lcmF0ZWQgY2xhc3MgbmFtZXMgdG8gYHRydWVgIChhY3RpbmcgYXMgYVxuLy8gc2V0IG9mIGNsYXNzIG5hbWVzKVxudmFyIGFscmVhZHlJbmplY3RlZCA9IHt9O1xuXG4vLyBUaGlzIGlzIHRoZSBidWZmZXIgb2Ygc3R5bGVzIHdoaWNoIGhhdmUgbm90IHlldCBiZWVuIGZsdXNoZWQuXG52YXIgaW5qZWN0aW9uQnVmZmVyID0gXCJcIjtcblxuLy8gQSBmbGFnIHRvIHRlbGwgaWYgd2UgYXJlIGFscmVhZHkgYnVmZmVyaW5nIHN0eWxlcy4gVGhpcyBjb3VsZCBoYXBwZW4gZWl0aGVyXG4vLyBiZWNhdXNlIHdlIHNjaGVkdWxlZCBhIGZsdXNoIGNhbGwgYWxyZWFkeSwgc28gbmV3bHkgYWRkZWQgc3R5bGVzIHdpbGxcbi8vIGFscmVhZHkgYmUgZmx1c2hlZCwgb3IgYmVjYXVzZSB3ZSBhcmUgc3RhdGljYWxseSBidWZmZXJpbmcgb24gdGhlIHNlcnZlci5cbnZhciBpc0J1ZmZlcmluZyA9IGZhbHNlO1xuXG52YXIgaW5qZWN0R2VuZXJhdGVkQ1NTT25jZSA9IGZ1bmN0aW9uIGluamVjdEdlbmVyYXRlZENTU09uY2Uoa2V5LCBnZW5lcmF0ZWRDU1MpIHtcbiAgICBpZiAoIWFscmVhZHlJbmplY3RlZFtrZXldKSB7XG4gICAgICAgIGlmICghaXNCdWZmZXJpbmcpIHtcbiAgICAgICAgICAgIC8vIFdlIHNob3VsZCBuZXZlciBiZSBhdXRvbWF0aWNhbGx5IGJ1ZmZlcmluZyBvbiB0aGUgc2VydmVyIChvciBhbnlcbiAgICAgICAgICAgIC8vIHBsYWNlIHdpdGhvdXQgYSBkb2N1bWVudCksIHNvIGd1YXJkIGFnYWluc3QgdGhhdC5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgYXV0b21hdGljYWxseSBidWZmZXIgd2l0aG91dCBhIGRvY3VtZW50XCIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBJZiB3ZSdyZSBub3QgYWxyZWFkeSBidWZmZXJpbmcsIHNjaGVkdWxlIGEgY2FsbCB0byBmbHVzaCB0aGVcbiAgICAgICAgICAgIC8vIGN1cnJlbnQgc3R5bGVzLlxuICAgICAgICAgICAgaXNCdWZmZXJpbmcgPSB0cnVlO1xuICAgICAgICAgICAgKDAsIF9hc2FwMlsnZGVmYXVsdCddKShmbHVzaFRvU3R5bGVUYWcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaW5qZWN0aW9uQnVmZmVyICs9IGdlbmVyYXRlZENTUztcbiAgICAgICAgYWxyZWFkeUluamVjdGVkW2tleV0gPSB0cnVlO1xuICAgIH1cbn07XG5cbnZhciBpbmplY3RTdHlsZU9uY2UgPSBmdW5jdGlvbiBpbmplY3RTdHlsZU9uY2Uoa2V5LCBzZWxlY3RvciwgZGVmaW5pdGlvbnMsIHVzZUltcG9ydGFudCkge1xuICAgIGlmICghYWxyZWFkeUluamVjdGVkW2tleV0pIHtcbiAgICAgICAgdmFyIGdlbmVyYXRlZCA9ICgwLCBfZ2VuZXJhdGUuZ2VuZXJhdGVDU1MpKHNlbGVjdG9yLCBkZWZpbml0aW9ucywgc3RyaW5nSGFuZGxlcnMsIHVzZUltcG9ydGFudCk7XG5cbiAgICAgICAgaW5qZWN0R2VuZXJhdGVkQ1NTT25jZShrZXksIGdlbmVyYXRlZCk7XG4gICAgfVxufTtcblxuZXhwb3J0cy5pbmplY3RTdHlsZU9uY2UgPSBpbmplY3RTdHlsZU9uY2U7XG52YXIgcmVzZXQgPSBmdW5jdGlvbiByZXNldCgpIHtcbiAgICBpbmplY3Rpb25CdWZmZXIgPSBcIlwiO1xuICAgIGFscmVhZHlJbmplY3RlZCA9IHt9O1xuICAgIGlzQnVmZmVyaW5nID0gZmFsc2U7XG4gICAgc3R5bGVUYWcgPSBudWxsO1xufTtcblxuZXhwb3J0cy5yZXNldCA9IHJlc2V0O1xudmFyIHN0YXJ0QnVmZmVyaW5nID0gZnVuY3Rpb24gc3RhcnRCdWZmZXJpbmcoKSB7XG4gICAgaWYgKGlzQnVmZmVyaW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBidWZmZXIgd2hpbGUgYWxyZWFkeSBidWZmZXJpbmdcIik7XG4gICAgfVxuICAgIGlzQnVmZmVyaW5nID0gdHJ1ZTtcbn07XG5cbmV4cG9ydHMuc3RhcnRCdWZmZXJpbmcgPSBzdGFydEJ1ZmZlcmluZztcbnZhciBmbHVzaFRvU3RyaW5nID0gZnVuY3Rpb24gZmx1c2hUb1N0cmluZygpIHtcbiAgICBpc0J1ZmZlcmluZyA9IGZhbHNlO1xuICAgIHZhciByZXQgPSBpbmplY3Rpb25CdWZmZXI7XG4gICAgaW5qZWN0aW9uQnVmZmVyID0gXCJcIjtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0cy5mbHVzaFRvU3RyaW5nID0gZmx1c2hUb1N0cmluZztcbnZhciBmbHVzaFRvU3R5bGVUYWcgPSBmdW5jdGlvbiBmbHVzaFRvU3R5bGVUYWcoKSB7XG4gICAgdmFyIGNzc0NvbnRlbnQgPSBmbHVzaFRvU3RyaW5nKCk7XG4gICAgaWYgKGNzc0NvbnRlbnQubGVuZ3RoID4gMCkge1xuICAgICAgICBpbmplY3RTdHlsZVRhZyhjc3NDb250ZW50KTtcbiAgICB9XG59O1xuXG5leHBvcnRzLmZsdXNoVG9TdHlsZVRhZyA9IGZsdXNoVG9TdHlsZVRhZztcbnZhciBnZXRSZW5kZXJlZENsYXNzTmFtZXMgPSBmdW5jdGlvbiBnZXRSZW5kZXJlZENsYXNzTmFtZXMoKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKGFscmVhZHlJbmplY3RlZCk7XG59O1xuXG5leHBvcnRzLmdldFJlbmRlcmVkQ2xhc3NOYW1lcyA9IGdldFJlbmRlcmVkQ2xhc3NOYW1lcztcbnZhciBhZGRSZW5kZXJlZENsYXNzTmFtZXMgPSBmdW5jdGlvbiBhZGRSZW5kZXJlZENsYXNzTmFtZXMoY2xhc3NOYW1lcykge1xuICAgIGNsYXNzTmFtZXMuZm9yRWFjaChmdW5jdGlvbiAoY2xhc3NOYW1lKSB7XG4gICAgICAgIGFscmVhZHlJbmplY3RlZFtjbGFzc05hbWVdID0gdHJ1ZTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydHMuYWRkUmVuZGVyZWRDbGFzc05hbWVzID0gYWRkUmVuZGVyZWRDbGFzc05hbWVzO1xuLyoqXG4gKiBJbmplY3Qgc3R5bGVzIGFzc29jaWF0ZWQgd2l0aCB0aGUgcGFzc2VkIHN0eWxlIGRlZmluaXRpb24gb2JqZWN0cywgYW5kIHJldHVyblxuICogYW4gYXNzb2NpYXRlZCBDU1MgY2xhc3MgbmFtZS5cbiAqXG4gKiBAcGFyYW0ge2Jvb2xlYW59IHVzZUltcG9ydGFudCBJZiB0cnVlLCB3aWxsIGFwcGVuZCAhaW1wb3J0YW50IHRvIGdlbmVyYXRlZFxuICogICAgIENTUyBvdXRwdXQuIGUuZy4ge2NvbG9yOiByZWR9IC0+IFwiY29sb3I6IHJlZCAhaW1wb3J0YW50XCIuXG4gKiBAcGFyYW0ge09iamVjdFtdfSBzdHlsZURlZmluaXRpb25zIHN0eWxlIGRlZmluaXRpb24gb2JqZWN0cyBhcyByZXR1cm5lZCBhc1xuICogICAgIHByb3BlcnRpZXMgb2YgdGhlIHJldHVybiB2YWx1ZSBvZiBTdHlsZVNoZWV0LmNyZWF0ZSgpLlxuICovXG52YXIgaW5qZWN0QW5kR2V0Q2xhc3NOYW1lID0gZnVuY3Rpb24gaW5qZWN0QW5kR2V0Q2xhc3NOYW1lKHVzZUltcG9ydGFudCwgc3R5bGVEZWZpbml0aW9ucykge1xuICAgIC8vIEZpbHRlciBvdXQgZmFsc3kgdmFsdWVzIGZyb20gdGhlIGlucHV0LCB0byBhbGxvdyBmb3JcbiAgICAvLyBgY3NzKGEsIHRlc3QgJiYgYylgXG4gICAgdmFyIHZhbGlkRGVmaW5pdGlvbnMgPSBzdHlsZURlZmluaXRpb25zLmZpbHRlcihmdW5jdGlvbiAoZGVmKSB7XG4gICAgICAgIHJldHVybiBkZWY7XG4gICAgfSk7XG5cbiAgICAvLyBCcmVhayBpZiB0aGVyZSBhcmVuJ3QgYW55IHZhbGlkIHN0eWxlcy5cbiAgICBpZiAodmFsaWREZWZpbml0aW9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuXG4gICAgdmFyIGNsYXNzTmFtZSA9IHZhbGlkRGVmaW5pdGlvbnMubWFwKGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIHJldHVybiBzLl9uYW1lO1xuICAgIH0pLmpvaW4oXCItb19PLVwiKTtcbiAgICBpbmplY3RTdHlsZU9uY2UoY2xhc3NOYW1lLCAnLicgKyBjbGFzc05hbWUsIHZhbGlkRGVmaW5pdGlvbnMubWFwKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkLl9kZWZpbml0aW9uO1xuICAgIH0pLCB1c2VJbXBvcnRhbnQpO1xuXG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbn07XG5leHBvcnRzLmluamVjdEFuZEdldENsYXNzTmFtZSA9IGluamVjdEFuZEdldENsYXNzTmFtZTsiLCIvLyBNb2R1bGUgd2l0aCB0aGUgc2FtZSBpbnRlcmZhY2UgYXMgdGhlIGNvcmUgYXBocm9kaXRlIG1vZHVsZSxcbi8vIGV4Y2VwdCB0aGF0IHN0eWxlcyBpbmplY3RlZCBkbyBub3QgYXV0b21hdGljYWxseSBoYXZlICFpbXBvcnRhbnRcbi8vIGFwcGVuZGVkIHRvIHRoZW0uXG4vL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2luamVjdCA9IHJlcXVpcmUoJy4vaW5qZWN0Jyk7XG5cbnZhciBfaW5kZXhKcyA9IHJlcXVpcmUoJy4vaW5kZXguanMnKTtcblxudmFyIGNzcyA9IGZ1bmN0aW9uIGNzcygpIHtcbiAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgc3R5bGVEZWZpbml0aW9ucyA9IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBzdHlsZURlZmluaXRpb25zW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIHZhciB1c2VJbXBvcnRhbnQgPSBmYWxzZTsgLy8gRG9uJ3QgYXBwZW5kICFpbXBvcnRhbnQgdG8gc3R5bGUgZGVmaW5pdGlvbnNcbiAgICByZXR1cm4gKDAsIF9pbmplY3QuaW5qZWN0QW5kR2V0Q2xhc3NOYW1lKSh1c2VJbXBvcnRhbnQsIHN0eWxlRGVmaW5pdGlvbnMpO1xufTtcblxuZXhwb3J0cy5TdHlsZVNoZWV0ID0gX2luZGV4SnMuU3R5bGVTaGVldDtcbmV4cG9ydHMuU3R5bGVTaGVldFNlcnZlciA9IF9pbmRleEpzLlN0eWxlU2hlZXRTZXJ2ZXI7XG5leHBvcnRzLlN0eWxlU2hlZXRUZXN0VXRpbHMgPSBfaW5kZXhKcy5TdHlsZVNoZWV0VGVzdFV0aWxzO1xuZXhwb3J0cy5jc3MgPSBjc3M7IiwiLy8ge0sxOiBWMSwgSzI6IFYyLCAuLi59IC0+IFtbSzEsIFYxXSwgW0syLCBWMl1dXG4ndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfc2xpY2VkVG9BcnJheSA9IChmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIHNsaWNlSXRlcmF0b3IoYXJyLCBpKSB7IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX2UgPSB1bmRlZmluZWQ7IHRyeSB7IGZvciAodmFyIF9pID0gYXJyW1N5bWJvbC5pdGVyYXRvcl0oKSwgX3M7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pWydyZXR1cm4nXSkgX2lbJ3JldHVybiddKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfSByZXR1cm4gZnVuY3Rpb24gKGFyciwgaSkgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSB7IHJldHVybiBhcnI7IH0gZWxzZSBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSB7IHJldHVybiBzbGljZUl0ZXJhdG9yKGFyciwgaSk7IH0gZWxzZSB7IHRocm93IG5ldyBUeXBlRXJyb3IoJ0ludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UnKTsgfSB9OyB9KSgpO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG52YXIgb2JqZWN0VG9QYWlycyA9IGZ1bmN0aW9uIG9iamVjdFRvUGFpcnMob2JqKSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaikubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIFtrZXksIG9ialtrZXldXTtcbiAgICB9KTtcbn07XG5cbmV4cG9ydHMub2JqZWN0VG9QYWlycyA9IG9iamVjdFRvUGFpcnM7XG4vLyBbW0sxLCBWMV0sIFtLMiwgVjJdXSAtPiB7SzE6IFYxLCBLMjogVjIsIC4uLn1cbnZhciBwYWlyc1RvT2JqZWN0ID0gZnVuY3Rpb24gcGFpcnNUb09iamVjdChwYWlycykge1xuICAgIHZhciByZXN1bHQgPSB7fTtcbiAgICBwYWlycy5mb3JFYWNoKGZ1bmN0aW9uIChfcmVmKSB7XG4gICAgICAgIHZhciBfcmVmMiA9IF9zbGljZWRUb0FycmF5KF9yZWYsIDIpO1xuXG4gICAgICAgIHZhciBrZXkgPSBfcmVmMlswXTtcbiAgICAgICAgdmFyIHZhbCA9IF9yZWYyWzFdO1xuXG4gICAgICAgIHJlc3VsdFtrZXldID0gdmFsO1xuICAgIH0pO1xuICAgIHJldHVybiByZXN1bHQ7XG59O1xuXG52YXIgbWFwT2JqID0gZnVuY3Rpb24gbWFwT2JqKG9iaiwgZm4pIHtcbiAgICByZXR1cm4gcGFpcnNUb09iamVjdChvYmplY3RUb1BhaXJzKG9iaikubWFwKGZuKSk7XG59O1xuXG5leHBvcnRzLm1hcE9iaiA9IG1hcE9iajtcbi8vIEZsYXR0ZW5zIGFuIGFycmF5IG9uZSBsZXZlbFxuLy8gW1tBXSwgW0IsIEMsIFtEXV1dIC0+IFtBLCBCLCBDLCBbRF1dXG52YXIgZmxhdHRlbiA9IGZ1bmN0aW9uIGZsYXR0ZW4obGlzdCkge1xuICAgIHJldHVybiBsaXN0LnJlZHVjZShmdW5jdGlvbiAobWVtbywgeCkge1xuICAgICAgICByZXR1cm4gbWVtby5jb25jYXQoeCk7XG4gICAgfSwgW10pO1xufTtcblxuZXhwb3J0cy5mbGF0dGVuID0gZmxhdHRlbjtcbnZhciBVUFBFUkNBU0VfUkUgPSAvKFtBLVpdKS9nO1xudmFyIE1TX1JFID0gL15tcy0vO1xuXG52YXIga2ViYWJpZnkgPSBmdW5jdGlvbiBrZWJhYmlmeShzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoVVBQRVJDQVNFX1JFLCAnLSQxJykudG9Mb3dlckNhc2UoKTtcbn07XG52YXIga2ViYWJpZnlTdHlsZU5hbWUgPSBmdW5jdGlvbiBrZWJhYmlmeVN0eWxlTmFtZShzdHJpbmcpIHtcbiAgICByZXR1cm4ga2ViYWJpZnkoc3RyaW5nKS5yZXBsYWNlKE1TX1JFLCAnLW1zLScpO1xufTtcblxuZXhwb3J0cy5rZWJhYmlmeVN0eWxlTmFtZSA9IGtlYmFiaWZ5U3R5bGVOYW1lO1xudmFyIHJlY3Vyc2l2ZU1lcmdlID0gZnVuY3Rpb24gcmVjdXJzaXZlTWVyZ2UoYSwgYikge1xuICAgIC8vIFRPRE8oamxmd29uZyk6IEhhbmRsZSBtYWxmb3JtZWQgaW5wdXQgd2hlcmUgYSBhbmQgYiBhcmUgbm90IHRoZSBzYW1lXG4gICAgLy8gdHlwZS5cblxuICAgIGlmICh0eXBlb2YgYSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgcmV0dXJuIGI7XG4gICAgfVxuXG4gICAgdmFyIHJldCA9IF9leHRlbmRzKHt9LCBhKTtcblxuICAgIE9iamVjdC5rZXlzKGIpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAocmV0Lmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgIHJldFtrZXldID0gcmVjdXJzaXZlTWVyZ2UoYVtrZXldLCBiW2tleV0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0W2tleV0gPSBiW2tleV07XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnRzLnJlY3Vyc2l2ZU1lcmdlID0gcmVjdXJzaXZlTWVyZ2U7XG4vKipcbiAqIENTUyBwcm9wZXJ0aWVzIHdoaWNoIGFjY2VwdCBudW1iZXJzIGJ1dCBhcmUgbm90IGluIHVuaXRzIG9mIFwicHhcIi5cbiAqIFRha2VuIGZyb20gUmVhY3QncyBDU1NQcm9wZXJ0eS5qc1xuICovXG52YXIgaXNVbml0bGVzc051bWJlciA9IHtcbiAgICBhbmltYXRpb25JdGVyYXRpb25Db3VudDogdHJ1ZSxcbiAgICBib3JkZXJJbWFnZU91dHNldDogdHJ1ZSxcbiAgICBib3JkZXJJbWFnZVNsaWNlOiB0cnVlLFxuICAgIGJvcmRlckltYWdlV2lkdGg6IHRydWUsXG4gICAgYm94RmxleDogdHJ1ZSxcbiAgICBib3hGbGV4R3JvdXA6IHRydWUsXG4gICAgYm94T3JkaW5hbEdyb3VwOiB0cnVlLFxuICAgIGNvbHVtbkNvdW50OiB0cnVlLFxuICAgIGZsZXg6IHRydWUsXG4gICAgZmxleEdyb3c6IHRydWUsXG4gICAgZmxleFBvc2l0aXZlOiB0cnVlLFxuICAgIGZsZXhTaHJpbms6IHRydWUsXG4gICAgZmxleE5lZ2F0aXZlOiB0cnVlLFxuICAgIGZsZXhPcmRlcjogdHJ1ZSxcbiAgICBncmlkUm93OiB0cnVlLFxuICAgIGdyaWRDb2x1bW46IHRydWUsXG4gICAgZm9udFdlaWdodDogdHJ1ZSxcbiAgICBsaW5lQ2xhbXA6IHRydWUsXG4gICAgbGluZUhlaWdodDogdHJ1ZSxcbiAgICBvcGFjaXR5OiB0cnVlLFxuICAgIG9yZGVyOiB0cnVlLFxuICAgIG9ycGhhbnM6IHRydWUsXG4gICAgdGFiU2l6ZTogdHJ1ZSxcbiAgICB3aWRvd3M6IHRydWUsXG4gICAgekluZGV4OiB0cnVlLFxuICAgIHpvb206IHRydWUsXG5cbiAgICAvLyBTVkctcmVsYXRlZCBwcm9wZXJ0aWVzXG4gICAgZmlsbE9wYWNpdHk6IHRydWUsXG4gICAgZmxvb2RPcGFjaXR5OiB0cnVlLFxuICAgIHN0b3BPcGFjaXR5OiB0cnVlLFxuICAgIHN0cm9rZURhc2hhcnJheTogdHJ1ZSxcbiAgICBzdHJva2VEYXNob2Zmc2V0OiB0cnVlLFxuICAgIHN0cm9rZU1pdGVybGltaXQ6IHRydWUsXG4gICAgc3Ryb2tlT3BhY2l0eTogdHJ1ZSxcbiAgICBzdHJva2VXaWR0aDogdHJ1ZVxufTtcblxuLyoqXG4gKiBUYWtlbiBmcm9tIFJlYWN0J3MgQ1NTUHJvcGVydHkuanNcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gcHJlZml4IHZlbmRvci1zcGVjaWZpYyBwcmVmaXgsIGVnOiBXZWJraXRcbiAqIEBwYXJhbSB7c3RyaW5nfSBrZXkgc3R5bGUgbmFtZSwgZWc6IHRyYW5zaXRpb25EdXJhdGlvblxuICogQHJldHVybiB7c3RyaW5nfSBzdHlsZSBuYW1lIHByZWZpeGVkIHdpdGggYHByZWZpeGAsIHByb3Blcmx5IGNhbWVsQ2FzZWQsIGVnOlxuICogV2Via2l0VHJhbnNpdGlvbkR1cmF0aW9uXG4gKi9cbmZ1bmN0aW9uIHByZWZpeEtleShwcmVmaXgsIGtleSkge1xuICAgIHJldHVybiBwcmVmaXggKyBrZXkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBrZXkuc3Vic3RyaW5nKDEpO1xufVxuXG4vKipcbiAqIFN1cHBvcnQgc3R5bGUgbmFtZXMgdGhhdCBtYXkgY29tZSBwYXNzZWQgaW4gcHJlZml4ZWQgYnkgYWRkaW5nIHBlcm11dGF0aW9uc1xuICogb2YgdmVuZG9yIHByZWZpeGVzLlxuICogVGFrZW4gZnJvbSBSZWFjdCdzIENTU1Byb3BlcnR5LmpzXG4gKi9cbnZhciBwcmVmaXhlcyA9IFsnV2Via2l0JywgJ21zJywgJ01veicsICdPJ107XG5cbi8vIFVzaW5nIE9iamVjdC5rZXlzIGhlcmUsIG9yIGVsc2UgdGhlIHZhbmlsbGEgZm9yLWluIGxvb3AgbWFrZXMgSUU4IGdvIGludG8gYW5cbi8vIGluZmluaXRlIGxvb3AsIGJlY2F1c2UgaXQgaXRlcmF0ZXMgb3ZlciB0aGUgbmV3bHkgYWRkZWQgcHJvcHMgdG9vLlxuLy8gVGFrZW4gZnJvbSBSZWFjdCdzIENTU1Byb3BlcnR5LmpzXG5PYmplY3Qua2V5cyhpc1VuaXRsZXNzTnVtYmVyKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgcHJlZml4ZXMuZm9yRWFjaChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgICAgIGlzVW5pdGxlc3NOdW1iZXJbcHJlZml4S2V5KHByZWZpeCwgcHJvcCldID0gaXNVbml0bGVzc051bWJlcltwcm9wXTtcbiAgICB9KTtcbn0pO1xuXG52YXIgc3RyaW5naWZ5VmFsdWUgPSBmdW5jdGlvbiBzdHJpbmdpZnlWYWx1ZShrZXksIHByb3ApIHtcbiAgICBpZiAodHlwZW9mIHByb3AgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgaWYgKGlzVW5pdGxlc3NOdW1iZXJba2V5XSkge1xuICAgICAgICAgICAgcmV0dXJuIFwiXCIgKyBwcm9wO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHByb3AgKyBcInB4XCI7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcHJvcDtcbiAgICB9XG59O1xuXG5leHBvcnRzLnN0cmluZ2lmeVZhbHVlID0gc3RyaW5naWZ5VmFsdWU7XG4vKipcbiAqIEpTIEltcGxlbWVudGF0aW9uIG9mIE11cm11ckhhc2gyXG4gKlxuICogQGF1dGhvciA8YSBocmVmPVwibWFpbHRvOmdhcnkuY291cnRAZ21haWwuY29tXCI+R2FyeSBDb3VydDwvYT5cbiAqIEBzZWUgaHR0cDovL2dpdGh1Yi5jb20vZ2FyeWNvdXJ0L211cm11cmhhc2gtanNcbiAqIEBhdXRob3IgPGEgaHJlZj1cIm1haWx0bzphYXBwbGVieUBnbWFpbC5jb21cIj5BdXN0aW4gQXBwbGVieTwvYT5cbiAqIEBzZWUgaHR0cDovL3NpdGVzLmdvb2dsZS5jb20vc2l0ZS9tdXJtdXJoYXNoL1xuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBzdHIgQVNDSUkgb25seVxuICogQHJldHVybiB7c3RyaW5nfSBCYXNlIDM2IGVuY29kZWQgaGFzaCByZXN1bHRcbiAqL1xuZnVuY3Rpb24gbXVybXVyaGFzaDJfMzJfZ2Moc3RyKSB7XG4gICAgdmFyIGwgPSBzdHIubGVuZ3RoO1xuICAgIHZhciBoID0gbDtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGsgPSB1bmRlZmluZWQ7XG5cbiAgICB3aGlsZSAobCA+PSA0KSB7XG4gICAgICAgIGsgPSBzdHIuY2hhckNvZGVBdChpKSAmIDB4ZmYgfCAoc3RyLmNoYXJDb2RlQXQoKytpKSAmIDB4ZmYpIDw8IDggfCAoc3RyLmNoYXJDb2RlQXQoKytpKSAmIDB4ZmYpIDw8IDE2IHwgKHN0ci5jaGFyQ29kZUF0KCsraSkgJiAweGZmKSA8PCAyNDtcblxuICAgICAgICBrID0gKGsgJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoKGsgPj4+IDE2KSAqIDB4NWJkMWU5OTUgJiAweGZmZmYpIDw8IDE2KTtcbiAgICAgICAgayBePSBrID4+PiAyNDtcbiAgICAgICAgayA9IChrICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKChrID4+PiAxNikgKiAweDViZDFlOTk1ICYgMHhmZmZmKSA8PCAxNik7XG5cbiAgICAgICAgaCA9IChoICYgMHhmZmZmKSAqIDB4NWJkMWU5OTUgKyAoKChoID4+PiAxNikgKiAweDViZDFlOTk1ICYgMHhmZmZmKSA8PCAxNikgXiBrO1xuXG4gICAgICAgIGwgLT0gNDtcbiAgICAgICAgKytpO1xuICAgIH1cblxuICAgIHN3aXRjaCAobCkge1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgICBoIF49IChzdHIuY2hhckNvZGVBdChpICsgMikgJiAweGZmKSA8PCAxNjtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgaCBePSAoc3RyLmNoYXJDb2RlQXQoaSArIDEpICYgMHhmZikgPDwgODtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgaCBePSBzdHIuY2hhckNvZGVBdChpKSAmIDB4ZmY7XG4gICAgICAgICAgICBoID0gKGggJiAweGZmZmYpICogMHg1YmQxZTk5NSArICgoKGggPj4+IDE2KSAqIDB4NWJkMWU5OTUgJiAweGZmZmYpIDw8IDE2KTtcbiAgICB9XG5cbiAgICBoIF49IGggPj4+IDEzO1xuICAgIGggPSAoaCAmIDB4ZmZmZikgKiAweDViZDFlOTk1ICsgKCgoaCA+Pj4gMTYpICogMHg1YmQxZTk5NSAmIDB4ZmZmZikgPDwgMTYpO1xuICAgIGggXj0gaCA+Pj4gMTU7XG5cbiAgICByZXR1cm4gKGggPj4+IDApLnRvU3RyaW5nKDM2KTtcbn1cblxuLy8gSGFzaCBhIGphdmFzY3JpcHQgb2JqZWN0IHVzaW5nIEpTT04uc3RyaW5naWZ5LiBUaGlzIGlzIHZlcnkgZmFzdCwgYWJvdXQgM1xuLy8gbWljcm9zZWNvbmRzIG9uIG15IGNvbXB1dGVyIGZvciBhIHNhbXBsZSBvYmplY3Q6XG4vLyBodHRwOi8vanNwZXJmLmNvbS90ZXN0LWhhc2hmbnYzMmEtaGFzaC81XG4vL1xuLy8gTm90ZSB0aGF0IHRoaXMgdXNlcyBKU09OLnN0cmluZ2lmeSB0byBzdHJpbmdpZnkgdGhlIG9iamVjdHMgc28gaW4gb3JkZXIgZm9yXG4vLyB0aGlzIHRvIHByb2R1Y2UgY29uc2lzdGVudCBoYXNoZXMgYnJvd3NlcnMgbmVlZCB0byBoYXZlIGEgY29uc2lzdGVudFxuLy8gb3JkZXJpbmcgb2Ygb2JqZWN0cy4gQmVuIEFscGVydCBzYXlzIHRoYXQgRmFjZWJvb2sgZGVwZW5kcyBvbiB0aGlzLCBzbyB3ZVxuLy8gY2FuIHByb2JhYmx5IGRlcGVuZCBvbiB0aGlzIHRvby5cbnZhciBoYXNoT2JqZWN0ID0gZnVuY3Rpb24gaGFzaE9iamVjdChvYmplY3QpIHtcbiAgICByZXR1cm4gbXVybXVyaGFzaDJfMzJfZ2MoSlNPTi5zdHJpbmdpZnkob2JqZWN0KSk7XG59O1xuXG5leHBvcnRzLmhhc2hPYmplY3QgPSBoYXNoT2JqZWN0O1xudmFyIElNUE9SVEFOVF9SRSA9IC9eKFteOl0rOi4qPykoICFpbXBvcnRhbnQpPzskLztcblxuLy8gR2l2ZW4gYSBzaW5nbGUgc3R5bGUgcnVsZSBzdHJpbmcgbGlrZSBcImE6IGI7XCIsIGFkZHMgIWltcG9ydGFudCB0byBnZW5lcmF0ZVxuLy8gXCJhOiBiICFpbXBvcnRhbnQ7XCIuXG52YXIgaW1wb3J0YW50aWZ5ID0gZnVuY3Rpb24gaW1wb3J0YW50aWZ5KHN0cmluZykge1xuICAgIHJldHVybiBzdHJpbmcucmVwbGFjZShJTVBPUlRBTlRfUkUsIGZ1bmN0aW9uIChfLCBiYXNlLCBpbXBvcnRhbnQpIHtcbiAgICAgICAgcmV0dXJuIGJhc2UgKyBcIiAhaW1wb3J0YW50O1wiO1xuICAgIH0pO1xufTtcbmV4cG9ydHMuaW1wb3J0YW50aWZ5ID0gaW1wb3J0YW50aWZ5OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9saWIvbm8taW1wb3J0YW50LmpzJyk7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLy8gcmF3QXNhcCBwcm92aWRlcyBldmVyeXRoaW5nIHdlIG5lZWQgZXhjZXB0IGV4Y2VwdGlvbiBtYW5hZ2VtZW50LlxudmFyIHJhd0FzYXAgPSByZXF1aXJlKFwiLi9yYXdcIik7XG4vLyBSYXdUYXNrcyBhcmUgcmVjeWNsZWQgdG8gcmVkdWNlIEdDIGNodXJuLlxudmFyIGZyZWVUYXNrcyA9IFtdO1xuLy8gV2UgcXVldWUgZXJyb3JzIHRvIGVuc3VyZSB0aGV5IGFyZSB0aHJvd24gaW4gcmlnaHQgb3JkZXIgKEZJRk8pLlxuLy8gQXJyYXktYXMtcXVldWUgaXMgZ29vZCBlbm91Z2ggaGVyZSwgc2luY2Ugd2UgYXJlIGp1c3QgZGVhbGluZyB3aXRoIGV4Y2VwdGlvbnMuXG52YXIgcGVuZGluZ0Vycm9ycyA9IFtdO1xudmFyIHJlcXVlc3RFcnJvclRocm93ID0gcmF3QXNhcC5tYWtlUmVxdWVzdENhbGxGcm9tVGltZXIodGhyb3dGaXJzdEVycm9yKTtcblxuZnVuY3Rpb24gdGhyb3dGaXJzdEVycm9yKCkge1xuICAgIGlmIChwZW5kaW5nRXJyb3JzLmxlbmd0aCkge1xuICAgICAgICB0aHJvdyBwZW5kaW5nRXJyb3JzLnNoaWZ0KCk7XG4gICAgfVxufVxuXG4vKipcbiAqIENhbGxzIGEgdGFzayBhcyBzb29uIGFzIHBvc3NpYmxlIGFmdGVyIHJldHVybmluZywgaW4gaXRzIG93biBldmVudCwgd2l0aCBwcmlvcml0eVxuICogb3ZlciBvdGhlciBldmVudHMgbGlrZSBhbmltYXRpb24sIHJlZmxvdywgYW5kIHJlcGFpbnQuIEFuIGVycm9yIHRocm93biBmcm9tIGFuXG4gKiBldmVudCB3aWxsIG5vdCBpbnRlcnJ1cHQsIG5vciBldmVuIHN1YnN0YW50aWFsbHkgc2xvdyBkb3duIHRoZSBwcm9jZXNzaW5nIG9mXG4gKiBvdGhlciBldmVudHMsIGJ1dCB3aWxsIGJlIHJhdGhlciBwb3N0cG9uZWQgdG8gYSBsb3dlciBwcmlvcml0eSBldmVudC5cbiAqIEBwYXJhbSB7e2NhbGx9fSB0YXNrIEEgY2FsbGFibGUgb2JqZWN0LCB0eXBpY2FsbHkgYSBmdW5jdGlvbiB0aGF0IHRha2VzIG5vXG4gKiBhcmd1bWVudHMuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gYXNhcDtcbmZ1bmN0aW9uIGFzYXAodGFzaykge1xuICAgIHZhciByYXdUYXNrO1xuICAgIGlmIChmcmVlVGFza3MubGVuZ3RoKSB7XG4gICAgICAgIHJhd1Rhc2sgPSBmcmVlVGFza3MucG9wKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmF3VGFzayA9IG5ldyBSYXdUYXNrKCk7XG4gICAgfVxuICAgIHJhd1Rhc2sudGFzayA9IHRhc2s7XG4gICAgcmF3QXNhcChyYXdUYXNrKTtcbn1cblxuLy8gV2Ugd3JhcCB0YXNrcyB3aXRoIHJlY3ljbGFibGUgdGFzayBvYmplY3RzLiAgQSB0YXNrIG9iamVjdCBpbXBsZW1lbnRzXG4vLyBgY2FsbGAsIGp1c3QgbGlrZSBhIGZ1bmN0aW9uLlxuZnVuY3Rpb24gUmF3VGFzaygpIHtcbiAgICB0aGlzLnRhc2sgPSBudWxsO1xufVxuXG4vLyBUaGUgc29sZSBwdXJwb3NlIG9mIHdyYXBwaW5nIHRoZSB0YXNrIGlzIHRvIGNhdGNoIHRoZSBleGNlcHRpb24gYW5kIHJlY3ljbGVcbi8vIHRoZSB0YXNrIG9iamVjdCBhZnRlciBpdHMgc2luZ2xlIHVzZS5cblJhd1Rhc2sucHJvdG90eXBlLmNhbGwgPSBmdW5jdGlvbiAoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdGhpcy50YXNrLmNhbGwoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoYXNhcC5vbmVycm9yKSB7XG4gICAgICAgICAgICAvLyBUaGlzIGhvb2sgZXhpc3RzIHB1cmVseSBmb3IgdGVzdGluZyBwdXJwb3Nlcy5cbiAgICAgICAgICAgIC8vIEl0cyBuYW1lIHdpbGwgYmUgcGVyaW9kaWNhbGx5IHJhbmRvbWl6ZWQgdG8gYnJlYWsgYW55IGNvZGUgdGhhdFxuICAgICAgICAgICAgLy8gZGVwZW5kcyBvbiBpdHMgZXhpc3RlbmNlLlxuICAgICAgICAgICAgYXNhcC5vbmVycm9yKGVycm9yKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIEluIGEgd2ViIGJyb3dzZXIsIGV4Y2VwdGlvbnMgYXJlIG5vdCBmYXRhbC4gSG93ZXZlciwgdG8gYXZvaWRcbiAgICAgICAgICAgIC8vIHNsb3dpbmcgZG93biB0aGUgcXVldWUgb2YgcGVuZGluZyB0YXNrcywgd2UgcmV0aHJvdyB0aGUgZXJyb3IgaW4gYVxuICAgICAgICAgICAgLy8gbG93ZXIgcHJpb3JpdHkgdHVybi5cbiAgICAgICAgICAgIHBlbmRpbmdFcnJvcnMucHVzaChlcnJvcik7XG4gICAgICAgICAgICByZXF1ZXN0RXJyb3JUaHJvdygpO1xuICAgICAgICB9XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgICAgdGhpcy50YXNrID0gbnVsbDtcbiAgICAgICAgZnJlZVRhc2tzW2ZyZWVUYXNrcy5sZW5ndGhdID0gdGhpcztcbiAgICB9XG59O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIFVzZSB0aGUgZmFzdGVzdCBtZWFucyBwb3NzaWJsZSB0byBleGVjdXRlIGEgdGFzayBpbiBpdHMgb3duIHR1cm4sIHdpdGhcbi8vIHByaW9yaXR5IG92ZXIgb3RoZXIgZXZlbnRzIGluY2x1ZGluZyBJTywgYW5pbWF0aW9uLCByZWZsb3csIGFuZCByZWRyYXdcbi8vIGV2ZW50cyBpbiBicm93c2Vycy5cbi8vXG4vLyBBbiBleGNlcHRpb24gdGhyb3duIGJ5IGEgdGFzayB3aWxsIHBlcm1hbmVudGx5IGludGVycnVwdCB0aGUgcHJvY2Vzc2luZyBvZlxuLy8gc3Vic2VxdWVudCB0YXNrcy4gVGhlIGhpZ2hlciBsZXZlbCBgYXNhcGAgZnVuY3Rpb24gZW5zdXJlcyB0aGF0IGlmIGFuXG4vLyBleGNlcHRpb24gaXMgdGhyb3duIGJ5IGEgdGFzaywgdGhhdCB0aGUgdGFzayBxdWV1ZSB3aWxsIGNvbnRpbnVlIGZsdXNoaW5nIGFzXG4vLyBzb29uIGFzIHBvc3NpYmxlLCBidXQgaWYgeW91IHVzZSBgcmF3QXNhcGAgZGlyZWN0bHksIHlvdSBhcmUgcmVzcG9uc2libGUgdG9cbi8vIGVpdGhlciBlbnN1cmUgdGhhdCBubyBleGNlcHRpb25zIGFyZSB0aHJvd24gZnJvbSB5b3VyIHRhc2ssIG9yIHRvIG1hbnVhbGx5XG4vLyBjYWxsIGByYXdBc2FwLnJlcXVlc3RGbHVzaGAgaWYgYW4gZXhjZXB0aW9uIGlzIHRocm93bi5cbm1vZHVsZS5leHBvcnRzID0gcmF3QXNhcDtcbmZ1bmN0aW9uIHJhd0FzYXAodGFzaykge1xuICAgIGlmICghcXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHJlcXVlc3RGbHVzaCgpO1xuICAgICAgICBmbHVzaGluZyA9IHRydWU7XG4gICAgfVxuICAgIC8vIEVxdWl2YWxlbnQgdG8gcHVzaCwgYnV0IGF2b2lkcyBhIGZ1bmN0aW9uIGNhbGwuXG4gICAgcXVldWVbcXVldWUubGVuZ3RoXSA9IHRhc2s7XG59XG5cbnZhciBxdWV1ZSA9IFtdO1xuLy8gT25jZSBhIGZsdXNoIGhhcyBiZWVuIHJlcXVlc3RlZCwgbm8gZnVydGhlciBjYWxscyB0byBgcmVxdWVzdEZsdXNoYCBhcmVcbi8vIG5lY2Vzc2FyeSB1bnRpbCB0aGUgbmV4dCBgZmx1c2hgIGNvbXBsZXRlcy5cbnZhciBmbHVzaGluZyA9IGZhbHNlO1xuLy8gYHJlcXVlc3RGbHVzaGAgaXMgYW4gaW1wbGVtZW50YXRpb24tc3BlY2lmaWMgbWV0aG9kIHRoYXQgYXR0ZW1wdHMgdG8ga2lja1xuLy8gb2ZmIGEgYGZsdXNoYCBldmVudCBhcyBxdWlja2x5IGFzIHBvc3NpYmxlLiBgZmx1c2hgIHdpbGwgYXR0ZW1wdCB0byBleGhhdXN0XG4vLyB0aGUgZXZlbnQgcXVldWUgYmVmb3JlIHlpZWxkaW5nIHRvIHRoZSBicm93c2VyJ3Mgb3duIGV2ZW50IGxvb3AuXG52YXIgcmVxdWVzdEZsdXNoO1xuLy8gVGhlIHBvc2l0aW9uIG9mIHRoZSBuZXh0IHRhc2sgdG8gZXhlY3V0ZSBpbiB0aGUgdGFzayBxdWV1ZS4gVGhpcyBpc1xuLy8gcHJlc2VydmVkIGJldHdlZW4gY2FsbHMgdG8gYGZsdXNoYCBzbyB0aGF0IGl0IGNhbiBiZSByZXN1bWVkIGlmXG4vLyBhIHRhc2sgdGhyb3dzIGFuIGV4Y2VwdGlvbi5cbnZhciBpbmRleCA9IDA7XG4vLyBJZiBhIHRhc2sgc2NoZWR1bGVzIGFkZGl0aW9uYWwgdGFza3MgcmVjdXJzaXZlbHksIHRoZSB0YXNrIHF1ZXVlIGNhbiBncm93XG4vLyB1bmJvdW5kZWQuIFRvIHByZXZlbnQgbWVtb3J5IGV4aGF1c3Rpb24sIHRoZSB0YXNrIHF1ZXVlIHdpbGwgcGVyaW9kaWNhbGx5XG4vLyB0cnVuY2F0ZSBhbHJlYWR5LWNvbXBsZXRlZCB0YXNrcy5cbnZhciBjYXBhY2l0eSA9IDEwMjQ7XG5cbi8vIFRoZSBmbHVzaCBmdW5jdGlvbiBwcm9jZXNzZXMgYWxsIHRhc2tzIHRoYXQgaGF2ZSBiZWVuIHNjaGVkdWxlZCB3aXRoXG4vLyBgcmF3QXNhcGAgdW5sZXNzIGFuZCB1bnRpbCBvbmUgb2YgdGhvc2UgdGFza3MgdGhyb3dzIGFuIGV4Y2VwdGlvbi5cbi8vIElmIGEgdGFzayB0aHJvd3MgYW4gZXhjZXB0aW9uLCBgZmx1c2hgIGVuc3VyZXMgdGhhdCBpdHMgc3RhdGUgd2lsbCByZW1haW5cbi8vIGNvbnNpc3RlbnQgYW5kIHdpbGwgcmVzdW1lIHdoZXJlIGl0IGxlZnQgb2ZmIHdoZW4gY2FsbGVkIGFnYWluLlxuLy8gSG93ZXZlciwgYGZsdXNoYCBkb2VzIG5vdCBtYWtlIGFueSBhcnJhbmdlbWVudHMgdG8gYmUgY2FsbGVkIGFnYWluIGlmIGFuXG4vLyBleGNlcHRpb24gaXMgdGhyb3duLlxuZnVuY3Rpb24gZmx1c2goKSB7XG4gICAgd2hpbGUgKGluZGV4IDwgcXVldWUubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjdXJyZW50SW5kZXggPSBpbmRleDtcbiAgICAgICAgLy8gQWR2YW5jZSB0aGUgaW5kZXggYmVmb3JlIGNhbGxpbmcgdGhlIHRhc2suIFRoaXMgZW5zdXJlcyB0aGF0IHdlIHdpbGxcbiAgICAgICAgLy8gYmVnaW4gZmx1c2hpbmcgb24gdGhlIG5leHQgdGFzayB0aGUgdGFzayB0aHJvd3MgYW4gZXJyb3IuXG4gICAgICAgIGluZGV4ID0gaW5kZXggKyAxO1xuICAgICAgICBxdWV1ZVtjdXJyZW50SW5kZXhdLmNhbGwoKTtcbiAgICAgICAgLy8gUHJldmVudCBsZWFraW5nIG1lbW9yeSBmb3IgbG9uZyBjaGFpbnMgb2YgcmVjdXJzaXZlIGNhbGxzIHRvIGBhc2FwYC5cbiAgICAgICAgLy8gSWYgd2UgY2FsbCBgYXNhcGAgd2l0aGluIHRhc2tzIHNjaGVkdWxlZCBieSBgYXNhcGAsIHRoZSBxdWV1ZSB3aWxsXG4gICAgICAgIC8vIGdyb3csIGJ1dCB0byBhdm9pZCBhbiBPKG4pIHdhbGsgZm9yIGV2ZXJ5IHRhc2sgd2UgZXhlY3V0ZSwgd2UgZG9uJ3RcbiAgICAgICAgLy8gc2hpZnQgdGFza3Mgb2ZmIHRoZSBxdWV1ZSBhZnRlciB0aGV5IGhhdmUgYmVlbiBleGVjdXRlZC5cbiAgICAgICAgLy8gSW5zdGVhZCwgd2UgcGVyaW9kaWNhbGx5IHNoaWZ0IDEwMjQgdGFza3Mgb2ZmIHRoZSBxdWV1ZS5cbiAgICAgICAgaWYgKGluZGV4ID4gY2FwYWNpdHkpIHtcbiAgICAgICAgICAgIC8vIE1hbnVhbGx5IHNoaWZ0IGFsbCB2YWx1ZXMgc3RhcnRpbmcgYXQgdGhlIGluZGV4IGJhY2sgdG8gdGhlXG4gICAgICAgICAgICAvLyBiZWdpbm5pbmcgb2YgdGhlIHF1ZXVlLlxuICAgICAgICAgICAgZm9yICh2YXIgc2NhbiA9IDAsIG5ld0xlbmd0aCA9IHF1ZXVlLmxlbmd0aCAtIGluZGV4OyBzY2FuIDwgbmV3TGVuZ3RoOyBzY2FuKyspIHtcbiAgICAgICAgICAgICAgICBxdWV1ZVtzY2FuXSA9IHF1ZXVlW3NjYW4gKyBpbmRleF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBxdWV1ZS5sZW5ndGggLT0gaW5kZXg7XG4gICAgICAgICAgICBpbmRleCA9IDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcXVldWUubGVuZ3RoID0gMDtcbiAgICBpbmRleCA9IDA7XG4gICAgZmx1c2hpbmcgPSBmYWxzZTtcbn1cblxuLy8gYHJlcXVlc3RGbHVzaGAgaXMgaW1wbGVtZW50ZWQgdXNpbmcgYSBzdHJhdGVneSBiYXNlZCBvbiBkYXRhIGNvbGxlY3RlZCBmcm9tXG4vLyBldmVyeSBhdmFpbGFibGUgU2F1Y2VMYWJzIFNlbGVuaXVtIHdlYiBkcml2ZXIgd29ya2VyIGF0IHRpbWUgb2Ygd3JpdGluZy5cbi8vIGh0dHBzOi8vZG9jcy5nb29nbGUuY29tL3NwcmVhZHNoZWV0cy9kLzFtRy01VVlHdXA1cXhHZEVNV2toUDZCV0N6MDUzTlViMkUxUW9VVFUxNnVBL2VkaXQjZ2lkPTc4MzcyNDU5M1xuXG4vLyBTYWZhcmkgNiBhbmQgNi4xIGZvciBkZXNrdG9wLCBpUGFkLCBhbmQgaVBob25lIGFyZSB0aGUgb25seSBicm93c2VycyB0aGF0XG4vLyBoYXZlIFdlYktpdE11dGF0aW9uT2JzZXJ2ZXIgYnV0IG5vdCB1bi1wcmVmaXhlZCBNdXRhdGlvbk9ic2VydmVyLlxuLy8gTXVzdCB1c2UgYGdsb2JhbGAgb3IgYHNlbGZgIGluc3RlYWQgb2YgYHdpbmRvd2AgdG8gd29yayBpbiBib3RoIGZyYW1lcyBhbmQgd2ViXG4vLyB3b3JrZXJzLiBgZ2xvYmFsYCBpcyBhIHByb3Zpc2lvbiBvZiBCcm93c2VyaWZ5LCBNciwgTXJzLCBvciBNb3AuXG5cbi8qIGdsb2JhbHMgc2VsZiAqL1xudmFyIHNjb3BlID0gdHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiA/IGdsb2JhbCA6IHNlbGY7XG52YXIgQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIgPSBzY29wZS5NdXRhdGlvbk9ic2VydmVyIHx8IHNjb3BlLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG5cbi8vIE11dGF0aW9uT2JzZXJ2ZXJzIGFyZSBkZXNpcmFibGUgYmVjYXVzZSB0aGV5IGhhdmUgaGlnaCBwcmlvcml0eSBhbmQgd29ya1xuLy8gcmVsaWFibHkgZXZlcnl3aGVyZSB0aGV5IGFyZSBpbXBsZW1lbnRlZC5cbi8vIFRoZXkgYXJlIGltcGxlbWVudGVkIGluIGFsbCBtb2Rlcm4gYnJvd3NlcnMuXG4vL1xuLy8gLSBBbmRyb2lkIDQtNC4zXG4vLyAtIENocm9tZSAyNi0zNFxuLy8gLSBGaXJlZm94IDE0LTI5XG4vLyAtIEludGVybmV0IEV4cGxvcmVyIDExXG4vLyAtIGlQYWQgU2FmYXJpIDYtNy4xXG4vLyAtIGlQaG9uZSBTYWZhcmkgNy03LjFcbi8vIC0gU2FmYXJpIDYtN1xuaWYgKHR5cGVvZiBCcm93c2VyTXV0YXRpb25PYnNlcnZlciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmVxdWVzdEZsdXNoID0gbWFrZVJlcXVlc3RDYWxsRnJvbU11dGF0aW9uT2JzZXJ2ZXIoZmx1c2gpO1xuXG4vLyBNZXNzYWdlQ2hhbm5lbHMgYXJlIGRlc2lyYWJsZSBiZWNhdXNlIHRoZXkgZ2l2ZSBkaXJlY3QgYWNjZXNzIHRvIHRoZSBIVE1MXG4vLyB0YXNrIHF1ZXVlLCBhcmUgaW1wbGVtZW50ZWQgaW4gSW50ZXJuZXQgRXhwbG9yZXIgMTAsIFNhZmFyaSA1LjAtMSwgYW5kIE9wZXJhXG4vLyAxMS0xMiwgYW5kIGluIHdlYiB3b3JrZXJzIGluIG1hbnkgZW5naW5lcy5cbi8vIEFsdGhvdWdoIG1lc3NhZ2UgY2hhbm5lbHMgeWllbGQgdG8gYW55IHF1ZXVlZCByZW5kZXJpbmcgYW5kIElPIHRhc2tzLCB0aGV5XG4vLyB3b3VsZCBiZSBiZXR0ZXIgdGhhbiBpbXBvc2luZyB0aGUgNG1zIGRlbGF5IG9mIHRpbWVycy5cbi8vIEhvd2V2ZXIsIHRoZXkgZG8gbm90IHdvcmsgcmVsaWFibHkgaW4gSW50ZXJuZXQgRXhwbG9yZXIgb3IgU2FmYXJpLlxuXG4vLyBJbnRlcm5ldCBFeHBsb3JlciAxMCBpcyB0aGUgb25seSBicm93c2VyIHRoYXQgaGFzIHNldEltbWVkaWF0ZSBidXQgZG9lc1xuLy8gbm90IGhhdmUgTXV0YXRpb25PYnNlcnZlcnMuXG4vLyBBbHRob3VnaCBzZXRJbW1lZGlhdGUgeWllbGRzIHRvIHRoZSBicm93c2VyJ3MgcmVuZGVyZXIsIGl0IHdvdWxkIGJlXG4vLyBwcmVmZXJyYWJsZSB0byBmYWxsaW5nIGJhY2sgdG8gc2V0VGltZW91dCBzaW5jZSBpdCBkb2VzIG5vdCBoYXZlXG4vLyB0aGUgbWluaW11bSA0bXMgcGVuYWx0eS5cbi8vIFVuZm9ydHVuYXRlbHkgdGhlcmUgYXBwZWFycyB0byBiZSBhIGJ1ZyBpbiBJbnRlcm5ldCBFeHBsb3JlciAxMCBNb2JpbGUgKGFuZFxuLy8gRGVza3RvcCB0byBhIGxlc3NlciBleHRlbnQpIHRoYXQgcmVuZGVycyBib3RoIHNldEltbWVkaWF0ZSBhbmRcbi8vIE1lc3NhZ2VDaGFubmVsIHVzZWxlc3MgZm9yIHRoZSBwdXJwb3NlcyBvZiBBU0FQLlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2tyaXNrb3dhbC9xL2lzc3Vlcy8zOTZcblxuLy8gVGltZXJzIGFyZSBpbXBsZW1lbnRlZCB1bml2ZXJzYWxseS5cbi8vIFdlIGZhbGwgYmFjayB0byB0aW1lcnMgaW4gd29ya2VycyBpbiBtb3N0IGVuZ2luZXMsIGFuZCBpbiBmb3JlZ3JvdW5kXG4vLyBjb250ZXh0cyBpbiB0aGUgZm9sbG93aW5nIGJyb3dzZXJzLlxuLy8gSG93ZXZlciwgbm90ZSB0aGF0IGV2ZW4gdGhpcyBzaW1wbGUgY2FzZSByZXF1aXJlcyBudWFuY2VzIHRvIG9wZXJhdGUgaW4gYVxuLy8gYnJvYWQgc3BlY3RydW0gb2YgYnJvd3NlcnMuXG4vL1xuLy8gLSBGaXJlZm94IDMtMTNcbi8vIC0gSW50ZXJuZXQgRXhwbG9yZXIgNi05XG4vLyAtIGlQYWQgU2FmYXJpIDQuM1xuLy8gLSBMeW54IDIuOC43XG59IGVsc2Uge1xuICAgIHJlcXVlc3RGbHVzaCA9IG1ha2VSZXF1ZXN0Q2FsbEZyb21UaW1lcihmbHVzaCk7XG59XG5cbi8vIGByZXF1ZXN0Rmx1c2hgIHJlcXVlc3RzIHRoYXQgdGhlIGhpZ2ggcHJpb3JpdHkgZXZlbnQgcXVldWUgYmUgZmx1c2hlZCBhc1xuLy8gc29vbiBhcyBwb3NzaWJsZS5cbi8vIFRoaXMgaXMgdXNlZnVsIHRvIHByZXZlbnQgYW4gZXJyb3IgdGhyb3duIGluIGEgdGFzayBmcm9tIHN0YWxsaW5nIHRoZSBldmVudFxuLy8gcXVldWUgaWYgdGhlIGV4Y2VwdGlvbiBoYW5kbGVkIGJ5IE5vZGUuanPigJlzXG4vLyBgcHJvY2Vzcy5vbihcInVuY2F1Z2h0RXhjZXB0aW9uXCIpYCBvciBieSBhIGRvbWFpbi5cbnJhd0FzYXAucmVxdWVzdEZsdXNoID0gcmVxdWVzdEZsdXNoO1xuXG4vLyBUbyByZXF1ZXN0IGEgaGlnaCBwcmlvcml0eSBldmVudCwgd2UgaW5kdWNlIGEgbXV0YXRpb24gb2JzZXJ2ZXIgYnkgdG9nZ2xpbmdcbi8vIHRoZSB0ZXh0IG9mIGEgdGV4dCBub2RlIGJldHdlZW4gXCIxXCIgYW5kIFwiLTFcIi5cbmZ1bmN0aW9uIG1ha2VSZXF1ZXN0Q2FsbEZyb21NdXRhdGlvbk9ic2VydmVyKGNhbGxiYWNrKSB7XG4gICAgdmFyIHRvZ2dsZSA9IDE7XG4gICAgdmFyIG9ic2VydmVyID0gbmV3IEJyb3dzZXJNdXRhdGlvbk9ic2VydmVyKGNhbGxiYWNrKTtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiXCIpO1xuICAgIG9ic2VydmVyLm9ic2VydmUobm9kZSwge2NoYXJhY3RlckRhdGE6IHRydWV9KTtcbiAgICByZXR1cm4gZnVuY3Rpb24gcmVxdWVzdENhbGwoKSB7XG4gICAgICAgIHRvZ2dsZSA9IC10b2dnbGU7XG4gICAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZTtcbiAgICB9O1xufVxuXG4vLyBUaGUgbWVzc2FnZSBjaGFubmVsIHRlY2huaXF1ZSB3YXMgZGlzY292ZXJlZCBieSBNYWx0ZSBVYmwgYW5kIHdhcyB0aGVcbi8vIG9yaWdpbmFsIGZvdW5kYXRpb24gZm9yIHRoaXMgbGlicmFyeS5cbi8vIGh0dHA6Ly93d3cubm9uYmxvY2tpbmcuaW8vMjAxMS8wNi93aW5kb3duZXh0dGljay5odG1sXG5cbi8vIFNhZmFyaSA2LjAuNSAoYXQgbGVhc3QpIGludGVybWl0dGVudGx5IGZhaWxzIHRvIGNyZWF0ZSBtZXNzYWdlIHBvcnRzIG9uIGFcbi8vIHBhZ2UncyBmaXJzdCBsb2FkLiBUaGFua2Z1bGx5LCB0aGlzIHZlcnNpb24gb2YgU2FmYXJpIHN1cHBvcnRzXG4vLyBNdXRhdGlvbk9ic2VydmVycywgc28gd2UgZG9uJ3QgbmVlZCB0byBmYWxsIGJhY2sgaW4gdGhhdCBjYXNlLlxuXG4vLyBmdW5jdGlvbiBtYWtlUmVxdWVzdENhbGxGcm9tTWVzc2FnZUNoYW5uZWwoY2FsbGJhY2spIHtcbi8vICAgICB2YXIgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuLy8gICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gY2FsbGJhY2s7XG4vLyAgICAgcmV0dXJuIGZ1bmN0aW9uIHJlcXVlc3RDYWxsKCkge1xuLy8gICAgICAgICBjaGFubmVsLnBvcnQyLnBvc3RNZXNzYWdlKDApO1xuLy8gICAgIH07XG4vLyB9XG5cbi8vIEZvciByZWFzb25zIGV4cGxhaW5lZCBhYm92ZSwgd2UgYXJlIGFsc28gdW5hYmxlIHRvIHVzZSBgc2V0SW1tZWRpYXRlYFxuLy8gdW5kZXIgYW55IGNpcmN1bXN0YW5jZXMuXG4vLyBFdmVuIGlmIHdlIHdlcmUsIHRoZXJlIGlzIGFub3RoZXIgYnVnIGluIEludGVybmV0IEV4cGxvcmVyIDEwLlxuLy8gSXQgaXMgbm90IHN1ZmZpY2llbnQgdG8gYXNzaWduIGBzZXRJbW1lZGlhdGVgIHRvIGByZXF1ZXN0Rmx1c2hgIGJlY2F1c2Vcbi8vIGBzZXRJbW1lZGlhdGVgIG11c3QgYmUgY2FsbGVkICpieSBuYW1lKiBhbmQgdGhlcmVmb3JlIG11c3QgYmUgd3JhcHBlZCBpbiBhXG4vLyBjbG9zdXJlLlxuLy8gTmV2ZXIgZm9yZ2V0LlxuXG4vLyBmdW5jdGlvbiBtYWtlUmVxdWVzdENhbGxGcm9tU2V0SW1tZWRpYXRlKGNhbGxiYWNrKSB7XG4vLyAgICAgcmV0dXJuIGZ1bmN0aW9uIHJlcXVlc3RDYWxsKCkge1xuLy8gICAgICAgICBzZXRJbW1lZGlhdGUoY2FsbGJhY2spO1xuLy8gICAgIH07XG4vLyB9XG5cbi8vIFNhZmFyaSA2LjAgaGFzIGEgcHJvYmxlbSB3aGVyZSB0aW1lcnMgd2lsbCBnZXQgbG9zdCB3aGlsZSB0aGUgdXNlciBpc1xuLy8gc2Nyb2xsaW5nLiBUaGlzIHByb2JsZW0gZG9lcyBub3QgaW1wYWN0IEFTQVAgYmVjYXVzZSBTYWZhcmkgNi4wIHN1cHBvcnRzXG4vLyBtdXRhdGlvbiBvYnNlcnZlcnMsIHNvIHRoYXQgaW1wbGVtZW50YXRpb24gaXMgdXNlZCBpbnN0ZWFkLlxuLy8gSG93ZXZlciwgaWYgd2UgZXZlciBlbGVjdCB0byB1c2UgdGltZXJzIGluIFNhZmFyaSwgdGhlIHByZXZhbGVudCB3b3JrLWFyb3VuZFxuLy8gaXMgdG8gYWRkIGEgc2Nyb2xsIGV2ZW50IGxpc3RlbmVyIHRoYXQgY2FsbHMgZm9yIGEgZmx1c2guXG5cbi8vIGBzZXRUaW1lb3V0YCBkb2VzIG5vdCBjYWxsIHRoZSBwYXNzZWQgY2FsbGJhY2sgaWYgdGhlIGRlbGF5IGlzIGxlc3MgdGhhblxuLy8gYXBwcm94aW1hdGVseSA3IGluIHdlYiB3b3JrZXJzIGluIEZpcmVmb3ggOCB0aHJvdWdoIDE4LCBhbmQgc29tZXRpbWVzIG5vdFxuLy8gZXZlbiB0aGVuLlxuXG5mdW5jdGlvbiBtYWtlUmVxdWVzdENhbGxGcm9tVGltZXIoY2FsbGJhY2spIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gcmVxdWVzdENhbGwoKSB7XG4gICAgICAgIC8vIFdlIGRpc3BhdGNoIGEgdGltZW91dCB3aXRoIGEgc3BlY2lmaWVkIGRlbGF5IG9mIDAgZm9yIGVuZ2luZXMgdGhhdFxuICAgICAgICAvLyBjYW4gcmVsaWFibHkgYWNjb21tb2RhdGUgdGhhdCByZXF1ZXN0LiBUaGlzIHdpbGwgdXN1YWxseSBiZSBzbmFwcGVkXG4gICAgICAgIC8vIHRvIGEgNCBtaWxpc2Vjb25kIGRlbGF5LCBidXQgb25jZSB3ZSdyZSBmbHVzaGluZywgdGhlcmUncyBubyBkZWxheVxuICAgICAgICAvLyBiZXR3ZWVuIGV2ZW50cy5cbiAgICAgICAgdmFyIHRpbWVvdXRIYW5kbGUgPSBzZXRUaW1lb3V0KGhhbmRsZVRpbWVyLCAwKTtcbiAgICAgICAgLy8gSG93ZXZlciwgc2luY2UgdGhpcyB0aW1lciBnZXRzIGZyZXF1ZW50bHkgZHJvcHBlZCBpbiBGaXJlZm94XG4gICAgICAgIC8vIHdvcmtlcnMsIHdlIGVubGlzdCBhbiBpbnRlcnZhbCBoYW5kbGUgdGhhdCB3aWxsIHRyeSB0byBmaXJlXG4gICAgICAgIC8vIGFuIGV2ZW50IDIwIHRpbWVzIHBlciBzZWNvbmQgdW50aWwgaXQgc3VjY2VlZHMuXG4gICAgICAgIHZhciBpbnRlcnZhbEhhbmRsZSA9IHNldEludGVydmFsKGhhbmRsZVRpbWVyLCA1MCk7XG5cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlVGltZXIoKSB7XG4gICAgICAgICAgICAvLyBXaGljaGV2ZXIgdGltZXIgc3VjY2VlZHMgd2lsbCBjYW5jZWwgYm90aCB0aW1lcnMgYW5kXG4gICAgICAgICAgICAvLyBleGVjdXRlIHRoZSBjYWxsYmFjay5cbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SGFuZGxlKTtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxIYW5kbGUpO1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8vIFRoaXMgaXMgZm9yIGBhc2FwLmpzYCBvbmx5LlxuLy8gSXRzIG5hbWUgd2lsbCBiZSBwZXJpb2RpY2FsbHkgcmFuZG9taXplZCB0byBicmVhayBhbnkgY29kZSB0aGF0IGRlcGVuZHMgb25cbi8vIGl0cyBleGlzdGVuY2UuXG5yYXdBc2FwLm1ha2VSZXF1ZXN0Q2FsbEZyb21UaW1lciA9IG1ha2VSZXF1ZXN0Q2FsbEZyb21UaW1lcjtcblxuLy8gQVNBUCB3YXMgb3JpZ2luYWxseSBhIG5leHRUaWNrIHNoaW0gaW5jbHVkZWQgaW4gUS4gVGhpcyB3YXMgZmFjdG9yZWQgb3V0XG4vLyBpbnRvIHRoaXMgQVNBUCBwYWNrYWdlLiBJdCB3YXMgbGF0ZXIgYWRhcHRlZCB0byBSU1ZQIHdoaWNoIG1hZGUgZnVydGhlclxuLy8gYW1lbmRtZW50cy4gVGhlc2UgZGVjaXNpb25zLCBwYXJ0aWN1bGFybHkgdG8gbWFyZ2luYWxpemUgTWVzc2FnZUNoYW5uZWwgYW5kXG4vLyB0byBjYXB0dXJlIHRoZSBNdXRhdGlvbk9ic2VydmVyIGltcGxlbWVudGF0aW9uIGluIGEgY2xvc3VyZSwgd2VyZSBpbnRlZ3JhdGVkXG4vLyBiYWNrIGludG8gQVNBUCBwcm9wZXIuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGlsZGVpby9yc3ZwLmpzL2Jsb2IvY2RkZjcyMzI1NDZhOWNmODU4NTI0Yjc1Y2RlNmY5ZWRmNzI2MjBhNy9saWIvcnN2cC9hc2FwLmpzXG4iLCIndXNlIHN0cmljdCc7XG5cbnZhciB1cHBlcmNhc2VQYXR0ZXJuID0gL1tBLVpdL2c7XG52YXIgbXNQYXR0ZXJuID0gL15tcy0vO1xudmFyIGNhY2hlID0ge307XG5cbmZ1bmN0aW9uIGh5cGhlbmF0ZVN0eWxlTmFtZShzdHJpbmcpIHtcbiAgICByZXR1cm4gc3RyaW5nIGluIGNhY2hlXG4gICAgPyBjYWNoZVtzdHJpbmddXG4gICAgOiBjYWNoZVtzdHJpbmddID0gc3RyaW5nXG4gICAgICAucmVwbGFjZSh1cHBlcmNhc2VQYXR0ZXJuLCAnLSQmJylcbiAgICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgICAucmVwbGFjZShtc1BhdHRlcm4sICctbXMtJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaHlwaGVuYXRlU3R5bGVOYW1lO1xuIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gY2FsYztcblxudmFyIF9qb2luUHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2pvaW5QcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfam9pblByZWZpeGVkVmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfam9pblByZWZpeGVkVmFsdWUpO1xuXG52YXIgX2lzUHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2lzUHJlZml4ZWRWYWx1ZScpO1xuXG52YXIgX2lzUHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1ByZWZpeGVkVmFsdWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBjYWxjKHByb3BlcnR5LCB2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAhKDAsIF9pc1ByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKHZhbHVlKSAmJiB2YWx1ZS5pbmRleE9mKCdjYWxjKCcpID4gLTEpIHtcbiAgICByZXR1cm4gKDAsIF9qb2luUHJlZml4ZWRWYWx1ZTIuZGVmYXVsdCkocHJvcGVydHksIHZhbHVlLCBmdW5jdGlvbiAocHJlZml4LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlLnJlcGxhY2UoL2NhbGNcXCgvZywgcHJlZml4ICsgJ2NhbGMoJyk7XG4gICAgfSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGN1cnNvcjtcblxudmFyIF9qb2luUHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2pvaW5QcmVmaXhlZFZhbHVlJyk7XG5cbnZhciBfam9pblByZWZpeGVkVmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfam9pblByZWZpeGVkVmFsdWUpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG52YXIgdmFsdWVzID0ge1xuICAnem9vbS1pbic6IHRydWUsXG4gICd6b29tLW91dCc6IHRydWUsXG4gIGdyYWI6IHRydWUsXG4gIGdyYWJiaW5nOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBjdXJzb3IocHJvcGVydHksIHZhbHVlKSB7XG4gIGlmIChwcm9wZXJ0eSA9PT0gJ2N1cnNvcicgJiYgdmFsdWVzW3ZhbHVlXSkge1xuICAgIHJldHVybiAoMCwgX2pvaW5QcmVmaXhlZFZhbHVlMi5kZWZhdWx0KShwcm9wZXJ0eSwgdmFsdWUpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBmbGV4O1xudmFyIHZhbHVlcyA9IHsgZmxleDogdHJ1ZSwgJ2lubGluZS1mbGV4JzogdHJ1ZSB9O1xuXG5mdW5jdGlvbiBmbGV4KHByb3BlcnR5LCB2YWx1ZSkge1xuICBpZiAocHJvcGVydHkgPT09ICdkaXNwbGF5JyAmJiB2YWx1ZXNbdmFsdWVdKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRpc3BsYXk6IFsnLXdlYmtpdC1ib3gnLCAnLW1vei1ib3gnLCAnLW1zLScgKyB2YWx1ZSArICdib3gnLCAnLXdlYmtpdC0nICsgdmFsdWUsIHZhbHVlXVxuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IGZsZXhib3hJRTtcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIGFsdGVybmF0aXZlVmFsdWVzID0ge1xuICAnc3BhY2UtYXJvdW5kJzogJ2Rpc3RyaWJ1dGUnLFxuICAnc3BhY2UtYmV0d2Vlbic6ICdqdXN0aWZ5JyxcbiAgJ2ZsZXgtc3RhcnQnOiAnc3RhcnQnLFxuICAnZmxleC1lbmQnOiAnZW5kJ1xufTtcbnZhciBhbHRlcm5hdGl2ZVByb3BzID0ge1xuICBhbGlnbkNvbnRlbnQ6ICdtc0ZsZXhMaW5lUGFjaycsXG4gIGFsaWduU2VsZjogJ21zRmxleEl0ZW1BbGlnbicsXG4gIGFsaWduSXRlbXM6ICdtc0ZsZXhBbGlnbicsXG4gIGp1c3RpZnlDb250ZW50OiAnbXNGbGV4UGFjaycsXG4gIG9yZGVyOiAnbXNGbGV4T3JkZXInLFxuICBmbGV4R3JvdzogJ21zRmxleFBvc2l0aXZlJyxcbiAgZmxleFNocmluazogJ21zRmxleE5lZ2F0aXZlJyxcbiAgZmxleEJhc2lzOiAnbXNQcmVmZXJyZWRTaXplJ1xufTtcblxuZnVuY3Rpb24gZmxleGJveElFKHByb3BlcnR5LCB2YWx1ZSkge1xuICBpZiAoYWx0ZXJuYXRpdmVQcm9wc1twcm9wZXJ0eV0pIHtcbiAgICByZXR1cm4gX2RlZmluZVByb3BlcnR5KHt9LCBhbHRlcm5hdGl2ZVByb3BzW3Byb3BlcnR5XSwgYWx0ZXJuYXRpdmVWYWx1ZXNbdmFsdWVdIHx8IHZhbHVlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZmxleGJveE9sZDtcblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxudmFyIGFsdGVybmF0aXZlVmFsdWVzID0ge1xuICAnc3BhY2UtYXJvdW5kJzogJ2p1c3RpZnknLFxuICAnc3BhY2UtYmV0d2Vlbic6ICdqdXN0aWZ5JyxcbiAgJ2ZsZXgtc3RhcnQnOiAnc3RhcnQnLFxuICAnZmxleC1lbmQnOiAnZW5kJyxcbiAgJ3dyYXAtcmV2ZXJzZSc6ICdtdWx0aXBsZScsXG4gIHdyYXA6ICdtdWx0aXBsZSdcbn07XG5cbnZhciBhbHRlcm5hdGl2ZVByb3BzID0ge1xuICBhbGlnbkl0ZW1zOiAnV2Via2l0Qm94QWxpZ24nLFxuICBqdXN0aWZ5Q29udGVudDogJ1dlYmtpdEJveFBhY2snLFxuICBmbGV4V3JhcDogJ1dlYmtpdEJveExpbmVzJ1xufTtcblxuZnVuY3Rpb24gZmxleGJveE9sZChwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgaWYgKHByb3BlcnR5ID09PSAnZmxleERpcmVjdGlvbicgJiYgdHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiB7XG4gICAgICBXZWJraXRCb3hPcmllbnQ6IHZhbHVlLmluZGV4T2YoJ2NvbHVtbicpID4gLTEgPyAndmVydGljYWwnIDogJ2hvcml6b250YWwnLFxuICAgICAgV2Via2l0Qm94RGlyZWN0aW9uOiB2YWx1ZS5pbmRleE9mKCdyZXZlcnNlJykgPiAtMSA/ICdyZXZlcnNlJyA6ICdub3JtYWwnXG4gICAgfTtcbiAgfVxuICBpZiAoYWx0ZXJuYXRpdmVQcm9wc1twcm9wZXJ0eV0pIHtcbiAgICByZXR1cm4gX2RlZmluZVByb3BlcnR5KHt9LCBhbHRlcm5hdGl2ZVByb3BzW3Byb3BlcnR5XSwgYWx0ZXJuYXRpdmVWYWx1ZXNbdmFsdWVdIHx8IHZhbHVlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5kZWZhdWx0ID0gZ3JhZGllbnQ7XG5cbnZhciBfam9pblByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCcuLi8uLi91dGlscy9qb2luUHJlZml4ZWRWYWx1ZScpO1xuXG52YXIgX2pvaW5QcmVmaXhlZFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2pvaW5QcmVmaXhlZFZhbHVlKTtcblxudmFyIF9pc1ByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCcuLi8uLi91dGlscy9pc1ByZWZpeGVkVmFsdWUnKTtcblxudmFyIF9pc1ByZWZpeGVkVmFsdWUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaXNQcmVmaXhlZFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHZhbHVlcyA9IC9saW5lYXItZ3JhZGllbnR8cmFkaWFsLWdyYWRpZW50fHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnR8cmVwZWF0aW5nLXJhZGlhbC1ncmFkaWVudC87XG5cbmZ1bmN0aW9uIGdyYWRpZW50KHByb3BlcnR5LCB2YWx1ZSkge1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiAhKDAsIF9pc1ByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKHZhbHVlKSAmJiB2YWx1ZS5tYXRjaCh2YWx1ZXMpICE9PSBudWxsKSB7XG4gICAgcmV0dXJuICgwLCBfam9pblByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKHByb3BlcnR5LCB2YWx1ZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHBvc2l0aW9uO1xuZnVuY3Rpb24gcG9zaXRpb24ocHJvcGVydHksIHZhbHVlKSB7XG4gIGlmIChwcm9wZXJ0eSA9PT0gJ3Bvc2l0aW9uJyAmJiB2YWx1ZSA9PT0gJ3N0aWNreScpIHtcbiAgICByZXR1cm4geyBwb3NpdGlvbjogWyctd2Via2l0LXN0aWNreScsICdzdGlja3knXSB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBzaXppbmc7XG5cbnZhciBfam9pblByZWZpeGVkVmFsdWUgPSByZXF1aXJlKCcuLi8uLi91dGlscy9qb2luUHJlZml4ZWRWYWx1ZScpO1xuXG52YXIgX2pvaW5QcmVmaXhlZFZhbHVlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2pvaW5QcmVmaXhlZFZhbHVlKTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgZGVmYXVsdDogb2JqIH07IH1cblxudmFyIHByb3BlcnRpZXMgPSB7XG4gIG1heEhlaWdodDogdHJ1ZSxcbiAgbWF4V2lkdGg6IHRydWUsXG4gIHdpZHRoOiB0cnVlLFxuICBoZWlnaHQ6IHRydWUsXG4gIGNvbHVtbldpZHRoOiB0cnVlLFxuICBtaW5XaWR0aDogdHJ1ZSxcbiAgbWluSGVpZ2h0OiB0cnVlXG59O1xudmFyIHZhbHVlcyA9IHtcbiAgJ21pbi1jb250ZW50JzogdHJ1ZSxcbiAgJ21heC1jb250ZW50JzogdHJ1ZSxcbiAgJ2ZpbGwtYXZhaWxhYmxlJzogdHJ1ZSxcbiAgJ2ZpdC1jb250ZW50JzogdHJ1ZSxcbiAgJ2NvbnRhaW4tZmxvYXRzJzogdHJ1ZVxufTtcblxuZnVuY3Rpb24gc2l6aW5nKHByb3BlcnR5LCB2YWx1ZSkge1xuICBpZiAocHJvcGVydGllc1twcm9wZXJ0eV0gJiYgdmFsdWVzW3ZhbHVlXSkge1xuICAgIHJldHVybiAoMCwgX2pvaW5QcmVmaXhlZFZhbHVlMi5kZWZhdWx0KShwcm9wZXJ0eSwgdmFsdWUpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB0cmFuc2l0aW9uO1xuXG52YXIgX2h5cGhlbmF0ZVN0eWxlTmFtZSA9IHJlcXVpcmUoJ2h5cGhlbmF0ZS1zdHlsZS1uYW1lJyk7XG5cbnZhciBfaHlwaGVuYXRlU3R5bGVOYW1lMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2h5cGhlbmF0ZVN0eWxlTmFtZSk7XG5cbnZhciBfY2FwaXRhbGl6ZVN0cmluZyA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2NhcGl0YWxpemVTdHJpbmcnKTtcblxudmFyIF9jYXBpdGFsaXplU3RyaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NhcGl0YWxpemVTdHJpbmcpO1xuXG52YXIgX2lzUHJlZml4ZWRWYWx1ZSA9IHJlcXVpcmUoJy4uLy4uL3V0aWxzL2lzUHJlZml4ZWRWYWx1ZScpO1xuXG52YXIgX2lzUHJlZml4ZWRWYWx1ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1ByZWZpeGVkVmFsdWUpO1xuXG52YXIgX3ByZWZpeFByb3BzID0gcmVxdWlyZSgnLi4vcHJlZml4UHJvcHMnKTtcblxudmFyIF9wcmVmaXhQcm9wczIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wcmVmaXhQcm9wcyk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbnZhciBwcm9wZXJ0aWVzID0ge1xuICB0cmFuc2l0aW9uOiB0cnVlLFxuICB0cmFuc2l0aW9uUHJvcGVydHk6IHRydWUsXG4gIFdlYmtpdFRyYW5zaXRpb246IHRydWUsXG4gIFdlYmtpdFRyYW5zaXRpb25Qcm9wZXJ0eTogdHJ1ZVxufTtcblxuZnVuY3Rpb24gdHJhbnNpdGlvbihwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgLy8gYWxzbyBjaGVjayBmb3IgYWxyZWFkeSBwcmVmaXhlZCB0cmFuc2l0aW9uc1xuICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiBwcm9wZXJ0aWVzW3Byb3BlcnR5XSkge1xuICAgIHZhciBfcmVmMjtcblxuICAgIHZhciBvdXRwdXRWYWx1ZSA9IHByZWZpeFZhbHVlKHZhbHVlKTtcbiAgICB2YXIgd2Via2l0T3V0cHV0ID0gb3V0cHV0VmFsdWUuc3BsaXQoLywoPyFbXigpXSooPzpcXChbXigpXSpcXCkpP1xcKSkvZykuZmlsdGVyKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHZhbHVlLm1hdGNoKC8tbW96LXwtbXMtLykgPT09IG51bGw7XG4gICAgfSkuam9pbignLCcpO1xuXG4gICAgLy8gaWYgdGhlIHByb3BlcnR5IGlzIGFscmVhZHkgcHJlZml4ZWRcbiAgICBpZiAocHJvcGVydHkuaW5kZXhPZignV2Via2l0JykgPiAtMSkge1xuICAgICAgcmV0dXJuIF9kZWZpbmVQcm9wZXJ0eSh7fSwgcHJvcGVydHksIHdlYmtpdE91dHB1dCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9yZWYyID0ge30sIF9kZWZpbmVQcm9wZXJ0eShfcmVmMiwgJ1dlYmtpdCcgKyAoMCwgX2NhcGl0YWxpemVTdHJpbmcyLmRlZmF1bHQpKHByb3BlcnR5KSwgd2Via2l0T3V0cHV0KSwgX2RlZmluZVByb3BlcnR5KF9yZWYyLCBwcm9wZXJ0eSwgb3V0cHV0VmFsdWUpLCBfcmVmMjtcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmaXhWYWx1ZSh2YWx1ZSkge1xuICBpZiAoKDAsIF9pc1ByZWZpeGVkVmFsdWUyLmRlZmF1bHQpKHZhbHVlKSkge1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIC8vIG9ubHkgc3BsaXQgbXVsdGkgdmFsdWVzLCBub3QgY3ViaWMgYmV6aWVyc1xuICB2YXIgbXVsdGlwbGVWYWx1ZXMgPSB2YWx1ZS5zcGxpdCgvLCg/IVteKCldKig/OlxcKFteKCldKlxcKSk/XFwpKS9nKTtcblxuICAvLyBpdGVyYXRlIGVhY2ggc2luZ2xlIHZhbHVlIGFuZCBjaGVjayBmb3IgdHJhbnNpdGlvbmVkIHByb3BlcnRpZXNcbiAgLy8gdGhhdCBuZWVkIHRvIGJlIHByZWZpeGVkIGFzIHdlbGxcbiAgbXVsdGlwbGVWYWx1ZXMuZm9yRWFjaChmdW5jdGlvbiAodmFsLCBpbmRleCkge1xuICAgIG11bHRpcGxlVmFsdWVzW2luZGV4XSA9IE9iamVjdC5rZXlzKF9wcmVmaXhQcm9wczIuZGVmYXVsdCkucmVkdWNlKGZ1bmN0aW9uIChvdXQsIHByZWZpeCkge1xuICAgICAgdmFyIGRhc2hDYXNlUHJlZml4ID0gJy0nICsgcHJlZml4LnRvTG93ZXJDYXNlKCkgKyAnLSc7XG5cbiAgICAgIE9iamVjdC5rZXlzKF9wcmVmaXhQcm9wczIuZGVmYXVsdFtwcmVmaXhdKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICAgIHZhciBkYXNoQ2FzZVByb3BlcnR5ID0gKDAsIF9oeXBoZW5hdGVTdHlsZU5hbWUyLmRlZmF1bHQpKHByb3ApO1xuXG4gICAgICAgIGlmICh2YWwuaW5kZXhPZihkYXNoQ2FzZVByb3BlcnR5KSA+IC0xICYmIGRhc2hDYXNlUHJvcGVydHkgIT09ICdvcmRlcicpIHtcbiAgICAgICAgICAvLyBqb2luIGFsbCBwcmVmaXhlcyBhbmQgY3JlYXRlIGEgbmV3IHZhbHVlXG4gICAgICAgICAgb3V0ID0gdmFsLnJlcGxhY2UoZGFzaENhc2VQcm9wZXJ0eSwgZGFzaENhc2VQcmVmaXggKyBkYXNoQ2FzZVByb3BlcnR5KSArICcsJyArIG91dDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZXR1cm4gb3V0O1xuICAgIH0sIHZhbCk7XG4gIH0pO1xuXG4gIHJldHVybiBtdWx0aXBsZVZhbHVlcy5qb2luKCcsJyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBwcmVmaXhBbGw7XG5cbnZhciBfcHJlZml4UHJvcHMgPSByZXF1aXJlKCcuL3ByZWZpeFByb3BzJyk7XG5cbnZhciBfcHJlZml4UHJvcHMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcHJlZml4UHJvcHMpO1xuXG52YXIgX2NhcGl0YWxpemVTdHJpbmcgPSByZXF1aXJlKCcuLi91dGlscy9jYXBpdGFsaXplU3RyaW5nJyk7XG5cbnZhciBfY2FwaXRhbGl6ZVN0cmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jYXBpdGFsaXplU3RyaW5nKTtcblxudmFyIF9zb3J0UHJlZml4ZWRTdHlsZSA9IHJlcXVpcmUoJy4uL3V0aWxzL3NvcnRQcmVmaXhlZFN0eWxlJyk7XG5cbnZhciBfc29ydFByZWZpeGVkU3R5bGUyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfc29ydFByZWZpeGVkU3R5bGUpO1xuXG52YXIgX3Bvc2l0aW9uID0gcmVxdWlyZSgnLi9wbHVnaW5zL3Bvc2l0aW9uJyk7XG5cbnZhciBfcG9zaXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcG9zaXRpb24pO1xuXG52YXIgX2NhbGMgPSByZXF1aXJlKCcuL3BsdWdpbnMvY2FsYycpO1xuXG52YXIgX2NhbGMyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY2FsYyk7XG5cbnZhciBfY3Vyc29yID0gcmVxdWlyZSgnLi9wbHVnaW5zL2N1cnNvcicpO1xuXG52YXIgX2N1cnNvcjIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jdXJzb3IpO1xuXG52YXIgX2ZsZXggPSByZXF1aXJlKCcuL3BsdWdpbnMvZmxleCcpO1xuXG52YXIgX2ZsZXgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmxleCk7XG5cbnZhciBfc2l6aW5nID0gcmVxdWlyZSgnLi9wbHVnaW5zL3NpemluZycpO1xuXG52YXIgX3NpemluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9zaXppbmcpO1xuXG52YXIgX2dyYWRpZW50ID0gcmVxdWlyZSgnLi9wbHVnaW5zL2dyYWRpZW50Jyk7XG5cbnZhciBfZ3JhZGllbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZ3JhZGllbnQpO1xuXG52YXIgX3RyYW5zaXRpb24gPSByZXF1aXJlKCcuL3BsdWdpbnMvdHJhbnNpdGlvbicpO1xuXG52YXIgX3RyYW5zaXRpb24yID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfdHJhbnNpdGlvbik7XG5cbnZhciBfZmxleGJveElFID0gcmVxdWlyZSgnLi9wbHVnaW5zL2ZsZXhib3hJRScpO1xuXG52YXIgX2ZsZXhib3hJRTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9mbGV4Ym94SUUpO1xuXG52YXIgX2ZsZXhib3hPbGQgPSByZXF1aXJlKCcuL3BsdWdpbnMvZmxleGJveE9sZCcpO1xuXG52YXIgX2ZsZXhib3hPbGQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZmxleGJveE9sZCk7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7IGRlZmF1bHQ6IG9iaiB9OyB9XG5cbi8vIHNwZWNpYWwgZmxleGJveCBzcGVjaWZpY2F0aW9uc1xuXG5cbnZhciBwbHVnaW5zID0gW19wb3NpdGlvbjIuZGVmYXVsdCwgX2NhbGMyLmRlZmF1bHQsIF9jdXJzb3IyLmRlZmF1bHQsIF9zaXppbmcyLmRlZmF1bHQsIF9ncmFkaWVudDIuZGVmYXVsdCwgX3RyYW5zaXRpb24yLmRlZmF1bHQsIF9mbGV4Ym94SUUyLmRlZmF1bHQsIF9mbGV4Ym94T2xkMi5kZWZhdWx0LCBfZmxleDIuZGVmYXVsdF07XG5cbi8qKlxuICogUmV0dXJucyBhIHByZWZpeGVkIHZlcnNpb24gb2YgdGhlIHN0eWxlIG9iamVjdCB1c2luZyBhbGwgdmVuZG9yIHByZWZpeGVzXG4gKiBAcGFyYW0ge09iamVjdH0gc3R5bGVzIC0gU3R5bGUgb2JqZWN0IHRoYXQgZ2V0cyBwcmVmaXhlZCBwcm9wZXJ0aWVzIGFkZGVkXG4gKiBAcmV0dXJucyB7T2JqZWN0fSAtIFN0eWxlIG9iamVjdCB3aXRoIHByZWZpeGVkIHByb3BlcnRpZXMgYW5kIHZhbHVlc1xuICovXG5mdW5jdGlvbiBwcmVmaXhBbGwoc3R5bGVzKSB7XG4gIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgICB2YXIgdmFsdWUgPSBzdHlsZXNbcHJvcGVydHldO1xuICAgIGlmICh2YWx1ZSBpbnN0YW5jZW9mIE9iamVjdCAmJiAhQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICAgIC8vIHJlY3Vyc2UgdGhyb3VnaCBuZXN0ZWQgc3R5bGUgb2JqZWN0c1xuICAgICAgc3R5bGVzW3Byb3BlcnR5XSA9IHByZWZpeEFsbCh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIE9iamVjdC5rZXlzKF9wcmVmaXhQcm9wczIuZGVmYXVsdCkuZm9yRWFjaChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgICAgIHZhciBwcm9wZXJ0aWVzID0gX3ByZWZpeFByb3BzMi5kZWZhdWx0W3ByZWZpeF07XG4gICAgICAgIC8vIGFkZCBwcmVmaXhlcyBpZiBuZWVkZWRcbiAgICAgICAgaWYgKHByb3BlcnRpZXNbcHJvcGVydHldKSB7XG4gICAgICAgICAgc3R5bGVzW3ByZWZpeCArICgwLCBfY2FwaXRhbGl6ZVN0cmluZzIuZGVmYXVsdCkocHJvcGVydHkpXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xuXG4gIE9iamVjdC5rZXlzKHN0eWxlcykuZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgICBbXS5jb25jYXQoc3R5bGVzW3Byb3BlcnR5XSkuZm9yRWFjaChmdW5jdGlvbiAodmFsdWUsIGluZGV4KSB7XG4gICAgICAvLyByZXNvbHZlIGV2ZXJ5IHNwZWNpYWwgcGx1Z2luc1xuICAgICAgcGx1Z2lucy5mb3JFYWNoKGZ1bmN0aW9uIChwbHVnaW4pIHtcbiAgICAgICAgcmV0dXJuIGFzc2lnblN0eWxlcyhzdHlsZXMsIHBsdWdpbihwcm9wZXJ0eSwgdmFsdWUpKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9KTtcblxuICByZXR1cm4gKDAsIF9zb3J0UHJlZml4ZWRTdHlsZTIuZGVmYXVsdCkoc3R5bGVzKTtcbn1cblxuZnVuY3Rpb24gYXNzaWduU3R5bGVzKGJhc2UpIHtcbiAgdmFyIGV4dGVuZCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMSB8fCBhcmd1bWVudHNbMV0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzFdO1xuXG4gIE9iamVjdC5rZXlzKGV4dGVuZCkuZm9yRWFjaChmdW5jdGlvbiAocHJvcGVydHkpIHtcbiAgICB2YXIgYmFzZVZhbHVlID0gYmFzZVtwcm9wZXJ0eV07XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYmFzZVZhbHVlKSkge1xuICAgICAgW10uY29uY2F0KGV4dGVuZFtwcm9wZXJ0eV0pLmZvckVhY2goZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHZhciB2YWx1ZUluZGV4ID0gYmFzZVZhbHVlLmluZGV4T2YodmFsdWUpO1xuICAgICAgICBpZiAodmFsdWVJbmRleCA+IC0xKSB7XG4gICAgICAgICAgYmFzZVtwcm9wZXJ0eV0uc3BsaWNlKHZhbHVlSW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGJhc2VbcHJvcGVydHldLnB1c2godmFsdWUpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJhc2VbcHJvcGVydHldID0gZXh0ZW5kW3Byb3BlcnR5XTtcbiAgICB9XG4gIH0pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSB7IFwiV2Via2l0XCI6IHsgXCJ0cmFuc2Zvcm1cIjogdHJ1ZSwgXCJ0cmFuc2Zvcm1PcmlnaW5cIjogdHJ1ZSwgXCJ0cmFuc2Zvcm1PcmlnaW5YXCI6IHRydWUsIFwidHJhbnNmb3JtT3JpZ2luWVwiOiB0cnVlLCBcImJhY2tmYWNlVmlzaWJpbGl0eVwiOiB0cnVlLCBcInBlcnNwZWN0aXZlXCI6IHRydWUsIFwicGVyc3BlY3RpdmVPcmlnaW5cIjogdHJ1ZSwgXCJ0cmFuc2Zvcm1TdHlsZVwiOiB0cnVlLCBcInRyYW5zZm9ybU9yaWdpblpcIjogdHJ1ZSwgXCJhbmltYXRpb25cIjogdHJ1ZSwgXCJhbmltYXRpb25EZWxheVwiOiB0cnVlLCBcImFuaW1hdGlvbkRpcmVjdGlvblwiOiB0cnVlLCBcImFuaW1hdGlvbkZpbGxNb2RlXCI6IHRydWUsIFwiYW5pbWF0aW9uRHVyYXRpb25cIjogdHJ1ZSwgXCJhbmltYXRpb25JdGVyYXRpb25Db3VudFwiOiB0cnVlLCBcImFuaW1hdGlvbk5hbWVcIjogdHJ1ZSwgXCJhbmltYXRpb25QbGF5U3RhdGVcIjogdHJ1ZSwgXCJhbmltYXRpb25UaW1pbmdGdW5jdGlvblwiOiB0cnVlLCBcImFwcGVhcmFuY2VcIjogdHJ1ZSwgXCJ1c2VyU2VsZWN0XCI6IHRydWUsIFwiZm9udEtlcm5pbmdcIjogdHJ1ZSwgXCJ0ZXh0RW1waGFzaXNQb3NpdGlvblwiOiB0cnVlLCBcInRleHRFbXBoYXNpc1wiOiB0cnVlLCBcInRleHRFbXBoYXNpc1N0eWxlXCI6IHRydWUsIFwidGV4dEVtcGhhc2lzQ29sb3JcIjogdHJ1ZSwgXCJib3hEZWNvcmF0aW9uQnJlYWtcIjogdHJ1ZSwgXCJjbGlwUGF0aFwiOiB0cnVlLCBcIm1hc2tJbWFnZVwiOiB0cnVlLCBcIm1hc2tNb2RlXCI6IHRydWUsIFwibWFza1JlcGVhdFwiOiB0cnVlLCBcIm1hc2tQb3NpdGlvblwiOiB0cnVlLCBcIm1hc2tDbGlwXCI6IHRydWUsIFwibWFza09yaWdpblwiOiB0cnVlLCBcIm1hc2tTaXplXCI6IHRydWUsIFwibWFza0NvbXBvc2l0ZVwiOiB0cnVlLCBcIm1hc2tcIjogdHJ1ZSwgXCJtYXNrQm9yZGVyU291cmNlXCI6IHRydWUsIFwibWFza0JvcmRlck1vZGVcIjogdHJ1ZSwgXCJtYXNrQm9yZGVyU2xpY2VcIjogdHJ1ZSwgXCJtYXNrQm9yZGVyV2lkdGhcIjogdHJ1ZSwgXCJtYXNrQm9yZGVyT3V0c2V0XCI6IHRydWUsIFwibWFza0JvcmRlclJlcGVhdFwiOiB0cnVlLCBcIm1hc2tCb3JkZXJcIjogdHJ1ZSwgXCJtYXNrVHlwZVwiOiB0cnVlLCBcInRleHREZWNvcmF0aW9uU3R5bGVcIjogdHJ1ZSwgXCJ0ZXh0RGVjb3JhdGlvblNraXBcIjogdHJ1ZSwgXCJ0ZXh0RGVjb3JhdGlvbkxpbmVcIjogdHJ1ZSwgXCJ0ZXh0RGVjb3JhdGlvbkNvbG9yXCI6IHRydWUsIFwiZmlsdGVyXCI6IHRydWUsIFwiZm9udEZlYXR1cmVTZXR0aW5nc1wiOiB0cnVlLCBcImJyZWFrQWZ0ZXJcIjogdHJ1ZSwgXCJicmVha0JlZm9yZVwiOiB0cnVlLCBcImJyZWFrSW5zaWRlXCI6IHRydWUsIFwiY29sdW1uQ291bnRcIjogdHJ1ZSwgXCJjb2x1bW5GaWxsXCI6IHRydWUsIFwiY29sdW1uR2FwXCI6IHRydWUsIFwiY29sdW1uUnVsZVwiOiB0cnVlLCBcImNvbHVtblJ1bGVDb2xvclwiOiB0cnVlLCBcImNvbHVtblJ1bGVTdHlsZVwiOiB0cnVlLCBcImNvbHVtblJ1bGVXaWR0aFwiOiB0cnVlLCBcImNvbHVtbnNcIjogdHJ1ZSwgXCJjb2x1bW5TcGFuXCI6IHRydWUsIFwiY29sdW1uV2lkdGhcIjogdHJ1ZSwgXCJmbGV4XCI6IHRydWUsIFwiZmxleEJhc2lzXCI6IHRydWUsIFwiZmxleERpcmVjdGlvblwiOiB0cnVlLCBcImZsZXhHcm93XCI6IHRydWUsIFwiZmxleEZsb3dcIjogdHJ1ZSwgXCJmbGV4U2hyaW5rXCI6IHRydWUsIFwiZmxleFdyYXBcIjogdHJ1ZSwgXCJhbGlnbkNvbnRlbnRcIjogdHJ1ZSwgXCJhbGlnbkl0ZW1zXCI6IHRydWUsIFwiYWxpZ25TZWxmXCI6IHRydWUsIFwianVzdGlmeUNvbnRlbnRcIjogdHJ1ZSwgXCJvcmRlclwiOiB0cnVlLCBcInRyYW5zaXRpb25cIjogdHJ1ZSwgXCJ0cmFuc2l0aW9uRGVsYXlcIjogdHJ1ZSwgXCJ0cmFuc2l0aW9uRHVyYXRpb25cIjogdHJ1ZSwgXCJ0cmFuc2l0aW9uUHJvcGVydHlcIjogdHJ1ZSwgXCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb25cIjogdHJ1ZSwgXCJiYWNrZHJvcEZpbHRlclwiOiB0cnVlLCBcInNjcm9sbFNuYXBUeXBlXCI6IHRydWUsIFwic2Nyb2xsU25hcFBvaW50c1hcIjogdHJ1ZSwgXCJzY3JvbGxTbmFwUG9pbnRzWVwiOiB0cnVlLCBcInNjcm9sbFNuYXBEZXN0aW5hdGlvblwiOiB0cnVlLCBcInNjcm9sbFNuYXBDb29yZGluYXRlXCI6IHRydWUsIFwic2hhcGVJbWFnZVRocmVzaG9sZFwiOiB0cnVlLCBcInNoYXBlSW1hZ2VNYXJnaW5cIjogdHJ1ZSwgXCJzaGFwZUltYWdlT3V0c2lkZVwiOiB0cnVlLCBcImh5cGhlbnNcIjogdHJ1ZSwgXCJmbG93SW50b1wiOiB0cnVlLCBcImZsb3dGcm9tXCI6IHRydWUsIFwicmVnaW9uRnJhZ21lbnRcIjogdHJ1ZSwgXCJ0ZXh0U2l6ZUFkanVzdFwiOiB0cnVlIH0sIFwiTW96XCI6IHsgXCJhcHBlYXJhbmNlXCI6IHRydWUsIFwidXNlclNlbGVjdFwiOiB0cnVlLCBcImJveFNpemluZ1wiOiB0cnVlLCBcInRleHRBbGlnbkxhc3RcIjogdHJ1ZSwgXCJ0ZXh0RGVjb3JhdGlvblN0eWxlXCI6IHRydWUsIFwidGV4dERlY29yYXRpb25Ta2lwXCI6IHRydWUsIFwidGV4dERlY29yYXRpb25MaW5lXCI6IHRydWUsIFwidGV4dERlY29yYXRpb25Db2xvclwiOiB0cnVlLCBcInRhYlNpemVcIjogdHJ1ZSwgXCJoeXBoZW5zXCI6IHRydWUsIFwiZm9udEZlYXR1cmVTZXR0aW5nc1wiOiB0cnVlLCBcImJyZWFrQWZ0ZXJcIjogdHJ1ZSwgXCJicmVha0JlZm9yZVwiOiB0cnVlLCBcImJyZWFrSW5zaWRlXCI6IHRydWUsIFwiY29sdW1uQ291bnRcIjogdHJ1ZSwgXCJjb2x1bW5GaWxsXCI6IHRydWUsIFwiY29sdW1uR2FwXCI6IHRydWUsIFwiY29sdW1uUnVsZVwiOiB0cnVlLCBcImNvbHVtblJ1bGVDb2xvclwiOiB0cnVlLCBcImNvbHVtblJ1bGVTdHlsZVwiOiB0cnVlLCBcImNvbHVtblJ1bGVXaWR0aFwiOiB0cnVlLCBcImNvbHVtbnNcIjogdHJ1ZSwgXCJjb2x1bW5TcGFuXCI6IHRydWUsIFwiY29sdW1uV2lkdGhcIjogdHJ1ZSB9LCBcIm1zXCI6IHsgXCJmbGV4XCI6IHRydWUsIFwiZmxleEJhc2lzXCI6IGZhbHNlLCBcImZsZXhEaXJlY3Rpb25cIjogdHJ1ZSwgXCJmbGV4R3Jvd1wiOiBmYWxzZSwgXCJmbGV4Rmxvd1wiOiB0cnVlLCBcImZsZXhTaHJpbmtcIjogZmFsc2UsIFwiZmxleFdyYXBcIjogdHJ1ZSwgXCJhbGlnbkNvbnRlbnRcIjogZmFsc2UsIFwiYWxpZ25JdGVtc1wiOiBmYWxzZSwgXCJhbGlnblNlbGZcIjogZmFsc2UsIFwianVzdGlmeUNvbnRlbnRcIjogZmFsc2UsIFwib3JkZXJcIjogZmFsc2UsIFwidHJhbnNmb3JtXCI6IHRydWUsIFwidHJhbnNmb3JtT3JpZ2luXCI6IHRydWUsIFwidHJhbnNmb3JtT3JpZ2luWFwiOiB0cnVlLCBcInRyYW5zZm9ybU9yaWdpbllcIjogdHJ1ZSwgXCJ1c2VyU2VsZWN0XCI6IHRydWUsIFwid3JhcEZsb3dcIjogdHJ1ZSwgXCJ3cmFwVGhyb3VnaFwiOiB0cnVlLCBcIndyYXBNYXJnaW5cIjogdHJ1ZSwgXCJzY3JvbGxTbmFwVHlwZVwiOiB0cnVlLCBcInNjcm9sbFNuYXBQb2ludHNYXCI6IHRydWUsIFwic2Nyb2xsU25hcFBvaW50c1lcIjogdHJ1ZSwgXCJzY3JvbGxTbmFwRGVzdGluYXRpb25cIjogdHJ1ZSwgXCJzY3JvbGxTbmFwQ29vcmRpbmF0ZVwiOiB0cnVlLCBcInRvdWNoQWN0aW9uXCI6IHRydWUsIFwiaHlwaGVuc1wiOiB0cnVlLCBcImZsb3dJbnRvXCI6IHRydWUsIFwiZmxvd0Zyb21cIjogdHJ1ZSwgXCJicmVha0JlZm9yZVwiOiB0cnVlLCBcImJyZWFrQWZ0ZXJcIjogdHJ1ZSwgXCJicmVha0luc2lkZVwiOiB0cnVlLCBcInJlZ2lvbkZyYWdtZW50XCI6IHRydWUsIFwiZ3JpZFRlbXBsYXRlQ29sdW1uc1wiOiB0cnVlLCBcImdyaWRUZW1wbGF0ZVJvd3NcIjogdHJ1ZSwgXCJncmlkVGVtcGxhdGVBcmVhc1wiOiB0cnVlLCBcImdyaWRUZW1wbGF0ZVwiOiB0cnVlLCBcImdyaWRBdXRvQ29sdW1uc1wiOiB0cnVlLCBcImdyaWRBdXRvUm93c1wiOiB0cnVlLCBcImdyaWRBdXRvRmxvd1wiOiB0cnVlLCBcImdyaWRcIjogdHJ1ZSwgXCJncmlkUm93U3RhcnRcIjogdHJ1ZSwgXCJncmlkQ29sdW1uU3RhcnRcIjogdHJ1ZSwgXCJncmlkUm93RW5kXCI6IHRydWUsIFwiZ3JpZFJvd1wiOiB0cnVlLCBcImdyaWRDb2x1bW5cIjogdHJ1ZSwgXCJncmlkQ29sdW1uRW5kXCI6IHRydWUsIFwiZ3JpZENvbHVtbkdhcFwiOiB0cnVlLCBcImdyaWRSb3dHYXBcIjogdHJ1ZSwgXCJncmlkQXJlYVwiOiB0cnVlLCBcImdyaWRHYXBcIjogdHJ1ZSwgXCJ0ZXh0U2l6ZUFkanVzdFwiOiB0cnVlIH0gfTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG4vLyBoZWxwZXIgdG8gY2FwaXRhbGl6ZSBzdHJpbmdzXG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChzdHIpIHtcbiAgcmV0dXJuIHN0ci5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHN0ci5zbGljZSgxKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICByZXR1cm4gcHJvcGVydHkubWF0Y2goL14oV2Via2l0fE1venxPfG1zKS8pICE9PSBudWxsO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHZhbHVlID0gdmFsdWUuam9pbignLCcpO1xuXG4gIHJldHVybiB2YWx1ZS5tYXRjaCgvLXdlYmtpdC18LW1vei18LW1zLS8pICE9PSBudWxsO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG4vLyByZXR1cm5zIGEgc3R5bGUgb2JqZWN0IHdpdGggYSBzaW5nbGUgY29uY2F0ZWQgcHJlZml4ZWQgdmFsdWUgc3RyaW5nXG5cbmV4cG9ydHMuZGVmYXVsdCA9IGZ1bmN0aW9uIChwcm9wZXJ0eSwgdmFsdWUpIHtcbiAgdmFyIHJlcGxhY2VyID0gYXJndW1lbnRzLmxlbmd0aCA8PSAyIHx8IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gZnVuY3Rpb24gKHByZWZpeCwgdmFsdWUpIHtcbiAgICByZXR1cm4gcHJlZml4ICsgdmFsdWU7XG4gIH0gOiBhcmd1bWVudHNbMl07XG4gIHJldHVybiBfZGVmaW5lUHJvcGVydHkoe30sIHByb3BlcnR5LCBbJy13ZWJraXQtJywgJy1tb3otJywgJyddLm1hcChmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgcmV0dXJuIHJlcGxhY2VyKHByZWZpeCwgdmFsdWUpO1xuICB9KSk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRlZmF1bHQgPSBzb3J0UHJlZml4ZWRTdHlsZTtcblxudmFyIF9pc1ByZWZpeGVkUHJvcGVydHkgPSByZXF1aXJlKCcuL2lzUHJlZml4ZWRQcm9wZXJ0eScpO1xuXG52YXIgX2lzUHJlZml4ZWRQcm9wZXJ0eTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pc1ByZWZpeGVkUHJvcGVydHkpO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyBkZWZhdWx0OiBvYmogfTsgfVxuXG5mdW5jdGlvbiBzb3J0UHJlZml4ZWRTdHlsZShzdHlsZSkge1xuICByZXR1cm4gT2JqZWN0LmtleXMoc3R5bGUpLnNvcnQoZnVuY3Rpb24gKGxlZnQsIHJpZ2h0KSB7XG4gICAgaWYgKCgwLCBfaXNQcmVmaXhlZFByb3BlcnR5Mi5kZWZhdWx0KShsZWZ0KSAmJiAhKDAsIF9pc1ByZWZpeGVkUHJvcGVydHkyLmRlZmF1bHQpKHJpZ2h0KSkge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH0gZWxzZSBpZiAoISgwLCBfaXNQcmVmaXhlZFByb3BlcnR5Mi5kZWZhdWx0KShsZWZ0KSAmJiAoMCwgX2lzUHJlZml4ZWRQcm9wZXJ0eTIuZGVmYXVsdCkocmlnaHQpKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG4gIH0pLnJlZHVjZShmdW5jdGlvbiAoc29ydGVkU3R5bGUsIHByb3ApIHtcbiAgICBzb3J0ZWRTdHlsZVtwcm9wXSA9IHN0eWxlW3Byb3BdO1xuICAgIHJldHVybiBzb3J0ZWRTdHlsZTtcbiAgfSwge30pO1xufVxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2xpYi9zdGF0aWMvcHJlZml4QWxsJylcbiJdfQ==
