/*
1. Create the following classes:
   - Book class. It should have an author and publisher property.
   - Author class. It should have a name and books property.
   - Publisher class.  It should have an authors and books property.
   - Review class.  It should have a rating and user property.
   -Prevent the properties from being accessed by outside code, using the encapsulation concept of "private variables".  Create methods that return the values of these private variables in case other pieces of the code need to access the data of the 4 classes.  Also create methods that allow outside code to "set" new values for the properties on the classes, without directly manipulating the values themselves. */
/*
let Books = (function () {
    let privateProps = new WeakMap();

    class Books {
        constructor(name) {

            this.name = name;
            privateProps.set(this, { author: 'Richard Rothstein', publisher: 'Liveright' });
        }

        info() {
            console.log(`${this.name} is written by ${privateProps.get(this).author} and published by ${privateProps.get(this).publisher}`);
        }
    }

    class Author {
        constructor(name) {
            this.name = name;
            privateProps.set(this, { name: 'Richard Rothstein', books: 'Classes and Schools' });
        }
    }

    class Publisher {
        constructor(name) {

            this.name = name;
            privateProps.get(this).publisher;
            privateProps.set(this, { books: 'If Then and ARISING' });

        }
    }

    class Review {
        constructor(name) {

            this.name = name;
            privateProps.get(this, { rating: '5 Stars', users: 904 });
        }
    }
    return Books;
})();

let books = new Books('The Color of Law: A Forgotten History of How Our Government Segregated America');
console.log(books.info());
/*






/*
2. Create the following classes:
    - Umbrella class.  It should have a an organization name.  It should only have a single instance.  Umbrella is the "Parent Organization" e.g. Allegis Group
    - Company class. It should have a compnay name and # of employees.  Create at least 3 different companies that are children of the Umbrella Organization.  (e.g. TEKsystems, Aerotek, etc.)
    - Site class. It should have the name of the company, and the location of the site.  It is a child class that inherits from the Company class.  Create 3 sites for each company.
    - Employee class. It should have a employee name, job title, and salary properties. Create 10 employee instances: 1 CEO, 1 Manager, 1 Secretary, 2 Engineers, 1 Financial Officer, 1 Janitor, 1 Marketer, 1 HR Personnel, 1 Lawyer.  Feel free to add other employee roles at your own discretion.

    - For each class, add 2 properties and 2 methods to each.  The properties and methods should make sense, considering what the classes are supposed to be representing.*/

class Umbrella {
    constructor(parentOrg, companyName, smallerCompanies, numberofEmployees, employeeName, location, title, salary) {
        this.parentOrg = parentOrg;
        this.companyName = companyName;
        this.smallerCompanies = smallerCompanies;
        this.numberofEmployees = numberofEmployees;
        this.employeeName = employeeName;
        this.location = location;
        this.title = title;
        this.salary = salary;
    }
}
const umbrella = new Umbrella('Allegis');

const company = {
    parentOrg: "Allegis",
    companyName1: "TEKsystems",
    companyName2: "Aerotek",
    companyName3: 'Getting Hired',
    infoOne: function () {
        console.log(`${this.companyName1} + is a subsidiary of ${this.parentOrg}.  `);
    },
    infoTwo: function () {
        console.log(`Another subsidiary of  ${this.parentOrg}   is ${this.companyName2}. `);
    }

}
console.log(company);
company.infoOne();
company.infoTwo();

const site = {
    location1: "Dallas, TX",
    location2: "Hanover, MD",
    location3: "Irving, TX",
    locOne: function () {
        console.log(`${this.location1} is where ${this.companyName1} is located.  `);
    },
    locTwo: function () {
        console.log(`${this.companyName2} is located in ${this.location2}.  `);
    }

}
site.locOne();
site.locTwo();

console.log(site);

const employee = {
    ceo: "Korey Brooks",
    manager: "Mariah Carey",
    secretary: "Lady Gaga",
    engineer1: "Eric Benet",
    engineer2: "Aretha Franklin",
    financialOfficer: "Whitney Houston",
    janitor: "Nicki Minaj",
    hr: "Pattie Labelle",
    lawyer: "Johnnie Cochran",

    currentCeo: function () {
        console.log(`The current CEO is  ${this.ceo}.`);
    },
    currentManager: function () {
        console.log(`The current manager is ${this.manager}`);
    }
}
employee.currentCeo();
employee.currentManager();







    // companyName, smallerCompanies,numberofEmployees, employeeName, location, title, salary




/****************************************************************************************************************************************************************************************
Bonus Exercise:

3. Building on Exercise 1, Do the following :
- Create a Bookstore class.  It should contain a collection of various Book Instances.
- Each Book Instance should contain the Instances of the relavant Authors, Publishers, and Reviews.
- Each Publisher should contain Instances of the Authors that are affiliated with the relavant Publisher.

Each Book instance should contain instances of the Authors, the Publishers, and the Reviews pertinent to each book.  This exercise is using the advanced encapsulation concept of "composition", reflecting a "HAS A" relationship.
*/



    //your code here...