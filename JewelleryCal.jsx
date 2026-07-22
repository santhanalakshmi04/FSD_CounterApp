import React, { useState } from "react";
import bgImage from "../assets/GoldImg.jpg";
import { FaCalculator, FaCoins, FaTools, FaRecycle, FaFileInvoiceDollar, FaRupeeSign } from "react-icons/fa";
import { GiGoldBar } from "react-icons/gi";



function JewelleryCal() {
    const [goldWeight, setGoldWeight] = useState("")
    const [goldRate, setGoldRate] = useState("")
    const [makingCharge, setMakingCharge] = useState("")
    const [wastage, setWastage] = useState("")
    const [gst, setGST] = useState("")

    const [goldAmount, setGoldAmount] = useState(0);
    const [makingAmount, setMakingAmount] = useState(0);
    const [wastageAmount, setWastageAmount] = useState(0);
    const [gstAmount, setGstAmount] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

    const calculateGold = () => {
        const goldAmount = Number(goldWeight) * Number(goldRate);

        const makingAmount = (goldAmount * Number(makingCharge)) / 100;

        const wastageAmount = (goldAmount * Number(wastage)) / 100;

        const gstAmount = ((goldAmount + wastageAmount + makingAmount) * Number(gst)) / 100;


        const total = goldAmount + wastageAmount + gstAmount + makingAmount;

        setGoldAmount(goldAmount);
        setMakingAmount(makingAmount);
        setWastageAmount(wastageAmount);
        setGstAmount(gstAmount);
        setTotalAmount(total);


    };

    const resetData = () => {

        console.log("Reset Working");

        setGoldWeight("");
        setGoldRate("");
        setMakingCharge("");
        setWastage("");
        setGST("");

        setGoldAmount(0);
        setMakingAmount(0);
        setWastageAmount(0);
        setGstAmount(0);
        setTotalAmount(0);

    }


    return (
        <>
            <div style={{
                backgroundImage: `url(${bgImage})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                minHeight: "100vh",
            }}>
                <div className="text-white p-4 text-center" style={{ backgroundColor: "maroon" }}>
                     
                    <h1> <GiGoldBar className="me-2 text-warning" size={40} />Jewellery Price Calculator</h1>
                </div>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-md-5">

                            <div className="card shadow p-5">
                                <div className="p-4"
                                    style={{
                                        backgroundColor: "#FFF8E7",
                                        border: "2px solid #D4AF37",
                                        borderRadius: "15px"
                                    }}>

                                    <h5 className="text-center" style={{ color: "#800020", fontWeight: "bold" }}>
                                        <FaCalculator className="me-2" />Enter Details
                                    </h5>


                                    <label>Gold Weight (g): </label>
                                    <input type="number"
                                        className="form-control"
                                        style={{
                                            border: "1px solid #D4AF37",
                                            borderRadius: "10px"
                                        }}

                                        placeholder="Enter Gold Weight"
                                        value={goldWeight}
                                        onChange={(e) => setGoldWeight(e.target.value)} />

                                    <br></br>

                                    <label>Gold Rate (₹): </label>
                                    <input type="number"
                                        className="form-control"
                                        style={{
                                            border: "1px solid #D4AF37",
                                            borderRadius: "10px"
                                        }}

                                        placeholder="Enter Gold Rate"
                                        value={goldRate}
                                        onChange={(e) => setGoldRate(e.target.value)} />

                                    <br />

                                    <label>Making Charge (%): </label>
                                    <input type="number"
                                        className="form-control"
                                        style={{
                                            border: "1px solid #D4AF37",
                                            borderRadius: "10px"
                                        }}

                                        placeholder="Enter Making Charge"
                                        value={makingCharge}
                                        onChange={(e) => setMakingCharge(e.target.value)} />

                                    <br />

                                    <label >Wastage (%): </label>
                                    <input type="number"
                                        className="form-control"
                                        style={{
                                            border: "1px solid #D4AF37",
                                            borderRadius: "10px"
                                        }}

                                        placeholder="Enter Wastage"
                                        value={wastage}
                                        onChange={(e) => setWastage(e.target.value)} />

                                    <br />

                                    <label>GST (%): </label>
                                    <input type="number"
                                        className="form-control"
                                        style={{
                                            border: "1px solid #D4AF37",
                                            borderRadius: "10px"
                                        }}

                                        placeholder="Enter GST"
                                        value={gst}
                                        onChange={(e) => setGST(e.target.value)} />

                                    <br />

                                    <button className="btn btn-success w-100 mt-3" style={{
                                        backgroundColor: "#D4AF37",
                                        color: "white",
                                        fontWeight: "bold"
                                    }} onClick={calculateGold}>Calculate</button>
                                    <button className="btn btn-danger w-100 mt-3" style={{
                                        backgroundColor: "#800020",
                                        color: "white",
                                        fontWeight: "bold"
                                    }} onClick={resetData}>Reset</button>
                                </div>
                            </div>

                        </div>

                        <div className="  col-md-7">
                            <div className="card shadow p-4" style={{
                                backgroundColor: "#FFFDF7",
                                border: "2px solid #D4AF37",
                                borderRadius: "15px"
                            }}>
                                <h4 className="text-center mb-4"
                                    style={{
                                        color: "#800020",
                                        fontWeight: "bold"
                                    }}> <FaCalculator className="me-2" />Calculation Summary</h4>

                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                        padding: "12px 0"
                                    }}
                                >
                                    <h5 style={{ color: "#800020" }}><FaCoins className="me-2 text-warning"/>Gold Amount</h5>

                                    <h5 style={{ color: "#006400" }}>
                                        ₹ {goldAmount}
                                    </h5>
                                </div>

                                <br />

                                <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 0" }}>
                                    <h5 style={{ color: "#800020" }}><FaTools className="me-2 text-primary"/>Making Charge</h5>
                                    <h5 style={{ color: "#006400" }}>₹ {makingAmount}</h5>
                                </div>
                                <br />

                                <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 0" }}>
                                    <h5 style={{ color: "#800020" }}><FaFileInvoiceDollar className="me-2 text-danger"/>GST</h5>
                                    <h5 style={{ color: "#006400" }}>₹ {gstAmount}</h5>
                                </div>
                                <br />

                                <div style={{ display: "flex", justifyContent: "space-between", padding: "12px 0" }}>
                                    <h5 style={{ color: "#800020" }}><FaRecycle className="me-2 text-success"/>Wastage</h5>
                                    <h5 style={{ color: "#006400" }}>₹ {wastageAmount}</h5>
                                </div>
                                <br /><hr></hr>

                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "space-between",
                                        padding: "15px 0"
                                    }}
                                >
                                    <h4 style={{ color: "#800020" }}> <FaRupeeSign className="me-2"/>Total Amount</h4>

                                    <h3 style={{ color: "#D4AF37", fontWeight: "bold" }}>
                                        ₹ {totalAmount}
                                    </h3>

                                </div>

                            </div>
                        </div>

                    </div>


                </div>

            </div>
        </>
    )
}
export default JewelleryCal