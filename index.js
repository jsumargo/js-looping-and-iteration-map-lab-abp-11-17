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
    return Object.assign({}, {firstName: name[0], lastName: name[1]});
    console.log(drivers);
  });
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`;
  })
}
