class node {
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
        return true
    }
    middleElement(){
        let slow = this.head
        let fast = this.head

        while(fast != null && fast.next != null){
            slow = slow.next
            fast = fast.next.next
        }
        return slow
    }
}
let list = new linkedlist()
list.push(23)
list.push(34)
list.push(21)
list.push(29)
list.push(45)
list.push(35)
list.push(27)
console.log(list.middleElement())