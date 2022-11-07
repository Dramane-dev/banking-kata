import assert from "assert";
import { describe, it } from "mocha";
import { v4 } from "uuid";

import BankAccount from "../classes/BankAccount";

let bankAccount: BankAccount = new BankAccount(v4(), 0, 0);

describe("Bank Account class Testing", () => {
    describe("Bank initialization", () => {
        it("should return a string to indicate bank account initialization has finished successfully", () => {
            assert.equal(
                bankAccount.init(),
                `Bank account with client id ${bankAccount.clientId} initialized successfully!`
            );
        });
    });
});
