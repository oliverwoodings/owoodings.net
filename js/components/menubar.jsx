var React = require("react");

var MenuBar = React.createClass({
  render: function () {
    return (
      <div id="menubar">
        <ul id="menubar-icons">
          <li id="menubar-icon-close"></li>
          <li id="menubar-icon-minimise"></li>
          <li id="menubar-icon-maximise"></li>
        </ul>
        <div id="menubar-title">
          <span id="menubar-title-icon">owoodings.net &mdash;</span>
          <span id="menubar-subtitle"> home.js</span>
        </div>
      </div>
    );
  }
});

module.exports = MenuBar;