import React, {useState, useEffect} from 'react'
import Container from '../../components/Container/index';

import {Text, TextCard, Header, HeaderTitle, Content, InputTask, Tasks, Card} from './styles';
import Button from '../../components/Button/index';

import firebaseDB from '../../firebase';

const Main = () => {

  const [tasks, setTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  
  //insere task
  const InsertTask = () =>{
    setTasks([
      ...tasks,
      {task: document.getElementById("task").value}
    ])
    const taskDB = {
      task: document.getElementById("task").value
    }
    firebaseDB.child('tasks').push(
      taskDB,  
      err => {
        if (err)
          console.log(err)
      }
    )
    document.getElementById('task').value = "";
  }
  //deleta task
  const DeleteTask = (task) =>{
    const deleteTask = task.task
    setTasks(tasks.filter(item => item.task !== deleteTask))

  }
  //deleta task concluida
  const DeleteTaskCompleted = (task) =>{
    const deleteTask = task.task
    setCompletedTasks(completedTasks.filter(item => item.task !== deleteTask));
  }

  const ChangeToCompleted = (task) =>{
    DeleteTask(task);
    setCompletedTasks([
      ...completedTasks,
      {task: task.task}
    ])
    const completedTaskDB = {
      task: task.task
    }
      
    firebaseDB.child('completedTasks').push(
      completedTaskDB, 
      err => {
        if (err)
          console.log(err)
      }
    )
  }

  useEffect(() =>{
    firebaseDB.child('tasks').on('value', (snapshot)=>{
      snapshot.exists() ?
        setTasks(Object.values(snapshot.val()))
      :
        setTasks([])
    })
    firebaseDB.child('completedTasks').on('value', (snapshot)=>{
      snapshot.exists() ?
        setCompletedTasks(Object.values(snapshot.val()))
      :
        setCompletedTasks([]);
    })
  },[])

  return (
    <Container>
      <Header>
        <div className="leftSide">
          <Text>
            User
            <i className="material-icons">person</i>
          </Text>
        </div>
        <div className="rightSide">
          <a href="/login">Sair
            <i className="material-icons">close</i>
          </a>
          
        </div>
      </Header>
      <HeaderTitle>
        Tarefas
      </HeaderTitle>
      <Content>
        <Text>
          Insira suas tarefas:
        </Text>
        <InputTask>
          <textarea onfocus="this.value=''" id="task" name="task" placeholder="comprar pão"></textarea>
          <Button onClick={()=>InsertTask()}>
            <a>Salvar</a>
          </Button>
        </InputTask>
        {tasks.length !== 0 && <Text>Tarefas a fazer:</Text>}
        <Tasks>
          {tasks.map((task)=>(
            <Card key={task.id}>
              <TextCard>
                {task.task} 
              </TextCard>
              <div>
                <i onClick={()=>DeleteTask(task)} className="material-icons">delete</i>
                <i onClick={()=>ChangeToCompleted(task)} className="material-icons">check</i>
              </div>
            </Card>
          ))}
        </Tasks>
        {completedTasks.length !== 0 && <Text>Tarefas Concluídas:</Text>}
        <Tasks>
          {completedTasks.map((taskCompleted)=>(
            <Card key={taskCompleted.id} style={{borderColor:"#f7ec32",background:"#f7ec32"}} >
              <TextCard>
                {taskCompleted.task} 
              </TextCard>
              <div>
                <i onClick={()=>DeleteTaskCompleted(taskCompleted)} className="material-icons">delete</i>
              </div>
            </Card>
          ))} 
        </Tasks>
      </Content>

    </Container>
  )
}

export default Main;
