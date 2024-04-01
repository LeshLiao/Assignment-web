// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import PropTypes from 'prop-types';
// import Profile from "./Profile"
import { useState } from 'react';
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

const Person = (props) => {
  return (
    <h1>{props.x}</h1>
  )
}

function App() {
  let [yourVariable, setYourVariable] = useState(0);

  return (
    <>
      {/* <Header></Header> */}
      {/* <Person x={name.firstName}/> */}
      {/* <h1>{name.firstName}</h1> */}
      {/* <h1>{name.lastName}</h1> */}
      {/* <Profile />
      <Profile />
      <Profile /> */}
      <br/>
      <h1>{yourVariable}</h1><br/>
      <button onClick={() => {
        if (yourVariable < 3 ) {
          setYourVariable(yourVariable + 1)
        }
        }}>Plus</button>
      <button onClick={() => {
        if (yourVariable > -3 ) {
          setYourVariable(yourVariable - 1)
        }
        }}>Minus</button>
    </>
  )
}
Person.propTypes = {
  x: PropTypes.string.isRequired
};

export default App
