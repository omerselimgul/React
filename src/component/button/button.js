import React from "react"
import propTypes from"prop-types"
import "./button.css"

const  Button=({text,onClick})=>{
    return(
        <button className="custom-button" onClick={onClick}>{text}</button>
    )
}


Button.propTypes={
    onClick:propTypes.func.isRequired,
    text:propTypes.string
}
Button.defaultProps={
    placeholder:"Deger giriniz ...",
    type:"Tıkla"
}
export default Button