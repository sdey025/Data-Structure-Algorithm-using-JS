class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}
class Queue {
    constructor(){
        this.first = null
        this.last = null
        this.size = -1
    }
    enqueue(val){
        let n = new Node(val)
        if(!this.first){
            this.first = n
            this.last = n
        }else{
            this.last.next = n
            this.last = n
        }
        this.size++
        return this
    }
    dequeue(){
        if(this.size == 0)
            return undefined
        if(this.first == this.last)
            this.last = null
        let current = this.first
        this.first = current.next
        this.size--
        return this
    }
}
let queue = new Queue()
queue.enqueue(100)
queue.enqueue(200)
queue.enqueue(300)
queue.enqueue(400)
queue.enqueue(500)
console.log(queue.enqueue(600))
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())
console.log(queue.dequeue())  