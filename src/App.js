import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Component, useEffect, useState } from "react";
import routes from "./routes";
import { Navbar } from "./components/web/Navbar/Navbar";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Ha ocurrido un error.</h1>;
    }

    return this.props.children;
  }
}

function App() {
  const isAuthenticated = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(isAuthenticated);
  }, [isAuthenticated]);

  console.log(routes);
  console.log(isLoggedIn);
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          {isLoggedIn ? (
            <Route path="/" element={<Navbar />} />
          ) : (
            <Route path="/" element={<Navbar />} />
          )}
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
