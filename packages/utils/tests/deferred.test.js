"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@shlack/utils");
describe("Deferred tests", function () {
    test("Constructor does not error", () => {
        const d = new utils_1.Deferred();
        expect(d).toBeTruthy();
        expect(typeof d.resolve).toBe("function");
        expect(typeof d.reject).toBe("function");
        expect(d.promise).toBeInstanceOf(Promise);
    });
    test("promise resolves when Deferred#resolve() is called", async () => {
        expect.assertions(2);
        const d = new utils_1.Deferred();
        setTimeout(() => {
            d.resolve(42);
            expect(true).toBe(true);
        }, 30);
        const val = await d.promise;
        expect(val).toBe(42);
    });
    test("promise rejects when Deferred#reject() is called", async () => {
        expect.assertions(3);
        const d = new utils_1.Deferred();
        setTimeout(() => {
            expect(true).toBe(true);
            d.reject(-42);
        }, 30);
        try {
            await d.promise;
            expect(true).toBe(true); // should never reach this line
        }
        catch (e) {
            expect(e).toBe(-42);
        }
        finally {
            expect(true).toBe(true);
        }
    });
});
