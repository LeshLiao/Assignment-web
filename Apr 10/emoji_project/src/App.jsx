import { useState } from 'react';
import './App.css';

function App() {
  const [keyword, setKeyword] = useState('');
  const [results, setResults] = useState([]);

  const db = [
    {
      icon: '😀',
      tags: ['happy','joy']
    },
    {
      icon: '😁',
      tags:['happy','smile']
    },
    {
      icon: '😕',
      tags:['sad','nothing to say']
    },
    {
      icon: '😱',
      tags:['surprise']
    },
    {
      icon: '😂',
      tags:['tears','happy']
    },
    {
      icon: '😪',
      tags:['sleepy']
    },
    {
      icon: '😤',
      tags:['angry']
    },
    {
      icon: '🤓',
      tags:['happy','glasses']
    },
    {
      icon: '😂',
      tags:['happy','laugh']
    },
    {
      icon: '🥹',
      tags:['cry']
    }

  ];

  const search = () => {
    console.log('search');
    if (keyword.trim() === '') {
      setResults([]);
      return;
    }
    setResults(db.filter(item => item.tags.includes(keyword)));
  };

  return (
    <>
      <h1>Search Emoji: Levi Liao</h1>
      <input type="text" value={keyword} onChange={e => setKeyword(e.target.value)} />
      <button onClick={search}>Search</button>
      <div>
        {results.length > 0 ? (
          results.map((item, index) => (
            <div key={index}>
              <span>{item.icon}</span>
              <span>{item.tags.join(', ')}</span>
            </div>
          ))
        ) : (
          <p>No results!</p>
        )}
      </div>
    </>
  );
}

export default App;
