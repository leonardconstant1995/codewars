/*Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).*/


function solution(str, ending) {
    if (ending == 0) { return true } else {
      return str.substr(-(ending.length)) == ending
    }
  }