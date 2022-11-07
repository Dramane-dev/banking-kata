import { OperationTypes } from "../classes/BankAccount";

export interface IBankAccount {
    clientId: string;
    amount: number;
    balance: number;
    deposit(): void;
    withdrawal(): void;
    accountStatementPrinting(): void;
}
