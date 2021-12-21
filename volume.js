const arg = process.argv.slice(2);

const volume = (radius) => {
  const pi = 3.14;
  return pi * radius * radius;
};

console.log(volume(+arg[0]));
