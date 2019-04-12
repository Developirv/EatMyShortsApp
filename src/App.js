import React, { Component } from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import CreateEpisode from "./components/CreateEpisodes/CreateEpisodes.jsx";
import CreateEpisodesImage from "./components/CreateEpisodesImage/CreateEpisodesImage.jsx";
import EditEpisodes from "./components/EditEpisodes/EditEpisodes.jsx";
import EpisodeList from "./components/EpisodeList/EpisodeList.jsx";
import logo from "./logo.png";


class App extends Component {
  render() {
    return (
      
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="https://eatmyshortspod.com" target="blank"> 
             <img src={logo} width="30" height="30" alt="eatmyshortspod.com" />  
         </a>
       
        <Link to="/" className="navbar-brand"> Eat My Shorts</Link>  
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mr-auto">
          <li className="navbar-item">
            <Link to="/" className="nav-link"> Available Episodes</Link>
          </li>
          <li className="navbar-item">
            <Link to="/create" className="nav-link">Create an Episode entry </Link>
    
             </li>
           </ul> 
           </div>
          </nav>
        <br/>
        <Route path="/" exact component={EpisodeList} />
        <Route path="/edit/:id" component={EditEpisodes} />
        <Route path="/create" component={CreateEpisode} />
        <Route path="/create" component={CreateEpisodesImage} />
        </div>
        </Router>
    );
  }
}


export default App;