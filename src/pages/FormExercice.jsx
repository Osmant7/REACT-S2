// import React, {useState} from 'react'

// const FormExercice = () => {

//     const [task, setTask] = useState('')
//     const [taskList, setTaskList] = useState([])
    

    
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         console.log(task);
//         setTaskList(task);
//         setTask('')
//         // const maxTask = 100
//         // const arr = []
//         // for(let i = 0; i < maxTask.length; i++){
//         //     arr.push(task) // 
//         //     setTaskList(arr)
//         // }
//     }

//   return (
//     <div>
//         <form onSubmit={handleSubmit}>
//             <input type="text" onChange={e => setTask(e.target.value)} value={task} />
//             <button type="submit" > Ajouter la tâche </button>
//         </form>

//         <ul>
//                 {
//                     taskList.map((todolist, i) => (
//                         <li key={i} style={{width: "200px", height: "100px",margin: "2rem"}}> 
//                             {todolist}
//                         </li>
//                     ))
//                 }
//         </ul>

//     </div>
//   )
// }

// export default FormExercice

import React, {useState} from 'react'

const FormExercice = () => {

    const [inputTask, setInputTask] = useState('')
    const [tasks, setTasks] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault()
        setTasks([...tasks, inputTask])
        setInputTask('')
        // console.log(tasks);
    }

    const handleClickDelete = (i) => {
        const oldState = [...tasks]
        oldState.splice(i, 1)
        setTasks(oldState)
    }

  return (
    <div>
        <h1>Form Exercice</h1>
        <form onSubmit={handleSubmit}>
            <input
            onChange={e => setInputTask(e.target.value)}
            value={inputTask}
            placeholder="Tache"
            type="text"
            />
            <button type="submit">Ajouter</button>

        </form>
        <ul>
            {
                tasks.map((task, i) => (
                    <li key={i}>{task} <button onClick={() => handleClickDelete(i)}>DELETE</button></li>
                ))
            }
        </ul>

    </div>
  )
}

export default FormExercice