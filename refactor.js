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
