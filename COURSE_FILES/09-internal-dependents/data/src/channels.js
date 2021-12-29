"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChannelById = void 0;
const types_1 = require("@shlack/types");
const utils_1 = require("@shlack/utils");
const cachedChannelRecords = {};
async function getChannelById(id) {
    let cached = cachedChannelRecords[id];
    if (typeof cached !== "undefined")
        return await cached;
    cached = cachedChannelRecords[id] = (0, utils_1.apiCall)(`Channels/${id}`).then((rawData) => {
        if ((0, types_1.isChannel)(rawData))
            return rawData;
        throw new Error(`Unexpected value for channel\n${JSON.stringify(rawData)}`);
    });
    return await cached;
}
exports.getChannelById = getChannelById;
