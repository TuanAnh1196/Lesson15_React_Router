import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound';
import Menu from './components/Menu';
import routes from './routes';

class App extends React.Component {
   render() {
      return (
         <Router>
            <div className="App">
               {/* menu */}
               <Menu />
               {/* noi dung */}
               <Switch>
                  <Route path="/" exact component={Home} />
                  {this.showContentMenus(routes)}
               </Switch>
            </div>
         </Router>
      );
   }
   showContentMenus = (routes) => {
      let result = null;
      if (routes.length > 0) {
         result = routes.map((route, index) => {
            return (
               <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
               />
            )
         })
      }
      return result;

   }

}

export default App;
