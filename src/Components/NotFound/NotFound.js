import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h1>This is not found page</h1>
            <Link to='/'>Home</Link>
        </div>
    );
};

export default NotFound;