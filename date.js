//jshint esversion:6
exports.getDate = function () {
  const language = 'en-us';
  const options = {
    weekday: 'long',
    day: 'numeric',
    year: 'numeric',
    month: 'long',
  };
  let today = new Date().toLocaleString(language, options);
  return today;
};
