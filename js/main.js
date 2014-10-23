/** @jsx React.DOM */

var $      = require("jquery");
var React  = require("react");
var Router = require("./router");

React.renderComponent(<Router />, $("body"));
console.log('hello');