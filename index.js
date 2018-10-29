// Code your solution in this file!

function logDriverNames(drivers) {
  return drivers.forEach(function(driver) {
    console.log(driver.name)
  });
}


function logDriversByHometown(drivers, location) {
  return drivers.forEach(function(driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    }
  });
}

function driversByRevenue(drivers) {
  const newDrivers = drivers.slice(0).sort(function (a, b) {
    return a.revenue - b.revenue;
  });
  return newDrivers;
}

function driversByName(drivers) {
  const newDrivers = drivers.slice(0).sort(function (a, b) {
    return (a.name).localeCompare(b.name)
  });
  return newDrivers;
}

function totalRevenue(drivers) {
  return drivers.reduce(function(agg, driver){
    return agg + driver.revenue;
  }, 0)
}

function averageRevenue(drivers) {
  return totalRevenue(drivers)/drivers.length

}
