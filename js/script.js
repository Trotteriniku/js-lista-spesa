let productProm = prompt ('Ciao cosa vorresti comprare ??')
console.log(productProm);
let productlist = [];
let flag = false
let i = 0;
while (i < 0 && !flag) {

   productProm = prompt ('Ciao cosa vorresti comprare ??') 

   if (productProm === 'stop') {
        flag === true
   }
    
} 

productlist.push(productProm);
console.log(productlist);