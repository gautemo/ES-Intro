// Old JavaScript
var Animal1 = function (name, species) {
    this.name = name;
    this.species = species;
};
Animal1.prototype.getInfo = function () {
    console.log('This animal is a ' + this.species + ' and is named ' + this.name);
};

var myDog = new Animal1('Skippy', 'Dog');
myDog.getInfo();

/* ES6 now has classes */
class Animal2 {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }
    getInfo() {
        console.log(`This animal is a ${this.species} and is named ${this.name}`);
    }
}

const myCat = new Animal2('Mippy', 'Cat');
myCat.getInfo();

// more complex class with inheritance, static members and getter/setter
class Bird extends Animal2 {
    constructor(name, flies) {
        super(name, 'Bird');
        this.flies = flies;
        Bird.count++;
    }

    set canFly(canFly) {
        if (!this.canFly && canFly) {
            console.log(`${this.name} has finally learned to fly`);
        }
        this.flies = canFly;
    }

    get birdFact() {
        return `Birds usually flies. ${this.flies ? '' : `But ${this.name} dont!`}`;
    }

    static birdCount() {
        return this.count;
    }
}
Bird.count = 0;

const myBird = new Bird('Blippy', true);
const myBird2 = new Bird('Sippy', false);
console.log(myBird2.birdFact);
myBird2.canFly = true;
console.log(Bird.birdCount()); //Output: 2