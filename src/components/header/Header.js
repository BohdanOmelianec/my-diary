import React from 'react';
import './header.scss'

const Header = (props) => {
    return (
        <div className='header'>
            {props.children}
        </div>
    );
};

export default Header;