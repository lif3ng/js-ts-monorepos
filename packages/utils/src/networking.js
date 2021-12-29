"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiCall = void 0;
const error_1 = require("./error");
const http_error_1 = require("./http-error");
/**
 * Make a GET request, and decode the response body as JSON
 *
 * @param input - request info
 * @param init - request options
 * @internal
 */
async function getJSON(input, init) {
    try {
        const response = await fetch(input, init);
        const responseJSON = await response.json();
        return { response, json: responseJSON };
    }
    catch (err) {
        throw new Error((0, error_1.stringifyError)(`Networking/getJSON: An error was encountered while fetching ${JSON.stringify(input)}`, err));
    }
}
/**
 * Make a same-origin GET request to the API
 *
 * @param path - API path
 * @param init - fetch options
 * @public
 */
async function apiCall(path, init) {
    let response;
    let json;
    try {
        const jsonRespInfo = await getJSON(`/api/${path}`, init);
        response = jsonRespInfo.response;
        json = jsonRespInfo.json;
    }
    catch (err) {
        if (err instanceof http_error_1.default)
            throw err;
        throw new Error((0, error_1.stringifyError)(`Networking/apiCall: An error was encountered while making api call to ${path}`, err));
    }
    if (!response.ok)
        throw new http_error_1.default(response, "Problem while making API call");
    return json;
}
exports.apiCall = apiCall;
