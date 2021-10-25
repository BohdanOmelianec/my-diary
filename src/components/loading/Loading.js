import React from 'react';

const style = {
    width: '200px',
    textAlign: 'center',
    fontSize: '26px',
    textTransform: 'upperCase',
    margin: '50px auto',
    padding: '10px'
}

const Loading = () => {
    return (
        <div style={style}>
            Loading...
        </div>
    );
};

export default Loading;