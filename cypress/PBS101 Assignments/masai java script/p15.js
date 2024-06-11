function smallchar(char) {
    var l = "abcdefghijklmnopqrstuvwxyz";
    for (var i = 0; i < l.length; i++) {
      if (char == l[i]) {
        return true;
      }
    }
  }

  if(smallchar('a')){
      console.log("yes");  
  }
  else{
    console.log("no");
  }