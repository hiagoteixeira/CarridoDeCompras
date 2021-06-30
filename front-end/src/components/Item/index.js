import React from "react";
import './style.css';

export default function Item(props) {
    const price = props.price / 100
    return (
        <li class="item">
            <img class="img" src={props.imageUrl}></img>
            <div>
                <h4 class="item-name">{props.name}</h4>
                <h6>R$ {price}</h6>
            </div>
        </li>
    )
}