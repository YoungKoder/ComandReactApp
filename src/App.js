import React from "react";

import HelloPage from "./components/Pages/HelloPage/HelloPage"
import SignInPage from "./components/Pages/Auth/SignInPage"
import SignUpPage from "./components/Pages/Auth/SignUpPage"
import ContentPage from "./components/Pages/ContentPage/ContentPage"
import { BrowserRouter as Router, Route} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
          <Route path="/" exact component={HelloPage} />
          <Route path="/sign-in" component={SignInPage} />
          <Route path="/sign-up" component={SignUpPage} />
          <Route path="/content-page" component={ContentPage} />
      </div>
    </Router>
  );
}

export default App;
