import React, { useState } from 'react';
import Dropdown from "./Dropdown";
import Convert from "./Convert";
import Input from "./Input";

const languageOptions = [
  {
    label: 'Afrikaans',
    value: 'af'
  },
  {
    label: 'Arabic',
    value: 'ar'
  },
  {
    label: 'Hindi',
    value: 'hi'
  }
]

const Translate = (props) => {
  const [language, setLanguage] = useState(languageOptions[0]);
  const [text, setText] = useState('');

  return (
    <div>
      <div className={'ui form'}>
        <Input label={'Enter text to translate:'} value={text} setValue={setText} />
      </div>
      <Dropdown
        label={'Select a language'}
        selected={language}
        onSelectedChange={setLanguage}
        options={languageOptions}
      />
      <hr />
      <h3 className={'ui header'}>Output:</h3>
      <Convert language={language} text={text} />
    </div>
  );
}

export default Translate;
