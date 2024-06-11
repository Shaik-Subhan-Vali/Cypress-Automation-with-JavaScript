var movies = [2,4,5,6,7,10,12];
var len = movies.length;
for(var i = 0; i < len  ; i++){
   if(i==2){
      continue;
   }
   else if(i==4){
      continue;
   }
   console.log(movies[i]);
}
