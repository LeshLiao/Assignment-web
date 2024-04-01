// import React from 'react'
import style from './card.module.css';
import PropTypes from 'prop-types'; // Import PropTypes module


function Card({ value, onClick }) {
  return (
    <div className={style.card} onClick={() => onClick(value)}>
      {/* {value} */}
      <img className={style.img} src={`images/${value}.png`}/>
    </div>
  );
}

export default Card;
// Define prop types for Panel component
Card.propTypes = {
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};
