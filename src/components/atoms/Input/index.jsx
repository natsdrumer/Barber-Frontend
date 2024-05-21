import React from "react";
import'./styles.css'
import PropTypes, { number, string } from 'prop-types'

function Input({type,id,size,name, handleOnChange }){
    let width, height;

    switch(size){
        case 'small':
            width = '125px'
            height = '30px'
            break
        case 'medium':
            width = '250px'
            height = '30px'
            break
        case 'big':
            width = '400px'
            height = '55px'    
            break
        default:
            break
    }


    const styles = {
        width: width,
        height: height,

    }

    return (
        <input 
        className="input"
        style={styles}
        type = {type}
        id={id}
        value={name}
        onChange={(e)=>handleOnChange(e.target.value)}
        ></input>
    )
}

Input.protoTypes = {
    type: PropTypes.string.isRequired,
    id: PropTypes.oneOfType([string, number]).isRequired,
    size: PropTypes.oneOf(['small', 'meduim', 'big']),
    name: PropTypes.string.isRequired,
    handleOnChange: PropTypes.func.isRequired

}

Input.default = {
    size: 'small'
}

export default Input;