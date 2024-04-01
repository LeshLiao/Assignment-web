// import React from 'react'
import PropTypes from 'prop-types';
import './todolist.css'

export default function ToDoList(props) {
  return (
    <>

      <div className='name'>{props.people.lastName && props.people.lastName + ", "}{props.people.firstName} {props.people.isStanding && <span role="img" aria-label="dog" style={{ fontSize: '300%' }}>🧍</span>}  </div>
      <img width='150px' style={{ borderRadius: '50%' }} src={props.people.imgUrl}></img>
      <ul>
        {/* <li>{props.people.todo[0]}</li>
        <li>{props.people.todo[1]}</li>
        <li>{props.people.todo[2]}</li> */}
        {
          props.people.todo.map((item,index) => (
          <li key={index}>{item}</li>
          ))}
      </ul>
    </>

  )
}

ToDoList.propTypes = {
  people: PropTypes.object.isRequired
};