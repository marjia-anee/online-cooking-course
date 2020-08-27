import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensilSpoon } from '@fortawesome/free-solid-svg-icons'
import './Products.css';


const Product = (props) => {
   // console.log(props);
    const { image, name, instructor, price, rating } = props.children;
    return (
        <div className="product">
            <div>
                <img src={image} alt="" />

            </div>
            <div className="product-info">
                <br/>
                <br/>
                <h4> <strong> {name}</strong></h4>
                <br/>
                <p><strong> By: {instructor} </strong></p>
                <p>Rating: {rating}</p>
                <p> <strong> ${price} </strong> </p>
                <br/>
                <button className="btn btn-success"
                onClick={() => props.handleAddCourse(props.children)}
                >
                     <FontAwesomeIcon icon={faUtensilSpoon} /> Enroll Now</button>

            </div>
        </div>
    );
};

export default Product;