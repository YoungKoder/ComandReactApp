import React from "react";

import HelloPage from "./components/pages/helloPage/HelloPage"
import SigninPage from "./components/pages/loginPages/SigninPage"
import SignupPage from "./components/pages/loginPages/SignupPage"
import ContentPage from "./components/pages/contentPage/ContentPage"
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
