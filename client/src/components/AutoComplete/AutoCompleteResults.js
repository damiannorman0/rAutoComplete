import React from 'react';
import styled from 'styled-components/macro';

const KEY_ESCAPE = 27;
const KEY_ENTER = 13;
const KEY_TAB = 9;
const KEY_ARROW_UP = 38;
const KEY_ARROW_DOWN = 40;

const StyledContainer = styled.div`
  width: 50%;
  overflow: scroll;
  position: absolute;
  top: 55px;
  box-sizing: border-box;
  box-shadow: 0px 11px 22px 5px rgba(0,0,0,0.2);
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
  top: 0;
`;

const StyledLI = styled.li`
  color: black;
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
    background-color: rgba(0,0,0,0.05);
  }

  &:active {
    background-color: rgba(0,0,0,0.05);
  }

  &:focus {
    background-color: lightgray;
  }
`;

const AutoCompleteResults = (props) => {
  const {results, setResults, setSelected, clear, setPreview} = props;

  const onClick = (e) => {
    const { target : { innerText:value = '' } = {}} = e;
    setPreview(false);
    setResults([]);
    setSelected(value);
  };

  const selectAndFocus = (element) => {
    if(element) {
      setSelected(element.innerText);
      element.focus();
    }
  };

  const onKeyDown = (e) => {
    const { keyCode } = e;
    const activeElement = document.activeElement || {};
    const value = activeElement.innerText;
    const prev = activeElement.previousSibling;
    const next = activeElement.nextSibling;

    e.preventDefault();

    switch (keyCode) {
      case KEY_ENTER:
        setResults([]);
        setSelected(value);
        break;
      case KEY_ESCAPE:
        clear();
        break;
      case KEY_TAB:
        setPreview(true);
        if(e.shiftKey) {
          selectAndFocus(prev);
        } else {
          selectAndFocus(next);
        }
        break;
      case KEY_ARROW_UP:
        setPreview(true);
        selectAndFocus(prev);
        break;
      case KEY_ARROW_DOWN:
        setPreview(true);
        selectAndFocus(next);
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