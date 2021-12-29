"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTeamById = exports.getAllTeams = void 0;
const utils_1 = require("@shlack/utils");
const types_1 = require("@shlack/types");
let cachedAllTeamsList;
async function getAllTeams() {
    if (typeof cachedAllTeamsList === "undefined")
        cachedAllTeamsList = (0, utils_1.apiCall)("teams").then((rawData) => {
            if ((0, types_1.isTypedArray)(rawData, types_1.isTeam))
                return rawData;
            throw new Error(`Unexpected value for teams array\n${JSON.stringify(rawData)}`);
        });
    return await cachedAllTeamsList;
}
exports.getAllTeams = getAllTeams;
const cachedTeamRecords = {};
async function getTeamById(id) {
    let cached = cachedTeamRecords[id];
    if (typeof cached === "undefined")
        cached = cachedTeamRecords[id] = (0, utils_1.apiCall)(`teams/${id}`).then((rawData) => {
            if ((0, types_1.isTeam)(rawData))
                return rawData;
            throw new Error(`Unexpected value for team\n${JSON.stringify(rawData)}`);
        });
    return await cached;
}
exports.getTeamById = getTeamById;
