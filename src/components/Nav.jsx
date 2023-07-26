import React from "react";

function Nav(){
    return(
        <div>
            <nav>
                <div className="logo-img">
                    <img src="../../public/images/brand_logo.png" alt="" />
                </div>

                <ul className="menu-options">
                    <li href="#">MENU</li>
                    <li href="#">LOCATION</li>
                    <li href="#">ABOUT</li>
                    <li href="#">CONTACT</li>
                </ul>

                <button className="login-button" type="submit">Login</button>
            </nav>
        </div>
    )
        

    
}

export default Nav;