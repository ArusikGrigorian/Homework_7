EX3

function getmxmnsum(arr){
 arr=arr.sort(function (a,b){return a-b;});
   var firstdig=arr[0];
   var lastdig=arr[arr.length-1];
  return firstdig+lastdig;  
  }
console.log(getmxmnsum([4, 3, -2, 1, 9, -8, 10]));


EX3_extra

function getmxmnsum(arr){
 var min=Math.min.apply(null, arr);
  var max=Math.max.apply(null, arr);
  return min+max;
  }
console.log(getmxmnsum([4, 3, -2, 1, 9, -8, 10]));
