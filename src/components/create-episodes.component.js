import React, { Component } from 'react';

export default class CreateEpisode extends Component {
    render() {
        return (
            <div>
                <p> Another one already? Get a job! But upload the new information first tho.</p>
            </div>
        )
    }
}

constructor(props) {
    super(props);

    this.state = {
        episode_title: ' ',
        episode_description: ' ',
        episode_date: ' ',
        episode_originalairdate: ' ',
        episode_shownotes: ' ',
        episode_rating: ' ',
        episode_link: ' ',
        episode_completed: false
    }
}


onChangeEpisodeTitle(e) {
    this.setState({
     episode_title: e.target.value   
    });
}

onChangeEpisodeDescription(e) {
    this.setState({
     episode_description: e.target.value   
    });
}

onChangeEpisodeDate(e) {
    this.setState({
     episode_date: e.target.value   
    });
}


onChangeEpisodeOriginalAirDate(e) {
    this.setState({
     episode_originalairdate: e.target.value   
    });
}

onChangeEpisodeShowNotes(e) {
    this.setState({
     episode_shownotes: e.target.value   
    });
}

onChangeEpisodeRating(e) {
    this.setState({
     episode_rating: e.target.value   
    });
}

onChangeEpisodeLink(e) {
    this.setState({
     episode_link: e.target.value   
    });
}


onSubmit(e) {
    e.preventDefault();

    console.log('Episode information submitted, thanks dude!');
    console.log('Episode Title: ${this.state.episode_title}');
    console.log('Episode Description: ${this.state.episode_description}');
    console.log('Episode Date: ${this.state.episode_date}');
    console.log('Episode Original Air Date: ${this.state.episode_originalairdate}');
    console.log('Episode Show Notes: ${this.state.episode_shownotes}');
    console.log('Episode Rating: ${this.state.episode_rating}');
    console.log('Episode Link: ${this.state.episode_link}');

    this.setState = ({
        episode_title: ' ',
        episode_description: ' ',
        episode_date: ' ',
        episode_originalairdate: ' ',
        episode_shownotes: ' ',
        episode_rating: ' ',
        episode_link: ' ',
        episode_completed: false
    })
}
this.onChangeEpisodeTitle = this.onChangeEpisodeTitle.bind(this);
this.onChangeEpisodeDescription = this.onChangeEpisodeDescription.bind(this);
this.onChangeEpisodeDate = this.onChangeEpisodeDate.bind(this);
this.onChangeEpisodeOriginalAirDate = this.onChangeEpisodeOriginalAirDate.bind(this);
this.onChangeEpisodeShowNotes = this.onChangeEpisodeShowNotes.bind(this);
this.onChangeEpisodeRating = this.onChangeEpisodeRating.bind(this);
this.onChangeEpisodeLink = this.onChangeEpisodeLink.bind(this);
this.onSubmit = this.onSubmit.bind(this);

render() {
    return (
    <h3> Add A New Episode Entry </h3>
    <form onSubmit={this.onSubmit}>
    
    <div className="form-group">
    <label>Episode Title:</label>
    <input type="text"
        className="form-control"
        value={this.state.episode_title}
        onChange={this.onChangeEpisodeTitle}
        />
    </div>
  
  <div className="form-group">
  <label> Episode Description: </label>
  <input type="text"
    className="form-control"
    value={this.state.episode_description}
    onChange={this.onChangeEpisodeDescription}
    />
  </div>
  
  <div className="form-group">
  <label> Episode Date: </label>
  <input type="text"
    className="form-control"
    value={this.state.episode_date}
    onChange={this.onChangeEpisodeDate}
    />
  </div>
  
  <div className="form-group">
  <label> Episode Original Air Date: </label>
  <input type="text"
    className="form-control"
    value={this.state.episode_originalairdate}
    onChange={this.onChangeEpisodeOriginalAirDate}
    />
  </div>
  
  <div className="form-group">
  <label> Episode Show Notes: </label>
  <input type="text"
    className="form-control"
    value={this.state.episode_shownotes}
    onChange={this.onChangeEpisodeShowNotes}
    />
  </div>
  
  <div className="form-group">
  <label> Episode Rating: </label>
  <input type="text"
    className="form-control"
    value={this.state.episode_rating}
    onChange={this.onChangeEpisodeRating}
    />
  </div>
  
  <div className="form-group">
  <label> Episode Link: </label>
  <input type="text"
    className="form-control"
    value={this.state.episode_link}
    onChange={this.onChangeEpisodeLink}
    />
  </div>
  
  <div className="form-group">
  <input type="submit" value="Create Episode" className="btn btn-primary" />
            </div>
        </form>
            
           
        )
    }
}