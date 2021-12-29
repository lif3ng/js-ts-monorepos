"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Channel = void 0;
require("regenerator-runtime/runtime");
const React = require("react");
const react_dom_1 = require("react-dom");
const App_1 = require("./App");
function initializeReactApp() {
    const appContainer = document.getElementById("appContainer");
    if (!appContainer)
        throw new Error("No #appContainer found in DOM");
    (0, react_dom_1.render)(React.createElement(App_1.default), appContainer);
}
initializeReactApp();
var Channel_1 = require("./components/Channel");
Object.defineProperty(exports, "Channel", { enumerable: true, get: function () { return Channel_1.default; } });
