import { v4 } from "uuid";
import BankAccount from "./classes/BankAccount";

let clientId: string = v4();
let starterAmount: number = 10.0;
let userBankaccount: BankAccount = new BankAccount();

userBankaccount.setClientId(clientId);
userBankaccount.deposit(starterAmount);

let withdrawalAmount: number = 15.0;
userBankaccount.withdrawal(withdrawalAmount);

let depositAmount: number = 45.0;
userBankaccount.deposit(depositAmount);
userBankaccount.withdrawal(withdrawalAmount);
userBankaccount.accountStatementPrinting();
