"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const TeamLink = ({ team }) => {
    const match = (0, react_router_dom_1.useRouteMatch)({
        path: `/team/${team.id}`,
        exact: false,
    });
    return (<react_router_dom_1.Link to={`/team/${team.id}/channel/${team.channels[0].id}`} className={"team-selector__team-button cursor-pointer rounded-lg p-2 pl-4 inline-block sm:block no-underline opacity-25 " +
            (match ? "opacity-100" : "")}>
      <div className="bg-white h-12 w-12 flex items-center justify-center text-black text-2xl font-semibold rounded-lg mb-1 overflow-hidden">
        <img className="team-selector__team-logo" src={team.iconUrl} alt={`Join the ${team.name} chat`}/>
      </div>
    </react_router_dom_1.Link>);
};
exports.default = TeamLink;
