import React from "react";
import Nav from "./Nav";
import axios from "axios"
import {Link} from "react-router-dom";
export default class Membercard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            arr:[]
        }
    }
    componentDidMount=(e)=>{
        axios({
            method: 'get',
            url: "http://localhost:5000/team_details",
        })
            .then((response) => {
                console.log(response.data)
                // obj={
                //     item:response.data.all.item
                // }
                // console.log(response)
                // console.log(response.data.items[0].snippet.title)
                this.setState({
                    arr: [...response.data.team],
                });
            })
            .catch((err) => alert(err))
    }
    render() {
        return (
            <div>
                <Nav/>
                <div className="container mt-3">
                    <div className="row">
                        {this.state.arr.map((item,index)=>{
                            return (
                                <div className="col-lg-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">{item}</h5>
                                   <Link to={`/details/${item}`} class="btn btn-primary">Show Details</Link>
                                </div>
                            </div>
                        </div>
                            )
                            
                        })}
                    </div>
                </div>
            </div>
        )
    }
}