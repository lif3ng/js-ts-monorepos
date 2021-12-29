"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const renderer = require("react-test-renderer");
const Message_1 = require("../../src/components/Channel/Message");
test("Link changes the class when hovered", () => {
    const component = renderer.create(<Message_1.default user={{ name: "Mike", iconUrl: "", username: "mike", id: 12 }} date={new Date("01-01-2001")} body="Hello world!"/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
