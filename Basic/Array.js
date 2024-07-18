// A function to detect type of elements and count them
function typeDitector(arr) {
  let nBoolean = 0;
  let nString = 0;
  let nNumber = 0;

  for (let index = 0; index < arr.length; index++) {
    if (typeof arr[index] === "number") {
      nNumber++;
    } else if (typeof arr[index] === "string") {
      nString++;
    } else if (typeof arr[index] === "boolean") {
      nBoolean++;
    } else continue;
  }

  console.log(nBoolean, nNumber, nString);
}

typeDitector(["Hossein", 10, 20, true, false]);
//////////////////////////////////////////////////////////////////////////////
