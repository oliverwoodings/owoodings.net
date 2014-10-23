var React = require("react");
var fs    = require("fs");
var hljs  = require("highlight.js");
var $     = require("jquery");

var contents = fs.readFileSync(__dirname + "/../../../static/home.js", "utf8");
var highlighted = hljs.highlight("javascript", contents).value;
var lineNumber = highlighted.match(/\n/g) || [];

var HomeView = React.createClass({

  render: function () {
    var gutterLines = [];
    for (var i = 0; i <= lineNumber.length; i++) {
      gutterLines.push(<div>{i}</div>);
    }
    return (
      <div className="view-home">
        <div className="gutter">{gutterLines}</div>
        <pre />
      </div>
    );
  },

  componentDidMount: function () {
    $(this.getDOMNode()).find("pre").append(highlighted);
  }

});

module.exports = HomeView;