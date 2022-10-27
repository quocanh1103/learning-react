import React from 'react';
import PropTypes from 'prop-types';
import './head.css'

Head.propTypes = {
    
};

function Head() {
    return (
        <div className='container-head'>
            <button type='button' id='Btn'>Create New Task</button>
            <input type="search" name="" id="inptype" placeholder='Type something to search'/>
            <input type="submit" name="" id="submit" />
        </div>
    );
}

export default Head;