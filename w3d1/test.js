import chai from 'chai';
import mocha from 'mocha'
import Account from './account';
import Bank from './bank';
import CheckingAccount from './checkingaccount';
import SavingAccount from './savingsaccount';
import SavingsAccount from './savingsaccount';
// chai has a lot of stuff, let's make assert global
let assert = chai.assert;

const account= new Account(1);

account.deposit(50);

describe("deposit", function () {
    it("add to the balance",
        function () {
            assert.equal(account.getBalance(),50);
        });
});
account.withdraw(10);

describe("withdraw", function () {
    it("widhraw",
        function () {
            assert.equal(account.getBalance(),40);
        });
});

const savingsaccount = new SavingsAccount(2,2.5);
savingsaccount.deposit(100);
savingsaccount.addInterest()
describe("addInterest", function () {
    it("addInterest",
        function () {
            
            assert.equal(SavingAccount.getBalance(),(100 * 2.5) / 100+100);
        });
});

const checkingaccount = new CheckingAccount(3,200);

checkingaccount.withdraw(100);

describe("checkingaccount withdraw", function () {
    it("checkingaccount withdraw",
        function () {
            
            assert.equal(checkingaccount.getBalance(),-100);
        });
});


const bank= new Bank();

bank.addAccount();
bank.addSavingsAccount(1.5);
bank.addCheckingAccount(200);
bank.addAccount();


bank.closeAccount(4);

console.log(bank.accountReport());

console.log(bank.endOfMonth());