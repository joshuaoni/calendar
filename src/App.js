import React, {useState} from 'react';
import './App.css';
import Calendar from './components/Calendar';
import Handler from './components/Handler';
import 'tachyons';

// export const ACTIONS = {
//   NEW_EVENT: 'new-event'
// }

const empty = [
    {id: 1, title: '', duration: ''},
    {id: 2, title: '', duration: ''},
    {id: 3, title: '', duration: ''},
    {id: 4, title: '', duration: ''},
    {id: 5, title: '', duration: ''}
]


function App() {
  const [sunday, setSunday] = useState(empty);
  const [monday, setMonday] = useState(empty);
  const [tuesday, setTuesday] = useState(empty);
  const [wednesday, setWednesday] = useState(empty);
  const [thursday, setThursday] = useState(empty);
  const [friday, setFriday] = useState(empty);
  const [saturday, setSaturday] = useState(empty);

  const settiingCell = ({title, start, end, day, i, j}) => {
    switch (day) {
      case 'Sunday':
        if (j-i === 1) {
          setSunday((periods) => {
            return [
              ...periods.slice(0,i),
              {id: i+1, title:title, duration: `${start} - ${end}`},
              ...periods.slice(i+1)
            ]
          });
        } else {
          setSunday((periods) => {
            return [
              ...periods.slice(0,i),
              {id: i+1, title:title, duration: ``},
              periods.filter((hour, index)=>{
                return index > i && index < j-1;
              }).map(x => {
                return {id:x.id, title: ' ', duration:''}
              }),
              {id: j, title:' ', duration: `${start} - ${end}`},
              ...periods.slice(j)
            ].flat();
          });
        }
        break;

      case 'Monday':
        if (j-i === 1) {
          setMonday((periods) => {
            return [
              ...periods.slice(0,i),
              {id: i+1, title:title, duration: `${start} - ${end}`},
              ...periods.slice(i+1)
            ]
          });
        } else {
          setMonday((periods) => {
            return [
              ...periods.slice(0,i),
              {id: i+1, title:title, duration: ``},
              periods.filter((hour, index)=>{
                return index > i && index < j-1;
              }).map(x => {
                return {id:x.id, title: ' ', duration:''}
              }),
              {id: j, title:' ', duration: `${start} - ${end}`},
              ...periods.slice(j)
            ].flat();
          });
        }
        break;

      case 'Tuesday':
        if (j-i === 1) {
          setTuesday((periods) => {
            return [
              ...periods.slice(0,i),
              {id: i+1, title:title, duration: `${start} - ${end}`},
              ...periods.slice(i+1)
            ]
          });
        } else {
          setTuesday((periods) => {
            return [
              ...periods.slice(0,i),
              {id: i+1, title:title, duration: ``},
              periods.filter((hour, index)=>{
                return index > i && index < j-1;
              }).map(x => {
                return {id:x.id, title: ' ', duration:''}
              }),
              {id: j, title:' ', duration: `${start} - ${end}`},
              ...periods.slice(j)
            ].flat();
          });
        }
        break;

      case 'Wednesday':
        if (j-i === 1) {
          setWednesday((periods) => {
            return [
              ...periods.slice(0,i),
              {id: i+1, title:title, duration: `${start} - ${end}`},
              ...periods.slice(i+1)
            ]
          });
        } else {
          setWednesday((periods) => {
            return [
              ...periods.slice(0,i),
              {id: i+1, title:title, duration: ``},
              periods.filter((hour, index)=>{
                return index > i && index < j-1;
              }).map(x => {
                return {id:x.id, title: ' ', duration:''}
              }),
              {id: j, title:' ', duration: `${start} - ${end}`},
              ...periods.slice(j)
            ].flat();
          });
        }
        break;

      case 'Thursday':
        if (j-i === 1) {
          setThursday((periods) => {
            return [
              ...periods.slice(0,i),
              {id: i+1, title:title, duration: `${start} - ${end}`},
              ...periods.slice(i+1)
            ]
          });
        } else {
          setThursday((periods) => {
            return [
              ...periods.slice(0,i),
              {id: i+1, title:title, duration: ``},
              periods.filter((hour, index)=>{
                return index > i && index < j-1;
              }).map(x => {
                return {id:x.id, title: ' ', duration:''}
              }),
              {id: j, title:' ', duration: `${start} - ${end}`},
              ...periods.slice(j)
            ].flat();
          });
        }
        break;

      case 'Friday':
        if (j-i === 1) {
          setFriday((periods) => {
            return [
              ...periods.slice(0,i),
              {id: i+1, title:title, duration: `${start} - ${end}`},
              ...periods.slice(i+1)
            ]
          });
        } else {
          setFriday((periods) => {
            return [
              ...periods.slice(0,i),
              {id: i+1, title:title, duration: ``},
              periods.filter((hour, index)=>{
                return index > i && index < j-1;
              }).map(x => {
                return {id:x.id, title: ' ', duration:''}
              }),
              {id: j, title:' ', duration: `${start} - ${end}`},
              ...periods.slice(j)
            ].flat();
          });
        }
        break;

        case 'Saturday':
        if (j-i === 1) {
          setSaturday((periods) => {
            return [
              ...periods.slice(0,i),
              {id: i+1, title:title, duration: `${start} - ${end}`},
              ...periods.slice(i+1)
            ]
          });
        } else {
          setSaturday((periods) => {
            return [
              ...periods.slice(0,i),
              {id: i+1, title:title, duration: ``},
              periods.filter((hour, index)=>{
                return index > i && index < j-1;
              }).map(x => {
                return {id:x.id, title: ' ', duration:''}
              }),
              {id: j, title:' ', duration: `${start} - ${end}`},
              ...periods.slice(j)
            ].flat();
          });
        }
        break;
      
      default:
        break;
    }

    console.log({sunday:sunday, i:i})
  }

  return (
    <div className='App'>
      <Handler sunday={sunday} monday={monday} tuesday={tuesday} wednesday={wednesday} thursday={thursday} friday={friday} saturday={saturday} settingCell={settiingCell}/>
      <Calendar sunday={sunday} monday={monday} tuesday={tuesday} wednesday={wednesday} thursday={thursday} friday={friday} saturday={saturday} />
    </div>
  );
};

export default App;