// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const newDrivers = drivers.map(function(driver) {
    return driver.toLowerCase();
  });

  return newDrivers;
}

function nameToAttributes(drivers) {
  return drivers.map(function(driver) {
    const name = driver.split(" ");
    console.log(name);
    return Object.assign({}, driver, {firstName: name[0], lastName: name[1]});
  });
}
