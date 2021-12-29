"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const data_1 = require("@shlack/data");
const utils_1 = require("@shlack/utils");
const Loading_1 = require("./components/Loading");
const SelectedTeam_1 = require("./components/SelectedTeam");
const TeamSelector_1 = require("./components/TeamSelector");
const { useState } = React;
const App = () => {
    const [teams, setTeams] = useState();
    (0, utils_1.useAsyncDataEffect)(() => (0, data_1.getAllTeams)(), {
        setter: setTeams,
        stateName: "teams",
    });
    if (!teams)
        return <Loading_1.default message="Loading teams"/>;
    return (<react_router_dom_1.BrowserRouter>
      <div className="flex flex-col sm:flex-row w-full h-full">
        <TeamSelector_1.default teams={teams}/>
        <react_router_dom_1.Switch>
          <react_router_dom_1.Route exact path="/">
            <section className="m-12 text-xl">
              <h3>Please select a team</h3>
            </section>
          </react_router_dom_1.Route>
          <react_router_dom_1.Route exact path="/team">
            <section className="m-12 text-xl">
              <h3>Please select a team</h3>
            </section>
          </react_router_dom_1.Route>
          <react_router_dom_1.Route path="/team/:teamId" children={({ match }) => (<SelectedTeam_1.default match={match} teams={teams}/>)}/>
        </react_router_dom_1.Switch>
      </div>
    </react_router_dom_1.BrowserRouter>);
};
exports.default = App;
