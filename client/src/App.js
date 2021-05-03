import React from 'react';
import logo from './logo.svg';
import './App.css';

import AutoComplete from "./components/AutoComplete";

import styled from 'styled-components/macro';

const StyledMain = styled.main`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: beige;
  width: 100%;
  min-height: 400px;
`;

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <p>
            Revel AutoComplete
          </p>
        </header>
        <StyledMain>
          <AutoComplete baseURL={"http://localhost:3000/autocomplete"}/>
        </StyledMain>
      </div>
  );
}

export default App;
