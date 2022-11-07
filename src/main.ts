import moment from "moment";
import { v4 } from "uuid";
import BankAccount from "./classes/BankAccount";

console.log(`Script started successfully! ${moment().format("DD/MM/YYYY")}`);
let userBankaccount: BankAccount = new BankAccount(v4(), 0.0);
userBankaccount.init();
userBankaccount.accountStatementPrinting();
