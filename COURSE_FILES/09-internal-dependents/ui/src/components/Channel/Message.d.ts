import * as React from "react";
import { IUser } from "@shlack/types";
declare const Message: React.FunctionComponent<{
    user: IUser;
    date: Date;
    body: string;
}>;
export default Message;
