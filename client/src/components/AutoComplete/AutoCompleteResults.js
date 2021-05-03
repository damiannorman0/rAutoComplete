import React from 'react';
import styled from 'styled-components/macro';

const StyledContainer = styled.div`
  height: 200px;
  width: 50%;
  overflow: scroll;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  position: relative;
`

const StyledUI = styled.ul`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  width: 100%;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  position: absolute;
  top: 0;

`;

const StyledLI = styled.li`
  color: black;
  background-color: white;
  padding: 5px;
  margin-top: 2px;
  width: 100%;
  list-style: none;
  box-sizing: border-box;
  text-align: left;
  cursor: pointer;
  overflow: scroll;
  
  &:hover {
    background-color: lightgray;
  }
  
  &:active {
    background-color: aliceblue;
  }
  
  &:focus {
    background-color: lightgray;
  }
  
`;

const AutoCompleteResults = React.forwardRef((props, ref) => {
  const { results } = props;
  const items = results.map((item, index) => {
    if(index === 0) {
      return (
        <StyledLI ref={ref} tabIndex={0} key={`item-${index}`}>{item}</StyledLI>
      );
    }
    return (
      <StyledLI tabIndex={0} key={`item-${index}`}>{item}</StyledLI>
    );
  });

  return (
    <StyledContainer>
    <StyledUI>
      {items}
    </StyledUI>
    </StyledContainer>
  );
});

export default AutoCompleteResults;