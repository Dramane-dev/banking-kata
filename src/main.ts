import { v4 } from "uuid";
import BankAccount from "./classes/BankAccount";

let clientId: string = v4();
let starterAmount: number = 0.0;
let userBankaccount: BankAccount = new BankAccount();

userBankaccount.setClientId(clientId);
userBankaccount.setAmount(starterAmount);
userBankaccount.init();
userBankaccount.accountStatementPrinting();

let withdrawalAmount: number = 5.0;
userBankaccount.withdrawal(withdrawalAmount);
userBankaccount.accountStatementPrinting();
