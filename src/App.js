import "./App.css";
import { Fragment, useState, useEffect } from "react";
import MainHeader from "./components/mainHeader/MainHeader";
import Home from "./components/home/Home";
import Login from "./components/login/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const storedLog = localStorage.getItem("isLoggedIn");

    storedLog === "1" ? setIsLoggedIn(true) : setIsLoggedIn(false);
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem("isLoggedIn", "1");
    setIsLoggedIn(true);
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
  };
  return (
    <Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
    </Fragment>
  );
}

export default App;
