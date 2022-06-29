/*Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer*/



function squareDigits(num){
    let line = num.toString(); //turn the numbers into an string
    let arr = []; //declare an empty array to put the numebrs in
    for(let i = 0; i < line.length; i++){ //iterate through string
      arr[i] = line[i] * line[i]; //saves the square root to an index in the array
    }
  return Number(arr.join('')); //return the square roots joined and convert them into a number
  }