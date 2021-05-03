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
  const {setFilter, selected, setSelected, filter} = props;

  const update = (value) => {
    setSelected('');
    setFilter(value);
  };

  const onChange = (e) => {
    const { target: { value }} = e;
    const debounced = debounce(update, 100);
    debounced(value);
  };
  return (
    <StyledInput tabIndex={0} type="text" placeholder={"Input your filter"} onChange={onChange} value={selected || filter} />
  );
};

export default AutoCompleteInput;