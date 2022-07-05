import React from "react";
import "./Product.css";

function Product({id, title, image, price, rating}) {

    return (
        <div className="product">
            <div className="product__info">
                <p>Title</p>
                <p className="product__price">
                    <small>$30</small>
                </p>
                <div className="product__rating"> ⭐⭐⭐ </div>
            </div>

            <img src={image} />

            <button>Add to Basket</button>
        </div>
    )
}

export default Product
