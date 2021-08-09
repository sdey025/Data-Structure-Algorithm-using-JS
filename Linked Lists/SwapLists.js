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
    }
    get(ind){
        let curr = this.head
        let count = 0
        while(count < ind){
            curr = curr.next
            count++
        }
        return curr
    }
    swap(left , right , list1){
        let temp = list1
        if(left == 0){

        }
        let prev = this.get(left - 1)
        let last = this.get(right + 1)
        prev.next = temp
        temp.next = last
        return true
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
list.push(87)
list.push(54)
list.push(34)
list.push(76)
list.push(89)
list.push(39)
list.push(61)
let list1 = new linkedlist()
list1.push(45)
list1.push(36)
list1.push(57)
list1.push(43)
list.swap(1,3,list1)
list.traverse()