"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
describe("isChannel() tests", function () {
    test("valid channel", () => {
        expect((0, src_1.isChannel)({
            id: "123",
            teamId: "12gh",
            description: "channel description",
            iconUrl: "",
            messages: [],
            name: "general",
        })).toEqual(true);
    });
    test("invalid channel", () => {
        expect((0, src_1.isChannel)({
            description: "channel description",
            messages: [],
            name: "general",
        })).toEqual(false);
    });
});
describe("isMessage() tests", function () {
    test("valid message", () => {
        expect((0, src_1.isMessage)({
            id: 131,
            teamId: "12gh",
            channelId: "12gh",
            userId: "12gh",
            body: "hello, world",
        })).toEqual(true);
    });
    test("invalid message", () => {
        expect((0, src_1.isMessage)({
            description: "message description",
            messages: [],
            name: "general",
        })).toEqual(false);
    });
});
describe("isTeam() tests", function () {
    test("valid message", () => {
        expect((0, src_1.isTeam)({
            name: "12gh",
            id: "12gh",
            channels: [],
        })).toEqual(true);
    });
    test("invalid message", () => {
        expect((0, src_1.isTeam)({
            name: "12gh",
            id: "12gh",
        })).toEqual(false);
    });
});
describe("isTypedArray() tests", function () {
    test("non-array", () => {
        expect(
        // @ts-expect-error
        (0, src_1.isTypedArray)(null, () => true)).toEqual(false);
    });
    test("empty array", () => {
        expect((0, src_1.isTypedArray)([], (x) => true)).toEqual(true);
    });
    test("homogenous array [1, 2, 3]", () => {
        expect((0, src_1.isTypedArray)([1, 2, 3], (x) => typeof x === "number")).toEqual(true);
    });
    test("mixed array [1, 'a', 3]", () => {
        expect((0, src_1.isTypedArray)([1, "a", 3], (x) => ["number"].indexOf(typeof x) >= 0)).toEqual(false);
    });
});
