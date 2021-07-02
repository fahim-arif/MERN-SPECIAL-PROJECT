import { Route, BrowserRouter as Router } from "react-router-dom";

import HomeScreen from "./screens/HomeScreen";
import Header from "./components/Header";

const App = () => {
  return (
    <>
      <Router>
        <Header />
        {/* <HomeScreen /> */}
      </Router>
    </>
  );
};

export default App;
