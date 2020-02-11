EX2

function getsqsum(arr){
  var sum=0;
   for(var i=0; i<arr.length; i++){
     sum+=Math.pow(arr[i],2); // sum+=arr[i]*arr[i]; // sum+=arr[i]**2; 
      }
    return sum;
  }
console.log(getsqsum([2, 3, 4, -5, -6, 0]));
