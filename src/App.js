import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import EpisodeList from "./components/EpisodeList/EpisodeList.jsx";
import logo from "./logo.png";
import SignupPage from "./pages/SignupPage/SignupPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import AndroidsDungeon from "./components/AndroidsDungeon/AndroidsDungeon";
import StoleMyBit from "./components/StoleMyBit/StoleMyBit";
import userService from "./utils/userService";
//import Player from "/.components/Player/Player.jsx";

import CreateEpisodePage from "./pages/CreateEpisodePage/CreateEpisodePage.jsx";
import ShowLinks from './components/ShowLinks/ShowLinks';


class App extends Component {
  render() {
    return (
      

      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
          <a class="navbar-brand" href="https://open.spotify.com/show/441Ajk0RlCQpSzUQX0k7Hm?si=CVc7VHesSam5VLxrj_S50A" target="blank"> 
             <img src={logo} width="40" height="35" alt="eatmyshortspod.com" />  
         </a>
       
        <Link to="/" className="navbar-brand"> Home</Link>  
        <Link to="/login" className="navbar-brand"> Login</Link>  
        <Link to="signup" className="navbar-brand">Sign Up</Link>
        <Link to="shop" className="navbar-brand">Androids Dungeon</Link>
        <Link to="bits" className="navbar-brand"> Stole My Bit </Link>
      <Link to="/list" className="navbar-brand"> Eat ALL Of Our Shirts</Link>
       <Link to="/create" className="navbar-brand"> Add-A-Short</Link>
       <Link to="/links" className="navbar-brand"> Show Links </Link>


        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
          <li className="navbar-item"> 
          </li>
          <li className="navbar-item">
             </li>
           </ul> 
           </div>
          </nav>
        <br/> 
        {/* <Route path='/' component={}/> */}
        <Route path="/home" component={EpisodeList} />
        <Route path="/login" component={LoginPage}/>
        <Route path="/signup" component={SignupPage}/>
        <Route path="/shop" component={AndroidsDungeon}/>
        <Route path="/bits" component={StoleMyBit}/>
        <Route path="/create" component={CreateEpisodePage}/>
        <Route path="/links" component={ShowLinks} />
        </div>
        </Router>





    );
  }
}

export default App;