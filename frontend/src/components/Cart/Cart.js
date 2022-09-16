import { NavLink } from 'react-router-dom';
import MiniNavBar from '../MiniNavBar';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartItems, getCartItems, destroyCartItem } from '../../store/carts';
import { useEffect, useState } from 'react';
import { fetchGames } from '../../store/games';

function Cart () {
    const dispatch = useDispatch();

    const cartData = useSelector(state => state.carts);

    let totalCost = 0;

    useEffect(() => {
        dispatch(fetchCartItems());
    }, []);
    
    // console.log(cartItems, "cart items");

    if (!cartData) return null;
    
    // console.log(Object.values(cartData).forEach((cart_cost) => totalCost += cart_cost.price), "cartData");
    // console.log(totalCost, "totalCost");

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
                                    <NavLink to={`/games/${cartItem.gameId}`}>
                                        <div className='shopping-cart-item-info-left'>
                                            <h6 className='cart-item-title-text'>{cartItem.game}</h6>
                                            {cartItem.photoUrls[0] && <img className='cart-item-photo' src={cartItem.photoUrls[0]} />}
                                        </div>
                                    </NavLink>
                                    <div className='shopping-cart-item-info-right'>
                                        <p>{`$${cartItem.price}`}</p>
                                        <button className='shopping-cart-item-button' onClick={() => dispatch(destroyCartItem(cartItem.id))} >Remove</button>
                                    </div>
                                </div>

                        ))}
                        <div className='shopping-cart-item-container-final'>
                            <p id='shopping-cart-item-text1' className='shopping-cart-item-text'>Estimated Total*</p>
                            <p id='shopping-cart-item-text2' className='shopping-cart-item-text'>Is this a purchase for yourself or is it a gift? Select one to continue to checkout.</p>
                            <p id='shopping-cart-item-text3' className='shopping-cart-item-text'>{`$${totalCost}`}</p>
                            <div className='shopping-cart-item-buttons-container'>
                                <button id='shopping-cart-item-button1' className='shopping-cart-item-button'>Purchase for myself</button>
                            </div>
                        </div>
                    </div>
                    <div className='shopping-cart-bottom-container'>
                        <p>* Sales tax will be calculated during checkout where applicable</p>
                        <NavLink to={'/'} className='continue-shopping-button'>Continue Shopping</NavLink>
                        <h3>DELIVERY</h3>
                        <div className='delivery-box'>
                            {/* logo goes here */}
                            <p className='delivery-top-text'>All digital goods are delivered via the Turbine desktop application</p>
                            <p className='delivery-bottom-text'>Turbine and your games will be available for download after your purchase</p>
                        </div>
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