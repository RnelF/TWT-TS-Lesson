function processFeedback(input: any): void {
  //assume we can perform any operation without explicit type checks
  console.log(`Processing: ${input}`);
  //further processing logic
}

//This can be a tring, number,file,etc
processFeedback("Great service!");
processFeedback(5);
processFeedback(new Blob());

function processingInfo(input: unknown): void {
  if (typeof input === "string") {
    console.log(`Processing Text: ${input}`);
  } else if (typeof input === "number") {
    console.log(`Processing Rating: ${input}`);
  } else if (input instanceof Blob) {
    console.log(`Processing file`);
  } else {
    console.log(`Unsupported type of Input`);
  }
}

processingInfo(25);
