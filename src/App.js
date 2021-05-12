import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navigation from './Containers/Navigation/Navigation';
import NewsPage from './Containers/NewsPage/NewsPage';
import './App.css';
import axios from "axios";

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
            <img className="line-today-logo" src="https://static-today.line-scdn.net/dist/9a81ef70/static/img/brand-logo-rectangle-today-solid.svg"></img>
            <Navigation data={data}/>

            {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
            <Switch>
              {data.result.categories.map(item => (
                <Route path={"/" + item.name}>
                  <NewsPage data={item} />
                </Route>
              ))}
            </Switch>
          </div>
        </Router>
      )}
    </div>
  );
}

export default App;
