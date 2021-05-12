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
        <p style={{ maxWidth: "40rem", margin: "2rem auto" }}>
          this example shows how we can use the following features: useReducer,
          useEffect, useImperativeHandle, useContext and more
        </p>
      </main>
    </Fragment>
  );
}

export default App;
