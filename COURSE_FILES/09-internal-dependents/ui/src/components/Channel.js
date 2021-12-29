"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const data_1 = require("@shlack/data");
const utils_1 = require("@shlack/utils");
const Footer_1 = require("./Channel/Footer");
const Header_1 = require("./Channel/Header");
const Message_1 = require("./Channel/Message");
const Loading_1 = require("./Loading");
const Channel = ({ channel, }) => {
    const [messages, setMessages] = React.useState();
    (0, utils_1.useAsyncDataEffect)(() => (0, data_1.getChannelMessages)(channel.teamId, channel.id), {
        setter: setMessages,
        stateName: "messages",
        otherStatesToMonitor: [channel],
    });
    if (!messages)
        return <Loading_1.default message="Loading messages"/>;
    if (messages.length === 0)
        return <Loading_1.default message="No messages"/>;
    console.log(`%c CHANNEL render: ${channel.name}`, "background-color: purple; color: white");
    return (<main className="flex-1 flex flex-col bg-white overflow-hidden channel">
      <Header_1.default title={channel.name} description={channel.description}/>
      <div className="py-4 flex-1 overflow-y-scroll channel-messages-list" role="list">
        {messages.map((m) => (<Message_1.default key={m.id} body={m.body} date={new Date(m.createdAt)} user={m.user}/>))}
      </div>

      <Footer_1.default channel={channel}/>
    </main>);
};
exports.default = Channel;
