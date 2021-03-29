import React from "react";
import { BrowserRouter, Route } from 'react-router-dom';

import routes from "./routes";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        {
          routes.map((route, routeIndex) => {
            return (
              <Route key={routeIndex} {...route} />
            )
          })
        }
      </BrowserRouter> 
    </div>
  );
};

export default App;
