
let balance = 1000;
let limitation = 5000;
let limitationforDay = 6000;



while (true) {
    let choice = prompt('1.Снять деньги, 2. Баланс, 3. Положить деньги,  4. Выход')

if (choice == '1') {
    getMoney();
    getBalance();
} else if (choice == '2') {
    getBalance();
}
else if (choice == '3') {
    putMoney();
}

else if (choice == '4') {
        userExit();
        break;
}

}

function getMoney() {
   let summ = Number(prompt ('Введите сумму выведения средств'));
   balance -= summ;
   if (summ <= balance){
    alert('Вы снимаете: ' + summ);
} else if (summ > balance) {
    alert('Недостаточно средств')
}
}
function getBalance() {
    alert('Баланс' + balance);
    if (balance < limitationforDay) {    
        alert('Баланс: ' + balance);
        } else if (balance > limitationforDay) {    
            alert('Превышен лимит/день ' + limitation);
            }
}
function putMoney() {
    alert('Максимальная сумма для внесения 5000 грн./день');
    let money = Number(prompt ('Введите сумму для внесения'));
    balance += money;
    if (money < limitation ) {
        alert('Взнос составляет' + money);
    } else if (money > limitation) {
        alert('Взнос не должен превышать 5000 грн.');
    } 
}

function userExit() {
    alert('Выход');
}

//Добавить положить деньги
//+проверки для внесения и снятия средств; макс сумма для внесения 5к в день(если за седодня неск раз больше чем на 5к то нужно вынести)

