import React from 'react';
import styled from 'styled-components/macro';

const StyledContainer = styled.div`
  height: 200px;
  width: 50%;
  overflow: scroll;
  position: absolute;
  top: 50px;
`

const StyledUI = styled.ul`
  border-radius-topleft: 0px;
  border-radius-topright: 0px;
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
  outline: none;


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

const AutoCompleteResults = (props, ref) => {
  const {results, setResults, setSelected, clear, setPreview} = props;

  const onClick = (e) => {
    const { target : { innerText:value = '' } = {}} = e;
    setPreview(false);
    setResults([]);
    setSelected(value);
  };

  const onKeyDown = (e) => {
    const { keyCode } = e;
    const activeElement = document.activeElement;
    const value = activeElement.innerText;
    const prev = activeElement.previousSibling;
    const next = activeElement.nextSibling;

    switch (keyCode) {
      case 13:
        setResults([]);
        setSelected(value);
        break;
      case 27:
        clear();
        break;
      case 9:
        e.preventDefault();
        setPreview(true);
        if(e.shiftKey) {
          setSelected(prev.innerText);
          prev.focus();
        } else {
          setSelected(next.innerText);
          next.focus();
        }
        break;
      case 38:
        e.preventDefault();
        setPreview(true);
        setSelected(prev.innerText);
        prev.focus();
        break;
      case 40:
        e.preventDefault();
        setPreview(true);
        setSelected(next.innerText);
        next.focus();
        break;
      default:
    }
  };

  const items = results.map((item, index) => {
    return (
      <StyledLI tabIndex={0} key={`item-${index}`}>{item}</StyledLI>
    );
  });

  return (
    <StyledContainer onClick={onClick} onKeyDown={onKeyDown}>
      <StyledUI>
        {items}
      </StyledUI>
    </StyledContainer>
  );
};

export default AutoCompleteResults;