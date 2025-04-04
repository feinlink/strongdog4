/* Форматирование числа с разделителем
* @param integer n: длина десятичного числа
* @param integer x: длина всей части
* @parammixed s: разделитель разделов
* @param смешанный c: десятичный разделитель
*/
Number.prototype.formatMoney = function(n, x, s, c) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
        num = this.toFixed(Math.max(0, ~~n));

    return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
};
/**
12345678.9.format(2, 3, '.', ',');  // "12.345.678,90"
123456.789.format(4, 4, ' ', ':');  // "12 3456:7890"
12345678.9.format(0, 3, '-');       // "12-345-679
**/

function sequenceValue(n) {
    const a1 = 20;
    let sum = 0;

    for (let i = 1; i < n; i++) {
        sum += 49 + i;
    }

    return a1 + sum;
}

const sdkElem = document.createElement("script");
sdkElem.type = "text/javascript";
sdkElem.src = "https://sdk.crazygames.com/crazygames-sdk-v3.js";
document.body.appendChild(sdkElem);