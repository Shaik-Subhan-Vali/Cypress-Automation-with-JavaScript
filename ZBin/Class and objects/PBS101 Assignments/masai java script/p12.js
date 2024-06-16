
function revstr (str){
    var x="";
    for(let i=str.length-1; i>=0;i--){
        x += str[i] ;
    }
    return x;
}

str ="hello";
var s1 = revstr(str);
console.log(s1);
