import React from "react";

import "./App.css";

import HelloPage from "./components/pages/helloPage/helloPage"
import SigninPage from "./components/pages/loginPages/signinPage"
import SignupPage from "./components/pages/loginPages/signupPage"
import UserProfile from "./components/pages/user/UserPage";
import Newslist from "./components/pages/news/Newslist";
import Eventslist from "./components/pages/events/EventsList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
          <Route path="/" exact component={HelloPage} />
          <Route path="/sign-in" component={SigninPage} />
          <Route path="/sign-up" component={SignupPage} />
          <Route path="/newslist" component={Newslist} />
          <Route path="/eventslist" component={Eventslist} />
          <Route path="/userprofile" component={UserProfile} />
      </div>
    </Router>
  );
}

export default App;