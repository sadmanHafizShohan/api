var shoppingCart = {
    pen: 25, 
    khata: 5,
    boook: 50
}
var penCount = shoppingCart["pen"];
var properties1 = Object.keys(shoppingCart)
var properties2= Object.values(shoppingCart)
// console.log(properties1);
// console.log(properties2);

shoppingCart.pen = 500;
console.log(shoppingCart);

shoppingCart["pen"] = 1000;
console.log(shoppingCart);

var propertiesName = 'pen';
var propertiesValue = shoppingCart[propertiesName];
console.log(propertiesValue);

shoppingCart[propertiesName] = 100;
console.log(shoppingCart);