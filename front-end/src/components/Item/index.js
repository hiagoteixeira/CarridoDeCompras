import React from "react";
import './style.css';


export default function Item(props) {
    const price = props.sellingPrice / 100
    return (
        <li class="item" id={props.id}>
            <div>
                <img class="img" src={props.imageUrl}></img>
            </div>
            <div class="item-description">
                <h4 class="item-name">{props.name}</h4>
                <div class='btn-container'>
                    <span class="item-price">R$ {price}</span>
                    <button class="btn-remove" id={props.id}> Excluir </button>
                </div>
            </div>
        </li>
    )
}