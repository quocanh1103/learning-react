import React from 'react';
import PropTypes from 'prop-types';
import './sidebar.css'

Sidebar.propTypes = {};

function Sidebar() {
    return (
        <div>
            <nav>
                <ul>
                    <li>All Task</li>
                    <li>New Task</li>
                    <li>Doing Task</li>
                    <li>Done Task</li>
                </ul>
            </nav>
        </div>
    );
}

export default Sidebar;