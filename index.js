function logDriverNames(drivers) {
  drivers.forEach(function (driver) {
  console.log(driver.name);
  });
};

function logDriversByHometown(drivers, location) {
  drivers.forEach(function (driver) {
    if (driver.hometown === location) {
      console.log(driver.name)
    }
  });
};

function driversByRevenue(drivers) {
const numberSorter = function (driver1, driver2){
    return driver1.revenue - driver2.revenue
  };
  driversCopy = [...drivers];
  return driversCopy.sort(numberSorter);
};

function driversByName(drivers) {
  const comparator = function (driver1, driver2) {
    return driver1.name.localeCompare(driver2.name)
  };
  driversCopy = [...drivers];
  return driversCopy.sort(comparator);
};

function totalRevenue(drivers) {
    let totalPrice = 0;
    drivers.forEach(function (driver){
      totalPrice += driver.revenue;
    });
     return totalPrice;
  };

function averageRevenue(drivers) {
    // console.log(drivers.length);
  return totalRevenue(drivers) / drivers.length

};

// const comparator = function (a, b) {
//   return a.localeCompare(b);
// };


// var a = 'réservé'; // with accents, lowercase
// var b = 'RESERVE'; // no accents, uppercase
//
// console.log(a.localeCompare(b));
// // expected output: 1
// console.log(a.localeCompare(b, 'en', {sensitivity: 'base'}));
// expected output: 0
