"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const renderer = require("react-test-renderer");
const Footer_1 = require("../../src/components/Channel/Footer");
test("Link changes the class when hovered", () => {
    const component = renderer.create(<Footer_1.default channel={{ name: "recruiting", description: "", id: "", teamId: "" }}/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
