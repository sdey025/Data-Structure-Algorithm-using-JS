class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class Linkedlist {
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
    get(ind){
        let current = this.head
        let count = 0
        while(count < ind){
            current = current.next 
            count++
        }
        return current
    }
    remove(index){
        let prev = this.get(index - 1)
        let future = this.get(index + 1)
        prev.next = future
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

let list = new Linkedlist()
list.push(12)
list.push(34)
list.push(32)
list.push(21)
list.push(27)
list.push(41)
list.remove(3)
list.traverse()