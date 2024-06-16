
function revstr (str){
    var s="";
    for(let i=str.length-1; i>=0;i--){
        s += str[i] ;
    }
    if(s==str){
        return true;
    }
    else{
        return false;
    }
}

str ="madam";
var s1 = revstr(str);
console.log(s1);