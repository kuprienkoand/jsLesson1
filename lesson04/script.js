'use strict';

let money = +prompt('Ваш месячный доход?'),
    addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую'),
    deposit = confirm('Есть ли у вас депозит в банке?');

let showTypeof = function (item) {
  console.log(item, typeof item);
};

showTypeof(money);
showTypeof(addExpenses);
showTypeof(deposit);

let question = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    question2 = +prompt('Во сколько это обойдется?'),
    question3 = prompt('Какие обязательные ежемесячные расходы у вас есть?'),
    question4 = +prompt('Во сколько это обойдется?');

function getExpensesMonth() {
  return question2 + question4;
};

let budgetMonth = money - (question2 + question4);

let accumulatedMonth;
function getAccumulatedMonth() {
  accumulatedMonth = money - (question2 + question4);
  return accumulatedMonth;
};

let mission = +prompt('Цель: сколько Вы хотите заработать?'),
  period = mission / budgetMonth;

function getTargetMonth() {
  return mission / accumulatedMonth;
}
console.log('Cрок достижения цели', Math.floor(getTargetMonth()), 'месяцев');

let budgetDay = budgetMonth / 30;

function getStatusIncome() {
  let n = budgetDay;
  if (n > 800) {
    return ('Высокий уровень дохода');
  } else if (n <= 800 && n > 300) {
    return ('Средний уровень дохода');
  } else if (n <= 300 && n >= 0) {
    return ('Низкий уровень дохода');
  } else if (n < 0) {
    return ('Что то пошло не так)))');
  }
}
console.log('getStatusIncome(): ', getStatusIncome());
