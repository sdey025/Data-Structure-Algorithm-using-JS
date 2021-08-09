class Apple {
    constructor(apples){
        this.apples = 4
    }
    addApples = () => {
        this.apples += 1
        return `Number of apples updated from ${this.apples - 1} to ${this.apples}`
    }
    remApples = () => {
        this.apples -= 1
        return `Number of apples updated from ${this.apples + 1} to ${this.apples}`
    }
    showApples = () => {
        return `Total apples: ${this.apples}`
    }
}
let Apple1 = new Apple()

console.log(Apple1.addApples())
console.log(Apple1.showApples())
console.log(Apple1.addApples())
console.log(Apple1.showApples())
console.log(Apple1.addApples())
console.log(Apple1.showApples())
console.log(Apple1.remApples())
console.log(Apple1.showApples())
console.log(Apple1.addApples())
console.log(Apple1.showApples())