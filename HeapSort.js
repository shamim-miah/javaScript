class MaxBinaryHeap{
	constructor(){
		this.values=[90,54,26,25,36,17,1,7,3,2,19];
	}
	insert(elements){
		this.values.push(elements);
		this.bubbleUp();
	}
	bubbleUp(){
		let indx=this.values.length-1;
		let element=this.values[indx];
		while(indx>0){
			let parentIndx=Math.floor((indx-1)/2);
			let parent=this.values[parentIndx];
			if(element<=parent) break;

			this.values[parentIndx]=element;
			this.values[indx]=parent;
			indx=parentIndx;
		}
	}
	extrackMax(){
		let max=this.values[0];
		let end=this.values.pop();
		if(this.values.length>0){
		this.values[0]=end;
		this.sinkDown();
		}
		return max;
	}
	sinkDown(){
		let idx=0;
		let lengths=this.values.length;
		let element=this.values[0];

		while(true){
			let leftChildInx=2*idx+1;
			let rightChildInx=2*idx+2;
			let leftChild,rightChild;
			let swap=null;
			if(lengths>leftChildInx){
				leftChild=this.values[leftChildInx];
				if(leftChild>element){
					swap=leftChildInx;
				}
			}
			if(lengths>rightChildInx){
				rightChild=this.values[rightChildInx];
				if((swap===null && rightChild)||(swap !==null && rightChild>leftChild)){
					swap=rightChildInx;
				}
			}
		if(swap===null) break;
		this.values[idx]=this.values[swap];
		this.values[swap]=element;
		idx=swap;
		}
	}
}
let heap=new MaxBinaryHeap();