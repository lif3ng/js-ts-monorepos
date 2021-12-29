"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const renderer = require("react-test-renderer");
const Channel_1 = require("../../src/components/Channel");
test("Link changes the class when hovered", () => {
    const component = renderer.create(<Channel_1.default channel={{
            name: "recruiting",
            description: "find a job here",
            id: "recruit",
            teamId: "linkedin",
        }}/>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
