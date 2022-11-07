export interface IAccountStatement {
    clientId: string;
    operationDate: string;
    operationType: "Initialization" | "Deposit" | "Withdrawal";
    amount: number;
    balance: number;
}
