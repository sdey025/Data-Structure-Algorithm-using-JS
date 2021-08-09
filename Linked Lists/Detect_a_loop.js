class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class linkedlist {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val){
        let n = new Node(val)
        if(!this.head){
            this.head = n
            this.tail = this.head
        }
        else{
            this.tail.next = n
            this.tail = n
        }
        this.length++
        return true
    }
    get(index){
        let count = 0
        let current = this.head
        while(count < index){
            current = current.next
            count++
        }
        return current
    }
    makeLoop(index){
        let t1 = this.tail
        let t2 = this.get(index)
        t1.next = t2
        return this
    }
    traverse(){
        let current = this.head
        while(current != null){
            console.log(current.val)
            current = current.next
        }
    }
}
let list = new linkedlist()
list.push(22)
list.push(23)
list.push(41)
list.push(87)
list.push(52)
list.push(54)
list.push(35)
list.push(71)
console.log(list.makeLoop(3))
list.traverse()