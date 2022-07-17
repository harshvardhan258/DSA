// Bubble Sort
//Complexity time - O(n*2) worst


//Solution 1
function bubbleSort(ar){
    for(let i=0;i<ar.length;i++){
        for(let j=i+1;j<ar.length;j++){
            if(ar[i]>ar[j]){
                [ar[i],ar[j]]=[ar[j],ar[i]];
            }
        }
    }
    return ar;
}

bubbleSort([37,45,29,8]);

//solution 2
//Complexity time - O(n) best

//Less no of looping Optimised using noSwaps
function bubbleSort(ar){
    let noSwaps;
    for(let i=0;i<ar.length;i++){
        noSwaps=true;
        for(let j=i+1;j<ar.length;j++){
            if(ar[i]>ar[j]){
                [ar[i],ar[j]]=[ar[j],ar[i]];
                noSwaps=false;
            }
        }
        if(noSwaps) break;
    }
    return ar;
}

bubbleSort([37,45,29,8]);

