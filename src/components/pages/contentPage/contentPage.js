import React from "react";

import "./ContentPage.css";

import UserProfile from "../user/UserPage";
import Newslist from "../news/Newslist";
import Eventslist from "../events/EventsList";

import { BrowserRouter as Router, Route} from "react-router-dom";
import { Link } from "react-router-dom";

const ContentPage =()=>{
    return (
        <Router>
            <div className="wrapper">
            <div className="navbar">
                <div className="logo">
                    <Link to="/content-page">Logo</Link>
                </div>
                <div id="user" className="user"></div>
            </div>
            <section className="main">
                <aside className="sidebar">
                    <ul className="sidebar-nav">
                        <li className="sidebar-nav-item">
                            <Link to="/newslist">News</Link>
                        </li>
                        <li className="sidebar-nav-item">
                            <Link to ="/eventslist">Events</Link>
                        </li>
                    </ul>
                    <p className="profile"><Link to="/userprofile" >profile</Link></p>
                </aside>
                <div className="content">
                    <Route path="/newslist" component={Newslist} />
                    <Route path="/eventslist" component={Eventslist} />
                    <Route path="/userprofile" component={UserProfile} />
                </div>
            </section>
        </div>
    </Router>
    )
}

export default ContentPage;