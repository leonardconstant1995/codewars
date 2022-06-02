/*Give you a function animal, accept 1 parameter:obj like this:
and return a string like this: */




function animal(obj){
    var newAnimal = {
      name: obj.name,
      legs: obj.legs,
      color: obj.color,
  };
    
  return "This" + " " + newAnimal.color + " " + newAnimal.name + " has " + newAnimal.legs + " legs."
    }