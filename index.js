// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach(function(driver){
    console.log(driver.name);
  });
}
function logDriversByHometown(drivers,location){
  drivers.forEach(function(driver){
    if (driver.hometown === location){
      console.log(driver.name);
    }
  });
}
function driversByRevenue(drivers){
  const retArray = [...drivers];
  return retArray.sort(function(driverA,driverB){return driverA.revenue-driverB.revenue});
}
function driversByName(drivers){
  const retArray = [...drivers];
  return retArray.sort(function(driverA,driverB){return driverA.name.localeCompare(driverB.name)});
}
function totalRevenue(drivers){
  const retArray = [...drivers]
  return retArray.reduce(function(accumulator,currentDriver){return accumulator + currentDriver.revenue},0)
}
function averageRevenue(drivers){
  const sum = totalRevenue(drivers)
  return sum/drivers.length
}
