var clientFavProducts               = prompt(`Кой вид продукти най-много обичаш да консумираш? Отговори с ЦИФРА: 1 = плодове и зеленчуци; 2 = месо и месни продукти; 3 = цигари и алкохол; 4 = млечни продукти; 5 = захарни изделия`);


if(clientFavProducts == 1) {
    var clientFavProductFrequency = prompt(`Колко често купувате плодове и зеленчуци? Отговори чрез "1" рядко, "2" понякога и "3" често`);
}
else if(clientFavProducts == 2) {
    var clientFavProductFrequency = prompt(`Колко често купувате месо и месни продукти? Отговори чрез "1" рядко, "2" понякога и "3" често`);
}
else if(clientFavProducts == 3) {
    var clientFavProductFrequency = prompt(`Колко често купувате цигари и алкохол? Отговори чрез "1" рядко, "2" понякога и "3" често`);
}
else if(clientFavProducts == 4) {
    var clientFavProductFrequency = prompt(`Колко често купувате млечни продукти? Отговори чрез "1" рядко, "2" понякога и "3" често`);
}
else if(clientFavProducts == 5) {
    var clientFavProductFrequency = prompt(`Колко често купувате захарни изделия? Отговори чрез "1" рядко, "2" понякога и "3" често`);
}

fifthDigit = parseInt(clientFavProducts) + parseInt(clientFavProductFrequency);
console.log(`Fifth digit: ${fifthDigit}`);