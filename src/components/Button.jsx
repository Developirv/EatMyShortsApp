import React from 'react'


const Button = (props) => {
    console.log(props.style);
    return(
        <Button 
            style= {props.style} 
            onClick= {props.action}>    
            {props.title} 
        </Button>)
}

export default Button;











