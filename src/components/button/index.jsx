import React from "react";
import './style.css';

//Boton como funcion
const Button = ({text, onHandlerClick}) => {
    return (
        <button onClick={onHandlerClick} className="button-primary">{text}</button>
    )
}

export default Button;

// Boton como clase

// class Button extends React.Component {

//     render() {
//         return (
//             <button className="button-primary">{this.props.text}</button>
//         )
//     }
// }

// export default Button;