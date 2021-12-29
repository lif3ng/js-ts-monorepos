"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Deferred__promise, _Deferred__resolve, _Deferred__reject;
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * An "inverted" promise, that can be resolved
 * from the outside
 *
 * @public
 */
class Deferred {
    constructor() {
        _Deferred__promise.set(this, void 0);
        _Deferred__resolve.set(this, void 0);
        _Deferred__reject.set(this, void 0);
        __classPrivateFieldSet(this, _Deferred__promise, new Promise((resolve, reject) => {
            __classPrivateFieldSet(this, _Deferred__resolve, resolve, "f");
            __classPrivateFieldSet(this, _Deferred__reject, reject, "f");
        }), "f");
    }
    get promise() {
        return __classPrivateFieldGet(this, _Deferred__promise, "f");
    }
    get resolve() {
        return __classPrivateFieldGet(this, _Deferred__resolve, "f");
    }
    get reject() {
        return __classPrivateFieldGet(this, _Deferred__reject, "f");
    }
}
_Deferred__promise = new WeakMap(), _Deferred__resolve = new WeakMap(), _Deferred__reject = new WeakMap();
exports.default = Deferred;
