function guessTheType(str: string): string;
function guessTheType(num: number): string;
function guessTheType(bool: boolean): string;
function guessTheType(arrStr: string[]): string;
function guessTheType(strOrNumOrBool: unknown): unknown {
  if (typeof strOrNumOrBool === "string") {
    return console.log(`The input is ${typeof strOrNumOrBool} type!`);
  } else if (typeof strOrNumOrBool === "number") {
    return console.log(`The input is ${typeof strOrNumOrBool} type!`);
  } else if (typeof strOrNumOrBool === "boolean") {
    return console.log(`The input is ${typeof strOrNumOrBool} type!`);
  } else if (Array.isArray(strOrNumOrBool)) {
    return console.log(
      `The input is an Array of ${typeof strOrNumOrBool} type!`
    );
  }

  return console.log("Invalid Input!");
}

guessTheType(23);
