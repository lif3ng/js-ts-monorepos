"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Loading = ({ message = "Loading...", children, }) => (<h1>
    {message}...
    {children}
  </h1>);
exports.default = Loading;
