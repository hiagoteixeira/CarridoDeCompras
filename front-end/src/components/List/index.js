import React from 'react'
import Item from '../Item/index'
import './style.css'

export default function List(props) {
    return (
        <ul class='list'>
            {props.data.map(item => (
                <Item name={item.name} imageUrl={item.imageUrl} sellingPrice={item.sellingPrice} id={item.id}></Item>
            ))}
        </ul>
    )
}