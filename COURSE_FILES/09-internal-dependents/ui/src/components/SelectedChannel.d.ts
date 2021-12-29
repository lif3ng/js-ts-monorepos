import * as React from "react";
import { match } from "react-router";
import { IChannel } from "@shlack/types";
declare const SelectedChannel: React.FunctionComponent<{
    match: match<{
        channelId: string;
    }>;
    channels: IChannel[];
}>;
export default SelectedChannel;
