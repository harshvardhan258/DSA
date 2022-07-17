// Bubble Sort
//Complexity time - O(n*2) worst

/**Bubble Sort Pseudocode
1. start looping from with a variable called i the end of the array towards the beginning
2. Start an inner loop with a variable called j from the beginning until i-1
3. if arr[j] is greater than arr[j+1],swap those two values
4.Return the sorted array
**/

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


//Selection Sort

// better Than bubble sort as it makes swap at end of second loop 
//unlike bubble sort which keep on swapping

//Selection sort works in such a way that values is compared
// and minimum value is placed at beginning of array

/**
Selection Sort Pseudocode

1. Store the first element as the smallest value you have seen so far.
2. Compare this item to the next item in the array until you find a smaller no.
3. If a smaller no is found,designate that smaller no to be the new "minimum" and continue
   until the end of the array.
4. If the "minimum" is not the value(index) you initially began with swap the two values.
5. Repeat his with the nex element until the array is sorted. 
**/

function selectionSort(ar){

    for(let i=0;i<ar.length;i++){
        let lowest=i;
        for(let j=i+1;j<ar.length;j++){
            if(ar[j]<ar[lowest]){
                lowest=j;
            }
        }
        if(i!==lowest)
        [ar[i],ar[lowest]]=[ar[lowest],ar[i]]
    }
    return ar;
}

selectionSort([34,22,10,19,17]);



//Insertion Sort

/**Insertion Sort Pseudocode
1. Start by picking the 2 element in the array
2. Now Compare the second element with the one before it and swap if necessary
3. Continue to the next element and if it is in the incorrect order, iterate through
   the sorted portion(i.e the left side) to place the element in the correct place.
4. Repeat until the array is sorted.
**/

function insertionSort(ar){
    for(let i=1;i<ar.length;i++){
        let currentVal=ar[i];
        let j=i-1
        for(;j>=0 && ar[j] > currentVal;j--){
                ar[j+1]=ar[j];
        }
        ar[j+1] =currentVal;
    }
    return ar;
}

insertionSort([2,1,9,76,4])



//merge sort

function mergeSort(ar1,ar2){
   let result =[];
    let i=0;
    let j=0;
    while(i<ar1.length&&j<ar2.length){
        if(ar1[i]>ar2[j]){
            result.push(ar2[j]);
            j++;
        } else {
            result.push(ar1[i]);
            i++;
        }
    }

    while(i<ar1.length){
        result.push(ar1[i]);
        i++;
    }

    while(j<ar2.length){
        result.push(ar2[j]);
        j++;
    }
    console.log(ar2)
 return result;   
}


mergeSort([1,10,50],[2,14,99,100]);
