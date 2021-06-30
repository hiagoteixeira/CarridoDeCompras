import React, { useState, useEffect } from 'react';
import List from '../List/index'
import './style.css'
import { getProducts } from '../../services/ProductsService'

export default function Products() {
    const [products, setProducts] = useState(null);
    useEffect(() => {
        getProducts('acima').then(data => {
            setProducts(data);
        }).catch();
    }, []);

    return (
        <div>
            {products && (
                <div class='main'>
                    <div class='layout'>
                        <header class='header'>
                            <h4 class='header-title'>Meu Carrinho</h4>
                        </header>
                        <List data={products.items} />
                        <footer>
                            <div class='result-container'>
                                <div class='result-container-sec'>
                                    <h5 class='result'>
                                        <span class='result-title'>Total</span>
                                        <span class='result-price'>R$ {products.value / 100}</span>
                                    </h5>
                                    <div class='message-container'>
                                        {(products.value) > 10 && (
                                            <span class='message'>Parabéns, sua compra tem frete grátis !</span>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div class='button-container'>
                                <button class='btn'>Finalizar compra</button>
                            </div>
                        </footer>
                    </div>
                </div>
            )}
        </div>
    );
}