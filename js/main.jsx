var React         = require("react");
var Router        = require('react-router');

var Route         = Router.Route;
var Routes        = Router.Routes;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute  = Router.DefaultRoute;
var Redirect      = Router.Redirect;

var App          = require("./components/app.jsx");
var NotFoundView = require("./components/views/notfound.jsx");
var HomeView     = require("./components/views/home.jsx");
var StuffView    = require("./components/views/stuff.jsx");

React.renderComponent((
  <Routes location="location">
    <Route name="app" path="/" handler={App}>
      <Route name="home" handler={HomeView} />
      <Route name="stuff" handler={StuffView} />
      <DefaultRoute handler={HomeView} />
      <Redirect path="/" to="home" />
      <NotFoundRoute handler={NotFoundView} />
    </Route>
  </Routes>
), document.body);