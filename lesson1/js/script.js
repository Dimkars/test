var budget = +prompt("Ваш бюджет?");
var ShopName = prompt("Как называется Ваш магазин?");
console.log(budget);
console.log(ShopName);
var ShopGoods=[prompt("Какой тип товаров будем продавать?"),prompt("Какой тип товаров будем продавать?"), prompt("Какой тип товаров будем продавать?")];
var employers = {};
var mainList = {};
mainList = {
	budget: budget,
	ShopName: ShopName,
	ShopGoods:ShopGoods,
	employers: employers
}


console.log(mainList);
console.log(budget/30);