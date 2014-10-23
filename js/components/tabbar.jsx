var React = require('react');

var Tab = require("./tab.jsx");

var TabBar = React.createClass({

  render: function() {
    return (
      <div className="tabs">
        <Tab to="home" title="home.js" />
        <Tab to="about" title="about.js" />
        <Tab to="stuff" title="stuff.js" />
      </div>
    );
  }

});

module.exports = TabBar;