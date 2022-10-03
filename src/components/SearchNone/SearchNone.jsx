import React from 'react';
import './SearchNone.css';
import glass from '../../img/glass.png';
import ufo from '../../img/ufo.png';

function SearchNone(props) {
    return (
        <div className='searchNoneContainer'>
            <img src={props.type === 'not found' ? glass : ufo} alt='' />
            <h4>
                {props.type === 'not found'
                    ? 'Мы никого не нашли'
                    : 'Какой-то сверхразум все сломал'}
            </h4>
            <p>
                {props.type === 'not found'
                    ? 'Попробуй скорректировать запрос'
                    : 'Постараемся быстро починить'}
            </p>
            {props.type !== 'not found' ? (
                <a href='./'>Попробовать снова</a>
            ) : null}
        </div>
    );
}

export default SearchNone;
