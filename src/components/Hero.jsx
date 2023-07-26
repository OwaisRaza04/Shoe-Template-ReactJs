import React from "react";

function Hero(){
    return(
        <div className="hero-section">
        
            <div className="hero-left">

                <div className="hero-text">
                    <h1>YOUR FEET DESERVE THE BEST</h1>
                    <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO 
                        HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND 
                        WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
                </div>

                <div className="hero-buttons">
                    <button className="shop-button">Shop Now</button>
                    <button className="category-button">Category</button>
                </div>

                <div className="hero-shop">
                    <p>Also Available On</p>
                    <div className="shop-img">
                        <img src="../../public/images/flipkart.png" alt="flipkart" />
                        <img src="../../public/images/amazon.png" alt="amazon" />
                    </div>
                </div>

            </div>

            <div className="hero-right">
                <img src="../../public/images/shoe_image.png" alt="shoe-image" />
            </div>
        

       </div>
    )
}


export default Hero;