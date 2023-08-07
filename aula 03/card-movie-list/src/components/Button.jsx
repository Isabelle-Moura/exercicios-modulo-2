import React from "react";

const Button = ({label}) => {
    const handleButtonClick = () => {
        alert(`Você clicou no botão: ${label}`)
    }

    return (
        <button className="button" onClick={handleButtonClick}>
            {label}
        </button>
    )
}

export default Button