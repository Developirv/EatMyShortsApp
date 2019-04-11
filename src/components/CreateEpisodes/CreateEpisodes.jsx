import React from 'react';
import styles from './CreateEpisodes.module.css'


  
//render() {
  //  return (
    //      <div>
      //  <p> Another one already? Get a job! But upload the new information first tho.</p>
        //  </div>
      //)
 //}

function CreateEpisode(props){
    const handler = props.handleSubmit ?
    props.handleSubmit : props.handleUpdate
    return (
            <form onSubmit={handler} className={styles.CreateEpisode}>
                <input 
                name={props.name} 
                value={props.text} 
                onChange={props.handleChange} />
                <button 
                className={styles.SubmitButton}>
                    {props.buttonText}
                </button>
            </form>
        )
    }
    
    export default CreateEpisode
   
