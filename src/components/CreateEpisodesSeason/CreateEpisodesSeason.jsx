import React from 'react';
import styles from './CreateEpisodesSeason.module.css';


  
//render() {
  //  return (
    //      <div>
      //  <p> Another one already? Get a job! But upload the new information first tho.</p>
        //  </div>
      //)
 //}


 class CreateEpisodesSeason extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'five'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('What season did this come from?' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Pick the season this episode belongs to.
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="one">1 (1989)</option>
            <option value="two">2 (1990)</option>
            <option value="three">3 (1991)</option>
            <option value="four">4 (1992)</option>
            <option value="five">5 (1993)</option>
            <option value="two">6 (1994)</option>
            <option value="three">7 (1995)</option>
            <option value="four">8 (1996)</option>
            <option value="three">9 (1997)</option>
            <option value="four">10 (1998)</option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
    
    export default CreateEpisodesSeason
   
