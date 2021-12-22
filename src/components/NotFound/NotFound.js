import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div style={{ margin: '200px 0px' }}>
            <h3>Sorry page not found, <span>Back to <Link to="/home">Home</Link></span></h3>
        </div>
    );
};

export default NotFound;