"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getChannelMessages = void 0;
const types_1 = require("@shlack/types");
const utils_1 = require("@shlack/utils");
const cachedMessageRecordArrays = {};
async function getChannelMessages(teamId, channelId) {
    let cached = cachedMessageRecordArrays[channelId];
    if (typeof cached === "undefined")
        cached = cachedMessageRecordArrays[channelId] = (0, utils_1.apiCall)(`teams/${teamId}/channels/${channelId}/messages`).then((rawData) => {
            debugger;
            if ((0, types_1.isTypedArray)(rawData, types_1.isMessage)) {
                return rawData;
            }
            else
                throw new Error(`Unexpected value for message array\n${JSON.stringify(rawData)}`);
        });
    return await cached;
}
exports.getChannelMessages = getChannelMessages;
