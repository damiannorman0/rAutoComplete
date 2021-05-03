const API = async (url = '') => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (err) {
    console.error(err);
  }
};

export default API;