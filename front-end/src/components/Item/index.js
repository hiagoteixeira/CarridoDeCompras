import React from "react";
import './style.css';

export default function Item(props) {
    const price = props.price / 100
    return (
        <li class="item">
            <img class="img" src={props.imageUrl}></img>
            <div class="item-description">
                <h4 class="item-name">{props.name}</h4>
                <span class="item-price">R$ {price}</span>
            </div>
        </li>
    )
}