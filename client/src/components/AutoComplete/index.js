import React, {useState, useEffect} from 'react';
import AutoCompleteResults from "./AutoCompleteResults";
import AutoCompleteInput from "./AutoCompleteInput";
import API from "./API";
import styled from 'styled-components/macro';

const StyledContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: burlywood;
  min-height: 20px;
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
  opacity: 0.75;
`;

const AutoComplete = (props) => {
  const {baseURL} = props;
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState('');
  const [results, setResults] = useState([]);
  const resultDisplay = React.createRef();
  const input = React.createRef();


  useEffect(() => {
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
  }, [baseURL, filter]);

  const clear = () => {
    setFilter('');
    setSelected('');
    setResults([]);
    input.current.focus();
  };

  return (
    <StyledContainer>
      {loading && <StyledLoading>loading</StyledLoading>}
      <AutoCompleteInput ref={input} setFilter={setFilter} filter={filter} selected={selected} setSelected={setSelected} clear={clear}/>
      {(results.length && <AutoCompleteResults ref={resultDisplay}  setSelected={setSelected} results={results} setResults={setResults} clear={clear}/>) || <></> }
    </StyledContainer>
  );
};

export default AutoComplete;