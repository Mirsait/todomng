let key = 0;

export const getNewKey = (name) => {
  let newkey = name + '-' + key;
  key++;
  return newkey;
}
