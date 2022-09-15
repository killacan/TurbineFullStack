import { NavLink } from 'react-router-dom';
import MiniNavBar from '../MiniNavBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartItems, getCartItems, destroyCartItem } from '../../store/carts';
import { useEffect, useState } from 'react';
import { fetchGames } from '../../store/games';

function Cart () {
    const dispatch = useDispatch();

    const cartData = useSelector(state => state.carts);

    useEffect(() => {
        dispatch(fetchCartItems());
    }, []);
    
    // console.log(cartItems, "cart items");

    if (!cartData) return null;
    
    return (
        <>
            <div className='background-radial'>
            </div>

            <MiniNavBar />

            <div className='shopping-cart-container'>
                <h2 className='shopping-cart-text'>YOUR SHOPPING CART</h2>
                <div className='shopping-cart-items-container'>
                    <div className='shopping-cart-items-box'>
                        {Object.values(cartData).map(cartItem => (
                            <div className='shopping-cart-item-container'>
                                <h6>{cartItem.game}</h6>
                                {/* {cartItem.photoUrls[0] && <img src={cartItem.photoUrls[0]} />} */}
                                <button className='shopping-cart-item-button' onClick={() => dispatch(destroyCartItem(cartItem.id))} >REMOVE</button>
                            </div>
                        ))}
                        <div className='shopping-cart-item-container'>
                            <p>Estimated Total</p>
                        </div>
                    </div>
                    <p>Sales tax will be calculated during checkout where applicable</p>
                    <NavLink to={'/'} className='continue-shopping-button'>Continue Shopping</NavLink>
                    <h3>DELIVERY</h3>
                    <div className='delivery-box'>
                        {/* logo goes here */}
                        <p className='delivery-top-text'>All digital goods are delivered via the Turbine desktop application</p>
                        <p className='delivery-bottom-text'>Steam and your games will be available for download after your purchase</p>
                    </div>
                </div>
                <div className='shopping-cart-special-offers-container'>
                    <div className='shopping-cart-special-offers-box1'>

                    </div>

                    <div className='shopping-cart-special-offers-box2'>

                    </div>
                </div>
            </div>
        </>
    )

}

export default Cart;