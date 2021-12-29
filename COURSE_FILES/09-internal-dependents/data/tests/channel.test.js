"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils = require("@shlack/utils");
const data_1 = require("@shlack/data");
jest.mock("@shlack/utils");
const mockedApiCall = utils.apiCall;
mockedApiCall.mockResolvedValue({
    id: "recruiting",
    name: "recruiting",
    description: "The Next Generation Of Recruiting. Find top talents today!",
    teamId: "linkedin",
});
describe("getChannelById() tests", function () {
    test("fetching a single team", async (done) => {
        expect(mockedApiCall.mock.calls.length).toBe(0);
        const pr = (0, data_1.getChannelById)("14");
        let resolvedVal;
        pr.then((val) => {
            resolvedVal = val;
        });
        expect(pr).toBeInstanceOf(Promise);
        expect(resolvedVal).toBeUndefined();
        expect(mockedApiCall.mock.calls.length).toBe(1);
        await pr;
        expect(resolvedVal).toMatchObject({
            id: "recruiting",
            name: "recruiting",
            description: "The Next Generation Of Recruiting. Find top talents today!",
            teamId: "linkedin",
        });
        done();
    });
});
