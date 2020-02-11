EX5

function checkemail(str){
  var sum=0;
  for(var i=0; i<str.length; i++){
    if(str[i]==="@" || str[i]==="."){
        sum+=1;
      if(sum>2 || str.indexOf(".")<str.indexOf("@")){
        return "Invalid e:mail address";
      }
    }
    else if(str[i]==="/" || str[i]==="(" || str[i]===")"){
        return "Invalid e:mail address";
    }
  }
  return "Valid e:mail address";
}
console.log(checkemail("katukatvikyan@gmail.com"));



EX5_extra

function checkmail(str){
  var sum=0;
  var prnts=str.indexOf("(");
  var bkprnts=str.indexOf(")");
  var sl=str.indexOf("/");
  var bksl=str.indexOf("\"");
  if(prnts!=-1 || bkprnts!=-1 || sl!=-1 || bksl!=-1){
    return "Invalid e:mail address";
  }
  for(var i=0; i<str.length; i++){
    if(str[i]==="@" || str[i]==="."){
       sum+=1;
      if(sum>2 || str.indexOf(".")<str.indexOf("@")){
        return "Invalid e:mail address";
      }
    }
  }
  return "Valid e:mail address";
}
console.log(checkmail("katukatvikyan@gmail.com"));