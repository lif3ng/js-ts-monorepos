"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isMessage = exports.isChannel = exports.isTeam = exports.isTypedArray = void 0;
/**
 * Check whether a given value is an array where
 * each member is of a specified type
 *
 * @param arr - array to check
 * @param check - type guard to use when evaluating each item
 * @public
 */
function isTypedArray(arr, check) {
    if (!Array.isArray(arr))
        return false;
    const mismatch = arr.filter((item) => !check(item));
    if (mismatch.length > 0)
        return false;
    return true;
}
exports.isTypedArray = isTypedArray;
/**
 * Check whether a given value is an {@link @shlack/types#ITeam}
 * @param arg - value to check
 * @beta
 *
 * @example
 * Here's an example of how to use this guard
 * ```ts
 * const team = { id: 'li', name: 'LinkedIn' };
 * isTeam(team); // true
 * ```
 */
function isTeam(arg) {
    return (typeof arg.name === "string" &&
        typeof arg.id === "string" &&
        Array.isArray(arg.channels));
}
exports.isTeam = isTeam;
/**
 * Check whether a given value is an {@link @shlack/types#IChannel}
 * @param arg - value to check
 * @beta
 */
function isChannel(arg) {
    return (typeof arg.id === "string" &&
        typeof arg.teamId === "string" &&
        typeof arg.description === "string" &&
        typeof arg.name === "string");
}
exports.isChannel = isChannel;
/**
 * Check whether a given value is an {@link @shlack/types#IMessage}
 * @param arg - value to check
 * @beta
 */
function isMessage(arg) {
    return (typeof arg.teamId === "string" &&
        typeof arg.channelId === "string" &&
        typeof arg.userId === "string" &&
        typeof arg.body === "string");
}
exports.isMessage = isMessage;
