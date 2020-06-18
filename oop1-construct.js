//1. Create a Class called WhyClass.  This class should have one property, and two methods.  THe property is called "purpose", and stores a string.  This string should clearly explain why classes are used in Object Oriented Programming.  The first method is called explain().  This method should print the contents stored in the purpose 'field' of the class.  The second method is called pieces().  This 2nd method should print out the various parts that are essential to building a class.  Instantiate the class, and invoke the method so the results are showing in the console once this file is run.

// class WhyClass {
//     constructor(purpose) {
//       this.purpose = purpose;
//     }
//   explain () {
//     return this.purpose;
//   }
//   pieces () {
//     return this.purpose + 'Classes consist of a body that includes properties and methods.';
//   }

//   }

//   whyclass = new WhyClass("Classes are used as a blueprint to create multiple objects");

//   whyclass.explain();
//   whyclass.pieces();






/*2. You are exploring the rainforests of the Amazon.  You have observed many different types of wildlife on your excursion.  To jog your memory, some different types of wildlife that you observed are found in the following URL : https://www.ietravel.com/blog/amazon-rainforest-animals-beginners-guide-21-species.  Feel free to use other resources online if you wish.

Create a class that can categorize at least 6 of the creatures that you recall observing the Amazon.  Each creature should have 3 unique characteristics, and 2 unique actions that it can do. */


// class Animals {
//     constructor(species, action) {
//         this.species = species;
//         this.action = action;
//     }

//     greeting() {
//       console.log(`Hello, I am a ${this.species}.`);
//     }

//     iDo() {
//       console.log(`I get around by ${this.action}.`);
//     }
// }
//     class Seagull extends Animals {
//       constructor(species, action, feathers){
//         super(species, action);
//         this.feathers = feathers;
//       }
//       covering() {
//         console.log(`I am covered in ${this.feathers}.`)
//       }

//     }

//       const seagull = new Seagull ('seagull', 'flying', 'feathers');

//       seagull.greeting();
//       seagull.iDo();
//       seagull.covering();

//       class Sloth extends Animals {
//       constructor(species, action, feathers){
//         super(species, action);
//         this.feathers = feathers;
//       }
//       covering() {
//         console.log(`I am covered in ${this.feathers}.`)
//       }
//       }
//  const sloth = new Sloth ('sloth', 'climbing', 'hair');
//    sloth.greeting();
//       sloth.iDo();
//       sloth.covering()

// class Monkey extends Animals {
//       constructor(species, action, feathers){
//         super(species, action);
//         this.feathers = feathers;
//       }
//       covering() {
//         console.log(`I am covered in ${this.feathers}.`)
//       }
//       }
//   const monkey = new Monkey ('monkey', 'swinging from trees', 'hair');
//   monkey.greeting();
//       monkey.iDo();
//       monkey.covering()

// class Capybara extends Animals {
//       constructor(species, action, feathers){
//         super(species, action);
//         this.feathers = feathers;
//       }
//       covering() {
//         console.log(`I am covered in ${this.feathers}.`)
//       }
//       }
//    const capybara = new Capybara ('capybara', 'walking on four legs', 'short hair');
//   capybara.greeting();
//       capybara.iDo();
//       capybara.covering()

// class Otter extends Animals {
//       constructor(species, action, feathers){
//         super(species, action);
//         this.feathers = feathers;
//       }
//       covering() {
//         console.log(`I am covered in ${this.feathers}.`)
//       }
//       }
//     const otter = new Otter ('otter', 'swimming', 'short hair');
//   otter.greeting();
//       otter.iDo();
//       otter.covering()

// class Jaguar extends Animals {
//       constructor(species, action, feathers){
//         super(species, action);
//         this.feathers = feathers;
//       }
//       covering() {
//         console.log(`I am covered in ${this.feathers}.`)
//       }
//       }
//      const jaguar = new Jaguar ('jaguar', 'running on four legs', 'fur');
//        jaguar.greeting();
//       jaguar.iDo();
//       jaguar.covering()





/*3. Convert the following Object Literals into a general class called Shape, and instantiate the class to generate the object literals
*/


class Shape {
    constructor(name, sides, base, height) {
        this.name = name;
        this.sides = sides;
        this.base = base;
        this.height = height;
    }
}

const shape = new Shape();
const triangle = {
    name: "triangle",
    sides: [4, 7, 7], //lengths of each side
    base: null,
    height: null, //determine this height using basic geometry.  You may need to research this one.
    calcArea: function () {
        console.log(`${this.name}'s area is calculated to be : ${.5 * this.base * this.height}`);
    },
    calcPerimeter: function () {
        console.log(`${this.name}'s perimeter is calculated to be : ${(this.base) + (this.sides[1] + this.sides[2])}`)
    }
}

triangle.base = triangle.sides[0];  //base is the 1st side in the triangle.sides array.
triangle.height = 6.71; //determine the height using basic geometry.  How do you calculate the height of a triangle with 2 equal sides?  If you use the formula to caluclate the height, this is a bonus.  If you hard code the correct value here, that will be sufficient, but no bonus :(

console.log(triangle);
triangle.calcArea();
triangle.calcPerimeter();

const rectangle = {
    name: "rectangle",
    sides: 4,
    length: 2,
    width: 5,
    calcArea: function () {
        console.log(`${this.name}'s area is calculated to be : ${this.length * this.width}`);
    },
    calcPerimeter: function () {
        console.log(`${this.name}'s perimeter is calculated to be : ${(2 * this.length) + (2 * this.width)}`)
    }
}

console.log(rectangle);
rectangle.calcArea();
rectangle.calcPerimeter();

const circle = {
    name: "circle",
    sides: 1,
    radius: 5,
    calcArea: function () {
        console.log(`${this.name}'s area is calculated to be : ${(Math.PI * this.radius ** 2).toFixed(2)}`);
    },
    calcCircumference: function () {
        console.log(`${this.name}'s circumference is calculated to be : ${(2 * Math.PI * this.radius).toFixed(2)}`)
    }
}

console.log(circle);
circle.calcCircumference();
circle.calcArea();




Bonus Exercises:

//4. Create three more instances of the Shape class for a pentagon, hexagon, and an octagon.  Add in  comments explaining the formulas for calculating the perimeter and the areas of these 3 shapes.  Also, as noted above, if you use the formula to calculate the height of the triangle instead of hard coding it, you will also obtain the bonus for this exercise.  The dimensions for the triangle are already provided for you in the triangle object literal.

const pentagon = {
    name: "pentagon",
    sides: 5,
    length: 8,
    base: 8,
    height: 5.5,

    calcArea: function () {
        console.log(`${this.name}'s area is calculated to be : ${((.5 * this.base) * this.height) * this.sides}`); //find the area of 1 triangle then multiply it by 5 since a pentagon is 5 triangles
    },
    calcPerimeter: function () {
        console.log(`${this.name}'s perimeter is calculated to be : ${this.length * this.sides}`)
    }
}

console.log(pentagon);
pentagon.calcArea();
pentagon.calcPerimeter();

const hexagon = {
    name: "hexagon",
    sides: 6,
    length: 4,
    base: 8,
    height: 5.5,
    width: 4,

    calcArea: function () {
        console.log(`${this.name}'s area is calculated to be : ${((.5 * this.base) * this.height) * this.sides}`); //find the area of 1 triangle then multiply it by 6 since a hexaagon is 6 triangles
    },
    calcPerimeter: function () {
        console.log(`${this.name}'s perimeter is calculated to be : ${this.length * this.sides}`)
    }
}

console.log(hexagon);
hexagon.calcArea();
hexagon.calcPerimeter();

const octagon = {
    name: "octagon",
    sides: 8,
    length: 4,
    base: 8,
    height: 5.5,
    width: 4,

    calcArea: function () {
        console.log(`${this.name}'s area is calculated to be : ${((.5 * this.base) * this.height) * this.sides}`); //find the area of 1 triangle then multiply it by 8 since a octaagon is 6 triangles
    },
    calcPerimeter: function () {
        console.log(`${this.name}'s perimeter is calculated to be : ${this.length * this.sides}`)
    }
}

console.log(octagon);
hexagon.calcArea();
hexagon.calcPerimeter();


//5. Below is a class Earth.  It is instantiated with a earth 'instance'.  Because there is only 1 known earth, we don't want multiple instances of earth.  Modify the class so the properties are usuable WITHOUT instantiating the class.



// class Earth {
//     name;
//     planetNum; //distance from the sun.  1-mercury, 2-venus, 3-earth, ...

//     constructor(name, num) {
//         this.name = name;
//         this.planetNum = num;
//     }

// }

// const earth = new Earth('earth', 3);
// console.log(earth);




