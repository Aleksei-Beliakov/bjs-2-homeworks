function compareArrays(arr1, arr2) {
  let allElementsOfTheArraysAreEqual = arr1.length === arr2.length && arr1.every((item, index) => item === arr2[index]);
  return allElementsOfTheArraysAreEqual;
}

function getUsersNamesInAgeRange(users, gender) {
  let result = users.filter(user => user.gender === gender).map(user => user.age).reduce((acc, item, index, users) => {
    acc+=item;
    if (index === users.length - 1) {
      return acc / users.length;
    }
    return acc;
  }, 0);
  return result;
}
