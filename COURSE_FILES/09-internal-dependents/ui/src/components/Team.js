"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const SelectedChannel_1 = require("./SelectedChannel");
const TeamSidebar_1 = require("./TeamSidebar");
const Team = ({ team }) => {
    console.log(`%c TEAM render: ${team.name}`, "background-color: blue; color: white");
    const { channels } = team;
    return (<div className="flex-1 flex">
      <TeamSidebar_1.default team={team}/>
      <react_router_dom_1.Switch>
        <react_router_dom_1.Route exact path={`/team/${team.id}`}>
          <h3>Please select a channel</h3>
        </react_router_dom_1.Route>
        <react_router_dom_1.Route exact path={`/team/${team.id}/channel/:channelId`} children={({ match }) => (<SelectedChannel_1.default match={match} channels={channels}/>)}/>
      </react_router_dom_1.Switch>
    </div>);
};
exports.default = Team;
