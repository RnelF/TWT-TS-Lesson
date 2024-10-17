function mul(x: number, y: number): number {
  return x * y;
}

function div(x: number, y: number): number {
  return x / y;
}

function applyFunc(
  funcs: ((x: number, y: number) => number)[],
  value: [number, number][]
): number[] {
  const results: number[] = [];
  for (let i = 0; (i = funcs.length); i++) {
    const args = value[i];
    const result = funcs[i](args[0], args[1]);
    results.push(result);
  }
  return results;
}

applyFunc(
  [mul, div],
  [
    [1, 2],
    [4, 5],
  ]
);
