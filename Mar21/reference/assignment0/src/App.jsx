// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// import Header from "./Header"
import ToDoList from "./ToDoList";


const people1 = {
  firstName: 'Gregorio Y.Zara',
  lastName:'Mouse',
  imgUrl: 'https://api.unrealperson.com/image?name=image.93050.3654189.jpg&type=tpdne',
  todo : ['todo1','todo2','todo3'],
  isStanding: false,
};

const people2 = {
  firstName: 'Elon Musk',
  lastName:'Mouse',
  imgUrl: 'https://i.insider.com/65f255c56080194819ffa256?width=2000&format=jpeg&auto=webp',
  todo : ['todo4','todo5','todo6'],
  isStanding: false,
};

const people3 = {
  firstName: 'Mickey',
  lastName:'Mouse',
  todo : ['Transportation','Traffic','Housing','darkness'],
  isStanding: true,
};

const people4 = {
  firstName: 'Minnie',
  lastName:'Mouse',
  todo : ['Interior','Colors','Apparel'],
  isStanding: false,
};

const people5 = {
  firstName: 'Goofy',
  todo : ['Shields','Trips'],
  isStanding: true,
};

function App() {

  return (
    <>
      <ToDoList people={people1}/>
      <ToDoList people={people2}/>

      <ToDoList people={people3}/>
      <ToDoList people={people4}/>
      <ToDoList people={people5}/>


      {/* <img src='https://i.imgur.com/MK3eW3As.jpg'></img>
      <ul>
        <li>Neil Armstrong</li>
        <li>Alan Bean</li>
        <li>Peter Conrad</li>
        <li>Edgar Mitchell</li>
        <li>Alan Shepard</li>
      </ul>
      <img width='150px' src='https://randomwordgenerator.com/img/picture-generator/57e1d14a4f52a514f1dc8460962e33791c3ad6e04e507441722a72dd9e44c0_640.jpg'></img>
      <ul>
        <li>Neil Armstrong</li>
        <li>Alan Bean</li>
        <li>Peter Conrad</li>

      </ul> */}


    </>
  )
}

export default App
