const findTheOldest = function (arrayOfPeopleObjects) {
  return arrayOfPeopleObjects.reduce(
    (oldest, person) => {
      const thisYear = new Date().getFullYear();
      if (oldest.yearOfDeath === undefined) {
        oldest.yearOfDeath = thisYear;
      }
      if (person.yearOfDeath === undefined) {
        person.yearOfDeath = thisYear;
      }
      return oldest.yearOfDeath - oldest.yearOfBirth > person.yearOfDeath - person.yearOfBirth ? oldest : person;
    }
  );
};

// Do not edit below this line
module.exports = findTheOldest;
