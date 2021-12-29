"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTPErrorKind = void 0;
/**
 * High-level outcome of an HTTP status code
 * @public
 */
var HTTPErrorKind;
(function (HTTPErrorKind) {
    HTTPErrorKind[HTTPErrorKind["Information"] = 100] = "Information";
    HTTPErrorKind[HTTPErrorKind["Success"] = 200] = "Success";
    HTTPErrorKind[HTTPErrorKind["Redirect"] = 300] = "Redirect";
    HTTPErrorKind[HTTPErrorKind["Client"] = 400] = "Client";
    HTTPErrorKind[HTTPErrorKind["Server"] = 500] = "Server";
})(HTTPErrorKind = exports.HTTPErrorKind || (exports.HTTPErrorKind = {}));
/**
 * Determine the high-level outcome of a HTTP status code
 *
 * @param status - http status code
 * @see HTTPErrorKind
 * @public
 */
function determineKind(status) {
    if (status >= 100 && status < 200)
        return HTTPErrorKind.Information;
    else if (status < 300)
        return HTTPErrorKind.Success;
    else if (status < 400)
        return HTTPErrorKind.Redirect;
    else if (status < 500)
        return HTTPErrorKind.Client;
    else if (status < 600)
        return HTTPErrorKind.Server;
    else
        throw new Error(`Unknown HTTP status code ${status}`);
}
/**
 * An error that's associated with a HTTP response status code
 * @public
 */
class HTTPError extends Error {
    constructor(info, message) {
        super(`HTTPError [status: ${info.statusText} (${info.status})]\n${message}`);
        this.kind = determineKind(info.status);
    }
}
exports.default = HTTPError;
