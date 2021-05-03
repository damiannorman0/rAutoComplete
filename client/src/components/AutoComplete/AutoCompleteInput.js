import React from 'react';
import styled from 'styled-components/macro';
import {debounce} from 'debounce';

const StyledInput = styled.input`
  border-radius: 5px;
  padding: 10px;
  width: 50%;
  box-sizing: border-box;
  border: none;
  font-size: medium;
`;

const AutoCompleteInput = React.forwardRef((props, ref) => {
  const {setFilter, selected, setSelected, filter, clear} = props;

  const update = (value) => {
    setSelected('');
    setFilter(value);
  };

  const onChange = (e) => {
    const { target: { value = '' } = {}} = e;
    const debounced = debounce(update, 100);
    debounced(value);
  };

  const onKeyDown = (e) => {
    const { keyCode } = e;
    if(keyCode === 27) {
      clear();
    }
  };

  return (
    <StyledInput ref={ref} tabIndex={0} type="text" placeholder={"Input your filter"} onChange={onChange} onKeyDown={onKeyDown} value={selected || filter} />
  );
});

export default AutoCompleteInput;