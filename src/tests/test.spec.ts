import assert from "assert";
import { describe, it } from "mocha";

describe("Array", () => {
    describe("#indexOf()", () => {
        it("should return -1 when the value is not present", async () => {
            assert.equal([1, 2, 3].indexOf(4), -1);
        });
    });
});
