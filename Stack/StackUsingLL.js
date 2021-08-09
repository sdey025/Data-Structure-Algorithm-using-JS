class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}
class Stack {
    constructor(){
        this.first = null
        this.last = null
        this.length = 0
    }
    push(val){
        let n = new Node(val)
        if(!this.first){
            this.first = n
            this.last = this.first
        }else{
            let temp = this.first
            this.first = n
            this.first.next = temp
        }
        return ++this.length
    }
    pop(){
        if(!this.first)
            return null
        let temp = this.first
        if(this.first == this.last)
            this.last = null
        
        this.first = this.first.next
        this.length--
        return temp.val
    }
}
let s = new Stack()
console.log(s.push(12))
console.log(s.push(10))
console.log(s.push(15))
console.log(s.push(17))
console.log(s.push(13))
console.log(s.pop())