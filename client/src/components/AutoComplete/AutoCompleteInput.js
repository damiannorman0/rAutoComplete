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
  const {
    setFilter,
    selected,
    setSelected,
    clear,
    setPreview,
    totalInputValue,
    setTotalInputValue,
    debounceRate = 100,
  } = props;

  let inputValue = '';

  if (selected) {
    const s = totalInputValue.split(' ');
    s.splice(s.length - 1, 1, selected);
    inputValue = s.join(' ');
  } else {
    inputValue = totalInputValue;
  }






  const update = (filter, total) => {
    setSelected('');
    setFilter(filter);
    setTotalInputValue(total);
  };

  const onChange = (e) => {
    setPreview(false);
    const { target: { value: total = '' } = {}} = e;
    const filter = total.split(/\s/gi).pop();
    const debounced = debounce(update, debounceRate);
    debounced(filter, total);
  };

  const onKeyDown = (e) => {
    const { keyCode } = e;
    if(keyCode === 27) {
      clear();
    }
  };

  return (
    <StyledInput
      ref={ref}
      tabIndex={0}
      type="text"
      placeholder={"Input your filter"}
      onChange={onChange}
      onKeyDown={onKeyDown}
      value={inputValue}
    />
  );
});

export default AutoCompleteInput;