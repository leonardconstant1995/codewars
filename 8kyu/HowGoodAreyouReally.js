/*There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!*/

function betterThanAverage(classPoints, yourPoints) {
    var classAvg = 0 //declare variable for the class average to be redeclared later
    
    for( let i = 0; i< classPoints.length; i++){ //iterate through the array
      classAvg += classPoints[i]; //reassign variable to the class test total sum
    }
    classAvg = classAvg / classPoints.length; //reassign again and divide class sum by the length of array which is the amount of scores(aka amount of ppl) to get their average
    return classAvg < yourPoints
  }