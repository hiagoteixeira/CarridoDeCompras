import React from 'react'
import Item from './Item'

export default function List(props) {
    return (
        <ul>
            {props.data.map(item => (
                <Item name={item.name} imageUrl={item.imageUrl} price={item.price}></Item>
            ))}
        </ul>
    )
}