import { ITeam } from "@shlack/types";
export declare function getAllTeams(): Promise<ITeam[]>;
export declare function getTeamById(id: string): Promise<ITeam>;
