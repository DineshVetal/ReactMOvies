export function dataArray(inputdata) {
  let dataArray = [];
  inputdata.map(item => {
    //if fieldtype not provided then it is taken as input field.
    if (item.fieldType === "" || !item.fieldType) item.fieldType = "Input";
    dataArray.push(item);
  });

  return dataArray;
}
export function errorArray(inputdata) {
  let errorArray = [];
  inputdata.map(item => {
    // dataArray.push(item);
    let errorObject = { ...item };
    Object.keys(errorObject).map(ele =>
      ele !== "label" ? (errorObject[ele] = "") : errorObject[ele]
    );
    errorArray.push(errorObject);
  });

  return errorArray;
}

//just replacedd all values to "" except schema and label
export function schemaArray(inputdata) {
  let schemaArray = [];
  inputdata.map(item => {
    let errorObject = { ...item };
    Object.keys(errorObject).map(ele =>
      ele == "schema"
        ? (errorObject["value"] = errorObject[ele])
        : ele == "value"
        ? (errorObject[ele] = "")
        : ""
    );
    schemaArray.push(errorObject);
  });

  return schemaArray;
}
