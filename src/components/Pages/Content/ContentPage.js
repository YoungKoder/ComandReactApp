import React from "./node_modules/react";

import "./ContentPage.css";

import UserProfile from "../User/UserProfile";
import Newslist from "../News/NewsList";
import Eventslist from "../Events/EventList";

import { BrowserRouter as Router, Route} from "./node_modules/react-router-dom";
import { Link } from "./node_modules/react-router-dom";

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