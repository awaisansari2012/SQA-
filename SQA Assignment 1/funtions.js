const check = {
  add: (a, b) => {
    
    if (checkInt(a) || checkInt(b)) {
      return 'Only numbers are allowed!'
    }

    if (checkPositiveInt(a) || checkPositiveInt(b)) {
      return 'Numbers greater than zero are allowed only!'
    }

    return a + b;
  },
};

const checkInt = (a) => typeof a !== 'number' ? true : false;
const checkPositiveInt = (a) => a < 0 ? true : false;

module.exports = check;
