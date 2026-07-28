import React, { useState } from "react";

function ExpenseTracker() {
    const [expenseName, setExpenseName] = useState("");
    const [category, setCategory] = useState("Food");
    const [amount, setAmount] = useState("");
    const [expenses, setExpenses] = useState([]);



    const addExpense = () => {
        if (expenseName === "" || category === "" || amount === "") {
            alert("Please fill the details")
            return
        }
        const newExpense = {
            name: expenseName,
            category: category,
            amount: amount
        }



        setExpenses([...expenses, newExpense]);
        setExpenseName("");
        setCategory("Food")
        setAmount("")
    }

    const deleteExpense = (index) => {
        const UpdatedExpenses = expenses.filter((item, i) => i !== index)
        setExpenses(UpdatedExpenses)

    }

    const totalExpense = expenses.reduce((total, item) => {

        return total + Number(item.amount);
    }, 0);

    return (
        <>
        <div
        style={{
            minHeight: "100vh",
            background: "linear-gradient(135deg,#E0EAFC,#CFDEF3)",
            padding: "40px"
        }}
    >

            <div className="container py-5"
            >
                <div className="card shadow-lg border-0 p-4 mx-auto"
                    style={{
                        maxWidth: "900px",
                        borderRadius: "20px",
                        background: "linear-gradient(135deg,#ffffff,#f8fbff)"
                    }}>
                    <h3 className="text-center fw-bold mb-3"
                        style={{
                            color: "#4F46E5",
                            letterSpacing: "1px"
                        }} >💰Expense Tracker</h3>
                    <hr />


                    <label className="fw-semibold text-secondary">Expense Name :</label>
                    <input type="text"
                        className="form-control shadow-sm"
                        value={expenseName}
                        onChange={(e) => setExpenseName(e.target.value)}
                        placeholder ="Enter the expense name"
                    />
                    <br />

                    <label className="fw-semibold text-secondary">Category : </label>

                    <select className="form-select shadow-sm"
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}>
                        <option>Food</option>
                        <option>Travel</option>
                        <option>Shopping</option>
                        <option>Bills</option>
                        <option>Entertainement</option>
                    </select>
                    <br />

                    <label className="fw-semibold text-secondary">Amount :</label>
                    <input type="number" className="form-control shadow-sm"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)} 
                        placeholder ="Enter the amount"/>
                    <br />

                    <button className="btn w-100 mt-2"
                        style={{
                            background: "#4F46E5",
                            color: "white",
                            fontWeight: "600",
                            borderRadius: "10px"
                        }} onClick={addExpense}> ➕ Add Expense</button>

                    <hr />

                    <h4 className="text-center fw-bold mt-4"
                        style={{
                            color: "#4F46E5"
                        }}>Expense List</h4>

                    <table className="table table-hover mt-3 align-middle"
                        style={{
                            borderRadius: "12px",
                            overflow: "hidden"
                        }}>
                        <thead style={{
                            background: "#4F46E5",
                            color: "white"
                        }}>
                            <tr>
                                <th>Expense</th>
                                <th>Category</th>
                                <th>Amount</th>
                                <th>Action</th>
                            </tr>
                        </thead>




                        <tbody>
                            {
                                expenses.map((item, index) => (
                                    <tr key={index}>
                                        <td> {item.name}</td>
                                        <td>{item.category}</td>
                                        <td>₹ {item.amount}</td>

                                        <td>
                                            <button className="btn btn-sm"
                                                style={{
                                                    background: "#EF4444",
                                                    color: "white",
                                                    borderRadius: "8px"
                                                }} onClick={() => deleteExpense(index)}>🗑 Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }



                        </tbody>
                    </table>

                    <div
                        className="mt-4 p-3"
                        style={{
                            background: "#EEF2FF",
                            borderRadius: "12px"
                        }}
                    >
                        <h4
                            className="text-center fw-bold"
                            style={{
                                color: "#4338CA"
                            }}
                        >
                           💵 Total Expense : ₹ {totalExpense}
                        </h4>
                    </div>


                </div>
            </div>

        </div>

        </>
    )
}
export default ExpenseTracker