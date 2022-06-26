// ES2022 allows for checking if private field or method has beed defined in a class

class Robot {
  #age
  static hasAge(object){
    return #age in object
  }
}

const robot = new Robot()
console.log(Robot.hasAge(robot))