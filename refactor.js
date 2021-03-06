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


//Multiple Pointers - isSubsequence
//isSubsequence is a function which takes in two strings and checks whether the characters
//in 1 string sorm subsequence of characters in the 2 string

//Recussive Method
//example : isSubsequence('sing','string')  ===> true
//          isSubsequence('abc','acb')  ===> false (orders matter)   

function isSubsequence(str1,str2,m=str1.length,n=str2.length) {
  // good luck. Add any arguments you deem necessary.
  if(m === 0) return true;
  if(n === 0) return false;
  
  if(str1[m-1] === str2[n-1]) return isSubsequence(str1,str2,m-1,n-1);
  return isSubsequence(str1,str2,m,n-1);
}

// sliding Window - maxSubArraySum
//Given an array of integers and a number, write a function called maxSubArraySum
//, which finds the maximum sum of a subarray with the length of the number passed to the function. 
//
//Note that a subarray must consist of consecutive  elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

//maxSubarraySum([100,200,300,400],2) ----> 700
//maxSubarraySum([1,4,2,10,23,3,1,0,20],4) ---->39

//Solution 1   Time complexity is -> O(n*k)
function maxSubArray(ar,no){
    let maxSum=0;

    if(ar.length<no) return null;

    for(let i=0;i<ar.length;i++){
        let temp=0;
        for(let j=0;j<no;j++){
            temp+=ar[i+j];
        }

        if(temp>maxSum) {
            maxSum=temp;
        }
    }

    return maxSum; 
}

//Solution 2  Time complexity is -> O(n)

function maxSubarraySum(ar,no){
    let maxSum=0;
    let currentSum=0;
    
    if(ar.length<no) return null;

    for(let i=0;i<no;i++){
        currentSum+=ar[i];
    }

    for(let i=no;i<ar.length;i++){
        currentSum= currentSum +ar[i]-ar[i-no];

        if(currentSum>maxSum){
            maxSum=currentSum;}
    }
    return maxSum; 
}



// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
// Examples:

// minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0
// Time Complexity - O(n)

// Space Complexity - O(1)


function minSubArray(ar,no){
   let start =0;
    let end=0; let total =0;
     let minLen=Infinity;

    while(start<ar.length){
        if(end < ar.length && total<no){
            total+=ar[end];
            end++;
        } else if(total>=no){
            minLen=Math.min(minLen,end-start);
            total-=ar[start];
            start++;
        } else {
            break;
        }
    }

    return minLen == Infinity ? 0 : minLen;
}




//write a function called findLongestSubstring
//which accepts a string and returns the length of the longest substring with all distinct characters.


// Time Complexity ---> O(n*2)
// Space Complexity ----> O(1)

function findLong(str){
    let n=str.length;
     if(n === 0) return 0;
     let maxLen=0;
    
    for(let i=0;i<n;i++){
        let visitedAr=[];

        for(let j=i;j<n;j++){
            if(visitedAr[str.charCodeAt(j)] === true) {
                break;
            }

            else {
                maxLen=Math.max(maxLen,j-i+1);
                visitedAr[str.charCodeAt(j)] =true;
                
                console.log(visitedAr)
            }
        }
    }
    return maxLen;
} 










//write a function which Return the sum of all even numbers in an object which may contain nested objects.

var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}







// write a function called faltten which accepts an array of arrays and 
//return a new array with all values flattened


function flatten(ar){
  // add whatever parameters you deem necessary - good luck!
 let finalAr=[];
 let temp=[...ar];
  
  while(temp.length){
      const next=temp.pop();
      if(Array.isArray(next)){
          temp.push(...next);
      } else {
          finalAr.push(next);
      }
  }
  
  return finalAr.reverse();
}

// flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
// flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
// flatten([[1],[2],[3]]) // [1,2,3]
// flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

function nestedEvenSum(obj){
    let sum=0;
    
    function totalSum(ob){
        for(let key in ob){
            if(typeof ob[key] === 'object'){
                totalSum(ob[key]);
            } else if(typeof ob[key] === 'number'){
                if(ob[key]%2 === 0){
                    sum+=ob[key];
                }
            }
        }
    }
    totalSum(obj);
    return sum;
}

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10






// write function called stringifyNumbers which takes in an object and finds all
//of the values which are numbers and converts and them to strings.



let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

function stringifyNumbers(obj){
    let newObj={};
    for(let key in obj){
        if(typeof obj[key] === 'number'){
            newObj[key] = obj[key].toString();
        } else if(typeof obj[key] === 'object' && !Array.isArray(obj[key])){
           newObj[key] = stringifyNumbers(obj[key]);
        } else {
             newObj[key] = obj[key];
        }
    }
    return newObj;
}


stringifyNumbers(obj)

/*
{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}
*/




//write a function called binarySearch which accepts a sorted array
// and a value and returns the index at which the value exists. Otherwise
// return -1


function binarySearch(ar,no){
  // add whatever parameters you deem necessary - good luck!
 let start=0;
 let end=ar.length-1;
 let mid=Math.floor((start+end)/2)
 while(ar[mid]!==no && start<=end){
     if(ar[mid]>no){
         end=mid-1;
     }
     else{
         start=mid+1;
     }
     mid=Math.floor((start+end)/2);
 }
 
  return ar[mid]==no ? mid : -1;
}







//write a function called naiveString which returns no of type shor string appears
// in long string.

function naiveString(str1,str2){
    let long=str1.split('');
    let short=str2.split('');

    let counter=0;

    for(let i=0;i<long.length;i++){
        for(let j=0;j<short.length;j++){
            console.log(short[j],long[i+j]);
        if(short[j]!==long[i+j]){
            console.log('break')
            break;
        }
            if(j === short.length-1)
                console.log("found one")
                counter++;
        }
    }
return counter;
}

naiveString('lorie loled','lol');
