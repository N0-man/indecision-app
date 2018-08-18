class Person {
    constructor(name = 'Whatever', age = 0) {
        this.name = name
        this.age = age
    }

    greetings() {
        return `Hello ${this.name}` //String Interpolation
    }

    description() {
        return `${this.name} is ${this.age} years old...`
    }
}

class Student extends Person {
    constructor (name, age, major) {
        super()
        this.major = major
    }

    hasMajor () {
        return !!this.major  //!'' is true, !!'' false
    }

    description() {
        let description = super.description()

        if (this.hasMajor())
            description += ` Their major is ${this.major}...`

        return description
    }
}

const me = new Student('Nouman Memon', 33, 'Computers')
console.log(me.greetings())
console.log(me.description())

const other = new Student()
console.log(other.greetings())
console.log(other.description())
