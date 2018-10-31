// Code your solution in this file!

function logDriverNames(driver)
{
  for(const element in driver)
  {
    console.log(driver[element].name);
  }
}

function logDriversByHometown(drivers,hometown)
{
  for(const element in drivers)
  {
    if(drivers[element].hometown === hometown)
    console.log(drivers[element].name);
  }
}

function driversByRevenue(drivers)
{
  let newCollection = drivers.slice();
  return newCollection.sort(function(a,b){ return a.revenue - b.revenue })
}

function driversByName(drivers)
{
  let newCollection = drivers.slice();
  return newCollection.sort(function(a,b){ return a.name.localeCompare(b.name) })
}

function totalRevenue(drivers)
{
  let newCollection = drivers.slice();
  return newCollection.reduce(function(acc,currentValue){return acc + currentValue.revenue;},0)
}

function averageRevenue(drivers)
{
  return totalRevenue(drivers) / drivers.length
}
