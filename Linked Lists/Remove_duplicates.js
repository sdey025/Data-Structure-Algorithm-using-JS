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
        this.length = 0
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
    remove(ind){
        let prev = this.get(ind - 1)
        let next = this.get(ind + 1)
        prev.next = next
        return this
    }
    detectDuplicate(){
        let obj = {}
        let current = this.head
        let ind = 0
        while(current != null){
            if(obj[current.val]){
                this.remove(ind)
            }else{
                obj[current.val] = 1
            }
            ind++
            console.log(current)
            current = current.next
        }
        console.log(obj)
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
list.push(41)
list.push(52)
list.push(54)
list.push(52)
list.push(22)
console.log(list.detectDuplicate())
list.traverse()