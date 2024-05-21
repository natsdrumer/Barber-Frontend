import React from "react";
import './styles.css'

function Label({name, color}){

    const styles = {
        color: color,
    }

    return(
        <label
        className = 'label'
        style = {styles}
        
        >{name}</label>
    )

}

export default Label;
