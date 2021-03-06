//Task to review and improve existing code.
//  Please review the code below:

function func(s, a, b) {
  if (s.match(/^$/)) {
    return -1;
  }

  let i = s.length - 1;
  let aIndex = -1;
  let bIndex = -1;

  while (aIndex === -1 && bIndex === -1 && i > 0) {
    if (s.substring(i, i + 1) === a) {
      aIndex = i;
    }
    if (s.substring(i, i + 1) === b) {
      bIndex = i;
    }
    i = i - 1;
  }

  if (aIndex !== -1) {
    if (bIndex === -1) {
      return aIndex;
    } else {
      return Math.max(aIndex, bIndex);
    }
  }

  if (bIndex !== -1) {
    return bIndex;
  } else {
    return -1;
  }
}
