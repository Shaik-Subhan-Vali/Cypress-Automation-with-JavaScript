
var vegobj ={
    data :[],
    cart: function(name, quantity, price){
        this.data.push({name:name,quantity:quantity,price:price}
        )
    },
    total: function(){
        var t =0;
        for(var i=0;i<this.data.length;i++){
            t +=this.data[i].quantity * this.data[i].price;
        }       
    return t ;
    },
};
var products = ["Rice", "Dal", "Salt"] ;
var quant = [2, 3, 1];
var price = [60, 50, 20];

for(var i=0;i<products.length;i++){
    vegobj.cart(products[i],quant[i],price[i]);
   
}
console.log(vegobj.total())