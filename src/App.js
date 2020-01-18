import React from "react";

import HelloPage from "./components/pages/HelloPage/HelloPage"
import SigninPage from "./components/pages/LoginPages/SigninPage"
import SignupPage from "./components/pages/LoginPages/SignupPage"
import ContentPage from "./components/pages/ContentPage/ContentPage"
import { BrowserRouter as Router, Route} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
          <Route path="/" exact component={HelloPage} />
          <Route path="/sign-in" component={SigninPage} />
          <Route path="/sign-up" component={SignupPage} />
          <Route path="/content-page" component={ContentPage} />
      </div>
    </Router>
  );
}

export default App;
