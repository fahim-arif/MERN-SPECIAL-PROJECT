import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import ContactUs from "./screens/ContactUs";
import TuitionScreen from "./screens/TuitionScreen";
import TutorScreen from "./screens/TutorScreen";
import HomePageScreen from "./screens/HomePageScreen";
import BasicProfessionalInfo from "./screens/BasicProfessionalInfo";
import PersonalInfo from "./screens/PersonalInfo";
import SecurityInfo from "./screens/SecurityInfo";
import SignIn from "./components/Modal/SignIn";
import SignUp from "./components/Modal/SignUp";
import RequestTutor from "./screens/RequestTutor";
import AvailableTuitions from "./screens/AvailableTuitions";
import UserProfile from "./screens/UserProfile";
const App = () => {
  return (
    <Router>
      <Header />
      <Route path='/request-tutor' component={RequestTutor} />
      <Route path='/available-tutions' component={AvailableTuitions} />
      <Route path='/tuition' exact component={TuitionScreen}></Route>
      <Route path='/tuition/tutor/:id' component={TutorScreen} />
      <Route path='/user-profile' exact component={UserProfile}></Route>
      <Route
        path='/professional-info'
        exact
        component={BasicProfessionalInfo}
      ></Route>
      <Route path='/personal-info' exact component={PersonalInfo}></Route>
      <Route path='/security-info' exact component={SecurityInfo}></Route>
      <Route path='/' component={HomePageScreen} exact></Route>
      <Route path='/sign-in' component={SignIn} />
      <Route path='/login' component={SignUp} />
      <Route path='/contact-us' component={ContactUs} />

      {/* <Route path='/tuition' component={TuitionScreen} />
      <Route path='/tutor/:id' component={TutorScreen} />
      <Route path='/' component={HomeScreen} exact /> */}
      <Footer />
    </Router>
  );
};

export default App;
