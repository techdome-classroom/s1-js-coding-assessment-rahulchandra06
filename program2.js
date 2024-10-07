const decodeTheRing = function (s, p) {

  const memo = {};

  function isMatch(i, j) {
   
    if (`${i},${j}` in memo) {
      return memo[`${i},${j}`];
    }


    if (i === s.length && j === p.length) return true;

    if (j === p.length) return false;


    const currentMatch = i < s.length && (s[i] === p[j] || p[j] === '?');

    if (p[j] === '*') {

      memo[`${i},${j}`] = (isMatch(i, j + 1) || (i < s.length && isMatch(i + 1, j)));
      return memo[`${i},${j}`];
    }

  
    if (currentMatch) {
      memo[`${i},${j}`] = isMatch(i + 1, j + 1);
      return memo[`${i},${j}`];
    }

    memo[`${i},${j}`] = false;
    return false;
  }

  return isMatch(0, 0);
};

module.exports = decodeTheRing;
