function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
  //   make function
  //   present means true
  //   count for true
  //   use for loop
    var count = 0
    for(let i = 0; i < arrayOfSheep.length; i++){
  //     when i = 0 the for loops checks for if i is less then the array. 
  //     arrayOfSheep[i] this means that araryOfSheep[0] looks for that in the array
  //     arrayOfSheep[0] = true
      console.log(arrayOfSheep[i])
      if(arrayOfSheep[i]){
        count++
  //       count++ basically does the addition for you. no need to use the =
      
  //       
      }
    }
    return count
  }