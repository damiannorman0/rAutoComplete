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

const AutoComplete = (props) => {
  const {baseURL} = props;
  const [filter, setFilter] = useState('');
  const [selected, setSelected] = useState('');
  const [results, setResults] = useState([]);
  const resultDisplay = React.createRef();

  useEffect(() => {
    const get = async () => {
      const url = `${baseURL}?filter=${filter}`;
      const reponse = await API(url);
      setResults(reponse);
    };

    if(filter) {
      get();
    } else {
      setResults([]);
    }
  }, [baseURL, filter]);

  return (
    <StyledContainer>
      <AutoCompleteInput setFilter={setFilter} filter={filter} selected={selected} setSelected={setSelected} />
      {(results.length && <AutoCompleteResults ref={resultDisplay}  setSelected={setSelected} results={results} setResults={setResults} />) || <></> }
    </StyledContainer>
  );
};

export default AutoComplete;