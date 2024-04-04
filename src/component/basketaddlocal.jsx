import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdDelete } from "react-icons/md";

const Checkout = () => {
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        const storedBasket = JSON.parse(localStorage.getItem('basket')) || [];
        setCartProducts(storedBasket);
    }, []);

    const removeItemFromCart = (productId) => {
        const updatedCart = cartProducts.filter(product => product.Id !== productId);
        setCartProducts(updatedCart);
        localStorage.setItem('basket', JSON.stringify(updatedCart));
    };

    const increaseQuantity = (product) => {
        const updatedCart=[...cartProducts]
        const existingProduct=updatedCart.findIndex(products=>products.Id===product.Id)
        updatedCart[existingProduct].count+=1
        setCartProducts(updatedCart);
        localStorage.setItem('basket', JSON.stringify(updatedCart));
    };

    const decreaseQuantity = (product) => {
        const updatedCart=[...cartProducts]
        const existingProduct=updatedCart.findIndex(products=>products.Id===product.Id)
        if (updatedCart[existingProduct].count>1) {
        updatedCart[existingProduct].count-=1

        }
        setCartProducts(updatedCart);
        localStorage.setItem('basket', JSON.stringify(updatedCart));
    };

    const handleQuantityChange = (event, productId) => {
        const quantity = parseInt(event.target.value);
        if (!isNaN(quantity) && quantity >= 1 && quantity <= 10) {
            const updatedCart = cartProducts.map(product => {
                if (product.id === productId) {
                    return { ...product, count: quantity };
                }
                return product;
            });
            setCartProducts(updatedCart);
            localStorage.setItem('basket', JSON.stringify(updatedCart));
        }
    };

    const totalPrice = cartProducts.reduce((total, product) => total + (product.Price * product.count), 0);

    return (
        <div className="checkout-container">
            <h2>Checkout</h2>
            {cartProducts.map((product) => (
                <div key={product.Id} className="checkout-item">
                    <img src={product.ProductImage} alt={product.Name} className='checkout-img' />
                    <div className="checkout-details">
                        <p>{product.Name}</p>
                        <p>Price: ${product.Price}</p>
                        <div className="quantity-control">
                            <button onClick={() => decreaseQuantity(product)}>-</button>
                            <input type="number" value={product.count} onChange={(e) => handleQuantityChange(e, product.id)} />
                            <button onClick={() => increaseQuantity(product)}>+</button>
                        </div>
                        <p>Total: ${product.Price * product.count}</p>
                    </div>
                    <MdDelete className="delete-icon" onClick={() => removeItemFromCart(product.Id)} />
                </div>
            ))}
            <div className="total-price">
                <p>Total Price: {totalPrice}</p>
            </div>
            <Link to="/" className="back-link">Go Back</Link>
        </div>
    );
}

export default Checkout;

