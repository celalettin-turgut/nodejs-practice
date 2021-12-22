const pi = 3.14;

const circleCircumference = (r) => {
  return 2 * pi * r;
};
const circleArea = (r) => {
  return pi * r * r;
};

module.exports = { circleArea, circleCircumference };
