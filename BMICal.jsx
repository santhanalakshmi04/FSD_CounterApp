import React, { useState } from "react";

function BMICal() {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    const [bmi, setBMI] = useState("");
    const [status, setStatus] = useState("");

    const calculateBMI = () => {
        const result = Number(weight) / (Number(height) * Number(height));

        if (height === "" || weight === "") {
            alert("Please fill the details")
            return
        }


        if (result < 18.5) {

            setStatus("UnderWeight")
        }
        else if (result >= 18.5 && result < 25) {
            setStatus("Normal")
        }
        else if (result >= 25 && result < 30) {
            setStatus("Overweight")
        }
        else {
            setStatus("Obese")
        }



        setBMI(result.toFixed(2));


    }

    const resetData = () => {
        setHeight("")
        setWeight("")
        setBMI("");
        setStatus("")
    }
    return (
        <>
            <div className="text-center text-white p-3"
                style={{
                    background: "linear-gradient(135deg, #ea946657, #764ba2)"
                }} >
                <h1 className="text-center fw-bold"
                    style={{ color: "#4B0082" }}>BMI Calculator</h1>
            </div>

            <div  className="d-flex justify-content-center lign-items-start " style={{
                minHeight: "100vh",
                paddingTop: "30px",

                background: "linear-gradient(135deg, #ea668046, #a24b6ec5)"
            }}>

                <div className="card shadow p-4  " style={{
                    width: "700px",
                    borderRadius: "10px",
                    background: "linear-gradient(135deg,#fff7fa,#ffe5ef)",
                     height: "fit-content"
                }}>

                    <div className="text-center">
                        <h1>BMI CALCULATOR</h1>
                        <hr />
                    </div>

                    <label><h5>Height : </h5></label>
                    <input type="number"
                        className="form-control"
                        value={height}
                        placeholder="Enter Height (m)"
                        onChange={(e) => setHeight(e.target.value)}
                    />
                    <br />
                    <label><h5>Weight : </h5></label>
                    <input type="number"
                        className="form-control"
                        value={weight}
                        placeholder="Enter Weight (kg)"
                        onChange={(e) => setWeight(e.target.value)}
                    />

                    <br />

                    <button className="btn btn-success w-100" onClick={calculateBMI}>Calculate</button>
                    <br />
                    <button className="btn btn-danger w-100 mt-2" onClick={resetData}>Reset</button>


                    {bmi && (
                        <>
                            <hr />
                            <div className="alert alert-light mt-3 text-center">
                                <h4>BMI : {bmi}</h4>
                                <h4>Status : {status}</h4>
                            </div>
                        </>

                    )}


                </div>
            </div>
        </>
    )
}
export default BMICal