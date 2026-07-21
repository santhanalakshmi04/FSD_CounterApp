import React, { useState } from "react";
import { FaPlus, FaMinus, FaRedoAlt } from "react-icons/fa";
import { FaCalculator } from "react-icons/fa";

function ReactCounter() {

    const [counter, setCounter] = useState(0)
    return (
        <>
            <div className="header" style={{
                backgroundColor: "#212529",
                color: "white",
                padding: "10px 20px",

            }}
            >
                <h3>Counter App</h3>
            </div>
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="col-md-5">
                        <div className="card bg-warning shadow p-4 text-center ">
                            <h2><FaCalculator /> Counter App </h2>
                            <h3 >{counter}</h3>

                            <div className="d-flex justify-content-center gap-3 mt-3">
                                <button className=" btn btn-success " onClick={() => setCounter(counter + 1)}><FaPlus /></button>
                                <button className="btn btn-primary" onClick={() => setCounter(0)}><FaRedoAlt /></button>
                                <button className="btn btn-danger" onClick={() => setCounter(counter - 1)}> <FaMinus /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default ReactCounter