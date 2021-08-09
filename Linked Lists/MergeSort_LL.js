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
        this.length = 0
    }
    push(val){
        let n = new Node(val)
        if(!this.head){
            this.head = n
            this.tail = this.head
        }else{
            this.tail.next = n
            this.tail = n
        }
        this.length++
        return this
    }
    getMiddle(){
        let fast = this.head
        let slow = this.head
        while(fast != null && fast.next != null){
            slow = slow.next
            fast = fast.next.next
        }
        return slow
    }
    mergeSort(head){
        if(head == null || head.next == null){
            return head
        } 
        let middle = this.getMiddle()
        let nextMid = middle.next

        middle.next = null

        let left = this.mergeSort(middle)
        let right = this.mergeSort(nextMid)
        
        let sortedList = merge(left,right)

        return sortedList
    }
    merge(l,r){
        let result = null
        if(l == null)
            return r
        if(r == null)
            return l

        if(l.val < r.val){
            result = l
            result.next = this.merge(l.next,r)
        }else{
            result = r
            result.next = this.merge(l,r.next)
        }
        return result
    }
    traverse(){
        let curr = this.head
        while(curr != null){
            console.log(curr.val)
            curr = curr.next
        }
    }
}

let list = new LinkedList()
list.push(12)
list.push(21)
list.push(43)
list.push(44)
list.push(11)
list.push(8)
list.push(76)
list.push(35)
console.log("Before Sorting....!")
list.traverse()
console.log("After Sorting....!")
console.log(list.merge(list))
