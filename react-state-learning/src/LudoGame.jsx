import { useState } from "react";

export default function LudoGame(){
    let [count, setCount] = useState({blue : 0, yellow : 0, green : 0, red : 0});

    let clickBlue = () => {
        // old way
        // setCount({...count, blue : count.blue+1});

        // new way when a value is returning, use call backs
        setCount((prevCount) => {
            return {...prevCount, blue : prevCount.blue + 1};
        }); 
    }

    let clickYellow = () => {
        setCount((prevCount) => {
            return {...prevCount, yellow : prevCount.yellow + 1};
        }); 
    }

    let clickGreen = () => {
        setCount((prevCount) => {
            return {...prevCount, green : prevCount.green + 1};
        }); 
    }

    let clickRed = () => {
        setCount((prevCount) => {
            return {...prevCount, red : prevCount.red + 1};
        }); 
    }


    return (
        <div>
            <div className="blue">
                <p>Blue clicked {count.blue} times</p>
                <button style={{backgroundColor:"blue"}} onClick={clickBlue}>+1</button>
            </div>
            <div className="yellow">
                <p>Yellow clicked {count.yellow} times</p>
                <button style={{backgroundColor:"yellow",color:"black"}} onClick={clickYellow}>+1</button>
            </div>
            <div className="green">
                <p>Green clicked {count.green} times</p>
                <button style={{backgroundColor:"green"}} onClick={clickGreen}> +1 </button>
            </div>
            <div className="red">
                <p>Red clicked {count.red} times</p>
                <button style={{backgroundColor:"red"}} onClick={clickRed}>+1</button>
            </div>
        </div>
    );
}