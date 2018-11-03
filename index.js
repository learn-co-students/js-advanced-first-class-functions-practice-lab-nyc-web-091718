// Code your solution in this file!
function logDriverNames(array) {
  array.forEach((driver) => console.log(driver.name))
}

function logDriversByHometown(array, hometown) {
  const filteredDrivers = array.filter((driver) => driver.hometown === hometown)
  filteredDrivers.forEach((driver) => console.log(driver.name))
}

function driversByRevenue(array) {
  const copyOfDrivers = array.slice()
  return copyOfDrivers.sort((driver1, driver2) => driver1.revenue - driver2.revenue);
}

function driversByName(array) {
  const copyOfDrivers = array.slice()
  return copyOfDrivers.sort((driver1, driver2) => driver1.name.localeCompare(driver2.name));
}

function totalRevenue(array) {
  const revArray = array.map(driver => driver.revenue)
  return revArray.reduce((acc, element, i, array) => {
    return acc + element;
  },0);
}

function averageRevenue(array) {
  const totalRev = totalRevenue(array);
  return parseFloat(totalRev) / array.length;
}
