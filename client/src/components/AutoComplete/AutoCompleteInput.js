import React from 'react';
import styled from 'styled-components/macro';

const StyledInput = styled.input`
  border-radius: 5px;
  padding: 10px;
  width: 50%;
  box-sizing: border-box;
  border: none;
`;

const AutoCompleteInput = (props) => {
  const {setFilter} = props;
  const onChange = (e) => {
    const { target: { value }} = e;
    setFilter(value);
  };
  return (
    <StyledInput type="text" placeholder={"Input your filter"} onChange={onChange} />
  );
};

export default AutoCompleteInput;