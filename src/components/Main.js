import React from 'react';
import Day from './Day';

const Main = ({sunday, monday, tuesday, wednesday, thursday, friday, saturday}) => {

    return (
        <section>
            <div className='cont days'>
                <div className='cell'> </div>
                <div className='cell'>
                    <h2>Sun</h2>
                    <h3>10</h3>
                </div>
                <div className='cell'>
                    <h2>Mon</h2>
                    <h3>11</h3>
                </div>
                <div className='cell'>
                    <h2>Tue</h2>
                    <h3>12</h3>
                </div>
                <div className='cell'>
                    <h2>Wed</h2>
                    <h3>13</h3>
                </div>
                <div className='cell'>
                    <h2>Thur</h2>
                    <h3>14</h3>
                </div>
                <div className='cell'>
                    <h2>Fri</h2>
                    <h3>14</h3>
                </div>
                <div className='cell'>
                    <h2>Sat</h2>
                    <h3>16</h3>
                </div>
            </div>
            <div className='flex'>
                <div className='cont time'>
                    <div className='cell'>
                        <p>8:00 AM</p>
                    </div>
                    <div className='cell'>
                        <p>10:00 AM</p>
                    </div>
                    <div className='cell'>
                        <p>12:00 PM</p>
                    </div>
                    <div className='cell'>
                        <p>2:00 PM</p>
                    </div>
                    <div className='cell'>
                        <p>4:00 PM</p>
                    </div>
                </div>
                <div className='cont sunday'>
                    {sunday.map(hour=> {
                        return (
                            <div 
                                key={hour.id}
                            >
                                {hour.title !== '' ?
                                <div className='sun'>
                                    <Day
                                        duration={hour.duration}
                                        title={hour.title}
                                    />
                                </div> :
                                <div>
                                    <Day
                                        duration={hour.duration}
                                        title={hour.title}
                                    />
                                </div>}
                            </div>
                        )
                    })}
                </div>
                <div className='cont monday'>
                    {monday.map(hour=> {
                        return (
                            <div 
                                key={hour.id}
                            >
                                {hour.title !== '' ?
                                <div className='mon'>
                                    <Day
                                        duration={hour.duration}
                                        title={hour.title}
                                    />
                                </div> :
                                <div>
                                    <Day
                                        duration={hour.duration}
                                        title={hour.title}
                                    />
                                </div>}
                            </div>
                        )
                    })}
                </div>
                <div className='cont tuesday'>
                    {tuesday.map(hour=> {
                        return (
                            <div 
                                key={hour.id}
                            >
                                {hour.title !== '' ?
                                <div className='tue'>
                                    <Day
                                        duration={hour.duration}
                                        title={hour.title}
                                    />
                                </div> :
                                <div>
                                    <Day
                                        duration={hour.duration}
                                        title={hour.title}
                                    />
                                </div>}
                            </div>
                        )
                    })}
                </div>
                <div className='cont wednesday'>
                    {wednesday.map(hour=> {
                        return (
                            <div 
                                key={hour.id}
                            >
                                {hour.title !== '' ?
                                <div className='wed'>
                                    <Day
                                        duration={hour.duration}
                                        title={hour.title}
                                    />
                                </div> :
                                <div>
                                    <Day
                                        duration={hour.duration}
                                        title={hour.title}
                                    />
                                </div>}
                            </div>
                        )
                    })}
                </div>
                <div className='cont thursday'>
                    {thursday.map(hour=> {
                        return (
                            <div 
                                key={hour.id}
                            >
                                {hour.title !== '' ?
                                <div className='thur'>
                                    <Day
                                        duration={hour.duration}
                                        title={hour.title}
                                    />
                                </div> :
                                <div>
                                    <Day
                                        duration={hour.duration}
                                        title={hour.title}
                                    />
                                </div>}
                            </div>
                        )
                    })}
                </div>
                <div className='cont friday'>
                    {friday.map(hour=> {
                        return (
                            <div 
                                key={hour.id}
                            >
                                {hour.title !== '' ?
                                <div className='fri'>
                                    <Day
                                        duration={hour.duration}
                                        title={hour.title}
                                    />
                                </div> :
                                <div>
                                    <Day
                                        duration={hour.duration}
                                        title={hour.title}
                                    />
                                </div>}
                            </div>
                        )
                    })}
                </div>
                <div className='cont saturday'>
                    {saturday.map(hour=> {
                        return (
                            <div 
                                key={hour.id}
                            >
                                {hour.title !== '' ?
                                <div className='sat'>
                                    <Day
                                        duration={hour.duration}
                                        title={hour.title}
                                    />
                                </div> :
                                <div>
                                    <Day
                                        duration={hour.duration}
                                        title={hour.title}
                                    />
                                </div>}
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

 
export default Main;