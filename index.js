// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.forEach(function (driver){
    console.log(driver.name)
  })
}

function logDriversByHometown(drivers, hometown) {
  drivers.forEach(function(driver){
    if (driver.hometown === hometown) console.log(driver.name)
  })
}

function driversByRevenue(drivers) {
  return drivers.slice().sort(function (d1, d2){
    return d1.revenue - d2.revenue
  })
}

function driversByName(drivers) {
  return drivers.slice().sort(function (d1, d2){
    if (d1.name.toUpperCase() < d2.name.toUpperCase()){
      return -1
    } else if (d1.name.toUpperCase() > d2.name.toUpperCase()){
      return 1
    } else {
      return 0
    }
  })
}

function totalRevenue(drivers) {
  debugger
  return drivers.reduce(function (acc, driver) {
    debugger
    return acc + driver.revenue
  }, 0)
}

function averageRevenue (drivers) {
  return totalRevenue(drivers) / drivers.length
}
