import React, { useState } from 'react';
import './App.css';

import { CountContext } from "./CountContext"
import LocalCounter from "./LocalCounter"
import ContextCounter from "./ContextCounter"

const App: React.FC = () => {
  const [count, setCount] = useState(0)
  return (
    <CountContext.Provider value={{value: count, increment: () => setCount(count + 1)}}>
      <LocalCounter/>
      <ContextCounter/>
    </CountContext.Provider>
  );
}

export default App;
