class Student {
    constructor(firstname,lastname){
        this.firstname = firstname
        this.lastname = lastname
        this.scores = []
    }
    fullname = () => {
        return `The name of the student is ${this.firstname} ${this.lastname}`
    }
    addScore = (score) => {
        this.scores.push(score)
        let total = 0
        for(let i = 0 ; i < this.scores.length ; i++){
            total += this.scores[i]
        }
        let avg = total/this.scores.length
        avg = avg.toFixed(2)
        return `${score} added, average = ${avg}`
    }
}

let firstStudent = new Student("Shivasish","Dey")
let secondStudent = new Student("Raja","Dey")
console.log(`Student : ${firstStudent.fullname()}`)
console.log(firstStudent.addScore(80))
console.log(firstStudent.addScore(74))
console.log(firstStudent.addScore(56))
console.log(firstStudent.addScore(89))
console.log(firstStudent.addScore(97))
console.log(firstStudent.addScore(56))
console.log(firstStudent.addScore(65))
console.log(firstStudent.addScore(55))
console.log(firstStudent.addScore(87))
console.log(firstStudent.addScore(91))
console.log(firstStudent.addScore(76))
console.log(firstStudent.addScore(78))
console.log(firstStudent.addScore(86))