const ref = {};

const add = (key, value) => {
  ref[key] = value;
};

const get = (key) => {
  return ref[key];
};

export {
  add,
  get,
};