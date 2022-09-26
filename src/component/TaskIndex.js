import React, { Fragment, useState } from 'react'
import TaskHeader from './TaskHeader'
import TaskList from './TaskList'
import TaskForm from './TaskForm'

//const initialState = {[{name: "zen", detail: "EMR etc",status:"Complete"},{name: "zen", detail: "EMR etc",status:"Complete"},{name: "zen", detail: "EMR etc",status:"Complete"}] };


function TaskIndex() {
    const [taskList, setTaskList] = useState(
        [{ id: 1, name: "Selectus aut autem",  detail: "Selectus aut autem" , status: 'Incomplete' },
        { id: 2, name: "Luis ut nam facilis et officia qui", detail: "Selectus aut autem", status: 'Incomplete' },
        { id: 3, name: "Fugiat veniam minus",detail: "Selectus aut autem", status: 'Incomplete' },
        { id: 4, name: "Aet porro tempora",detail: "Selectus aut autem", status: 'Complete' },
        { id: 5, name: "Laboriosam mollitia et enim quasi",detail: "Selectus aut autem",status: 'Incomplete' }
        ]);
    const [showform, setShowform] = useState(0);
    const [taskobj, setTaskobj] = useState({});
    const [addedit, setAddedit] = useState(0);
    const [breadcrumtext, setBreadcrumtext] = useState('List');
    const addTodo = task => {
      //  alert(task);
      console.log("addTodo param : task",task);
      if(addedit==0) {
        const newtaskList = [...taskList, task] // [1,2,3,4]
        console.log("addedit newtaskList",taskList);
        setTaskList(newtaskList);
      } else {
        const newTaskList = taskList.map(obj =>
            obj.id === task.id ? task : obj
        );
        console.log("update newtaskList",newTaskList);
        setTaskList(newTaskList);
      }
       // setTaskList(newtaskList);
    };
    const editTodo = (id) => {
        //alert(id);
        setShowform(true);
        const filteredResult = taskList.find((task) => task.id === id);
        setTaskobj(filteredResult);

    };


    const removeTodo = (idToRemove) => {
      //  alert("parent removeTodo "+idToRemove);
        const newtaskList = taskList.filter((item) => item.id !== idToRemove);
        setTaskList(newtaskList);
    };

    return (
        <>
            <TaskHeader showform={showform} setShowform={setShowform} setAddedit={setAddedit}  breadcrumtext={breadcrumtext}  setBreadcrumtext={setBreadcrumtext} />
            {showform ? <TaskForm addTodo={addTodo} setShowform={setShowform} loadData={taskobj} addedit={addedit} totalTask={taskList.length+1} breadcrumtext={breadcrumtext}  setBreadcrumtext={setBreadcrumtext} /> : <TaskList taskList={taskList} editTodo={editTodo} removeTodo={removeTodo} setAddedit={setAddedit}  setBreadcrumtext={setBreadcrumtext} />}
        </>
    )
}

export default TaskIndex