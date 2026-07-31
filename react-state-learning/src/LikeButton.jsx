import { useState } from "react";
import Counter from "./Counter";

export default function LikeButton(){
    let [isLiked, setIsLiked] = useState(false);
    let [count, setCount] = useState(0);

    let toggleValue = () => {
        setIsLiked(!isLiked);
        setCount(count+1);
    }

    let likeStyle = {
        color:"red",
    };
    return (
        <>
        <h3>clicked {count} times</h3>
        <h1 onClick={toggleValue}>
            {isLiked?
            <i className="fa-solid fa-heart" style={likeStyle}></i>:<i className="fa-regular fa-heart"></i>}
        </h1>
        </>
    );
}