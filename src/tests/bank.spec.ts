import assert from "assert";
import { describe, it } from "mocha";
import { v4 } from "uuid";

import BankAccount from "../classes/BankAccount";
import { IAccountStatement } from "../interfaces/AccountStatement.interface";

describe("#Bank Account class Testing", () => {
    let clientId: string = v4();
    let amount: number = 0.0;
    let bankAccount: BankAccount = new BankAccount();
    bankAccount.setClientId(clientId);
    bankAccount.setAmount(amount);

    describe("#Bank initialization", () => {
        it("should return a string to indicate bank account initialization has finished successfully", () => {
            assert.equal(
                bankAccount.init(),
                `Bank account with client id ${bankAccount.getClientId()} initialized successfully!`
            );
        });
    });

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

        it("should return sentence string with the amount that client has withdrawal", () => {
            assert.equal(
                bankAccount.withdrawal(withdrawalAmount),
                `The client ${bankAccount.getClientId()} has deposit ${withdrawalAmount} on his account successfully!`
            );
        });

        // it("should return the balance after the client has withdrawal", () => {
        //     let accountStatement: IAccountStatement[] = bankAccount.accountStatementPrinting();
        //     let balance: number = accountStatement[accountStatement.length - 1].balance;
        //     assert.ok(balance === (bankAccount.getAmount() - withdrawalAmount));
        // });
    });
});
