import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Course.css';
import Product from '../Product/Product';

const Course = () => {
    
    const total = fakeData;

    const [products, setProducts] = useState(total);
   
    return (
        <div className="course-container">
            <div className="product-container">
            
                {
                    products.map(product => <Product product>{product}</Product>)
                }


            </div>
            <div className="cart-container">
                <h4>this is cart</h4>
            </div>
           
        </div>
    );
};

export default Course;