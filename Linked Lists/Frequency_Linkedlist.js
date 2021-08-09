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
            this.tail = n
        }
        else{
            this.tail.next = n
            this.tail = n
        }
        this.length++
        return true
    }
    find(val){
        let current = this.head
        let count = 0
        while(current != null){
            if(current.val == val)
                count++
            current = current.next
        }
        return count
    }
}
 let list = new linkedlist()
 list.push(22)
 list.push(35)
 list.push(41)
 list.push(35)
 list.push(35)
 list.push(54)
 list.push(35)
 list.push(71)
 console.log(list.find(35))