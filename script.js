'use strict'

let money, time;

function start(){
    money = +prompt("1 Ваш бюджет на месяц?", '');
    time = +prompt('2 Введите дату в формате YYYY-MM-DD', '');
    
    while(isNaN(money) || money == "" || money=="null") {
        money = +prompt("3 Ваш бюджет на месяц?", '');
    }
}
start();

let appData = {
	budget: money,
	expenses: {},
	optionalExpenses: {},
	income: [],
	timeData: time,
	savings: true
};

function chooseExpenses(){
    for (let i=0; i<2; i++) {
        	let	a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется?", '');
         
            if ( (typeof(a))== "string" && typeof(a) != null && typeof(b) != null && a != "" && b != "" && a.length <= 50) { 
                console.log('done');
                appData.expenses[a] = b;
            } else {
                i = i - 1
            }

    }
}

chooseExpenses();



function detectDayBudget(){
 
    (appData.moneyPerDay = appData.budget / 30).toFixed(1); //toFixed(1) округление до 1 цифры послезапятой

    alert("Ежедневный бюджет = " + appData.moneyPerDay);  

}
	
detectDayBudget();


function detectLevel(){

    if ( appData.moneyPerDay <= 100) {
        console.log("Минимальный уровень достатка");
    } else if ( appData.moneyPerDay > 100  &&  appData.moneyPerDay <= 2000) {
        console.log("Средний уровень достатка");
    } else if ( appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    } else {
        console.log ("Произашла ошибка");
    }

}
  detectLevel();   
  


function checkSavings(){
    if (appData.savings == true){
        let save = +prompt('Какова сумма накоплений ?'),
            percent = +prompt('Под какой процент ?');

        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяцсвашего депозита: " + appData.monthIncome);   
    }
}
checkSavings();

let optionalExpenses = {
    answer_to_question : {}
    }

function chooseOptExpenses(){
    for (let i=0; i<3; i++) {
        let	a = prompt("Статья необязательных расходов", '');

        if ( (typeof(a))== "string" && typeof(a) != null && a != "" && a.length <= 50) { 
            console.log('есть ответ');
            optionalExpenses.answer_to_question[i] = a;
        } else {
            i = i - 1
        }

    }

}

chooseOptExpenses();
