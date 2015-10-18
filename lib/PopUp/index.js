'use strict';

var _reactTransformHmr2 = require('react-transform-hmr');

var _reactTransformHmr3 = _interopRequireDefault(_reactTransformHmr2);

var _react = require('react');

var _reactTransformCatchErrors2 = require('react-transform-catch-errors');

var _reactTransformCatchErrors3 = _interopRequireDefault(_reactTransformCatchErrors2);

var _redboxReact = require('redbox-react');

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; desc = parent = getter = undefined; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react2 = _interopRequireDefault(_react);

var _reactMotion = require('react-motion');

var _styles = require('./styles');

var _components = {
  _$PopUp: {
    displayName: 'PopUp'
  }
};

var _reactComponentWrapper = (0, _reactTransformHmr3['default'])({
  filename: '/Users/nitive/Desktop/shrimp/node_modules/react-motion-pack/modules/PopUp/index.jsx',
  components: _components,
  locals: [module],
  imports: [_react]
});

var _reactComponentWrapper2 = (0, _reactTransformCatchErrors3['default'])({
  filename: '/Users/nitive/Desktop/shrimp/node_modules/react-motion-pack/modules/PopUp/index.jsx',
  components: _components,
  locals: [],
  imports: [_react, _redboxReact]
});

function _wrapComponent(uniqueId) {
  return function (ReactClass) {
    return _reactComponentWrapper2(_reactComponentWrapper(ReactClass, uniqueId), uniqueId);
  };
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var PopUp = (function (_React$Component) {
  _inherits(PopUp, _React$Component);

  function PopUp() {
    _classCallCheck(this, _PopUp);

    _get(Object.getPrototypeOf(_PopUp.prototype), 'constructor', this).apply(this, arguments);
  }

  _createClass(PopUp, [{
    key: 'render',
    value: function render() {
      var _this = this;

      var getContent = function getContent(interpolated) {
        return _react2['default'].createElement(
          'div',
          { style: _styles.wrapper },
          _react2['default'].createElement(
            'div',
            _extends({}, _this.props, {
              className: _this.props.className,
              style: Object.assign({}, _styles.styles, _this.props.style, { transform: 'scale(' + interpolated.scale + ')' })
            }),
            _this.props.children
          )
        );
      };

      return _react2['default'].createElement(
        _reactMotion.Motion,
        {
          defaultStyle: { scale: (0, _reactMotion.spring)(0) },
          style: { scale: (0, _reactMotion.spring)(1, this.props.motionConfig) }
        },
        function (interpolated) {
          return getContent(interpolated);
        }
      );
    }
  }], [{
    key: 'propTypes',
    value: {
      children: _react.PropTypes.node.isRequired,
      className: _react.PropTypes.string,
      style: _react.PropTypes.object,
      motionConfig: _react.PropTypes.array
    },
    enumerable: true
  }, {
    key: 'defaultProps',
    value: {
      style: {},
      motionConfig: [120, 11]
    },
    enumerable: true
  }]);

  var _PopUp = PopUp;
  PopUp = _wrapComponent('_$PopUp')(PopUp) || PopUp;
  return PopUp;
})(_react2['default'].Component);

exports['default'] = PopUp;
module.exports = exports['default'];