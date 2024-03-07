import React, {useState} from "react";
import TodoForm from "./TodoForm";
import {Calendar, momentLocalizer} from 'react-big-calendar'

function TodoList(){
    const [todos, setTodos] = useState ([])

    const localizer = momentLocalizer(momentLocalizer)
return (
    <div>
    <Calendar
      localizer={localizer}
      events={myEventsList}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
    />
  </div>
)

}

export default TodoList;