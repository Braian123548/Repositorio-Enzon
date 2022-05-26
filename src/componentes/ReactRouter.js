import { Route, Router } from "react-router-dom";
import React from 'react';
import App from "../App";

export const ReactRouter = () => {
  return (
    <Router>
          <Route path="/">
            <App />
          </Route>
    </Router>
  )
}
