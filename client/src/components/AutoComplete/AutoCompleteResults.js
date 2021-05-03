import React from 'react';
import styled from 'styled-components/macro';

const StyledUI = styled.ul`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: white;
  min-height: 200px;
  width: 50%;
  padding: 0;
  box-sizing: border-box;
`;

const StyledLI = styled.li`
  color: black;
  background-color: beige;
  padding: 5px;
  margin-top: 2px;
  width: 100%;
  border-radius: 5px;
  list-style: none;
  box-sizing: border-box;
  text-align: left;
  
  &:hover {
    opacity: 0.75;
  
`;

const AutoCompleteResults = (props) => {
  const { results } = props;
  const items = results.map((item, index) => {
    return (
      <StyledLI key={`item-${index}`}>{item}</StyledLI>
    );
  });
  return (
    <StyledUI>
      {items}
    </StyledUI>
  );
};

export default AutoCompleteResults;