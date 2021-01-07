import _ from "lodash";

function paginate(PageSize, PageCount, anyArray) {
  let startIndex = (PageCount - 1) * PageSize;
  return _(anyArray)
    .slice(startIndex)
    .take(PageSize)
    .value();
}

export default paginate;
// console.log()