import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/common/Header";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import TutorScreen from "./screens/TutorScreen";
import ContactUs from "./screens/ContactUs";
import Footer from "./components/common/Footer";
import TuitionScreen from "./screens/TuitionScreen";
import HomePageScreen from "./screens/HomePageScreen";
import BasicProfessionalInfo from "./screens/BasicProfessionalInfo";
import PersonalInfo from "./screens/PersonalInfo";
import SecurityInfo from "./screens/SecurityInfo";
import SignIn from "./components/Modal/SignIn";
import SignUp from "./components/Modal/SignUp";
const App = () => {
  return (
    <Router>
      <Header />
      <Route path='/tuition' exact component={TuitionScreen}></Route>
      <Route path='/professional-info' exact component={BasicProfessionalInfo}></Route>
      <Route path='/personal-info' exact component={PersonalInfo}></Route>
      <Route path='/security-info' exact component={SecurityInfo}></Route>
      <Route path='/' component={HomePageScreen} exact></Route>
      <Route path='/sign-in' component={SignIn} />
      <Route path='/login' component={SignUp} />

      {/* <Route path='/tuition' component={TuitionScreen} />
      <Route path='/contact-us' component={ContactUs} />
      <Route path='/tutor/:id' component={TutorScreen} />
      <Route path='/' component={HomeScreen} exact /> */}
      <Footer />
    </Router>
  );
};

export default App;
