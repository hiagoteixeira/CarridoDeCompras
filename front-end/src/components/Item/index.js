import React from "react";
import './style.css';

export default function Item(props) {
    return (
        <li class="item">
            <img src={props.imageUrl}></img>
            <div>
                <h4>{props.name}</h4>
                <h6>{props.price}</h6>
            </div>
        </li>
    )
}