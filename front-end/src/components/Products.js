import React, { useState, useEffect } from 'react';
import List from './List'
import { getProducts } from '../services/ProductsService'

export default function Products() {
    const [products, setProducts] = useState(null);

    useEffect(() => {
        getProducts('abaixo').then(data => {
            setProducts(data);
        }).catch();
    }, []);

    return (
        <div>
            {products && (
                <>
                    <header>
                        <h4>Meu Carrinho</h4>
                    </header>
                    <List data={products.items} />
                    <footer>
                        <div>
                            <h5>Total</h5>
                            <h5>{products.value}</h5>
                            {products.value > 10 && (
                                <span>Parabéns, sua compra tem frete grátis !</span>
                            )}
                        </div>
                        <div>
                            <button>Finalizar compra</button>
                        </div>
                    </footer>
                </>
            )}
        </div>
    );
}