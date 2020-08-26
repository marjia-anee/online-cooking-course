import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSoup, faUtensilSpoon } from '@fortawesome/free-solid-svg-icons'
import './Products.css';


const Product = (props) => {
    console.log(props.children);
    const { image, name, instructor, price } = props.children;
    return (
        <div className="product">
            <div>
                <img src={image} alt="" />

            </div>
            <div>
                <h4> <strong> {name}</strong></h4>
                <p><small>by: {instructor}</small></p>
                <p>${price}</p>
                <button className="btn btn-success"> <FontAwesomeIcon icon={faUtensilSpoon} /> Enroll Now</button>

            </div>
        </div>
    );
};

export default Product;