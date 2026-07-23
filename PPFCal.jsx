import React, { useState } from "react";
import { Doughnut } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

ChartJS.register(
    ArcElement,
    Tooltip,
    Legend,
    ChartDataLabels
);



function PPFCal() {
    const [amount, setAmount] = useState(500);
    const [duration, setDuration] = useState(15);
    const [interest] = useState(7.1);

    const [frequency, setFrequency] = useState("Monthly");

    const [totalInvestment, setTotalInvestment] = useState(0);
    const [estimatedReturn, setEstimatedReturn] = useState(0);
    const [maturity, setMaturity] = useState(0);

    const chartData = {
        labels: [
            "Total Investment",
            "Estimated Return"
        ],

        datasets: [
            {
                data: [
                    totalInvestment,
                    estimatedReturn
                ],

                backgroundColor: [
                    "#0d6efd",
                    "#198754"
                ],

                borderWidth: 1
            }
        ]
    };

    const calculatePPF = () => {

        let total;
        if (frequency === "Monthly") {
            total = Number(amount) * 12 * Number(duration);

        }
        else {
            total = Number(amount) * duration
        }

        const estimated = (Number(total) * interest * Number(duration)) / 100;
        const maturityAmt = total + estimated;

        setTotalInvestment(total)
        setEstimatedReturn(estimated)
        setMaturity(maturityAmt)


    }

    const resetData = () => {
        setFrequency("Monthly");
        setAmount(500);
        setDuration(15)
        setTotalInvestment(0);
        setEstimatedReturn(0);
        setMaturity(0);
    }









    return (
        <>

            <div className=" text-white text-center p-4" style ={{backgroundColor: "purple" }}>
                <h1>PPF Calculator</h1>

            </div>

            <div className="container mt-4">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card shadow p-4" style={{
                                        
                                        border: "2px solid purple",
                                        borderRadius: "15px"
                                    }}>
                            <h4 className ="text-center">Enter Investment Details</h4>

                            <hr></hr>

                            <label>Investement Frequency :</label>
                            <select className="form-select"
                                value={frequency}
                                onChange={(e) => setFrequency(e.target.value)}>
                                <option value="Monthly">Monthly</option>
                                <option value="Yearly">Yearly</option>
                            </select>
                            <br/>
                            <label>Investment Amount</label>
                            <input type="range"
                                min="500"
                                max="12500"
                                value={amount}
                                onChange={(e) => setAmount(e.target.value)} />


                            <h5>Rs {amount}</h5>

                             <br/>

                            <label>Duration : </label>
                            <select className="form-select"
                                value={duration}
                                onChange={(e) => setDuration(e.target.value)}>

                                <option value="5">5 Years</option>
                                <option value="10">10 Years</option>
                                <option value="15">15 Years</option>
                                <option value="20">20 Years</option>



                            </select>
                             <br/>

                            <div className="row mt-3">
                                <div className="col-6">
                                    <div className="card text-center p-3"
                                    style={{
                                        
                                        border: "2px solid purple",
                                        borderRadius: "15px"
                                    }}>

                                        <small>Duration</small>
                                        <h5>{duration} Years</h5>
                                    </div>

                                </div>

                                <div className="col-6">
                                    <div className="card text-center p-3"
                                    style={{
                                        
                                        border: "2px solid purple",
                                        borderRadius: "15px"
                                    }}>
                                        <small>Rate of Interest : </small>
                                        <h5>{interest}%</h5>
                                    </div>
                                </div>
                            </div>
                             <br/>

                            <button className="btn btn-success w-100 mt-3" style={{
                                        backgroundColor: "purple",
                                        color: "white",
                                        fontWeight: "bold"
                                    }}
                                        onClick={calculatePPF}>calculate</button><br />
                            <button className="btn btn-success w-100 mt-3" style={{
                                        backgroundColor: "#D4AF37",
                                        color: "white",
                                        fontWeight: "bold"
                                    }}onClick={resetData}>Reset</button>

                        </div>

                    </div>

                    <div className="col-md-6">
                        <div className="card shadow p-4" style={{
                                        
                                        border: "2px solid purple",
                                        borderRadius: "15px"
                                    }}>

                            <h4 className="text-center" style = {{textColor : "purple"}}>
                                Investment Summary

                            </h4>
                            <hr/>

                            <h5>
                                Investment Frequency :
                                <span className="float-end">{frequency}</span>
                            </h5>
                            <br/>



                            <h5>Investment Amount :
                                <span className="float-end"> Rs {amount}</span>
                            </h5><br />

                            <h5>Duration :
                                <span className="float-end">  {duration} Years</span>
                            </h5><br />

                            <h5>Interest Rate :
                                <span className="float-end">  {interest} %</span>
                            </h5><br />

                            <hr />

                            <h5>
                                Total Investment :
                                <span className="float-end">
                                    ₹ {totalInvestment}
                                </span>
                            </h5>

                            <h5>
                                Estimated Return :
                                <span className="float-end ">
                                    ₹ {estimatedReturn}
                                </span>
                            </h5>

                            <h5>
                                Maturity Amount :
                                <span className="float-end ">
                                    ₹ {maturity}
                                </span>
                            </h5>

                            <hr />

                            <h4 className="text-center">
                                Investment Breakdown
                            </h4>


                            <div style={{ width: "300px", margin: "auto" }}>

                                <Doughnut
                                    data={chartData}
                                    options={{
                                        plugins: {
                                            datalabels: {
                                                color: "white",
                                                font: {
                                                    size: 16,
                                                    weight: "bold"
                                                },

                                                formatter: (value, context) => {

                                                    let total = context.chart.data.datasets[0].data
                                                        .reduce((a, b) => a + b, 0);

                                                    let percentage =
                                                        ((value / total) * 100).toFixed(1);

                                                    return percentage + "%";
                                                }
                                            }
                                        }
                                    }}
                                />

                            </div>


                        </div>

                    </div>

                </div>





            </div>


        </>
    )
}
export default PPFCal