import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [starIndex, setStarIndex] = useState(0)
  const [starList, setStarList] = useState([0,0,0,0,0])
  const [sum, setSum] = useState(0)
  const handleStar = (value) => {
    setStarIndex(value - 1);
    console.log('star='+value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    let newArr = [...starList];
    newArr[starIndex] = newArr[starIndex] + 1;
    setStarList(newArr);
  }

  useEffect(() => {
    const sum = starList.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    console.log('sum='+sum);
    setSum(sum);


  }, [starList]);

  return (
    <>
      <h1>Levi Liao</h1>
      {/* {starList} <br/> */}

      5 🌟<progress id="one" value={(sum !== 0 ? ((starList[4] / sum).toFixed(2)) : 0)*100} max="100"></progress>{parseFloat((sum !== 0 ? ((starList[4] / sum).toFixed(2)) : 0)).toFixed(2)} <br/>

      4 🌟<progress id="two" value={(sum !== 0 ? ((starList[3] / sum).toFixed(2)) : 0)*100} max="100"></progress>{parseFloat((sum !== 0 ? ((starList[3] / sum).toFixed(2)) : 0)).toFixed(2)} <br/>

      3 🌟<progress id="three" value={(sum !== 0 ? ((starList[2] / sum).toFixed(2)) : 0)*100} max="100"></progress>{parseFloat((sum !== 0 ? ((starList[2] / sum).toFixed(2)) : 0)).toFixed(2)} <br/>

      2 🌟<progress id="four" value={(sum !== 0 ? ((starList[1] / sum).toFixed(2)) : 0)*100} max="100"></progress>{parseFloat((sum !== 0 ? ((starList[1] / sum).toFixed(2)) : 0)).toFixed(2)} <br/>

      1 🌟<progress id="five" value={(sum !== 0 ? ((starList[0] / sum).toFixed(2)) : 0)*100} max="100"></progress>{parseFloat((sum !== 0 ? ((starList[0] / sum).toFixed(2)) : 0)).toFixed(2)} <br/>

      <form method="post" onSubmit={handleSubmit}>
      <hr />
      <p>
        Radio buttons:<br/>
        <label><input type="radio" name="myRadio" value="option1" onChange={() => handleStar(5)}/>  5</label><br/>
        <label><input type="radio" name="myRadio" value="option2" onChange={() => handleStar(4)}/>  4</label><br/>
        <label><input type="radio" name="myRadio" value="option3" onChange={() => handleStar(3)}/>  3</label><br/>
        <label><input type="radio" name="myRadio" value="option3" onChange={() => handleStar(2)}/>  2</label><br/>
        <label><input type="radio" name="myRadio" value="option3" onChange={() => handleStar(1)} defaultChecked={true}/>  1</label><br/>
      </p>
      <hr />
      <button type="submit">Submit form</button>
    </form>

    </>
  )
}

export default App
