import React from 'react';
import './App.css';
import Accordion from './Accordion';
import Search from './Search';

const items = [
  {
    title: 'Covid Detected',
    content: 'Covid was first detected back in 2019, that is why we have 19 in COVID-19.'
  },
  {
    title: 'Covid Pandemic Start',
    content: 'Covid pandemic started in Wuhan China and quickly spread world wide.'
  },
  {
    title: 'Covid Vaccine',
    content: 'There is a worldwide effort to find a vaccine.'
  }
]

// Remove Accordion...
//     <Accordion items={items}/>
function App() {
  return (
    <div className="App">
      <Search />
    </div>
  );
}

export default App;
