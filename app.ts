function add(x: number, y: number) {
  return x + y;
}

const result = add(1, 2);

console.log(result);

function makeName(firstName: string, lastName: string, middleName?: string) {
  if (middleName) return firstName + " " + middleName + " " + lastName;

  return firstName + " " + lastName;
}

const fullName = makeName("Arnel", "Francia", "Yubal");

console.log(fullName);

///////////////////////////////

function callFunc(
  func: (f: string, l: string, m?: string) => string,
  param1: string,
  param2: string
) {
  func(param1, param2);
}

callFunc(makeName, "Arnel", "Francia");
