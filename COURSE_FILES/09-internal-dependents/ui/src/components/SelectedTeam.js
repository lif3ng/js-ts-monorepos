"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Team_1 = require("./Team");
const SelectedTeam = ({ match, teams }) => {
    if (!match)
        throw new Error("no match");
    const { params } = match;
    if (!params)
        throw new Error("no match params");
    const { teamId: selectedTeamId } = params;
    if (!selectedTeamId)
        throw new Error(`undefined teamId`);
    const selectedTeam = teams.find((t) => t.id === selectedTeamId);
    if (!selectedTeam)
        throw new Error(`Invalid could not find team with id {selectedTeamId}`);
    return <Team_1.default team={selectedTeam}/>;
};
exports.default = SelectedTeam;
