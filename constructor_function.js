function BankAccount(customerName, balance = 0) {
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;

    this.deposit = function (amount) {
        this.balance = this.balance + amount;
    }

    this.withdraw = (amount) => {
        this.balance -= amount
    }

}

console.log(BankAccount.prototype);
// const rakeshAccount = new BankAccount('Rakesh K', 1000);
// const johnAccount = new BankAccount('John Doe')
// johnAccount.deposit(10000);
// console.log(johnAccount);
// rakeshAccount.withdraw(500)
// console.log(rakeshAccount);
const accounts=[];
const accountForm=document.querySelector("#accountForm");
const customerName=document.querySelector("#customerName");
const balance=document.querySelector("#balance");

accountForm.addEventListener("submit",(e)=>{
e.preventDefault();
const account=new BankAccount(customerName.value,+balance.value)
 accounts.push(account)
 console.log(accounts);
})

const depositForm=document.querySelector("#depositForm");
const accountNumber=document.querySelector("#accountNumber");
const amount=document.querySelector("#amount");

depositForm.addEventListener("submit",(e)=>{
e.preventDefault();
const account=accounts.find((account)=>account.accountNumber=== +accountNumber.value);
account.deposit(+amount.value)
console.log(accounts);
})

const withdrawForm=document.querySelector("#withdrwalForm");
const accountNumber1=document.querySelector("#accountNumber1");
const amount1=document.querySelector("#amount1");
withdrawForm.addEventListener("submit",(e)=>{
    e.preventDefault();
    const account=accounts.find((account)=>account.accountNumber=== +accountNumber1.value);
    account.withdraw(+amount1.value);
    console.log(accounts);
})