// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const newDrivers = drivers.map(function(driver) {
    return driver.toLowerCase();
  });

  return newDrivers;
}

function nameToAttributes(drivers) {
  return console.log(drivers.map(function(driver) {
    return Object.assign({}, driver, {firstName: '', lastName: ''});
  }););
}
