import React from 'react';
import './App.css';

import AutoComplete from "./components/AutoComplete";

import styled from 'styled-components/macro';

const StyledMain = styled.main`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: rgb(0, 185, 242);
  width: 100%;
  min-height: 400px;
  box-sizing: border-box;
`;

const StyledH2 = styled.h2`
  color: rgb(0, 185, 242);
  font-family: canada-type-gibson, sans-serif;
  font-size: 76px;
;
`

function App() {
  return (
      <div className="App">
        <header className="App-header">
          <img src={'https://assets-global.website-files.com/5fd3a1d987e4e6af6f974eb7/5ff4e2dacaf38f9b39617f6a_Blue.svg'} className="App-logo" alt="logo"/>
          <StyledH2>
            Revel AutoComplete
          </StyledH2>
        </header>
        <StyledMain>
          <AutoComplete
            baseURL={"http://localhost:3000/autocomplete"}
            debounceRate={100}
          />
        </StyledMain>
      </div>
  );
}

export default App;
