class Node{
    constructor(val){
        this.val = val
        this.left = null
        this.right = null
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }
    insert(val){
        let n = new Node(val)
        if(!this.root){
            this.root = n
        }else{
            let current = this.root
            while(true){
                if(val == current.val)
                    return undefined
                if(current.val > val){
                    if(current.left == null){
                        current.left = n
                        return this
                    }else{
                        current = current.left
                    }
                }else if(current.val < val){
                    if(current.right == null){
                        current.right = n
                        return this
                    }else{
                        current = current.right
                    }
                }
            }
        }
    }
    search(val){
        if(!this.root)
            return "Tree is empty...!"
        let current = this.root
        while(current){
            if(current.val > val){
                current = current.left
            }
            else if(current.val < val){
                current = current.right
            }
            else{
                return current
            }
        }
        return "Node not found...!"
    }
    BFS(){
        let data = []
        let queue = []
        let node = null
        // 1. Push the root node first
        queue.push(this.root)
        while(queue.length){
            // 2. storing the node into a variable to check its left and right
            node = queue.shift()
            data.push(node.val)
            if(node.left)
                queue.push(node.left)
            if(node.right)
                queue.push(node.right)
        }
        return data
    }
    DFSpreOrd(){
        let data = []
        function traverse(node){
            data.push(node.val)
            if(node.left)
                traverse(node.left)
            if(node.right)
                traverse(node.right)
        }
        traverse(this.root)
        return data
    }
    DFSpostOrd(){
        let data = []
        function traverse(node) {
            if(node.left)
                traverse(node.left)
            if(node.right)
                traverse(node.right)
            data.push(node.val)
        }
        traverse(this.root)
        return data
    }
    DFSinOrd(){
        let data = []
        function traverse(node) {
            if(node.left)
                traverse(node.left)
            data.push(node.val)
            if(node.right)
                traverse(node.right)
        }
        traverse(this.root)
        return data
    }
}
let tree = new BinarySearchTree()
tree.insert(10)
tree.insert(5)
tree.insert(15)
tree.insert(20)
tree.insert(12)
tree.insert(7)
console.log(tree.insert(4))
console.log(tree.search(5))
console.log(tree.BFS())
console.log(tree.DFSpreOrd())
console.log(tree.DFSpostOrd())
console.log(tree.DFSinOrd())
