import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/common/Header";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import HomeScreen from "./screens/HomeScreen";
import TutorScreen from "./screens/TutorScreen";
import ContactUs from "./screens/ContactUs";
import Footer from "./components/common/Footer";
import TuitionScreen from "./screens/TuitionScreen";
import HomePageScreen from "./components/HomePageScreen";
const App = () => {
  return (
    <Router>
      <Header />
      <HomePageScreen />
      {/* <Route path='/tuition' component={TuitionScreen} />
      <Route path='/contact-us' component={ContactUs} />
      <Route path='/sign-in' component={RegisterScreen} />
      <Route path='/login' component={LoginScreen} />
      <Route path='/tutor/:id' component={TutorScreen} />
      <Route path='/' component={HomeScreen} exact /> */}
      <Footer />
    </Router>
  );
};

export default App;
