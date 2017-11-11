// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const newDrivers = drivers.map(function(driver) {
    return driver.toLowerCase();
  });

  return newDrivers;
}

function nameToAttributes(drivers) {
  const driversObj = drivers.map(function(driver) {
    const name = driver.split(" ");
    Object.assign({}, driversObj, {firstName: name[0], lastName: name[1]});
    console.log(drivers);
  });
  console.log(driversObj);
}
