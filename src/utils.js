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