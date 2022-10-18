import Account from "./account";
import CheckingAccount from "./checkingaccount";
import SavingAccount from "./savingsaccount";
"use strict";
class Bank {
  static nextNumber = 1;
  constructor() {
    this._accounts = [];
  }

  addAccount(account) {
    this._accounts.push(new Account(nextNumber++));
  }
  addSavingsAccount(interest) {
    this._accounts.push(new SavingAccount(nextNumber++, interest));
  }

  addCheckingAccount(overdraft) {
    this._accounts.push(new CheckingAccount(nextNumber++, overdraft));
  }

  closeAccount(number) {
    this._accounts = this._accounts.filter((acc) => acc._number != number);
  }

  accountReport() {

   return this._accounts.map(e=>e.toString()).reduce((acc,e)=>acc+" "+e);
  }

  endOfMonth() {
    this._accounts.forEach(e=>console.log(e.endOfMonth()));
  }
}

export default Bank;
