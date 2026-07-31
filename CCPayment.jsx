import React, { useState } from "react";


function CCPayment() {
    const [cardHolderName, setCardHolderName] = useState("");
    const [cardNumber, setCardNumber] = useState("");
    const [expiryDate, setExpiryDate] = useState("");
    const [cvv, setCVV] = useState("");
    const [amount, setAmount] = useState("");

    const [errors, setErrors] = useState({})


    const handleSubmit = (e) => {
        e.preventDefault()
        if (validate()) {
            alert("Payment Succesfull")


            setCardHolderName("")
            setCardNumber("")
            setExpiryDate("")
            setCVV("")
            setAmount("")
            setErrors({})

        }
    }


    const validate = () => {
        let error = {}

        if (cardHolderName.trim() === "") {
            error.cardHolderName = "card holder Name is required"
        }
        else if (cardHolderName.length < 3) {
            error.cardHolderName = "Name must be atleast 3 characters"
        }


        if (cardNumber.trim() === "") {
            error.cardNumber = "CardNumber is required"
        }

        else if (cardNumber.length !== 16) {
            error.cardNumber = "CardNumber must be atleast 16-digits"
        }

        if (expiryDate.trim() === "") {
            error.expiryDate = "Expiry date is required"
        }
        else if (expiryDate.length !== 5) {
            error.expiryDate = "Enter Expiry Date in MM/YY format";
        }


        if (cvv.trim() === "") {
            error.cvv = "CVV is required"
        }
        else if (cvv.length !== 3) {
            error.cvv = "CVV must be atleast 3-digit"
        }

        if (amount === "") {
            error.amount = "Amount is required"
        }

        else if (Number(amount) <= 0) {
            error.amount = "Amount must be more than 0"
        }

        setErrors(error)

        return Object.keys(error).length === 0

    }
    return (
        <>
            <div className="container-fluid py-5"
                style={{
                    minHeight: "100vh",
                    background: "linear-gradient(135deg,#0F172A,#1E3A8A,#2563EB)"
                }}>

                <div className="card shadow-lg border-0 mx-auto p-4"
                    style={{
                        maxWidth: "650px",
                        borderRadius: "18px",
                        background: "#FFFFFF"
                    }}>

                    <h2 className="text-center fw-bold mb-4"
                        style={{
                            color: "#1E40AF",
                            letterSpacing: "1px"
                        }}>Credit Card Payment Form</h2>

                    <label className="fw-semibold"
                        style={{
                            color: "#374151"
                        }}>Card Holder Name :</label>

                    <input type="text" placeholder="Enter the name"
                        className="form-control shadow-sm"
                        style={{
                            borderRadius: "10px",
                            padding: "10px"
                        }}
                        value={cardHolderName}
                        onChange={(e) => setCardHolderName(e.target.value)}
                    />

                    <small className="text-danger fw-semibold"
                        style={{
                            fontSize: "13px"
                        }}>{errors.cardHolderName}</small>
                    <br />


                    <label className="fw-semibold"
                        style={{
                            color: "#374151"
                        }}>Card Number :</label>

                    <input type="text" 
                        className="form-control shadow-sm"
                        style={{
                            borderRadius: "10px",
                            padding: "10px"
                        }}
                        value={cardNumber}
                        placeholder="Enter Card Number"
                        maxLength={16}
                        onChange={(e) => setCardNumber(e.target.value)}
                    />

                    <small className="text-danger fw-semibold"
                        style={{
                            fontSize: "13px"
                        }}>{errors.cardNumber}</small>
                    <br />



                    <label className="fw-semibold"
                        style={{
                            color: "#374151"
                        }}>Expiry Date :</label>

                    <input type="text"
                        className="form-control shadow-sm"
                        style={{
                            borderRadius: "10px",
                            padding: "10px"
                        }}
                        placeholder="MM/YY"
                        value={expiryDate}
                        onChange={(e) => setExpiryDate(e.target.value)}
                    />

                    <small className="text-danger fw-semibold"
                        style={{
                            fontSize: "13px"
                        }}>{errors.expiryDate}</small>
                    <br />


                    <label className="fw-semibold"
                        style={{
                            color: "#374151"
                        }}>CVV :</label>

                    <input type="password" placeholder="Enter the CVV"
                        className="form-control shadow-sm"
                        style={{
                            borderRadius: "10px",
                            padding: "10px"
                        }}
                        value={cvv}
                        onChange={(e) => setCVV(e.target.value)}
                    />

                    <small className="text-danger fw-semibold"
                        style={{
                            fontSize: "13px"
                        }}>{errors.cvv}</small>
                    <br />


                    <label className="fw-semibold"
                        style={{
                            color: "#374151"
                        }}>Amount : </label>

                    <input type="number" placeholder="Enter the amount"
                        className="form-control shadow-sm"
                        style={{
                            borderRadius: "10px",
                            padding: "10px"
                        }}
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                    />

                    <small className="text-danger fw-semibold"
                        style={{
                            fontSize: "13px"
                        }}>{errors.amount}</small>

                    <hr style={{
                        border: "1px solid #CBD5E1"
                    }} />



                    <button onClick={handleSubmit}
                        className="btn w-100 mt-2"
                        style={{
                            background: "#2563EB",
                            color: "white",
                            borderRadius: "10px",
                            fontWeight: "bold",
                            padding: "12px",
                            fontSize: "17px"
                        }}>Pay Now</button>

                </div>
            </div>
        </>
    )
}
export default CCPayment