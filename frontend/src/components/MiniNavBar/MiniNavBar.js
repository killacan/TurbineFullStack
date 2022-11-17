import { NavLink } from "react-router-dom";
import searchIcon from "../../assets/searchDarkBlue.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchCartItems } from "../../store/carts";
import { useEffect } from "react";
import { useState } from "react";

function MiniNavBar () {
    const dispatch = useDispatch();

    const cartData = useSelector(state => state.carts);
    const [searchQuery, setSearchQuery] = useState("")

    useEffect(() => {
        dispatch(fetchCartItems());
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Its Working!")
    }

    if (!cartData) return null;
    
    return (
        <>
            <div className="mini-nav-container">
                {Object.values(cartData).length > 0 && <NavLink to={`/cart`} className="mini-nav-cart-link">Cart({Object.values(cartData).length})</NavLink>}

                <div className="mini-nav-bar">

                    <ul className="mini-nav-options-list">
                        <NavLink to="/" ><li className="mini-dropdown1"><span>Your Store</span></li></NavLink>
                            {/* <div className="mini-dropdown-content1">
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/">Community Recommendations</NavLink>
                            </div> */}
                        {/* <li className="mini-dropdown2"><span>New & Noteworthy</span></li> */}
                            {/* <div className="mini-dropdown-content2">
                                <NavLink to="/">Top Sellers</NavLink>
                                <NavLink to="/">New & Trending</NavLink>
                                <NavLink to="/">Special Offers</NavLink>
                                <NavLink to="/">Recently Updated</NavLink>
                            </div> */}
                        {/* <li className="mini-dropdown3"><span>Categories</span></li>
                        <li className="mini-dropdown4"><span>Points Shop</span></li>
                        <li className="mini-dropdown5"><span>News</span></li>
                        <li className="mini-dropdown6"><span>Labs</span></li> */}
                    </ul>
                    <div className="search-spacer">
                        
                    </div>
                    <div className="search-bar">
                        <form onSubmit={handleSubmit} >
                            <input type="text" placeholder="Search" onChange={e => setSearchQuery(e.target.value)} />
                        <div className="search-icon-holder" onClick={handleSubmit}>
                            <img id="search-icon" src={searchIcon} />
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MiniNavBar;