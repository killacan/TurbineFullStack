import { NavLink } from "react-router-dom";

function MiniNavBar () {
    return (
        <>
            <div className="mini-nav-container">
                <div className="mini-nav-bar">
                    <ul className="mini-nav-options-list">
                        <li className="mini-dropdown1"><span>Your Store</span></li>
                            {/* <div className="mini-dropdown-content1">
                                <NavLink to="/">Home</NavLink>
                                <NavLink to="/">Community Recommendations</NavLink>
                            </div> */}
                        <li className="mini-dropdown2"><span>New & Noteworthy</span></li>
                            {/* <div className="mini-dropdown-content2">
                                <NavLink to="/">Top Sellers</NavLink>
                                <NavLink to="/">New & Trending</NavLink>
                                <NavLink to="/">Special Offers</NavLink>
                                <NavLink to="/">Recently Updated</NavLink>
                            </div> */}
                        <li className="mini-dropdown3"><span>Categories</span></li>
                        <li className="mini-dropdown4"><span>Points Shop</span></li>
                        <li className="mini-dropdown5"><span>News</span></li>
                        <li className="mini-dropdown6"><span>Labs</span></li>
                    </ul>
                    <div className="search-spacer">
                        
                    </div>
                    <div className="search-bar">
                        <input type="text" placeholder="Search" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default MiniNavBar;