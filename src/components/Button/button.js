import React from "react";
import "./button.css";

const showLabel = (label) => {
    alert(`A label deste botão é: ${label}`);
}

const Button = ({ label }) => {
    return (
        <button onClick={ () => showLabel(label) }>
            { label }
        </button>
    );
};

Button.defaultProps = {
    label: 'Cacildis!'
}

export default Button;