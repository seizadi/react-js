import React, { useState } from 'react';
import './App.css';
import Accordion from './components/Accordion';
import Search from './Search';
import Dropdown from "./components/Dropdown";
import Translate from "./components/Translate";
import Route from "./components/Route";
import Header from "./components/Header";

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

const dropOptions = [
  {
    label: 'The color red',
    value: 'red'
  },
  {
    label: 'Green color here',
    value: 'green'
  },
  {
    label: 'A shade of Blue',
    value: 'blue'
  }
]

function App() {
  const [selectedColor, setSelectedColor] = useState(dropOptions[0]);

  return (
    <div className="App">
      <Header />
      <Route path={'/'}>
        <Accordion items={items}/>
      </Route>
      <Route path={'/list'}>
        <Search />;
      </Route>
      <Route path={'/dropdown'}>
        <Dropdown
          label={'Select a color'}
          options={dropOptions}
          selected={selectedColor}
          onSelectedChange={setSelectedColor} />
      </Route>
      <Route path={'/translate'}>
        <Translate />
      </Route>
    </div>
  );
}

export default App;
