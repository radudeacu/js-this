

// function sayThis() {
//     console.log("this", this);
// }

// sayThis();


const cafe = {
    cafeName: "JJ Bean",
    printName() {
        console.log(this.cafeName);
    },
};

cafe.printName();

cafe.sayHi = function() {
    console.log(`The cafe name is: ${this.cafeName}`);
}
    
cafe.sayHi();