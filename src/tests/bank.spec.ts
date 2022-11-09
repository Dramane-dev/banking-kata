import assert from "assert";
import { describe, it } from "mocha";
import { v4 } from "uuid";

import BankAccount from "../classes/BankAccount";
import { IAccountStatement } from "../interfaces/AccountStatement.interface";

describe("#Bank Account class Testing", () => {
    let clientId: string = v4();
    let bankAccount: BankAccount = new BankAccount();
    bankAccount.setClientId(clientId);

    describe("#Bank deposit operation", () => {
        let depositAmount: number = 50.0;

        it("should return sentence string with the amount that client has deposit", () => {
            assert.equal(
                bankAccount.deposit(depositAmount),
                `The client ${bankAccount.getClientId()} has deposit ${depositAmount} on his account successfully!`
            );
        });

        it("should return the amount that client has deposit", () => {
            let accountStatement: IAccountStatement[] = bankAccount.accountStatementPrinting();
            let balance: number = accountStatement[accountStatement.length - 1].balance;
            assert.ok(balance === depositAmount);
        });
    });

    describe("#Bank withdrawal operation", () => {
        let withdrawalAmount: number = 12.9;
        let resultMessage: string = `The client ${bankAccount.getClientId()} has deposit ${withdrawalAmount.toFixed(
            2
        )} on his account successfully!`;
        let resultErrorMessage: string = `You have ${bankAccount
            .getBalance()
            .toFixed(2)} in your account! You should'nt withdrawal an amount greater than your balance...`;

        bankAccount.accountStatementPrinting();

        it("should return sentence string with the amount that client has withdrawal", () => {
            assert.equal(bankAccount.withdrawal(withdrawalAmount), resultMessage);
        });

        it("should return sentence string asking to client to check the amount because it greater than the balance", () => {
            bankAccount.withdrawal(bankAccount.getBalance());

            assert.equal(bankAccount.withdrawal(withdrawalAmount), resultErrorMessage);
        });

        it("should return the balance after the client has withdrawal", () => {
            let accountStatement: IAccountStatement[] = bankAccount.accountStatementPrinting();
            let balance: number = accountStatement[accountStatement.length - 1].balance;
            assert.ok(balance === bankAccount.getAmount() - withdrawalAmount);
        });

        it("should return failed operation state", () => {
            let failedState: string = "Failed";
            bankAccount.withdrawal(bankAccount.getBalance());
            bankAccount.withdrawal(withdrawalAmount);
            let accountStatement: IAccountStatement[] = bankAccount.accountStatementPrinting();
            let operationState: string = accountStatement[accountStatement.length - 1].operationState;
            assert.equal(operationState, failedState);
        });
    });

    describe("Bank account statement printing", () => {
        it("should return all account statement", () => {
            let accountStatement: IAccountStatement[] = bankAccount.accountStatementPrinting();
            assert.equal(accountStatement, bankAccount.accountStatementPrinting());
        });
    });
});
