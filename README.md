# Revel Frontend Takehome

Write an `AutoComplete` component that can filter a static list of results or a list returned from an API.

Base component API should look like:
```
    <AutoComplete>
    	<AutoCompleteInput/>
    	<AutoCompleteResults/>
    </AutoComplete>
```


`AutoCompleteInput` and `AutoCompleteResults` should work when nested:
```
    <AutoComplete>
    	<SomeSection>
    		<AutoCompleteResults/>
    	</SomeSection>
    	<SomeOtherSection>
    		<AutoCompleteInput/>
    	</SomeOtherSection>
    </AutoComplete>
```


## Requirements

- A result should indicate focus and hover
- A result should be selectable with the mouse
- A result should be selectable with a keyboard
- The input and results can be cleared when pressing the ESC key
- When focusing on results using keyboard navigation, the input should reflect the focused value without triggering a request
- The input should be debounced and the debounce timeout should be configurable
- Prevent race conditions and update the UI only for the last query
- Show loading state when a request is in flight
- Add a simple cache


## Folders

- `client/` is a react app to which you can add your solution code.
- `server/` is a very simple express server that does autocomplete. 


## Setup Instructions

- Run `npm install` in the `server/` directory to install requirements
- Run `node index.js` to start the server


## API
The endpoint your component will call is 
```
/autocomplete?filter=:filter
```
