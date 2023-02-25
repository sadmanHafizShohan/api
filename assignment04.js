//Problem-1: Let's play a mind game.

function mindGame(num){
  return (((num * 3) + 10) / 2) - 5
}

// console.log(mindGame(5));

//Problem-2: Finding Even or Odd.

function evenOdd(str){
  if(parseInt(str.length) % 2 === 0 ){
      return 'Even'
  }else{
      return 'Odd'
  }
}

// console.log(evenOdd('chatgpt'));

//Problem-3: Is  less or Greater than seven.

function isLGSeven(num){
  if(num < 7){
      return num - 7
  }else{
      return num * 2
  }
}

// console.log(isLGSeven(15));


// Problem-4: Finding bad data

function findingBadData(arr){
  let badData = 0;
  for(let i = 0; i < arr.length; i++){
      if(arr[i] < 0){
          badData += 1
      }
  }
  return badData
}

// console.log(findingBadData([2, -5, -7, -13]));


// Problem-5: Convert your gems into diamond

function gemsToDiamond(gems1, gems2, gems3){
  let friend1 = gems1 * 21;
  let friend2 = gems2 * 32;
  let friend3 = gems3 * 43;
  let total = friend1 + friend2 + friend3;

  if(1000 * 2 < total){
      total -= 2000;
  }

  return total;
}

// console.log(gemsToDiamond( 100, 5, 1))