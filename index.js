// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  const newDrivers = drivers.map(function(driver) {
    return driver.toLowerCase();
  });

  return newDrivers;
}

function nameToAttributes(drivers) {
  drivers.map(function(driver) {
    const name = driver.split(" ");
    Object.assign({}, drivers, {firstName: name[0], lastName: name[1]});
    console.log(drivers);
  });
}
