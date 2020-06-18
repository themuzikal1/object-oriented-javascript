
/*
1. Create a Abstract Creature class that is NOT allowed to be instantiated. Find a way to prevent this class from being instantiated with an instance.  In the Creature class, include two abstract methods.  move(), and act().  These methods are NOT allowed to be invoked from the Abstract class, so throw an error in these methods if they are invoked by any inherited sub-classes.

Create at least 3 sub-classes that inherit from the Abstract Creature Class.  Example sub-classes are:
    -Human
    -Dinosaur
    -Bird
    -Reptile
    -Fish

These sub-classes MUST implement the abstract methods of move() and act(), which are found on the abstract Creature class. In addition to the 2 abstract methods, implement 1 unique method on each sub-class.  Also, each sub-class MUST have at least 2 unique property fields on them.  Example property fields are:
    -name
    -weight
    -food
    -age

*/
/*
class Creature { //abstract
    constructor () {
      if (this.constructor === Creature) {
        throw new Error("Abstract class Creature cannot be instantiated");
       
      }
      
    }
    
    move() {
      throw new Error("Cannot invoke move() in the sub-class");
    
    }
    act() {
      console.log("Cannot invoke act() in the sub-class")
    
    }
    
    }
    
    class Human extends Creature {
      
      name;
      weight;
      food;
      
      constructor(name, weight, food) {
        super();
        this.name = name;
        this.weight = weight;
        this.food = food;
      }
    walk() {
        console.log(`${this.name} is walking. `);
      }
    }
    
    human = new Human("Korey", "175 pounds", "pizza");
    
    human.walk();
    
    
    class Dinosaur extends Creature {
      name;
      weight;
      food;
      constructor(name, weight, food) {
        super();
        this.name = name;
        this.weight = weight;
        this.food = food;
    
    }
    eats() {
        console.log(` ${this.name} eats ${this.food} `);
    }
    }
    dinosaur = new Dinosaur("Rex", "1,000 pounds", "leaves");
    
    dinosaur.eats();
    
    class Bird extends Creature {
      name;
      weight;
      food;
      constructor(name, weight, food) {
        super();
        this.name = name;
        this.weight = weight;
        this.food = food;
    
    }
    weighs() {
      console.log(`${this.name} weighs ${this.weight}`)
    }
    }
    bird = new Bird ("Tweetie", "1 pound", "birdseed");
    
    bird.weighs();
    
    class Reptile extends Creature {
      name;
      weight;
      sound;
      constructor(name, weight, sound) {
        super();
        this.name = name;
        this.weight = weight;
        this.sound = sound;
    
    }
    noise() {
      console.log(`${this.name} makes the ${this.sound} sound.`)
    }
    }
    reptile = new Reptile("Sly", "3 pounds", "SSSSSSSSSS");
    ;
    reptile.noise();
    
    class Fish extends Creature {
      name;
      weight;
      food;
      constructor(name, weight, food) {
        super();
        this.name = name;
        this.weight = weight;
        this.food = food;
    
    }
    info() {
      console.log(`${this.name} weighs ${this.weight} and eats ${this.food} .`);
    }
    }
    fish = new Fish ("Nemo", "5 ounces", "plankton");
    
    fish.info();
    */





/*
// 2. For the following Person class, modify the class methods, so the sub-class methods will successfully fire.  For the Teacher method, a set of methods have already been set up.  For the Student class, it will be up to you to determine how to set up the methods to fire in the Student sub-class.  :
// */


class Person {
    name;
    constructor(name) {
        this.name = name;
    }

    eat() {
        console.log(this.name + " is eating");
    }

    sleep = () => {
        console.log(this.name + " is sleeping");
    }

    code = function () {
        console.log(this.name + " is coding");
    }

    repeat = function () {
        console.log(this.name + " is repeating the above steps, yet another time");
    }
    explain() {
        //this function should contain a console.log() explaining what you had to do to get the correct functions to work, and the reasoning behind what you did.
        console.log("I had to bind this.name to the person class and instantiate person.  Then I had to invoke each method");

    }

}
person = new Person("Korey");
person.eat();
person.sleep();
person.code();
person.repeat();
person.explain();




class Teacher extends Person {

    //      //refactor the methods in this Teacher class, so all of these methods override the methods in the Person super class.  

    constructor(name) {
        super(name);
        this.name = name;
    }

    eat() {
        console.log(this.name + " loves to teach before eating");
    }

    sleep() {
        console.log(this.name + " sleeps after preparing the lesson plan");
    }

    code = () => {
        console.log(this.name + " codes first, then teaches it the next day.");
    }

    repeat() {
        console.log(this.name + " teaches, codes, eats, sleeps, and repeats");
    }
}


class Student extends Person {

    //      //set up your methods in this student class, so all of these methods will override the methods from the super class.

    //      //eat method should print out - <stduent name> studies, then eats

    eat = () => {

        console.log(this.name + " studies then eats.");
    }
    //      //sleep method should print out, <student name> studies coding so much, that they dream about it in their sleep

    sleep = () => {
        console.log(this.name + " studies coding so much, that he dreams about it in his sleep. ")
    }

    //      //code method should print out, <student name> was first overwhelmed by coding, but kept at it, and now has become a coding guru!
    code = () => {
        console.log(this.name + " was first overwhelmed by coding, but kept at it and now has become a coding guru!")
    }
    //      //repeat method should print out, <student name> keeps on studying, coding, eating, and sleeping, and puts it all on repeat. 
    repeat = () => {
        console.log(this.name + " keeps on studying, coding, eating, and sleeping, and puts it all on repeat.")
    }

}


const teacher = new Teacher("Dr. Teacher");

teacher.explain();

const student = new Student("Korey Brooks");

student.explain();

teacher.eat();
teacher.sleep();
teacher.code();
teacher.repeat();

student.eat();
student.sleep();
student.code();
student.repeat();




/****************************************************************************************************************************************************************************************
// //Bonus Exercise:

// //3. Consider the following class:

// class Cook {

//     prepare(food1,food2,food3) {
//         console.log("The cook is cooking " + food1, food2, food3);
//     }

//     prepare = function() {
//         console.log('The cook is cooking');
//     }

//     explain = () => {
//         console.log("what could you do to get the prepare function to print out the food items that are being passed in to the function?  Once you figure it out, Write down your thought process in this explain method.");
//     }

// }

// const cook = new Cook();

// cook.prepare("turkey","salami","pizza");

// cook.explain();
*/
