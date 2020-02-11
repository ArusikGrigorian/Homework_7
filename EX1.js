EX1

function getaverage(arr){
  var newarr=[];
  var sum=0;
  for(var i=0; i<arr.length; i++){
    if(arr[i]>0){
      newarr.push(arr[i]);
    }
  }
  for(var j=0; j<newarr.length; j++){
        sum+=newarr[j];
      }
  return sum/newarr.length;
}
console.log(getaverage([-1, -2, 2, 4, 3, 8, 5, -5, 7, 6]));


EX1_extra

function getaverage(arr){
  var newarr=[];
  for(var i=0; i<arr.length; i++){
    if(arr[i]>0){
      newarr.push(arr[i]);
      }
    }
    return newarr.reduce(function(a,b){return a+b;})/newarr.length;
  }
console.log(getaverage([-1, -2, 2, 4, 3, 8, 5, -5, 7, 6]));
