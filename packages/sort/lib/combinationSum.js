var combinationSum = function(candidates, target) {
  let list = [];
  debugger;
  func(candidates, target, list, []);
  return list;
};

function func(candidates, target, list, track) {
  // if (0 === target) {
  //   list.push(track);
  //   return;
  // } else if (0 > target) {
  //   return;
  // }
  const min = 0 === track.length ? candidates[0] : track[track.length - 1];
  for (let i = 0; i < candidates.length; i++) {
    if (candidates[i] < min) {
      continue;
    }
    const next = target - candidates[i];
    if (0 > next) {
      break;
    }
    if (0 === next) {
      list.push([...track, candidates[i]]);
      return;
    }
    func(candidates, next, list, [...track, candidates[i]]);
  }
}

combinationSum([2, 3, 6, 7], 7);
