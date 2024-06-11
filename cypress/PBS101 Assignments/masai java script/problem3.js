function calculateSalesTotals(sales) {
    var updatedSales = [];
  
    for (var i = 0; i < sales.length; i++) {
      var salePrice = sales[i].original * (1 - (sales[i].discount || 0));
      var total = sales[i].stock * salePrice;
  
      var updatedSale = {
        item: sales[i].item,
        original: sales[i].original,
        stock: sales[i].stock,
        sale: salePrice,
        total: total
      };
  
      if (sales[i].discount !== undefined) {
        updatedSale.discount = sales[i].discount;
      }
  
      updatedSales.push(updatedSale);
    }
  
    return updatedSales;
  }

  var sales = [
    { item: 'PS4 Pro', stock: 3, original: 399.99 },
    { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
    { item: 'Nintendo Switch', stock: 4, original: 299.99 },
    { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
    { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
  ];
  

  console.log(calculateSalesTotals(sales));
  