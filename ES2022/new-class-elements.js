// ES 2022 has made improvements to classes

class Robot {
  name = 'Optimus'
  #age = 0
  #increaseAge(addedYears) {
    this.#age += addedYears
  }

  static price = 999
  static #maxAge = 100
  static {
    if(new Date().getHours() < 10) {
      this.price = 50
    }
  }

  isOld(){
    return this.#age > Robot.#maxAge
  }
  timeWarp(){
    this.#increaseAge(500)
  }
}

console.log(Robot.price)
const myRobot = new Robot()
myRobot.timeWarp()
console.log(myRobot.isOld())

/*
public properties can be created directly without constructor
private properties can be created with prefix #
private method can be created with prefix #
static properties and method can be created, public or private with #
static initialization block for when Class is created
*/
