import React, {useState, useEffect} from 'react';
import AutoCompleteResults from "./AutoCompleteResults";
import AutoCompleteInput from "./AutoCompleteInput";
import API from "./API";
import styled from 'styled-components/macro';
import PropTypes from 'prop-types';

const StyledContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #282c34;
  width: 50%;
  border-radius: 5px;
  position: relative;
`;

const StyledLoading = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: absolute;
  z-index: 1000;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.25;
`;

const AutoComplete = (props) => {
  const {baseURL, debounceRate} = props;
  const [totalInputValue, setTotalInputValue] = useState('');
  const [filter, setFilter] = useState('');
  const [preview, setPreview] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = React.createRef();

  useEffect(() => {
    if(preview) {
      return;
    }

    const get = async () => {
      const url = `${baseURL}?filter=${filter}`;
      const reponse = await API(url, setLoading);
      setResults(reponse);
    };

    if(filter) {
      get();
    } else {
      setResults([]);
    }
  }, [baseURL, filter, preview]);

  useEffect(() => {
    if(results.length) {
      return;
    }
    if(inputRef.current) {
      inputRef.current.focus();
    }
  }, [inputRef, results]);



  const clear = () => {
    setFilter('');
    setSelected('');
    setPreview(false);
    setResults([]);
    inputRef.current.focus();
  };

  return (
    <StyledContainer>
      {loading && <StyledLoading>loading</StyledLoading>}
      <AutoCompleteInput
        ref={inputRef}
        setFilter={setFilter}
        filter={filter}
        selected={selected}
        setSelected={setSelected}
        totalInputValue={totalInputValue}
        setTotalInputValue={setTotalInputValue}
        clear={clear}
        setPreview={setPreview}
        debounceRate={debounceRate}
      />
      {(results.length && <AutoCompleteResults
        setSelected={setSelected}
        results={results}
        setResults={setResults}
        clear={clear}
        setPreview={setPreview}
      />) || <></>}
    </StyledContainer>
  );
};

AutoComplete.propTypes = {
  baseURL: PropTypes.string.isRequired,
  debounceRate: PropTypes.number.isRequired,
};

AutoComplete.defaultProps = {
  baseURL: '',
  debounceRate: 100,
};

export default AutoComplete;