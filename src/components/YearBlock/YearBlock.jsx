import React from 'react';
import './YearBlock.css';

function YearBlock(props) {
    return (
        <div className='yearBlockContainer'>
            <hr className='lineForYear' />
            <div className='yearBlock'>{props.text}</div>
            <hr className='lineForYear' />
        </div>
    );
}

export default YearBlock;
