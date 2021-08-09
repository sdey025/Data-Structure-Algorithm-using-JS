class Node {
    constructor(val){
        this.val = val
        this.next = null
        this.prev = null
    }
}

class linkedlist {
    constructor(){
        this.head = null
        this.tail = null
        this.length = null
    }
    push(val){
        let n = new Node(val)
        if(!this.head){
            this.head = n
            this.tail = this.head
        }
        else{
            let lastTail = this.tail
            this.tail.next = n
            this.tail = n
            this.tail.prev = lastTail
        }
        this.length++
        return true
    }
    pop(){
        if(!this.head)
            return null
        
        if(this.length == 1){
            this.head = null
            this.tail = null
            return null
        }
        let newTail = this.tail.prev
        newTail.next = null
        this.tail = newTail
        this.length--
        return this.tail
    }
    traverse(){
        let current = this.head
        while(current != null){
            console.log(current.val)
            current = current.next
        }
        console.log("Reverse Traverse")
        current = this.tail
        while(current != null){
            console.log(current.val)
            current = current.prev
        }
    }
    shift(){
        let newHead = this.head.next
        this.head = newHead
        newHead.prev = null
        this.length--
        return true
    }
    unshift(val){
        let n = new Node(val)
        let curr = this.head
        let newHead = n
        curr.prev = newHead
        newHead.next = curr
        this.head = newHead
        this.length++
        return true
    }
    get(ind){
        let start = this.head
        let end = this.tail
        let count = 0
        if(ind < (this.length/2)){
            while(count < ind){
                start = start.next
                count++
            }
            return start
        }
        else{
            count = this.length -1
            while(count > ind){
                end = end.prev
                count--
            }
            return end.val
        }
    }
    insert(ind, val){
        let n = new Node(val)
        let prev = this.get(ind - 1)
        let next = this.get(ind)
        prev.next = n
        n.prev = prev
        n.next = next
        next.prev = n
        this.length++
        return true
    }
    set(ind, val){
        let node = this.get(ind)
        node.val = val
        return true
    }
    remove(ind){
        let prev = this.get(ind - 1)
        let next = this.get(ind + 1)
        prev.next = null
        prev.next = next
        next.prev = prev
        return true
    }
}

let list = new linkedlist()
list.push(23)
list.push(41)
list.push(98)
list.push(44)
list.push(37)
list.push(73)
list.push(61)
list.traverse()
list.pop()
console.log("after pop")
list.traverse()
list.shift()
console.log("after shifting....!")
list.traverse()
list.unshift(12)
console.log("after unshifting....!")
list.traverse()
console.log("Trying Get method...!")
console.log(list.get(2))
list.insert(2,32)
console.log("after inserting...!")
list.traverse()
list.set(2,112)
console.log("after setting...!")
list.traverse()
list.remove(2)
console.log("after removing...!")
list.traverse()