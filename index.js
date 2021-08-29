let numbers =[1, 3, 5, 6, 7]
let mapNumber = numbers.map(x => x * 2);
// console.log(mapNumber)

let findMax = [221, 54, 65, 64, 74]
let mapN0 = findMax.map(findMaxNo => findMaxNo)
let maxNo = Math.max(mapN0)
// console.log(maxNo);

let products = [
    {price:34400, brand:'samsung', ship:'singapore', okay:{first:'htjlr', kak:5343} },
    {price:5849, brand:'jfah', ship:'filipine', okay:{first:'htjlrdfja', kak:69343} }
    
];
let productbrand = products.map(x => x.okay.first);
// let productship = products.forEach(x => x.price)
// map ar forEach prai ekoi sudu map er console korle output map return dibe kintu forEach dibe na return kinto kaj er ketre nana jaigai use kora jabe ei ar kih partoko
// console.log(productbrand);

let money = [
    {total: 2300, owner:{first:'ridoy', second:'mahbub'}, bank:'islami'},
    {total: 8760, owner:{first:'touhid', second:'abir'}, bank:'city'},
    {total: 2897, owner:{first:'tazim', second:'ronaldo'}, bank:'islami'},
    {total: 543, owner:{first:'kalam', second:'bassu'}, bank:'city'}
] 
let startFilter = money.filter(moneys => moneys.bank == 'islami');
// console.log(startFilter);
let startFind = money.find(y => y.total < 1000);
// console.log(startFind);

const mobile = {
    model1: 'samsumg galaxy',
    model2: 'samsung s series',
    model3: 'samsung s fold',
    model4:'samsung f fold'

}
const stringFied = JSON.stringify(mobile);
const parseString = JSON.parse(stringFied);
console.log(parseString);
 
