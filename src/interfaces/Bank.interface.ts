import { OperationTypes } from "../classes/BankAccount";

export interface IBankAccount {
    getClientId(): string;
    getAmount(): number;
    getBalance(): number;
    setClientId(clientId: string): void;
    setAmount(amount: number): void;
    setBalance(): void;
    deposit(amount: number): string;
    withdrawal(amount: number): string;
    accountStatementPrinting(): void;
}
