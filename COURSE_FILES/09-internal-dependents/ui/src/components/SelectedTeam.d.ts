import * as React from "react";
import { match } from "react-router";
import type { ITeam } from "@shlack/types";
declare const SelectedTeam: React.FunctionComponent<{
    match: match<{
        teamId: string;
    }>;
    teams: ITeam[];
}>;
export default SelectedTeam;
