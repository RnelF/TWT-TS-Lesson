function getItemLength(name: string): number;
function getItemLength(names: string[]): number;
function getItemLength(nameOrNames: unknown): number {
  if (typeof nameOrNames === "string") {
    return console.log(nameOrNames.length);
  } else if (Array.isArray(nameOrNames)) {
    return console.log(nameOrNames.length);
  }

  return 0; //if the input is invalid return 0
}

getItemLength("Arnel");
