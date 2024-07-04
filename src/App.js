import React, { useEffect } from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import ProductDisp from "./pages/ProductDisp";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Discover from "./pages/Discover";
import "./App.css";
import Header from "./components/Header";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/product/:id' component={ProductDisp} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/discover' component={Discover} />
          <Route exact path='*' component={NotFound} />
          <Route exact path='/nf' component={NotFound} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
