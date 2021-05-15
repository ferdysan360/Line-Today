import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import Navigation from './Containers/Navigation/Navigation';
import NewsPage from './Containers/NewsPage/NewsPage';
import NewsDetail from './Containers/NewsDetail/NewsDetail';
import './App.css';
import axios from "axios";
import Bookmarks from "./Containers/Bookmarks/Bookmarks";

function App() {
  const [data, setData] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      
      const result = await axios(
        'https://today.line.me/id/portaljson',
      );

      setData(result.data);
      setIsLoading(false);
    };

    fetchData();
  }, []);


  return (
    <div className="App">
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <Router>
          <div>
            <div className="title-navbar-header">
              <div className="top-header">
                <img className="line-today-logo" src="https://static-today.line-scdn.net/dist/9a81ef70/static/img/brand-logo-rectangle-today-solid.svg"></img>
                <Link className="bookmarks-link" to="/bookmarks">Bookmarks</Link>
              </div>
              <Navigation data={data}/>
            </div>

            {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/" exact>
                <NewsPage data={data.result.categories[0]} />
              </Route>
              {data.result.categories.map(item => (
                <Route key={"route" + item.name} path={"/" + item.name}>
                  <NewsPage data={item} />
                </Route>
              ))}
              <Route path="/article/:articleHash">
                <NewsDetail />
              </Route>
              <Route path="/bookmarks">
                <Bookmarks />
              </Route>
            </Switch>
          </div>
        </Router>
      )}
    </div>
  );
}

export default App;
