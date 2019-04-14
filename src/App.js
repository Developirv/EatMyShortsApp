import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateEpisode from "./components/CreateEpisodes/CreateEpisodes.jsx";
import CreateEpisodesImage from "./components/CreateEpisodesImage/CreateEpisodesImage.jsx";
import EditEpisodes from "./components/EditEpisodes/EditEpisodes.jsx";
import EpisodeList from "./components/EpisodeList/EpisodeList.jsx";
import logo from "./logo.png";
import SignupPage from "./pages/SignupPage/SignupPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";

class App extends Component {
  render() {
    return (
      
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="https://open.spotify.com/show/441Ajk0RlCQpSzUQX0k7Hm?si=CVc7VHesSam5VLxrj_S50A" target="blank"> 
             <img src={logo} width="30" height="30" alt="eatmyshortspod.com" />  
         </a>
       
        <Link to="/" className="navbar-brand"> Eat My Shorts</Link>  
        <Link to="/login" className="navbar-brand"> Login</Link>  
        <Link to="signup" className="navbar-brand">Sign up</Link>
        <Link to="/list" className="nav-link"> Available Episodes</Link>
        <Link to="/create" className="nav-link">Create an Episode entry </Link>

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
        <Route path="/signup" component={SignupPage}/>
        <Route path="/login" component={LoginPage}/>
        <Route path="/edit/:id" component={EditEpisodes} />
        <Route path="/create" component={CreateEpisode} />
        <Route path="/create" component={CreateEpisodesImage} />
        </div>
        </Router>
    );
  }
}

export default App;