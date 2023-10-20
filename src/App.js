// App.js
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Navbar } from "./components/web/Navbar/Navbar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.route}
            element={isLoggedIn ? <Navbar /> : route.component}
          />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
