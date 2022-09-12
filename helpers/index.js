
const hashCode = (string) => {
  var hash = 0, i, chr;
  if (string.length === 0) return hash;
  for (i = 0; i < string.length; i++) {
    chr = string.charCodeAt(i);
    hash = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

const getDate = () => {
  let today = '';
  const date = new Date();
  today += date.getUTCFullYear();
  today += date.getUTCMonth();
  today += date.getUTCDate();
  // today += date.getUTCHours();
  return today;
}

exports.hashDate = () => {
  return hashCode(getDate()).toString();
}

exports.createRandomId = () => {
  const date = new Date().toString();
  return hashCode(date + Math.random()).toString();
}