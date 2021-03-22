import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import routes from "./routes";
import "./App.css";

export default function App() {
  return (
    <div>
      <h1 className="title">The inforce Test app</h1>
      <BrowserRouter>
        {routes.map((route) => (
          <Route
            key={route.path}
            exact={route.exact}
            path={route.path}
            component={route.component}
          ></Route>
        ))}
      </BrowserRouter>
      {/* <Link>sds</Link> */}
    </div>
  );
}
