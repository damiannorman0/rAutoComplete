import {get, add} from "./SimpleCache";

const API = async (url = '') => {
  const cachedResult = get(url);

  if(cachedResult) {
    return cachedResult;
  }

  try {
    const response = await fetch(url);
    const json = await response.json();
    add(url, json);
    return json;

  } catch (err) {
    console.error(err);
  }
};

export default API;