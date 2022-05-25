var combinationSum2 = function(candidates, target) {
  const list = [];
  candidates.sort((a, b) => a - b);
  combination(candidates, target, list, [], 0);
  return list;
};

function combination(candidates, target, list, track, left) {
  for (let i = left; i < candidates.length; ) {
    const next = target - candidates[i];
    if (0 > next) {
      break;
    }
    if (0 === next) {
      list.push([...track, candidates[i]]);
      break;
    }
    track.push(candidates[i]);
    combination(candidates, next, list, track, i + 1);
    track.pop();
    i++;
    while (i < candidates.length && candidates[i] === candidates[i - 1]) {
      i++;
    }
  }
}

combinationSum2([10, 1, 2, 7, 6, 1, 5, 1, 1, 1, 1, 1], 8);
