import React from 'react';
import './hello.scss';

const Hello = () => {
    return (
        <div className='container'>
            <h2>This is header</h2>
            <div className='first-box'>
                <h2>First Box</h2>
            </div>
            <div className='second-box'>
                <h2>Second Container</h2>
            </div>
            <div className='third-box'>
                <h2>Third Box</h2>
            </div>
            <div className='fourth-box'>
                <h2>Fourth Container</h2>
            </div>
            <p className='para'>Hello world! I'm pragrap...</p>
            <button>Hover Me</button>
        </div>
    );
};

export default Hello;