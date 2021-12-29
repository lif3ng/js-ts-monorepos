"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils = require("@shlack/utils");
const data_1 = require("@shlack/data");
jest.mock("@shlack/utils");
const mockedApiCall = utils.apiCall;
mockedApiCall.mockImplementation(async (path, _init) => {
    if (path === "teams") {
        return Promise.resolve([
            {
                id: "linkedin",
                name: "LinkedIn",
                order: 2,
                iconUrl: "/assets/img/linkedin.png",
                channels: [],
            },
            {
                id: "ms",
                name: "Microsoft",
                order: 3,
                iconUrl: "/assets/img/microsoft.png",
                channels: [],
            },
            {
                id: "avengers",
                name: "Avengers",
                order: 4,
                iconUrl: "/assets/img/avengers.jpg",
                channels: [],
            },
        ]);
    }
    else
        throw new Error("not implemented");
});
describe("getAllTeams() tests", function () {
    test("fetching all teams", async (done) => {
        expect(mockedApiCall.mock.calls.length).toBe(0);
        const pr = (0, data_1.getAllTeams)();
        let resolvedVal;
        pr.then((val) => {
            resolvedVal = val;
        });
        expect(pr).toBeInstanceOf(Promise);
        expect(resolvedVal).toBeUndefined();
        expect(mockedApiCall.mock.calls.length).toBe(1);
        await pr;
        expect(resolvedVal).toMatchObject([
            {
                id: "linkedin",
                name: "LinkedIn",
                order: 2,
                iconUrl: "/assets/img/linkedin.png",
                channels: [],
            },
            {
                id: "ms",
                name: "Microsoft",
                order: 3,
                iconUrl: "/assets/img/microsoft.png",
                channels: [],
            },
            {
                id: "avengers",
                name: "Avengers",
                order: 4,
                iconUrl: "/assets/img/avengers.jpg",
                channels: [],
            },
        ]);
        done();
    });
});
