import { useState } from 'react'
import Card from './Card'
import style from './app.module.css';

function App() {
  const [msg, setMsg] = useState('')
  const [indexList, setIndexList] = useState([0,1,2,3,4,5,6,7,8,9,10,11])
  const [record, setRecord] = useState([])
  const [score, setScore] = useState(0)
  const [end, setEnd] = useState(false)

  function checkGame(index) {
    if (end) return;

    console.log('checkGame:'+ index);
    if (record.includes(index)) {
      console.log('contains:'+ index);
      setMsg("You got "+score+" point!")
      setEnd(true);
    } else {
      setScore(x => x + 1);
      setRecord(oldArray => [...oldArray, index]);
      setIndexList(shuffle(indexList));
    }
    // console.log("record="+record);
  }

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
    while (currentIndex != 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  return (
    <>
      <p className="read-the-docs">
        Score:{score} <br/>
      </p>
      <h1>{msg}</h1>
      <div className={style.container}>
        {Array.from(indexList).map((item) => (
          <Card key={item} onClick={() => checkGame(item)} value={item}/>
        ))}
      </div>
    </>
  )
}

export default App
