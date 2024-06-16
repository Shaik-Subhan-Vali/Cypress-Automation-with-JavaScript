for (var i = 1; i <= 10 ; i++) {
    var s="";
    for (var j = 1; j <= 10; j++)
        {
  
      if(i==1 || i ==10  ){
        s += "*"+"";

      }
      else
      {
        if(j==1 || j==10){
            s+="*";

        }
        else{
            s+=" ";

        }
       
      }

    }
    console.log(s); 
  }