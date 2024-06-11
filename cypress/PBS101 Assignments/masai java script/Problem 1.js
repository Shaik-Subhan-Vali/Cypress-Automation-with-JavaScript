var rectobj = {
    l :0 ,
    w:0 ,
  
    area: function() {
      return this.l *this.w ;
    },
  
    perim: function() {
      return 2 * (this.l + this.w);
    }  
  };
  
  rectobj.l = 2;
  rectobj.w =5;
  console.log("Area is",rectobj.area());
  console.log("Perimeter is",rectobj.perim());
  