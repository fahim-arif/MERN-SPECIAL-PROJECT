import { Route, BrowserRouter as Router } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import Header from "./components/Header";
import MainSection from "./components/MainSection";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <MainSection />
      </Router>
    </>
  );
};

export default App;
