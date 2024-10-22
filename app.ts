type Coordinate = [number, number];

function compareCoords(p1: Coordinate, p2: Coordinate): Coordinate {
  return [p1[0], p2[1]];
}

console.log(compareCoords([2, 3], [4, 5]));
