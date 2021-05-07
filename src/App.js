import "./App.css";
import { Fragment, useContext } from "react";
import MainHeader from "./components/mainHeader/MainHeader";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import AuthContext from "./components/context/auth-context";

function App() {
  const ctx = useContext(AuthContext);
  return (
    <Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </Fragment>
  );
}

export default App;
