import moment from "moment";
import { IAccountStatement } from "../interfaces/AccountStatement.interface";
import { IBankAccount } from "../interfaces/Bank.interface";

export enum OperationTypes {
    Initialization = "Initialization",
    Deposit = "Deposit",
    Withdrawal = "Withdrawal",
}

export enum OperationStates {
    Success = "Success",
    Failed = "Failed",
}

export default class BankAccount implements IBankAccount {
    private _clientId!: string;
    private _amount!: number;
    private _balance: number = 0.0;
    accountStatement: IAccountStatement[] = [];

    constructor() {}

    public getClientId(): string {
        return this._clientId;
    }

    public getBalance(): number {
        return this._balance;
    }

    public getAmount(): number {
        return this._amount;
    }

    public setClientId(clientId: string): void {
        this._clientId = clientId;
    }

    public setAmount(amount: number): void {
        this._amount = amount;
    }

    public setBalance(): void {
        this._balance = this._amount;
    }

    public init(): string {
        let operationDate: string = moment().format("DD/MM/YYYY hh:mm:ss");
        this.setBalance();
        this._setAccountStatement(OperationTypes.Initialization, OperationStates.Success, operationDate);

        let resultMessage: string = `Bank account with client id ${this._clientId} initialized successfully!`;
        return resultMessage;
    }

    public deposit(depositAmount: number): string {
        if (isNaN(depositAmount)) {
            let resultErrorMessage: string = `Please verify your amount that want you deposit!`;
            console.log(resultErrorMessage);
            return `Please verify your amount that want you deposit!`;
        }

        let operationDate: string = moment().format("DD/MM/YYYY hh:mm:ss");
        this._amount = this._amount + depositAmount;
        this._balance = this._amount;

        this._setAccountStatement(OperationTypes.Deposit, OperationStates.Success, operationDate);

        let resultMessage: string = `The client ${this._clientId} has deposit ${depositAmount} on his account successfully!`;
        return resultMessage;
    }

    public withdrawal(withdrawalAmount: number): string {
        if (isNaN(withdrawalAmount)) {
            let resultErrorMessage: string = `Please verify your amount that want you withdrawal!`;
            console.log(resultErrorMessage);
            return resultErrorMessage;
        }

        if (withdrawalAmount > this._balance) {
            let resultErrorMessage: string = `You have ${this._balance.toFixed(
                2
            )} in your account! You should'nt withdrawal an amount greater than your balance...`;
            let operationDate: string = moment().format("DD/MM/YYYY hh:mm:ss");
            this._setAccountStatement(OperationTypes.Withdrawal, OperationStates.Failed, operationDate);
            return resultErrorMessage;
        }

        let operationDate: string = moment().format("DD/MM/YYYY hh:mm:ss");
        this._amount = this._amount - withdrawalAmount;
        this._balance = this._amount;

        this._setAccountStatement(OperationTypes.Initialization, OperationStates.Success, operationDate);

        let resultMessage: string = `The client ${this._clientId} has deposit ${withdrawalAmount.toFixed(
            2
        )} on his account successfully!`;
        console.log(resultMessage);
        return resultMessage;
    }

    private _setAccountStatement(
        operationType: OperationTypes,
        operationState: OperationStates,
        operationDate: string
    ): void {
        this.accountStatement = [
            ...this.accountStatement,
            {
                clientId: this._clientId,
                operationDate: operationDate,
                amount: this._amount,
                balance: this._balance,
                operationType: operationType,
                operationState: operationState,
            },
        ];
    }

    public accountStatementPrinting(): IAccountStatement[] {
        this.accountStatement.map((statement) =>
            console.log(
                `Client id : ${statement.clientId} | Date : ${statement.operationDate} | Operation type : ${
                    statement.operationType
                } | Amount : ${statement.amount.toFixed(2)} | Balance : ${statement.balance.toFixed(
                    2
                )} | Operation state : ${statement.operationState}`
            )
        );
        return this.accountStatement;
    }
}
