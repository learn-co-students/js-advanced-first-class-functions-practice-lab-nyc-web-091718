// Code your solution in this file!

function logDriverNames(drivers) {
  drivers.forEach(function (driver) {
    console.log(driver.name)
  })
}

// The following code should be achievable via filter, I think.
function logDriversByHometown(drivers, location) {
  drivers.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name)
    }
  })
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.revenue - driverTwo.revenue;
  });
}

// driversByName() — Receives an array of driver objects and returns a new array of driver objects sorted by their name attribute from A to Z. Here, you may have to use the String.prototype.localeCompare() method.

function driversByName(drivers) {
  return drivers.slice().sort(function (driverOne, driverTwo) {
    return driverOne.name.localeCompare(driverTwo.name)
  });
}


// totalRevenue() — Receives an array of driver objects and returns the sum of the revenue earned by each driver.

function totalRevenue(drivers) {
  return drivers.reduce(function (total, driver) {
    return driver.revenue + total
  }, 0)
}

// averageRevenue() — Receives an array of driver objects and returns the average revenue earned by each driver.

function averageRevenue(drivers) {
  return totalRevenue(drivers) / drivers.length
}
