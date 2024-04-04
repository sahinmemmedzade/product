import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IoIosSearch, IoMdClose } from "react-icons/io";
import { MdOutlinePerson, MdOutlineShoppingCart, MdDelete } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import "./header.css";

const Header = () => {
    const location = useLocation();
    const [menuSidebarOpen, setMenuSidebarOpen] = useState(false);
    const [cartSidebarOpen, setCartSidebarOpen] = useState(false);
    const [cartItems, setCartItems] = useState(0);
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        const storedBasket = JSON.parse(localStorage.getItem('basket')) || [];
        setCartProducts(storedBasket);
        setCartItems(storedBasket.length)
    }, []);
 
    const toggleMenuSidebar = () => {
        setMenuSidebarOpen(!menuSidebarOpen);
    };

    const toggleCartSidebar = () => {
        setCartSidebarOpen(!cartSidebarOpen);
    };

    const closeMenuSidebar = () => {
        setMenuSidebarOpen(false);
    };

    const closeCartSidebar = () => {
        setCartSidebarOpen(false);
    };

    const removeItemFromCart = (productId) => {
        let updatedCart = cartProducts.filter(product=>product.Id!==productId)
        localStorage.setItem('basket', JSON.stringify(updatedCart));
        updatedCart=[]
    };

    return (
        <div>
            <header className='scroll-effect'>
                <div className='product '><Link to="https://preview.colorlib.com/#product" className="product-link">PRODUCT.</Link></div>
                <nav className='navbar '>
                    <ul>
                        <li className={location.pathname === "/" ? "active" : ""}><Link to="/">New</Link></li>
                        <li className={location.pathname === "/contact" ? "active" : ""}><Link to="/contact">Contact</Link></li>
                        <li className={location.pathname === "/jewelry" ? "active" : ""}><Link to="/jewelry">Jewelry</Link></li>
                        <li className={location.pathname === "/accessories" ? "active" : ""}><Link to="/accessories">Accessories</Link></li>
                        <li className={location.pathname === "/about" ? "active" : ""}><Link to="/about">About</Link></li>
                        <li className={location.pathname === "/men" ? "active" : ""}><Link to="/men">Men</Link></li>
                        <li className={location.pathname === "/women" ? "active" : ""}><Link to="/women">Women</Link></li>
                    </ul>
                </nav>
                <div className={`headericon ${menuSidebarOpen ? 'shifted' : ''} `} style={{ marginRight: cartSidebarOpen ? '' : '240px' }}>
                    <IoIosSearch className='i' style={{ fontSize: '24px' }} />
                    <MdOutlinePerson className='i' style={{ fontSize: '24px' }} />
                    <div className="cart-container" onClick={toggleCartSidebar}>
                        <MdOutlineShoppingCart className='icart' style={{ fontSize: '24px' }} />
                        {<div className="cart-badge">{cartItems}</div>}
                    </div>
                    <div className="headericon" onClick={toggleMenuSidebar}>
                        {menuSidebarOpen ? (
                            <IoMdClose className='i close-icon' style={{ fontSize: '24px', color: 'black', transition: 'transform 0.3s ease', transform: 'rotate(90deg)' }} onClick={closeMenuSidebar} />
                        ) : (
                            <GiHamburgerMenu className='i hamburger-menu' style={{ fontSize: '24px', transition: 'transform 0.3s ease', transform: 'rotate(0deg)' }} />
                        )}
                    </div>
                </div>
            </header>
            <div className={`sidebar ${menuSidebarOpen ? 'open' : ''}`}>
                <IoMdClose className="close-icon" onClick={closeMenuSidebar} />
                <ul>
                    <li className={location.pathname === "/" ? "active" : ""}><Link to="/">New</Link></li>
                    <li className={location.pathname === "/contact" ? "active" : ""}><Link to="/contact">Contact</Link></li>
                    <li className={location.pathname === "/jewelry" ? "active" : ""}><Link to="/jewelry">Jewelry</Link></li>
                    <li className={location.pathname === "/accessories" ? "active" : ""}><Link to="/accessories">Accessories</Link></li>
                    <li className={location.pathname === "/about" ? "active" : ""}><Link to="/about">About</Link></li>
                    <li className={location.pathname === "/men" ? "active" : ""}><Link to="/men">Men</Link></li>
                    <li className={location.pathname === "/women" ? "active" : ""}><Link to="/women">Women</Link></li>
                </ul>
            </div>
            <div className={`sidebar ${cartSidebarOpen ? 'open' : ''}`}>
                <IoMdClose className="close-icon" onClick={closeCartSidebar} />
                <div className="cart-items">
                    {cartProducts && cartProducts.map((product) => (
                        <div key={product.Id} className="cart-item">
                            <img src={product.ProductImage} alt={product.Name} className='cartimg' />
                            <p>{product.Name}</p>
                            <MdDelete className="delete-icon" onClick={() => removeItemFromCart(product.Id)} />
                        </div>
                    ))}
                </div>
                <button className='checkout'>
                    <Link to="/checkout" className="checkout-button" onClick={closeCartSidebar}>Checkout</Link>
                </button>
            </div>
        </div>
    );
}

export default Header;
