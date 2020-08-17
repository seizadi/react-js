import React, {useState, useEffect} from "react";
import GoogleTranslate from "../services/GoogleTranslate";

const Convert = ({language, text}) => {
  const [translated, setTranslated] = useState('');

  useEffect( () => {
    const doTranslation = async () => {
      const response = await GoogleTranslate(language.value, text);
      setTranslated(response.data.data.translations[0].translatedText);
    };

    doTranslation();

  }, [language, text]);

  return (
    <div>
      <h1 className={'ui header'}>{translated}</h1>
    </div>
  );
};

export default Convert;

