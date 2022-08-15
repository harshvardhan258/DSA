class Node{
    constructor(val){
        this.value=val;
        this.left=null;
        this.right=null;
    }
}

class BST{
    constructor(){
     this.root=null;   
    }

    insert(val){
        let newNode= new Node(val);
        if(!this.root){
            this.root = newNode;
            return this;
        }
           let current=this.root;
            while(true){
                if(val === current.value){
             return undefined;   
            }
            if(val < current.value){
                if(current.left === null){
                    current.left=newNode;
                    return this;
                } else {
                    current=current.left;
                }
                
            } else if(val > current.value) {
                if(current.right===null){
                    current.right=newNode;
                    return this;
                } else {
                    current=current.right;
                }
            }
            
            }
    }

    find(val){
        if(!this.root){
            return false;
        }
        let current=this.root;
        found = false;
        while(current && !found){
            if(val < current.value){
                current=current.left;
            } else if(val > current.value){
                current = current.right;
            } else {
                found = true;
            }
        }
        if(!found) return false;
        return current;
    }
}

var t = new BST();
tree.insert(10);
tree.insert(5);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
