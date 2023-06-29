import React, { useMemo, useState, useCallback, useEffect } from 'react';
import TaskBox from './TaskBox';
import { get } from '../../services/actions';

function Kanban(props) {
  const url = `/tasks`
  const [data, setData] = useState(props.data);
  const [events, setEvents] = useState(() => {
    return localStorage.getItem('events')
      ? JSON.parse(localStorage.getItem('events'))
      : initEvent;
  });

  useEffect(() => {
    setData(props.data);
    let eventAux = [
      {
        title: 'Tasks',
        ['Pendente']: [],
        ['Andamento']: [],
        ['Finalizado']: [],
      },
    ];
    props.data.map(item =>{
      if(item.status ==1){
        eventAux[0]['Pendente'].push(item)
      }else if(item.status == 2){
        eventAux[0]['Andamento'].push(item)
      }else{
        eventAux[0]['Finalizado'].push(item)
      }
    })
    setEvents(eventAux)
  }, [props]);
  
  const initEvent = useMemo(() => [
    {
      title: 'Add a new Event',
      ['Pendente']: [],
      ['Andamento']: [],
      ['Finalizado']: [],
    },
  ], []);

  const [currentEvent, setCurrentEvent] = useState(events[0]);


  return (
    <div className='App'>
      <TaskBox
        events={events}
        setEvents={setEvents}
        currentEvent={currentEvent}
        setCurrentEvent={setCurrentEvent}
      />
    </div>
  );
}

export default Kanban;
