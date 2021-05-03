import React, {useState, useEffect, useRef} from 'react';
import AutoCompleteResults from "./AutoCompleteResults";
import AutoCompleteInput from "./AutoCompleteInput";
import API from "./API";
import styled from 'styled-components/macro';

const StyledContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: burlywood;
  min-height: 200px;
  width: 50%;
  border-radius: 5px;
`;

const StyledDefault= styled.div`
  padding: 10px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  width: 50%;
  border-radius: 5px;
  box-sizing: border-box;
`;

const AutoComplete = (props) => {
  const {baseURL} = props;
  const [filter, setFilter] = useState('');
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
  }, [filter]);

  return (
    <StyledContainer>
      <AutoCompleteInput setFilter={setFilter} />
      {(results.length && <AutoCompleteResults ref={resultDisplay}  results={results} />) || <StyledDefault>No results</StyledDefault> }
    </StyledContainer>
  );
};

export default AutoComplete;