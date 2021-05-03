import React from 'react';
import styled from 'styled-components/macro';
import {debounce} from 'debounce';

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
    const debounced = debounce(setFilter, 200);
    debounced(value.toLowerCase());
  };
  return (
    <StyledInput tabIndex={0} type="text" placeholder={"Input your filter"} onChange={onChange} />
  );
};

export default AutoCompleteInput;