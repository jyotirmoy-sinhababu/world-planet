import { createContext } from 'react';
import { useState, useEffect } from 'react';

import axios from 'axios';

export const apiContext = createContext();

const MyContext = ({ children }) => {
  const [apiData, setApiData] = useState();
  const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    axios
      .get(`https://perenual.com/api/species-list?key=${apiKey}`)
      .then((res) => {
        setApiData(res.data.data);
      });
  }, []);
  console.log(apiData);

  return (
    <apiContext.Provider value={{ apiData }}>{children}</apiContext.Provider>
  );
};

export default MyContext;
