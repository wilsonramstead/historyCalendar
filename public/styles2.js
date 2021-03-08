(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles2"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles2.scss":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--15-3!./src/styles2.scss ***!
  \***********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, "body {\n  font-family: sans-serif;\n  font-weight: 100;\n  --grey-100: #e4e9f0;\n  --grey-200: #cfd7e3;\n  --grey-300: #b5c0cd;\n  --grey-800: #3e4e63;\n  --grid-gap: 1px;\n  --day-label-size: 20px;\n}\n\nol,\nli {\n  padding: 0;\n  margin: 0;\n  list-style: none;\n}\n\n.calendar-month {\n  position: relative;\n  background-color: var(--grey-200);\n  border: solid 1px var(--grey-200);\n}\n\n.calendar-month-header {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  background-color: #fff;\n  padding: 10px;\n}\n\n.calendar-month-header-selected-month {\n  font-size: 24px;\n  font-weight: 600;\n}\n\n.calendar-month-header-selectors {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  width: 80px;\n}\n\n.calendar-month-header-selectors > * {\n  cursor: pointer;\n}\n\n.day-of-week,\n.days-grid {\n  display: grid;\n  grid-template-columns: repeat(7, 1fr);\n}\n\n.day-of-week {\n  color: var(--grey-800);\n  font-size: 18px;\n  background-color: #fff;\n  padding-bottom: 5px;\n  padding-top: 10px;\n}\n\n.day-of-week > * {\n  text-align: right;\n  padding-right: 5px;\n}\n\n.days-grid {\n  height: 100%;\n  position: relative;\n  grid-column-gap: var(--grid-gap);\n  grid-row-gap: var(--grid-gap);\n  border-top: solid 1px var(--grey-200);\n}\n\n.calendar-day {\n  position: relative;\n  min-height: 100px;\n  font-size: 16px;\n  background-color: #d30707;\n  color: var(--grey-800);\n  padding: 5px;\n}\n\n.calendar-day > span {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  position: absolute;\n  right: 2px;\n  width: var(--day-label-size);\n  height: var(--day-label-size);\n}\n\n.calendar-day--not-current {\n  background-color: var(--grey-100);\n  color: var(--grey-300);\n}\n\n.calendar-day--today {\n  padding-top: 4px;\n}\n\n.calendar-day--today > span {\n  color: #fff;\n  border-radius: 9999px;\n  background-color: var(--grey-800);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy93aWxzb25yYW1zdGVhZC9EZXNrdG9wL25ld1Byb2plY3RzMjAyMS9nb2FsVHJhY2tlci9wdWJsaWMvc3JjL3N0eWxlczIuc2NzcyIsInNyYy9zdHlsZXMyLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUNBSjs7QURHQTs7RUFFSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtFQUNBLGlDQUFBO0VBQ0EsaUNBQUE7QUNBSjs7QURFSTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUNBUjs7QURFUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtBQ0FaOztBREdRO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7RUFDQSxXQUFBO0FDRFo7O0FESVE7RUFDSSxlQUFBO0FDRlo7O0FET0E7O0VBRUksYUFBQTtFQUNBLHFDQUFBO0FDSko7O0FET0E7RUFDSSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUNKSjs7QURNSTtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7QUNKUjs7QURRQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSxxQ0FBQTtBQ0xKOztBRFFBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQ0xKOztBRE9JO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0FDTFI7O0FET0k7RUFDSSxpQ0FBQTtFQUNBLHNCQUFBO0FDTFI7O0FET0k7RUFDSSxnQkFBQTtBQ0xSOztBRE9JO0VBQ0ksV0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUNBQUE7QUNMUiIsImZpbGUiOiJzcmMvc3R5bGVzMi5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5ib2R5IHtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIC0tZ3JleS0xMDA6ICNlNGU5ZjA7XG4gICAgLS1ncmV5LTIwMDogI2NmZDdlMztcbiAgICAtLWdyZXktMzAwOiAjYjVjMGNkO1xuICAgIC0tZ3JleS04MDA6ICMzZTRlNjM7XG4gICAgLS1ncmlkLWdhcDogMXB4O1xuICAgIC0tZGF5LWxhYmVsLXNpemU6IDIwcHg7XG59XG5cbm9sLFxubGkge1xuICAgIHBhZGRpbmc6IDA7XG4gICAgbWFyZ2luOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbi5jYWxlbmRhci1tb250aCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXktMjAwKTtcbiAgICBib3JkZXI6IHNvbGlkIDFweCB2YXIoLS1ncmV5LTIwMCk7XG5cbiAgICAmLWhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgICAgcGFkZGluZzogMTBweDtcblxuICAgICAgICAmLXNlbGVjdGVkLW1vbnRoIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIH1cblxuICAgICAgICAmLXNlbGVjdG9ycyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJi1zZWxlY3RvcnMgPiAqIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmRheS1vZi13ZWVrLFxuLmRheXMtZ3JpZCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg3LCAxZnIpO1xufVxuXG4uZGF5LW9mLXdlZWsge1xuICAgIGNvbG9yOiB2YXIoLS1ncmV5LTgwMCk7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcblxuICAgICYgPiAqIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcbiAgICB9XG59XG5cbi5kYXlzLWdyaWQge1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZ3JpZC1jb2x1bW4tZ2FwOiB2YXIoLS1ncmlkLWdhcCk7XG4gICAgZ3JpZC1yb3ctZ2FwOiB2YXIoLS1ncmlkLWdhcCk7XG4gICAgYm9yZGVyLXRvcDogc29saWQgMXB4IHZhcigtLWdyZXktMjAwKTtcbn1cblxuLmNhbGVuZGFyLWRheSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi1oZWlnaHQ6IDEwMHB4O1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjExLCA3LCA3KTtcbiAgICBjb2xvcjogdmFyKC0tZ3JleS04MDApO1xuICAgIHBhZGRpbmc6IDVweDtcblxuICAgICYgPiBzcGFuIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDJweDtcbiAgICAgICAgd2lkdGg6IHZhcigtLWRheS1sYWJlbC1zaXplKTtcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1kYXktbGFiZWwtc2l6ZSk7XG4gICAgfVxuICAgICYtLW5vdC1jdXJyZW50IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleS0xMDApO1xuICAgICAgICBjb2xvcjogdmFyKC0tZ3JleS0zMDApO1xuICAgIH1cbiAgICAmLS10b2RheSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiA0cHg7XG4gICAgfVxuICAgICYtLXRvZGF5ID4gc3BhbiB7XG4gICAgICAgIGNvbG9yOiAjZmZmO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdyZXktODAwKTtcbiAgICB9XG59XG4iLCJib2R5IHtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG4gIGZvbnQtd2VpZ2h0OiAxMDA7XG4gIC0tZ3JleS0xMDA6ICNlNGU5ZjA7XG4gIC0tZ3JleS0yMDA6ICNjZmQ3ZTM7XG4gIC0tZ3JleS0zMDA6ICNiNWMwY2Q7XG4gIC0tZ3JleS04MDA6ICMzZTRlNjM7XG4gIC0tZ3JpZC1nYXA6IDFweDtcbiAgLS1kYXktbGFiZWwtc2l6ZTogMjBweDtcbn1cblxub2wsXG5saSB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuLmNhbGVuZGFyLW1vbnRoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1ncmV5LTIwMCk7XG4gIGJvcmRlcjogc29saWQgMXB4IHZhcigtLWdyZXktMjAwKTtcbn1cbi5jYWxlbmRhci1tb250aC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4uY2FsZW5kYXItbW9udGgtaGVhZGVyLXNlbGVjdGVkLW1vbnRoIHtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBmb250LXdlaWdodDogNjAwO1xufVxuLmNhbGVuZGFyLW1vbnRoLWhlYWRlci1zZWxlY3RvcnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHdpZHRoOiA4MHB4O1xufVxuLmNhbGVuZGFyLW1vbnRoLWhlYWRlci1zZWxlY3RvcnMgPiAqIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZGF5LW9mLXdlZWssXG4uZGF5cy1ncmlkIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNywgMWZyKTtcbn1cblxuLmRheS1vZi13ZWVrIHtcbiAgY29sb3I6IHZhcigtLWdyZXktODAwKTtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBwYWRkaW5nLWJvdHRvbTogNXB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbn1cbi5kYXktb2Ytd2VlayA+ICoge1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xufVxuXG4uZGF5cy1ncmlkIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGdyaWQtY29sdW1uLWdhcDogdmFyKC0tZ3JpZC1nYXApO1xuICBncmlkLXJvdy1nYXA6IHZhcigtLWdyaWQtZ2FwKTtcbiAgYm9yZGVyLXRvcDogc29saWQgMXB4IHZhcigtLWdyZXktMjAwKTtcbn1cblxuLmNhbGVuZGFyLWRheSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbWluLWhlaWdodDogMTAwcHg7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2QzMDcwNztcbiAgY29sb3I6IHZhcigtLWdyZXktODAwKTtcbiAgcGFkZGluZzogNXB4O1xufVxuLmNhbGVuZGFyLWRheSA+IHNwYW4ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogMnB4O1xuICB3aWR0aDogdmFyKC0tZGF5LWxhYmVsLXNpemUpO1xuICBoZWlnaHQ6IHZhcigtLWRheS1sYWJlbC1zaXplKTtcbn1cbi5jYWxlbmRhci1kYXktLW5vdC1jdXJyZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleS0xMDApO1xuICBjb2xvcjogdmFyKC0tZ3JleS0zMDApO1xufVxuLmNhbGVuZGFyLWRheS0tdG9kYXkge1xuICBwYWRkaW5nLXRvcDogNHB4O1xufVxuLmNhbGVuZGFyLWRheS0tdG9kYXkgPiBzcGFuIHtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZ3JleS04MDApO1xufSJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles2.scss":
/*!**************************!*\
  !*** ./src/styles2.scss ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--15-3!./styles2.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles2.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 3:
/*!********************************!*\
  !*** multi ./src/styles2.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/wilsonramstead/Desktop/newProjects2021/goalTracker/public/src/styles2.scss */"./src/styles2.scss");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles2.js.map