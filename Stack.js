class Node{
    constructor(val){
        this.val = val; 
        this.next = null;
    }
}
class Stack{
    constructor(){       
        this.lenth = 0;
        this.head = null;
        this.tail = null;   
    }
    push(val){        
        let newNode = new Node(val);
        if(this.lenth === 0){
            this.head = newNode;                      
        }else{
            this.tail.next = newNode; 
        }
        this.tail = newNode; 
        this.lenth += 1;
        return newNode
    }
    pop(){
        if(this.lenth === 0)return undefined;
        
        let currentNode = this.head;
        let prevNode = currentNode;
        
        while(currentNode.next){
            prevNode = currentNode;
            currentNode = currentNode.next;
        }
        
        prevNode.next = null;
        this.tail = prevNode;
        this.lenth--;
        return currentNode;
    } 
    size(){
        return this.lenth;       
    }        
}
const myStack = new Stack();
myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.push(4)
myStack.push(5)
myStack.pop()
console.log(myStack.size());
