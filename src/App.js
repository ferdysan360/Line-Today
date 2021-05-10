import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navigation from './Containers/Navigation/Navigation';
import NewsPage from './Containers/NewsPage/NewsPage';
import './App.css';

function App() {
  return (
    <div className="App">
        <Router>
          <div>
            <Navigation />

            {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/top">
                <NewsPage page="top" />
              </Route>
              <Route path="/about">
                <NewsPage page="about" />
              </Route>
              <Route path="/users">
                <NewsPage page="users"/>
              </Route>
            </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;
