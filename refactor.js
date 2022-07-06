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


