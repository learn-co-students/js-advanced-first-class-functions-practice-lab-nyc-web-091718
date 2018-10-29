// Code your solution in this file!

function logDriverNames(array) {
  array.forEach(function(driver) {
    console.log(driver.name);
  });
  // log name of each
}

function logDriversByHometown(array, location) {
  array.forEach( function (driver) {
    if (driver.hometown === location) {
      console.log(driver.name);
    };
  });
  }


function driversByRevenue(array) {
  const copy = array.slice();
  return drivers = copy.sort(function (a,b) {
    return a.revenue - b.revenue;
  });
  // driversByRevenue() — Receives an array of driver objects and returns a new array of driver objects sorted by their revenue attribute from lowest to highest.
}

function driversByName(array) {
  const copy = array.slice();
  return copy.sort(function (a,b) {
    return a.name.localeCompare(b.name);
  });
  // driversByName() — Receives an array of driver objects and returns a new array of driver objects sorted by their name attribute from A to Z. Here, you may have to use the String.prototype.localeCompare() method.
}

// function totalRevenue(array) {
//   let revenue = 0;
//   array.forEach(function (driver){
//     revenue += driver.revenue;
//   });
//   return revenue;
//   // totalRevenue() — Receives an array of driver objects and returns the sum of the revenue earned by each driver.
// }
function totalRevenue(array) {
  return array.reduce(function (total, driver){
    return total + driver.revenue;
  }, 0);
}

// function averageRevenue(array) {
//   let totalRevenue = 0;
//   let totalDrivers = 0;
//   array.forEach(function (driver){
//     totalRevenue += driver.revenue;
//     totalDrivers += 1;
//   });
//   return (totalRevenue/totalDrivers);
//   // averageRevenue() — Receives an array of driver objects and returns the average revenue earned by each driver.
// }

function averageRevenue(array) {
  let totalRevenue = totalRevenue(array);
  return (totalRevenue/array.length);
  // averageRevenue() — Receives an array of driver objects and returns the average revenue earned by each driver.
}
