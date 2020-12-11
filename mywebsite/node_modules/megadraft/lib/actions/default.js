"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _icons = _interopRequireDefault(require("../icons"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/*
 * Copyright (c) 2016, Globo.com (https://github.com/globocom)
 *
 * License: MIT
 */
var _default = [{
  type: "inline",
  label: "B",
  style: "BOLD",
  icon: _icons["default"].BoldIcon
}, {
  type: "inline",
  label: "I",
  style: "ITALIC",
  icon: _icons["default"].ItalicIcon
}, {
  type: "entity",
  label: "Link",
  style: "link",
  entity: "LINK",
  icon: _icons["default"].LinkIcon
}, {
  type: "separator"
}, {
  type: "block",
  label: "UL",
  style: "unordered-list-item",
  icon: _icons["default"].ULIcon
}, {
  type: "block",
  label: "OL",
  style: "ordered-list-item",
  icon: _icons["default"].OLIcon
}, {
  type: "block",
  label: "H2",
  style: "header-two",
  icon: _icons["default"].H2Icon
}, {
  type: "block",
  label: "QT",
  style: "blockquote",
  icon: _icons["default"].BlockQuoteIcon
}];
exports["default"] = _default;