// Code your solution in this file!
 // Code your solution in this file!
 const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

 const returnFirstTwoDrivers = (drivers) => {
     const result = drivers.slice(0,2);
     return result;
 }
 
 console.log(returnFirstTwoDrivers(drivers))
 console.log(drivers)
 
 const returnLastTwoDrivers = (drivers) => {
     const result = drivers.slice(2);
     return result;
 }
 
 console.log(returnLastTwoDrivers(drivers))
 console.log(drivers)
 
 const selectingDrivers =[
     returnFirstTwoDrivers,
     returnLastTwoDrivers 
 ]
 
 console.log(selectingDrivers[0](drivers))
 console.log(selectingDrivers[1](drivers))
 
 function createFareMultiplier(num){
     return function(fare){
         return num * fare;
     }
 }
 const fareQuintupler = createFareMultiplier(5);
 console.log(fareQuintupler(5))
 
 const fareDoubler = function(num){
    return createFareMultiplier(num)(2);
 }
 
 console.log(fareDoubler(10))
 
 const fareTripler = function(num){
     return createFareMultiplier(num)(3);
  }
  console.log(fareTripler(12))
 
  function selectDifferentDrivers(arrayOfDrivers, fn){
     return fn(arrayOfDrivers);
  }
 
  console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
  console.log(selectDifferentDrivers(drivers, returnLastTwoDrivers));