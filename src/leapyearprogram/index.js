function leapYear(year = Number) {
  if(year < 1582) {
    throw new Error ('Error - leap year does not apply');
  } else if(year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
    return true;
  } else {
    return false;
  }
}

export default leapYear;