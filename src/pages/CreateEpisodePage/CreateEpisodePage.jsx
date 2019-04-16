import React, {Component} from 'react';
import Input from '../../components/Input';
import TextArea from '../../components/TextArea';
import CheckBox from '../../components/Checkbox';
import Button from '../../components/Button';
import userService from '../../utils/userService';
import Select from '../../components/Select';

class CreateEpisodePage extends Component {  
  constructor(props) {
    super(props);

    this.state = {
      newEpisode: {
        title: '',
        season:'',
        description: '',
        showdate: '',
        episodeairdate: '', 
        shownotes: '',
        rating: '',
        links:'',
        specialguest: '',
        //user: userService.getUser()
      },
    }
//
 
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleClearForm = this.handleClearForm.bind(this);
  }

  /* This life cycle hook gets executed when the component mounts */

  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newEpisode;

    fetch('/list',{
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      }).then(response => {
        response.json().then(data =>{
          console.log("Successful" + data);
        })
    })
  }   

  handleClearForm(e) {

    e.preventDefault();
    this.setState({ 
      newEpisode: {
            title: '',
            season:'',
            description: '',
            showdate: '',
            episodeairdate: '',
            shownotes: '',
            rating: '',
            links:'',
            specialguest:''
      },
    })
}

  render() {
    return (
      <div className="container">
        <h3> Create an Episode entry</h3>
      <form className="container" onSubmit={this.handleFormSubmit}>

        <Input /> {/* Name of the episode */}
        <Input /> {/* Input for season title */} 
        <TextArea /> {/* Episode Description*/}
        <TextArea /> {/* Show date for the podcast */}
        <TextArea /> {/* Original air date for the episode*/}
        <TextArea /> {/* Show notes for gimmicks recurring bits etc */}
        <Input /> {/* Rating */}
        <TextArea /> { /* links for the show */ }
        <CheckBox /> {/* Special Guest checked if yes */}
        <Button /> { /*Submit */ }
        <Button /> {/* Clear the form */}
      </form>
      </div>
    );
  }
}

export default CreateEpisodePage

























