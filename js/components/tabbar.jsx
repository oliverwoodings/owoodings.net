var React = require('react');

var Tab = require("./tab.jsx");

var TabBar = React.createClass({

  render: function() {
    return (
      <div className="tab-bar">
        <Tab to="home" title="home.js" />
        <Tab to="stuff" title="stuff.js" />
      </div>
    );
  }

});

module.exports = TabBar;