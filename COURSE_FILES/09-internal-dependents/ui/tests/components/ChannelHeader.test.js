"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const renderer = require("react-test-renderer");
const Header_1 = require("../../src/components/Channel/Header");
test("Link changes the class when hovered", () => {
    const component = renderer.create(<Header_1.default title="Recruiting channel" description="Find a job here!"/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
