import React, { Component } from "react";

import "./ContentPage.css";

import UserProfile from "../user/UserPage";
import Newslist from "../news/Newslist";
import Eventslist from "../events/EventsList";
import Drobdown from "../../common/Drobdown/DrobdownList/Drobdown"

import { BrowserRouter as Router, Route} from "react-router-dom";
import { Link } from "react-router-dom";

export default class ContentPage extends Component{

    state={
        drobdownItems: [
            {labelForOption:"LogOut", id: 1}
        ]
    }
    render(){
        return (
            <Router>
                <div className="wrapper">
                <div className="navbar">
                    <div className="logo">
                        <Link to="/content-page">Logo</Link>
                    </div>
                    <Drobdown label={<p>User</p>} menuItems={this.state.drobdownItems} />
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
    
}