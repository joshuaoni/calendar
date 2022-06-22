import React from 'react';
import Main from './Main';
import Header from './Header';

const Calendar = ({sunday, monday, tuesday, wednesday, thursday, friday, saturday}) => {
    return (
        <div className='calendar'>
            <Header />
            <Main  sunday={sunday} monday={monday} tuesday={tuesday} wednesday={wednesday} thursday={thursday} friday={friday} saturday={saturday}/>
        </div>
    );
}
 
export default Calendar;