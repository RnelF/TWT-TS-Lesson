let x: any = 1;

let y: unknown = 1;

if (typeof y == "number") {
  const result = y + 1;
} else if (typeof y == "string") {
  const result = y.length;
}
