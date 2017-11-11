// Code your solution in this file.
function lowerCaseDrivers(drivers){
  const newDrivers = drivers.map(function(driver) {
    return driver.toLowerCase();
  });

  return newDrivers;
}
