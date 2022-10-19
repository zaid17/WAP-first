import Account from "./account";
import CheckingAccount from "./checkingaccount";
import SavingAccount from "./savingsaccount";
("use strict");

class Computer {
  constructor(ram, cpu, storage) {
    this._ram = ram;
    this._cpu = cpu;
    this._storage = storage;
  }

  setCpu(cpu) {
    this._cpu = cpu;
  }

  setRam(ram) {
    this._ram = ram;
  }
  setStorage(storage) {
    this._storage = storage;
  }

  getCpu() {
    return this._cpu;
  }

  getRam() {
    return this._ram;
  }

  getStorage() {
    return this._storage;
  }

  runProgram(program) {
    console.log("running: " + program);
  }
}

class Laptop extends Computer {
  constructor(ram, cpu, storage, battery) {
    super(ram, cpu, storage);
    this._battery = battery;
  }

  setBattery(battery) {
    this._battery = battery;
  }

  getBattery() {
    return this._battery;
  }

  carryAround() {
    console.log(
      "carrying laptop:  cpu" +
        this._cpu +
        " ram: " +
        this._ram +
        " storage: " +
        this._storage +
        " battery: " +
        this._battery
    );
  }
}

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
    return this._accounts
      .map((e) => e.toString())
      .reduce((acc, e) => acc + " " + e);
  }

  endOfMonth() {
    this._accounts.forEach((e) => console.log(e.endOfMonth()));
  }
}

export default Bank;
