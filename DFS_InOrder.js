class Node{
	constructor(value){
		this.value=value;
		this.left=null;
		this.right=null;
	}
}

class BinarySearchTree{
	constructor(){
		this.root=null;
	}
	insert(value){
		let newNode=new Node(value);
		if(this.root===null){
			this.root=newNode;
			return this;
		}else{
			let current=this.root;

			while(true){
				if(value===current.value) return undefined;
				if(value<current.value){
					if(current.left==null){
						current.left=newNode;
						return this;
					}else{
						current=current.left;
					}
				}else if(value>current.value){
					if(current.right===null){
						current.right=newNode;
						return this;
					}else{
						current=current.right;
					}
				}
			}
		}

	}

	DFSInOrder(){
		let data=[];

		function traverse(node){
	        if(node.left) traverse(node.left);
			data.push(node.value);
			console.log(node);
			if(node.right) traverse(node.right);
		}

		traverse(this.root);
		return data;
	}
	
}

let tree=new BinarySearchTree();
tree.insert(10);
tree.insert(3);
tree.insert(12);
tree.insert(2);
tree.insert(5);
tree.insert(11);
tree.insert(15);
