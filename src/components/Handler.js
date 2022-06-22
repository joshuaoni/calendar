import React, {useState} from 'react';
// import { Formik, Form, useField } from 'formik';



const Handler = ({settingCell, sunday, monday, tuesday, wednesday, thursday, friday, saturday}) => {
  const [title, setTitle] = useState('');
  const [day, setDay] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (Number(start.slice(0,2)) >= Number(end.slice(0,2))) {
      setError('End time must be later than start time');
    } else {
      let num = Number(start.slice(0,2));
      let i, j;
      switch (num) {
        case 8:
          i = 0;
          break;
        case 10:
          i = 1;
          break;
        case 12:
          i = 2;
          break;
        case 14:
          i = 3;
          break;
        case 16:
          i = 4;
          break;
        default:
          break;
      }
      num = Number(end.slice(0,2));
      switch (num) {
        case 10:
          j = 1;
          break;
        case 12:
          j = 2;
          break;
        case 14:
          j = 3;
          break;
        case 16:
          j = 4;
          break;
        case 18:
          j = 5;
          break;
        default:
          break;
      }
      
      switch (day) {
        case 'Sunday':
          for (let index = i; index < j; index++) {
            if (sunday[index].title !== '') {
              setError('Time Period Already Occupied');
              return;
            }
          }
          break;
        case 'Monday':
          for (let index = i; index < j; index++) {
            if (monday[index].title !== '') {
              setError('Time Period Already Occupied');
              return;
            }
          }
          break;
        case 'Tuesday':
          for (let index = i; index < j; index++) {
            if (tuesday[index].title !== '') {
              setError('Time Period Already Occupied');
              return;
            }
          }
          break;
        case 'Wednesday':
          for (let index = i; index < j; index++) {
            if (wednesday[index].title !== '') {
              setError('Time Period Already Occupied');
              return;
            }
          }
          break;
        case 'Thursday':
          for (let index = i; index < j; index++) {
            if (thursday[index].title !== '') {
              setError('Time Period Already Occupied');
              return;
            }
          }
          break;
        case 'Friday':
          for (let index = i; index < j; index++) {
            if (friday[index].title !== '') {
              setError('Time Period Already Occupied');
              return;
            }
          }
          break;
        case 'Saturday':
          for (let index = i; index < j; index++) {
            if (saturday[index].title !== '') {
              setError('Time Period Already Occupied');
              return;
            }
          }
          break;
        default:
          break;
      }
      
      settingCell({title, start, end, day, i, j});
      setTitle('');
      document.getElementById('form').reset();
    }
  }

  return (
    <div className='handler'>
      <h1 id='heading'>New Event</h1>
      <form 
        onSubmit={handleSubmit}
        id='form'
      >
        <label>Title</label>
        <input 
          placeholder='title'
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
          required
          maxLength={20}
        />
        <label>Select Day</label>
        <select
          onChange={(e)=>{setDay(e.target.value)}}
          onFocus={()=>{
            setError('');
          }}
          defaultValue={''}
          required
        >
          <option value={''} disabled hidden>Select Day</option>
          <option>Sunday</option>
          <option>Monday</option>
          <option>Tuesday</option>
          <option>Wednesday</option>
          <option>Thursday</option>
          <option>Friday</option>
          <option>Saturday</option>
        </select>
        <label>Select Start Time</label>
        <select
          onChange={(e)=>{
            setStart(e.target.value);
            setError('');
          }}
          onFocus={()=>{
            setError('');
          }}
          defaultValue={''}
          required
        >
          <option value={''} disabled hidden>Select Start Time</option>
          <option>8 : 00</option>
          <option>10 : 00</option>
          <option>12 : 00</option>
          <option>14 : 00</option>
          <option>16 : 00</option>
        </select>
        <label>Select End Time</label>
        <select
          onChange={(e)=>{
            setEnd(e.target.value);
            setError('');
          }}
          onFocus={()=>{
            setError('');
          }}
          defaultValue={''}
          required
        >
          <option value={''} disabled hidden>Select End Time</option>
          <option>10 : 00</option>
          <option>12 : 00</option>
          <option>14 : 00</option>
          <option>16 : 00</option>
          <option>18 : 00</option>
        </select>
        <div  className='red tc'>
          <p>{error}</p>
        </div>
        <button>Add Event</button>
      </form>
    </div>
  );
};

export default Handler;