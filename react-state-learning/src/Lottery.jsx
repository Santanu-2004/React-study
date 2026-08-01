import { useState } from "react";

export default function Lottery() {
    let [value, setValue] = useState(0);
    let [sum, setSum] = useState(0);
    let winLottery = () => {
        // let currValue = Math.floor(Math.random() * 1000);
        let currValue = Math.floor(Math.random() * 900) + 100;
        setValue(currValue);
        let temp = currValue;
        let totalSum = 0;
        while (temp > 0) {
            let digit = temp % 10;
            totalSum += digit;
            temp = Math.floor(temp / 10);
        }
        setSum(totalSum);
    }
    return (
        <div>
            <h1>Welcome to Lottery</h1>
            <p>value = {value}</p>
            <button onClick={winLottery}>Generate a Ticket</button>
            {/* {sum === 15 ? <h3>Congratulation! You won</h3> : <h3>Try Again</h3>} */}
            <h3>{sum === 15 && "Congratulation! You won"}</h3>
        </div>
    );
}