import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";

const App = () => {
  return (
    <Router>
      <Header />
      <Route path='/sign-in' component={RegisterScreen} />
      <Route path='/login' component={LoginScreen} />
      <Route path='/' component={HomeScreen} exact />
    </Router>
  );
};

export default App;
