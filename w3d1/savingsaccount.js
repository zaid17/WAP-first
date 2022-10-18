import Account from "./account";
"use strict";
class SavingAccount extends Account {
  constructor(number, interest) {
    super(number);

    this._interest = interest;
  }

  addInterest() {
   this._balance+= (this._balance * this._interest) / 100;

   return `Interest added SavingsAccount ${this._number}: balance: ${this._balance} interest: ${this.interest}`;
  }

  toString() {
    "SacingAccount " +
      this._number +
      ": balance " +
      this._balance +
      " " +
      this._interest;
  }
  endOfMonth() {
    return this.addInterest().toString();
  }
}

export default SavingAccount;
