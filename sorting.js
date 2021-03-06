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

//Time Complexity O(nlogn)

/**
merge pseudocode
1.break up the array into halves until you have arrays that are empty
  or have one element
2. once you have smaller sorted arrays, merge those arrays until you back at the
   full length of the array
3. once the array has been merged back together return the merged(and sorted) array. 
**/

function merge(ar1,ar2){
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

function mergeSort(arr){
    if(arr.length===1) return arr;
    let mid=Math.floor(arr.length/2);
    let leftAr=mergeSort(arr.slice(0,mid));
    let rightAr=mergeSort(arr.slice(mid));
    return merge(leftAr,rightAr);
}


mergeSort([1,10,50],[2,14,99,100]);


//QuickSort

/**
QuickSort Pseudocode
1.Call the pivot helper on the array
2. when the helper returns to you the updated pivot index,
   recursiely call the pivot helper on the subarray to the left
   of that inde, and the subarray to the right of that index.
3. Your base case occurs when you consider a subarray with less than 2 elements
**/

function pivot(ar,start=0,end=ar.length){
    let currentEle=ar[start];
    let idx=start;
    for(let i=start+1;i<ar.length;i++){
        if(currentEle>ar[i]){
            idx++;
            [ar[i],ar[idx]]=[ar[idx],ar[i]];
        }
    }
    [ar[idx],ar[start]]=[ar[start],ar[idx]];
    return idx;
}

function quickSort(ar,left=0,right=ar.length-1){
    if(left<right){
    let pivotIdx=pivot(ar,left,right);
    //left
    quickSort(ar,left,pivotIdx-1);
    //right
    quickSort(ar,pivotIdx+1,right);
    }
    return ar;
}

quickSort([4,8,2,1,5,7,6,3]);


//Radix Sort

/*
Radix sort is a special sorting algorithm that works on lists of numbers
It never maker comparisons between elements
It exploits the fact that information about size of a number is encoded
 in the no of digits.  
*/

/*
   Radix Sort Pseudocode

1. Figure out how many digits the largest no has
2. Loop from k=0 up to this largest number has
3. For Each iteration of the loop:
   create buckets for each digit(0 to 9)
   place each no in the corresponding bucket based on its kth digit
4. Replace our existing array with values in our buckets, staring wih 0 and going up to 9
5. Reurn list at the end!
*/

function getDigit(num,i){
    return Math.floor(Math.abs(num)/Math.pow(10,i)%10)
}

function digitCount(num){
    return num === 0?1:parseInt((num).toString().length());
}

function mostDigit(ar){
    if(ar.length === 0) return;
    let no=0;
    ar.map(val=>{
       no=Math.max(no,val);
    })
    return parseInt((no).toString().length);
}

function radixSort(ar){
    let maxCount=mostDigit(ar);
    for(let k=0;k<maxCount;k++){
        let digitBuckets=Array.from({length:10},()=>[]);
        for(let i=0;i<ar.length;i++){
            let digit=getDigit(ar[i],k)
          digitBuckets[digit].push(ar[i]);
        }
        ar =[].concat(...digitBuckets);
    }
    return ar;
}

radixSort([23,345,5467,12,2345,9852]);
