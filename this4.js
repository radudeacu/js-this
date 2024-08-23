

const rabbit = {
    name: "White Rabbit",
};

function concatName(string) {
    return string + this.name;
}

// Indirect invocations
concatName.call(rabbit, "Hello "); // => "Hello White Rabbit"