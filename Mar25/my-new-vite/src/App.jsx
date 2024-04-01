import { useState } from 'react'
import './App.css'
import PropTypes from 'prop-types'; // Import PropTypes module

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  // let [yourVariable, setYourVariable] = useState(0);
  // const [position, setPosition] = useState({
  //   x: 0,
  //   y: 0
  // });

    // const getAnimalsContent = () => {
  //   let content = [];
  //   for (let i=0;i< yourVariable;i++) {
  //     content.push('|');
  //   }
  //   return content;
  // };

  const [person, setPerson] = useState({
    firstName: 'Jeff',
    lastName: 'Bezos',
    email: 'jeff@amazon.com'
  });

  function handleFirstNameChange(e) {
    setPerson({
      ...person,
      firstName: e.target.value
      // lastName : person.lastName,
      // email : person.email
    });
  }

  function handleLastNameChange(e) {
    setPerson({
      ...person,
      // firstName : person.firstName,
      lastName: e.target.value,
      // email : person.email
    });
  }

  function handleEmailChange(e) {
    setPerson({
      ...person,
      // firstName : person.firstName,
      // lastName : person.lastName,
      email: e.target.value
    });
  }
  let status = 'empty' //empty
  if (status === 'success') {
    return <h1>Thats right!</h1>
  }

  return (
    <>

      {/* <h1>{getAnimalsContent()}</h1> */}
      {/* <h1>{yourVariable}</h1><br/>
      <button onClick={() => {
        if (yourVariable < 3 ) {
          setYourVariable( x => x + 1)
        }
        }}>Plus</button>
      <button onClick={() => {
        if (yourVariable > 0 ) {
          setYourVariable(yourVariable - 1)
        }
        }}>Minus</button> */}

       {/* <div
      onPointerMove={e => {
        setPosition({
          x: e.clientX,
          y: e.clientY
        });
      }}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
      }}>
      <div style={{
        position: 'absolute',
        backgroundColor: 'red',
        borderRadius: '50%',
        transform: `translate(${position.x}px, ${position.y}px)`,
        left: -10,
        top: -10,
        width: 20,
        height: 20,
      }} />
    </div> */}
    <div>
      <label>
        First name:
        <input value={person.firstName} onChange={handleFirstNameChange}/>
      </label><br/>
      <label>
        Last name:
        <input value={person.lastName} onChange={handleLastNameChange}/>
      </label><br/>
      <label>
        Email:<input value={person.email} size="40" onChange={handleEmailChange}/>
      </label><br/>
      <h2>
        {person.firstName}{' '}
        {person.lastName}{' '}
        ({person.email})
      </h2>
    </div>

    <h2>Almaty, Kazakhstan</h2>
    {
      Array.from({length:2}).map((item, index) => {
        return (
          <Panel
            key={index}
            title=""
            isActive={activeIndex === index}
            onShow={() => setActiveIndex(index)}>
            test
          </Panel>
        )
      })
    }

      {/* <Panel
        title=""
        isActive={activeIndex === 0}
        onShow={() => setActiveIndex(0)}
      >
        test
      </Panel>
      <Panel
        title=""
        isActive={activeIndex === 1}
        onShow={() => setActiveIndex(1)}
      >
        test2
      </Panel> */}
      <h2>City quiz</h2>
      <p>
        In which city is there a billboard that turns air into drinkable water?
      </p>
      <form>
        <textarea disabled={
          status === 'submitting'
        } />
        <br />
        <button disabled={
          status === 'empty' ||
          status === 'submitting'
        }>
          Submit
        </button>
        {status === 'error' &&
          <p className="Error">
            Good guess but a wrong answer. Try again!
          </p>
        }
      </form>
    </>
  )
}
function Panel({
  title,
  isActive,
  onShow
}) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? (
        // <p>{children}</p>
        <div className='block_gray' onClick={onShow}>block</div>
      ) : (
        <div className='block_white' onClick={onShow}>block</div>
      )}
    </section>
  );
}

// Define prop types for Panel component
Panel.propTypes = {
  title: PropTypes.string.isRequired, // title prop is required and should be a string
  isActive: PropTypes.bool.isRequired, // isActive prop is required and should be a boolean
  onShow: PropTypes.func.isRequired // onShow prop is required and should be a function
};

export default App
