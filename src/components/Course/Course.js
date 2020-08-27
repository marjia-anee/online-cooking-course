import React from 'react';
import fakeData from '../../fakeData';
import { useState } from 'react';
import './Course.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Course = () => {
    
    const total = fakeData;

    const [products, setProducts] = useState(total);
    const [cart, setCart] = useState([])

    const handleAddCourse = (course) => {
        const newCart = [...cart, course];
        setCart(newCart);
    }
   
    return (
        <div className="course-container">
            <div className="product-container">
            
                {
                    products.map(product => <Product 
                        handleAddCourse = {handleAddCourse}
                        product>{product}
                        </Product>)
                }


            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
           
        </div>
    );
};

export default Course;