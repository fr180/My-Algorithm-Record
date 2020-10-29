const longestMountain = function(A) {
    let res = 0, i = 0;
    for(i; i<A.length; i++) {
       if(A[i] < A[i+1]) {
           let len = 1;
           while(A[i] < A[i+1]) {
               len++;
               i++;
           }
           if(A[i+1] === undefined || A[i+1] === A[i]) {
               continue;
           }
           while(A[i+1] < A[i]) {
               i++;
               len++;
           }
           i--;
           if(len >= 3) {
               res = Math.max(res, len)
           }
       }
    }
    return res;
};
console.log(longestMountain([2, 2, 2])); 