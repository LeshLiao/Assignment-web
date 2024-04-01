// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Thumbnail from './Thumbnail'

function App() {
  let sizeList = [
    '100',
    '200',
    '300'
  ];

  // let test = 'testname'
  return (
    <>
      {sizeList.map((t) => (
        <Thumbnail key={t} size={t} />
      ))}

    </>
  )
}

export default App
