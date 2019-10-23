import React from "react";
import Nav from "./Nav";
import axios from "axios";

export default class Addteam extends React.Component{
    constructor(props){
        super(props);

        this.state={
            str:''
        }
    }
    get_data=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    add_team=(e)=>{
        e.preventDefault();
        const name = {item: this.state.name}

        let obj={
            name:this.state.name,
        }
        axios({
            method: 'post',
            url: "http://localhost:5000/addteam",
            data:obj
        })

            .then((response) => {
                console.log(response)
                // console.log(response.data.items[0].snippet.title)
                this.setState({
                    str: response.data.message,
                });
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
                            <h5>Team Name</h5>
                            <input type="text" value={this.state.player} class="form-control" name="name" onChange={this.get_data} aria-describedby="emailHelp" placeholder="Enter Name without spaces" />
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