const verify = (str) => {
  if (str === '') {
    return 1;
  }
  const brackets = str.match(/[[\]()<>]/g);
  const stack = [];
  const pairOf = { ')': '(', ']': '[', '>': '<' };

  for (let i = 0; i < brackets.length; i += 1) {
    const currentBracket = brackets[i];
    const currentBracketIsOpening = ['[', '(', '<'].includes(currentBracket);
    const stackHead = stack[stack.length - 1];

    if (currentBracketIsOpening) {
      stack.push(currentBracket);
    } else if (pairOf[currentBracket] === stackHead) {
      stack.pop();
    }
  }
  if (stack.length === 0) {
    return 1;
  }
  return 0;
};

export default verify;
