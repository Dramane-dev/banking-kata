import { OperationStates, OperationTypes } from "../classes/BankAccount";

export interface IAccountStatement {
    clientId: string;
    operationDate: string;
    operationType: OperationTypes;
    amount: number;
    balance: number;
    operationState: OperationStates;
}
