import React from 'react';
import styles from './CreateEpisodesTitle.module.css';


 class CreateEpisodesTitle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'What episode did yall yak about?'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('Title?' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          What is the title of this podcast episode?
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="placeholder"> Placeholder </option>
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
    
    export default CreateEpisodesTitle
   
