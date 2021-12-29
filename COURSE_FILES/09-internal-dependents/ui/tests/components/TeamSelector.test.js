"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const renderer = require("react-test-renderer");
const TeamSelector_1 = require("../../src/components/TeamSelector");
test("Link changes the class when hovered", () => {
    const component = renderer.create(<react_router_dom_1.BrowserRouter>
      <TeamSelector_1.default teams={[
            {
                name: "LinkedIn",
                id: "linkedin",
                iconUrl: "",
                channels: [
                    {
                        name: "general",
                        id: "g",
                        teamId: "linkedin",
                        description: "general chat for general folks",
                    },
                ],
            },
        ]}/>
    </react_router_dom_1.BrowserRouter>);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
