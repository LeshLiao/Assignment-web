// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import PropTypes from 'prop-types';
import Profile from "./Profile"
// import Header from './Header';
// import Header from './Header'
// import Header from "./Header"

// function Profile() {
//   return (
//     <img
//       src="https://i.imgur.com/MK3eW3As.jpg"
//       alt="Katherine Johnson"
//     />
//   );
// }
export default function TodoList() {
  return (
    <>
      <h1>Hedy Lamarr's Todos</h1>
      <img
        src="https://i.imgur.com/yXOvdOSs.jpg"
        alt="Hedy Lamarr"
        className="photo"
      />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve spectrum technology</li>
      </ul>
    </>
  );
}

const Person = (props) => {
  return (
    <h1>{props.x}</h1>
  )
}

function App() {
  let name = {
    firstName: 'Thomas1',
    lastName: 'Ngo'
  }

  return (
    <>
      {/* <Header></Header> */}
      <Person x={name.firstName}/>
      {/* <h1>{name.firstName}</h1> */}
      {/* <h1>{name.lastName}</h1> */}
      <Profile />
      <Profile />
      <Profile />
    </>
  )
}
Person.propTypes = {
  x: PropTypes.string.isRequired // Validates that 'name' prop is a string and is required
};

export default App
