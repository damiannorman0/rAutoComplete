const API = async (url = '') => {
  try {
    debugger
    const response = await fetch(url);
    debugger
    const json = await response.json();
    debugger
    return json;
  } catch (err) {
    debugger
    console.error(err);
  }
};

export default API;