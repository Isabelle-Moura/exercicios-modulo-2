import React from "react";
import { useState } from "react";

const Numbers = () => {
    const [number, setNumber] = useState(0)

    const decreaseNumber = () => {
        setNumber((number) => number - 1)
    }
    const increaseNumber = () => {
        setNumber((number) => number + 1)
    }

    return (
        <>
        <div className="display-div">
            <button onClick={(decreaseNumber)}>Subtrair</button>
            <div className="bigger-number">{number}</div>
            <button onClick={(increaseNumber)}>Adicionar</button>
        </div>
        </>
    )
}

export default Numbers