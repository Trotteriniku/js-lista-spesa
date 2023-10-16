let productProm;
let productlist = [];

while (productProm !== 'stop') {
productProm = prompt ('Ciao cosa vorresti comprare ??');

if (productProm !== 'stop' && productProm !== '') {

    productlist.push(productProm)
}
} 

const listEl = document.getElementById('list')
for ( i = 0; i < productlist.length; i++) {
    const listItemEL = document.createElement('li');
    listItemEL.innerHTML=productlist[i];
    listEl.appendChild(listItemEL);
}