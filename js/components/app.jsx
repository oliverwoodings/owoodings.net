var React = require("react");

var MenuBar = require("./menubar.jsx");
var SideBar = require("./sidebar.jsx");
var TabBar  = require("./tabbar.jsx");

var App = React.createClass({
  render: function () {
    return (
      <div id="window">
        <MenuBar />
        <div id="main-wrapper">
          <SideBar />
          <div id="editor-wrapper">
            <TabBar />
            <div id="editor">
              <this.props.activeRouteHandler/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = App;