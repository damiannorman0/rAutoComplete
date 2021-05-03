import React from 'react';
import logo from './logo.svg';
import './App.css';
import AutoComplete from "./components/AutoComplete";

import styled from 'styled-components/macro';

const StyledApp = styled.div`
  overflow: hidden;
`;

const StyledMain = styled.main`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color:beige;
  width: 100%;
  overflow: hidden;
`;

function App() {
  return (
    <StyledApp className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Revel AutoComplete
        </p>
      </header>
      <StyledMain>
        <AutoComplete baseURL={"http://localhost:3000/autocomplete"} />
      </StyledMain>
    </StyledApp>
  );
}

export default App;
