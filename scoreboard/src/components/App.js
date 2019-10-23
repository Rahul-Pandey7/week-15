import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import AddMember from "./AddMember";
import Membercard from "./Membercard";
import Addteam from "./Addteam";
import Showdetails from "./Showdetails";
import Teamdetails from "./Teamdetails";
import Addfixture from "./Addfixture";
import Showfixture from "./Showfixture";

export default class App extends React.Component{
    render(){
        return (
            <div>
                <Router>
                    <Route path="/" exact component={Home}/>
                    <Route path="/addteam" component={Addteam}/>
                    <Route path="/team" component={Membercard}/>
                    <Route path="/team_details" component={Teamdetails}/>
                    <Route path="/player/:team_name" component={AddMember}/>
                    <Route path="/details/:team_name" component={Showdetails}/>
                    <Route path="/add_fixture" component={Addfixture}/>
                    <Route path="/show_fixture" component={Showfixture}/>
                </Router>
            </div>
        )
    }
}