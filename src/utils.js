export function findAllOccurrences(list, query) {
  let lowerCaseQuery = query.toLowerCase();
  let filteredList = [];

  for (let i = 0; i < list.length; i++) {
    let lowerCaseName = list[i].name.toLowerCase();
    let indices = [];

    let queryIndexInStr = lowerCaseName.indexOf(lowerCaseQuery);
    
    while (queryIndexInStr > -1) {
      indices.push(queryIndexInStr);
      queryIndexInStr = lowerCaseName.indexOf(lowerCaseQuery, queryIndexInStr + lowerCaseQuery.length);
    }
    
    if (indices.length > 0) {
      filteredList.push({...list[i], highlight: indices, hightlightLen: query.length});
    }
  }
  return filteredList;
}

export function highlight(str, idices, highlightLen) {
  let result = [];
  let start = 0;
  for (let index of idices) {
    result.push(str.substring(start, index));
    result.push(<mark>{str.substring(index, index + highlightLen)}</mark>);
    start = index + highlightLen;
  }
  result.push(str.substring(start));
  return result;
}