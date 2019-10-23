import React from "react";
import Nav from "./Nav";
import axios from "axios";

export default class Addfixture extends React.Component{
    constructor(props){
        super(props);

        this.state={
            team_1:'',
            team_2:''
        }
    }
    get_data=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    add_team=(e)=>{
        e.preventDefault();
        let obj={
            team_1:this.state.team_1,
            team_2:this.state.team_2
        }
        axios({
            method: 'post',
            url: "http://localhost:5000/add_fixture",
            data:obj
        })

            .then((response) => {
                console.log(response)
                // console.log(response.data.items[0].snippet.title)
                // this.setState({
                //     str: response.data.message,
                // });
            })
            .catch((err) => alert(err))
    }
    render(){
        return (
            <div>
                <Nav/>
                <div className="container">
                    <form>
                        <div class="form-group w-50">
                            <h5>Team 1 Name</h5>
                            <input type="text" value={this.state.team_1} class="form-control" name="team_1" onChange={this.get_data} aria-describedby="emailHelp" placeholder="Enter Name without spaces" />
                        </div>
                        <div class="form-group w-50">
                            <h5>Team 2 Name</h5>
                            <input type="text" value={this.state.team_2} class="form-control" name="team_2" onChange={this.get_data} aria-describedby="emailHelp" placeholder="Enter Name without spaces" />
                        </div>
                        <button type="button" onClick={this.add_team} class="btn btn-primary">Submit</button>
                    </form>
                    <br/>
                    <h5>{this.state.str}</h5>
                </div>
            </div>
        )
    }
}