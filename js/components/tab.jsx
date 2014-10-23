var React  = require("react/addons");
var Router = require("react-router");

var Link = Router.Link;

var Tab = React.createClass({

  mixins: [ Router.ActiveState ],

  render: function() {
    return (
      <Link to={this.props.to} className="tab">{this.props.title}</Link>
    );
  }

});

module.exports = Tab;
