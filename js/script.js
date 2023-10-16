let productProm;
let productlist = [];
let flag = false;
let i = 0;
while (productProm !== 'stop') {
productProm = prompt ('Ciao cosa vorresti comprare ??');

if (productProm !== 'stop') {
    productlist.push(productProm); 
}
    console.log(productlist);
} 
