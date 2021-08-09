class node {
    constructor(val){
        this.val = val
        this.next = null 
    }
}

class SinglyLinkedList{
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }
    push(val){
        let n = new node(val)
        if(!this.head){
            this.head = n
            this.tail = this.head
        }
        else{
            this.tail.next = n
            this.tail = n
        }
        this.length++
        return `${val} pushed`
    }
    traversal(){
        if(this.head == null)
            console.log("No items in the list")
        let curr = this.head
        while(curr){
            console.log(curr.val)
            curr = curr.next
        }
    }
    pop(){
        if(this.length === 0)
            return "List is empty"
        let curr = this.head
        let newTail = curr
        while(curr.next){
            newTail = curr
            curr = curr.next            
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if(this.length === 0){
            this.head = null
            this.tail = null
        }
        return "Item popped !"
    }
    shift(){
        if(this.length == 0)
            return "list is empty...!"

        let currHead = this.head
        this.head = currHead.next
        this.length--
        return `${currHead.val} Removed... !`
    }
    unshift(val){
       let n = new node(val)
       if(!this.head){
           this.head = n
           this.tail = this.head
       }
       else{
           n.next = this.head
           this.head = n
       }
       this.length++
       return `${val} unshifted...!`
    }
    get(index){
        if(index < 0 || index >= this.length)
            return "invalid index...!"
        let counter = 0
        let current = this.head
        while(counter !== index){
            current = current.next
            counter++
        }
        return current
    }
    set(ind, val){
        let foundNode = this.get(ind)
        if(foundNode){
            foundNode.val = val
            return true
        }
        return false
    }
    insert(index, val){
        if(index < 0 || index > this.length)
            return false
        if(index == this.length)
            return this.push(val)
        if(index == 0)
            return this.unshift(val)
        
        let n = new node(val)
        let prev = this.get(index - 1)
        let temp = prev.next
        prev.next = n
        n.next = temp
        this.length++
        return true
    }
    remove(index){
        if(index < 0 || index > this.length)
            return false
        
        if(index == this.length - 1)
            return this.pop()
        
        if(index == 0)
            return this.shift()
        
        let prev = this.get(index - 1)
        let pres = this.get(index)
        let future = this.get(index + 1)
        pres = null
        prev.next = future
        this.length--
        return true
    }
    reverse(){
        let node = this.head
        this.head = this.tail
        this.tail = node
        let prev = null
        let next
        for(let i = 0 ; i < this.length ; i++){
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
        return this
    }
}

let list = new SinglyLinkedList()
console.log(list.push(23))
console.log(list.push(34))
console.log(list.push(53))
console.log(list.push(78))
console.log(list.push(12))
console.log(list.push(15))
list.traversal()
console.log(list.pop())
list.traversal()
console.log(list.shift())
list.traversal()
console.log(list.unshift(67))
list.traversal()
console.log(`Value at 2 : ${list.get(2)}`) 
console.log(list.set(2,122))
list.traversal()
console.log(list.insert(3,49))
list.traversal()
console.log(list.remove(2))
list.traversal()
console.log(list.reverse())