import {get, add} from "./SimpleCache";

const API = async (url = '', setLoading) => {
  const cachedResult = get(url);

  if(cachedResult) {
    return cachedResult;
  }

  setLoading(true);

  try {
    const response = await fetch(url);
    const json = await response.json();
    add(url, json);
    setLoading(false);
    return json;

  } catch (err) {
    console.error(err);
  }
};

export default API;