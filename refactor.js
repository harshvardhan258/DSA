//Divide and conquer algo
// time complexity : logn

function binarySearch(arr,no){
 let min=0;
 let max=arr.length-1;
    while(max>=min){
        let middle = Math.floor((min+max)/2);
        let currentEle = arr[middle];

        if(arr[middle]<no) min = middle+1;
        else if(arr[middle]>no) max=middle-1;
        else return middle;
    }
    return -1;
}
