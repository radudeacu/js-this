

const cafe = {
    cafeName: "JJ Bean",
    coffeeTypes: ["espresso", "drip", "pourover", "americano"],
    printMenu: function () {
        this.coffeeTypes.forEach(function (drink) {
            console.log(`${this.cafeName}: ${drink}`);
        });
    },
};

cafe.printMenu();