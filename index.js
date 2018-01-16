module.exports = function(length, symbols) {
  length = length || 7;
  symbols =
    symbols || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  var string = '';

  Array.from({ length: length }).forEach(() => {
    string += symbols.charAt(Math.floor(Math.random() * symbols.length));
  });

  return string;
};
