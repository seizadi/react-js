import React, { useState, useEffect } from 'react';

const Input = ({ label, value, setValue}) => {
  const [term, setTerm] = useState(value);

  useEffect( () => {
    const timeoutId = setTimeout( () => {
      setValue(term);
    }, 1000);

    return (() => {
      clearTimeout(timeoutId);
    });

  }, [term]);


  return (
    <div className={'field'}>
      <label>{label}</label>
      <input
        className={'input'}
        type={'text'}
        value={term}
        onChange={e => setTerm(e.target.value)} />
    </div>
  );
}

export default Input;
