import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Head.css'

import { Navigate, useNavigate } from 'react-router-dom';


Head.propTypes = {
    
};

function Head() {
    let Navigate = useNavigate();
    const handleCreate = (e) =>{
        let path1 ='/';
        Navigate(path1);
    }
    const handleProduct = (e) => {
        let path2 ='/products';
        Navigate(path2);
    }
    const [cart, setCart] = useState([]);

    return (
        <div className='container-head'>
            <button type='button' id='Btn' onClick={handleCreate}>Add New Product</button>
            <button type='button' id='Btn-all' onClick={handleProduct}>All Product</button>
            
        </div>
    );
}

export default Head;