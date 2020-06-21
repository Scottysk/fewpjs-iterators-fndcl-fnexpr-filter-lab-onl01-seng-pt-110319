function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toUpperCase() === name.toUpperCase());
}

function fuzzyMatch(drivers,)