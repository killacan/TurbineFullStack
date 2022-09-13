import { NavLink } from 'react-router-dom';
import MiniNavBar from '../MiniNavBar';

function Cart () {

    return (
        <>
            <div className='background-radial'>
            </div>

            <MiniNavBar />

            <div className='shopping-cart-container'>
                <h2 className='shopping-cart-text'>YOUR SHOPPING CART</h2>
                <div className='shopping-cart-items-container'>
                    <div className='shopping-cart-item-box'>

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