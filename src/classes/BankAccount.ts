import moment from "moment";
import { IAccountStatement } from "../interfaces/AccountStatement.interface";
import { IBankAccount } from "../interfaces/Bank.interface";

export enum OperationTypes {
    Deposit = "Deposit",
    Withdrawal = "Withdrawal",
}

export default class BankAccount implements IBankAccount {
    clientId: string;
    amount: number;
    balance: number = 0.0;
    accountStatement: IAccountStatement[] = [];

    constructor(clientId: string, amount: number) {
        this.clientId = clientId;
        this.amount = amount;
    }

    getBalance(): number {
        return this.balance;
    }

    init(): string {
        this.accountStatement = [
            ...this.accountStatement,
            {
                clientId: this.clientId,
                operationDate: moment().format("DD/MM/YYYY"),
                amount: this.amount,
                balance: this.balance,
                operationType: "Initialization",
            },
        ];
        return `Bank account with client id ${this.clientId} initialized successfully!`;
    }

    deposit(): void {
        console.log(`Client ${this.clientId} deposit an amount to his account!`);
    }

    withdrawal(): void {
        console.log(`Client ${this.clientId} withdrawal an amount to his account!`);
    }

    accountStatementPrinting(): void {
        this.accountStatement.map((statement) =>
            console.log(
                `Client id : ${statement.clientId} | Date : ${statement.operationDate} | Operation type : ${
                    statement.operationType
                } | Amount : ${statement.amount.toFixed(2)} | Balance : ${statement.balance.toFixed(2)}`
            )
        );
    }
}
