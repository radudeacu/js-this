

function Dog(breed) {
    this.breed = breed;

    this.sayBreed = function () {
        console.log(this.breed);
    };
}

const tofu = new Dog("Golden Retriever");

tofu.sayBreed();