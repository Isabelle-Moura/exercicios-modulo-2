import React from "react";
import './Card.css'

const Card = ({title, subtitle, content}) => {
    return (
        <>
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">{title}</h3>
                <h4 className="card-subtitle">{subtitle}</h4>
                <p className="card-text">{content}</p>
                <div className="div-display">
                    <div className="link">Card Link</div>
                    <div className="link">Another Link</div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Card;