const ftoc = function(tempF) {
  // C = (F - 32) * 5/9
  return Number(((tempF - 32) * (5/9)).toFixed(1));
};

const ctof = function(tempC) {
  // F = C * 9/5 + 32
  return Number((tempC * (9/5) + 32).toFixed(1));
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
