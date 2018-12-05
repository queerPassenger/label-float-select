module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var LabelFloatSelect = function (_React$Component) {
	    _inherits(LabelFloatSelect, _React$Component);

	    function LabelFloatSelect(props) {
	        _classCallCheck(this, LabelFloatSelect);

	        var _this = _possibleConstructorReturn(this, (LabelFloatSelect.__proto__ || Object.getPrototypeOf(LabelFloatSelect)).call(this, props));

	        _this.state = {
	            _: ''
	        };
	        _this['_ref'] = Math.random().toString(36).substring(9);
	        _this.options = props.options;
	        _this.value = props.value;
	        _this.label = props.label;
	        _this.style = {
	            'label-float-select-wrapper': {
	                float: 'left',
	                width: '100%'
	            },
	            'select-label': {
	                float: 'left',
	                width: '100%',
	                color: props.color ? props.color : 'black',
	                fontFamily: props.fontFamily ? props.fontFamily : 'monospace',
	                fontSize: props.fontSize ? props.fontSize : '15px'
	            },
	            'select': {
	                width: '100%',
	                paddingTop: '10px',
	                paddingBottom: '10px',
	                border: '0px',
	                borderBottom: '2px solid ' + (props.color ? props.color : 'black'),
	                color: props.color ? props.color : 'black',
	                outline: '0px',
	                fontFamily: props.fontFamily ? props.fontFamily : 'monospace'
	            }
	        };
	        return _this;
	    }

	    _createClass(LabelFloatSelect, [{
	        key: 'componentWillReceiveProps',
	        value: function componentWillReceiveProps(nextProps) {
	            var _this2 = this;

	            var paramsToSet = this.diffChecker(nextProps, this);
	            paramsToSet.map(function (param) {
	                _this2[param] = nextProps[param];
	            });
	            this.mutateState();
	        }
	    }, {
	        key: 'diffChecker',
	        value: function diffChecker(curr, prev) {
	            var paramToCheck = ['options', 'value', 'label'];
	            var paramsToSet = [];
	            paramToCheck.map(function (param) {
	                if (JSON.stringify(curr[param]) !== JSON.stringify(prev[param])) {
	                    paramsToSet.push(param);
	                }
	            });
	            return paramsToSet;
	        }
	    }, {
	        key: 'mutateState',
	        value: function mutateState() {
	            this.setState({
	                _: ''
	            });
	        }
	    }, {
	        key: 'handleChange',
	        value: function handleChange() {
	            this.value = this.refs[this['_ref']].value;
	            if (this.props.onChange) {
	                this.props.onChange(this.value);
	            }
	            this.mutateState();
	        }
	    }, {
	        key: 'render',
	        value: function render() {
	            var _this3 = this;

	            return _react2.default.createElement(
	                'div',
	                { className: 'label-float-select-wrapper', style: this.style['label-float-select-wrapper'] },
	                _react2.default.createElement(
	                    'div',
	                    { className: 'select-label', style: this.style['select-label'] },
	                    this.label
	                ),
	                _react2.default.createElement(
	                    'select',
	                    {
	                        ref: this['_ref'],
	                        value: this.value,
	                        onChange: this.handleChange.bind(this),
	                        style: this.style['select']
	                    },
	                    this.options.map(function (option, optionInd) {
	                        return _react2.default.createElement(
	                            'option',
	                            { key: _this3['_ref'] + "options" + optionInd, value: option.value },
	                            option.label
	                        );
	                    })
	                )
	            );
	        }
	    }]);

	    return LabelFloatSelect;
	}(_react2.default.Component);

	exports.default = LabelFloatSelect;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = require("react");

/***/ })
/******/ ]);