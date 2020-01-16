'use strict'

let money = +prompt("1 Ваш бюджет на месяц?", ''),
	time = +prompt('2 Введите дату в формате YYYY-MM-DD', '');

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: false
};

for (let i = 0 ; i < 2; i++) {

	// let	a = prompt("Введите обязательную статью расходов в этом месяце", ''),
	// 	b = prompt("Во сколько обойдется?", '');

	// if ( 
	// 		typeof(a) === "string" && 
	// 		typeof(a) != null && 
	// 		typeof(b) != null && 
	// 		a != "" && 
	// 		b != "" && 
	// 		a.length <= 50 && 
	// 		b.length <= 50 
	// 	) {
	// 		console.log('done');
	// 		appData.expenses[a] = b;
	// 	} else {
	// 		i--
	// 	}

	let a, b;

	do {
		a = prompt("Введите обязательную статью расходов в этом месяце", ''),
		b = prompt("Во сколько обойдется?", '');		

		if (  a.length > 0 && b.length > 0 && a.length <= 50 && b.length <= 50 ){
			appData.expenses[a] = b;
			console.log('appData.expenses['+ a +'] = ', appData.expenses[a]);
		}

	} while ( a.length == 0 || b.length == 0 || typeof(a) == null || typeof(b) == null );		

}
	
appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет = " + appData.moneyPerDay);

if ( appData.moneyPerDay <= 100) {
	console.log("Минимальный уровень достатка");
} else if ( appData.moneyPerDay > 100  &&  appData.moneyPerDay <= 2000) {
	console.log("Средний уровень достатка");
} else if ( appData.moneyPerDay > 2000) {
	console.log("Высокий уровень достатка");
} else {
	console.log ("Произошла ошибка");
}
