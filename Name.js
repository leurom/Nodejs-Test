class Person {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }
}

module.exports = new Person('Roman');

//export whole class
module.exports = Person;