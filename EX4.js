EX4

function getmxmnsum(arr){
  var newarr=[];
  var prod=[];
for(var i=0; i<arr.length; i++){
 if(arr[i]<0) {
  newarr.push(arr[i]);
  }
}
  for(var j=0; j<newarr.length; j++){
    if(newarr[j+1]!==undefined){         // if(newarr[j+1]===undefined){break;}else{...}
   prod.push(newarr[j]*newarr[j+1])
  }
  }
  return Math.max.apply(null,prod);
  }
console.log(getmxmnsum([-4, 2, 7, 0, -3, -2, -2, -8, 5, -8, -9]));



EX4_extra

function returnmaxprod(arr=[-1],i=0){
 if(i===arr.length-1){
   arr.pop()
   return arr;
 }
 arr[i]=arr[i]*arr[i+1]
 i++;
 returnmaxprod(arr,i);
   return Math.max.apply(null,arr);
}
returnmaxprod();


function getmxmnsum(arr){
  var newarr=[];
  for(var i=0; i<arr.length; i++){
    if(arr[i]<0){
      newarr.push(arr[i]);
    }
  }
  return returnmaxprod(newarr);
}
console.log(getmxmnsum([-4, 2, 7, 0, -3, -2, -2, -8, 5, -8, -9]));
