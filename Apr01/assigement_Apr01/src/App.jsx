import MyTable from './MyTable.jsx';
import { useContext } from 'react';
import { DataContext } from './DataContext.jsx';

function App() {
  const data = useContext(DataContext);
  return (
    <>
      <DataContext.Provider value={data}>
        <MyTable/>
      </DataContext.Provider>
    </>
  )
}

export default App
