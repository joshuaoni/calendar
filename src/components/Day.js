import React from 'react';

const Day = ({title, duration}) => {
    
    return (
        <div className='day tc'>
            <h4>{title}</h4>
            <p>{duration}</p>
        </div>
    );
}
 
export default Day;