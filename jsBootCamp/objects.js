let myAccount = {
    name: 'Jerel Layog',
    expenses: 0,
    income: 0
}

let addExpense = function (account, amount) {
    account.expenses = account.expenses + amount
}

let addIncome = function (account, income) {
    account.income = account.income + income
}

let resetAccount = function (account) {
    account.expenses = 0
    account.income = 0
}

let getAccountSummary = function (account) {
    let balance = account.income - account.expenses;
    return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses.`
}

addIncome(myAccount, 1000)
addExpense(myAccount, 400)
addExpense(myAccount, 50)
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))