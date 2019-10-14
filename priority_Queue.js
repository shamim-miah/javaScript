class PriorityQueue{
    constructor(){
        this.values=[];
    }
    insert(val,priority){
        let newNode=new NodeForPriority(val,priority);
        this.values.push(newNode);
        this.enQueue();
    }
    enQueue(){
        let indx=this.values.length-1;
        let element=this.values[indx];
        while(indx>0){
            let parentIndx=Math.floor((indx-1)/2);
            let parent=this.values[parentIndx];
            if(element.priority<=parent.priority) break;
            this.values[parentIndx]=element;
            this.values[indx]=parent;
            indx=parentIndx;
        }
    }
    deQueue(){
        let max=this.values[0];
        let end=this.values.pop();
        if(this.values.length>0){
            this.values[0]=end;
            this.extrackMax();
        }
        return max;
    }
    extrackMax(){
        let indx=0;
        let length=this.values.length;
        let element=this.values[0];
        while(true){

        let leftChildInx=2*indx+1;
        let rightChildInx=2*2+2;
        let leftChild,rightChild;
        let swap=null;
        if(length>leftChildInx){
            leftChild=this.values[leftChildInx];
            if(leftChild.priority>element.priority){
                swap=leftChildInx;
            }

        }
        if(length>rightChildInx){
            rightChild=this.values[rightChildInx];
            if((swap===null &&rightChild.priority>element.priority)|| (swap!==nul && rightChild.priority>leftChild.priority)){
                swap=rightChildInx;
            }
        }
        if(swap===null) break;
        this.values[indx]=this.values[swap];
        this.values[swap]=element;
        indx=swap;
        }
    }

}
let p=new PriorityQueue();