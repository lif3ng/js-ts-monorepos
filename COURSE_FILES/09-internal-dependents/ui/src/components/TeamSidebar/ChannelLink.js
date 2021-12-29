"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const ChannelLink = ({ to, channel }) => {
    const match = (0, react_router_dom_1.useRouteMatch)(to);
    return (<react_router_dom_1.Link to={to} className={"team-sidebar__channel-link py-1 px-4 no-underline block" +
            (match ? "font-bold bg-teal-700 text-gray-200" : "")}>
      <span aria-hidden="true"># </span>
      {channel.name}
    </react_router_dom_1.Link>);
};
exports.default = ChannelLink;
