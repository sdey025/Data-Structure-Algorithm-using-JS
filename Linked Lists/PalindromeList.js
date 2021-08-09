class Node {
    constructor(val){
        this.val = val
        this.next = null
    }
}

class LinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.length = null
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
        return this
    }
    checkPalindrome(){
        let current = this.head
        let mid = this.getMid(current)
        let limit = 0
        let r_mid = null
        if(this.length%2 == 0){
            r_mid = this.reverse(mid)
            limit = parseInt(this.length/2)
        }
        else{
            r_mid = this.reverse(mid.next)
            limit = parseInt(this.length/2)
            limit = limit - 1
        }
        let i = 0
        let curr = this.head
        console.log(this.head)
        while(i < limit){
            let n = curr.val
            let m = r_mid.val
            if(n != m)
                return false    

            curr = curr.next
            mid = mid.next
            i++
        }
        return true
    }
    reverse(node){
        let prev = null
        let current = node
        let next = null
        while(current){
            next = current.next
            current.next = prev
            prev = current
            current = next
        }
        node = prev
        return node
    }
    getMid(current){
        let slow = current
        let fast = current
        while(!fast && !fast.next){
            slow = slow.next
            fast = fast.next.next
        }
        return slow
    }
}

let list = new LinkedList()
list.push(1)
list.push(2)
list.push(3)
list.push(4)
list.push(3)
list.push(2)
list.push(1)
console.log(list.checkPalindrome())
