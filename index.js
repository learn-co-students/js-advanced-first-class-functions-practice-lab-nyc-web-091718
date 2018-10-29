// Code your solution in this file!
function logDriverNames(drivers){
  drivers.forEach(function (driver) {
    console.log(driver.name);
  });
}

function logDriversByHometown(drivers, ht){
  const htDrivers = drivers.filter(function(driver){
    return driver.hometown === ht;
  });
  logDriverNames(htDrivers);
}

function driversByRevenue(d){
  let drivers = [...d];
  const brDrivers = drivers.sort(function(a, b){
    return a.revenue - b.revenue;
  });
  return brDrivers;
}

function driversByName(d){
  let drivers = [...d];
  const bnDrivers = drivers.sort(function(a, b){
    return a.name.localeCompare(b.name);
  });
  return bnDrivers;
}

function totalRevenue(d){
  let drivers = [...d];
  return drivers.reduce(function(agg, el, i, arr){
    return agg + el.revenue;
  }, 0);
}

function averageRevenue(d){
  let drivers = [...d];
  return totalRevenue(drivers) / drivers.length;
}
