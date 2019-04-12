import React from 'react';
import styles from './CreateEpisodesImage.module.css';

function CreateEpisodesImage(props){
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
    

export default CreateEpisodesImage
   
