// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    return Math.abs(blocks - 42);
}
const perBlock = 264;
function distanceFromHqInFeet(blocks){
return Math.abs(blocks - 42) * perBlock;
}

function distanceTravelledInFeet(start, end) {
    const footTravelled = 264; 
    const distance = Math.abs(end - start);
    return distance * footTravelled;
  }
  function calculatesFarePrice(startingPoint, endPoint) {
    const perBlock = 264;
    const distance = Math.abs(endPoint - startingPoint)
    
  }
  
  function calculatesFarePrice(startBlock, endBlock) {
    const feetPerBlock = 264; // hypothetically speaking
    const distance = Math.abs(endBlock - startBlock);
  
    // First 400 are free
    if (distance <= 400) {
      return 0;
    }
  
    // range between 400 and 2000 feet
    if (distance <= 2000) {
      const feetBeyondFree = distance - 400;
      const farePrice = feetBeyondFree * 0.02;
      return farePrice;
    }
  
    // Distance over 2000 feet
    if (distance > 2000 && distance <= 2500) {
      return 25;
    }
  
    // Distance over 2500 feet
    return 'cannot travel that far';
  }
  
  
  
  