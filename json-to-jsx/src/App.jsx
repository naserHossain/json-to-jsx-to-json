import React, { useState } from "react";
import "./App.css";

/**
 *TODO: Handle users inputs field
 * TODO: Handle buttons/Operations
 *TODO: Handle a lists of history
 * TODO: Render history lists
 *TODO: Restore the history
 */

const initialInputState = {
    a: 0,
    b: 0,
};

const App = () => {
    const [inputState, setInputState] = useState({ ...initialInputState });

    const handleInputFields = (e) => {
        setInputState({
            ...inputState,
            [e.target.name]: parseInt(e.target.value),
        });
        console.log(e.target.name);
    };

    // const handleInputA = (e) => {
    //     setInputState({
    //         ...inputState,
    //         a: parseInt(e.target.value),
    //     });
    // };

    // const handleInputB = (e) => {
    //     setInputState({
    //         ...inputState,
    //         b: e.target.value,
    //     });
    // };

    // const handleInputField = (inp) => {
    //     setInputState({
    //         ...inputState,
    //         ...inp,
    //     });
    // };

    const handleClearOps = () => {
        setInputState({
            ...initialInputState,
        });
    };

    const handleArithMaticOps = (operations) => {
        console.log(operations);
    };

    return (
        <div style={{ width: "50%", margin: "0 auto" }}>
            <h2>Result: 0</h2>
            <div>
                <p>Inputs</p>
                <input
                    type="number"
                    value={inputState.a}
                    name="a"
                    onChange={handleInputFields}
                />
                <input
                    type="number"
                    value={inputState.b}
                    name="b"
                    onChange={handleInputFields}
                />
            </div>
            <div>
                <h4>Operations</h4>
                <button
                    onClick={() => {
                        handleArithMaticOps("+");
                    }}
                >
                    Addition
                </button>
                <button
                    onClick={() => {
                        handleArithMaticOps("-");
                    }}
                >
                    subtraction
                </button>
                <button
                    onClick={() => {
                        handleArithMaticOps("*");
                    }}
                >
                    Multiplication
                </button>
                <button
                    onClick={() => {
                        handleArithMaticOps("/");
                    }}
                >
                    division
                </button>
                <button onClick={handleClearOps}>Clear</button>
            </div>
            <div>
                <p>History</p>
                <p>
                    <small>There is no story</small>
                </p>
            </div>
        </div>
    );
};

export default App;
