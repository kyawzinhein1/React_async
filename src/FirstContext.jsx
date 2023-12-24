import { createContext, useState } from "react";

export const FirstContext = createContext(null);

const FirstContextProvider = (props) => {
const [userName, setUserName] = useState("myanmar");
const [job,setJob] = useState('Web Developer');

  return (
    <FirstContext.Provider value={{userName, job}}>
      {props.children}
    </FirstContext.Provider>
  );
};

export default FirstContextProvider;
