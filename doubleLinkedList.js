
class Node{
    constructor(val){
        this.val=val;
        this.next=null;
        this.prev=null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }

    push(val){
        let newNode=new Node(val);
        if(!this.head){
            this.head=newNode;
            this.tail=newNode;
        } else {
            this.tail.next=newNode;
            newNode.prev=this.tail;
            this.tail=newNode;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        let poppedNode=this.tail;
        if(this.length === 1){
            this.head=null;
            this.tail=null;
        }
        
        if(this.length>1){
            this.tail=poppedNode.prev;
            this.tail.next=null;
            poppedNode.prev=null;
        }
        this.length--;
        return poppedNode;
    }

    shift(){
        if(this.length===0) return undefined;
        let shiftNode=this.head;
        if(this.length===1){
            this.head=null;
            this.tail=null;
        }
        if(this.length>1){
            this.head=shiftNode.next;
            this.head.prev=null;
            shiftNode.next=null;
        }
        this.length--;
        return shiftNode;
    }

    unshift(val){
        let newNode=new Node(val);
        if(this.length === 0){
            this.head=newNode;
            this.tail=newNode;
        } else {
            this.head.prev=newNode;
            newNode.next=this.head;
            this.head=newNode;
        }
        this.length++;
        return this;
    }

    get(idx){
        if(idx<0||idx>=this.length) return undefined;
        let mid=Math.floor(this.length/2);
        if(idx>mid){
            let count=this.length-1;
            let temp=this.tail;
            while(count!==idx){
                temp=temp.prev;
                count--;
            }
            return temp;
        } else {
            let count=0
            let temp=this.head;
            while(count!==idx){
                temp=temp.next;
                count++;
            }
            return temp;
        }
    }
}

let dlist=new DoublyLinkedList();
