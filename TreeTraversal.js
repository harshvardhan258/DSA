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

    BFS(){
        let node=this.root,
        data=[],
        queue=[];
        queue.push(node);

        while(queue.length){
            node=queue.shift();
            data.push(node.value);
             if(node.left) queue.push(node.left);
             if(node.right) queue.push(node.right);
        }
        return data;
    }

    DFSPreOrder(){
        let data=[];
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    DFSPostOrder(){
        let data=[];
        function traverse(node){
           if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(this.root);
        return data;
    }

    DFSInOrder(){
        let data=[];
        function traverse(node){
           if(node.left) traverse(node.left);
            data.push(node.value);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }
}

var t = new BST();
t.insert(10);
t.insert(6);
t.insert(15);
t.insert(3);
t.insert(8);
t.insert(20);

//       10
//    6       15
// 3    8        20

// DFS - PreOrder [10,6,3,8,15,20]

// DFS - PostOrder [3,8,6,20,15,10]

// DFS - InOrder [3,6,8,10,15,20]

/**
Trees are non linear data sructure that contain a root and child nodes

Binary Trees can have values of any type, but at most two children for each parent.

BST(Binary Search Trees) are a more specific version of binary trees where every node to the left of a parent is less 
than it's value and every node to the right is greater.

We can search in trees using BFS and DFS.

---> when to use

DFS - InOrder

Used commonly with BST. Noice we get all nodes in the tree in their underlying order

DFS - PreOrder

Can be used to 'export' a tree structure so that it is easily reconstructed or copied.
**/
