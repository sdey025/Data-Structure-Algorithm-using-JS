class Stack {
    constructor(val){
        this.items = []
        this.length = -1
    }
    push(val){
        this.length++
        this.items[this.length] = val
        return `${val} pushed...!`
    }
    pop(){
        let popped = this.items[this.length]
        this.length--
        return `${popped} popped...!`
    }
    peek(){
        let peek = this.items[this.length]
        return `${peek} is on top`
    }
    isEmpty(){
        if(this.length == -1)
            return true
        else
            return false
    }
}
let stack = new Stack()
console.log(stack.isEmpty())
console.log(stack.push(100))
console.log(stack.push(200))
console.log(stack.push(300))
console.log(stack.push(400))
console.log(stack.pop())
console.log(stack.isEmpty())
console.log(stack.peek())