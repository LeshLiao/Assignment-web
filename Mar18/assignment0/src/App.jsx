// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import PropTypes from 'prop-types';
import { useState } from 'react';

// import Header from "./Header"

/*
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
*/
// function handleClick(msg) {
//   console.log(msg)
// }

function KiKiButton({ onSmash }) {
  return (
    <button onClick={() => onSmash()}>
      Button
    </button>
  );
}

function App() {
  const [counter, setCounter] = useState(0);

  function handleClick() {
    setCounter(counter + 1);
  }

  function kikiFunction() {
    alert('*****');
  }


  return (
    <>
      {/* <ToDoList people={people1}/>
      <ToDoList people={people2}/>
      <ToDoList people={people3}/>
      <ToDoList people={people4}/>
      <ToDoList people={people5}/> */}

      <button onClick={handleClick}>
        Click me to Add 1
      </button>
      <h1>{counter}</h1>

      <br/><br/><br/>

      <KiKiButton kiKiMessage="Kiki's Delivery Service!" onSmash={kikiFunction}>
        BTN1
      </KiKiButton>
    </>
  )
}
KiKiButton.propTypes = {
  onSmash: PropTypes.func.isRequired
};

export default App
