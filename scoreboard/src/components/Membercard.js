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
            url: "http://localhost:5000/team",
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
                                   <Link to={`/player/${item}`} class="btn btn-primary">Add Players</Link>
                                </div>
                            </div>
                        </div>
                            )
                            
                        })}
                        {/* <div className="col-lg-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">India</h5>
                                    <a href="#" class="btn btn-primary">Add Players</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Pakistan</h5>
                                    <a href="#" class="btn btn-primary">Add Players</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">BanglaDesh</h5>
                                    <a href="#" class="btn btn-primary">Add Players</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br/><br/>
                    <div className="row">
                        <div className="col-lg-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">Srilanka</h5>
                                    <a href="#" class="btn btn-primary">Add Players</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">WestIndies</h5>
                                    <a href="#" class="btn btn-primary">Add Players</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div class="card">
                                <div class="card-body">
                                    <h5 class="card-title">England</h5>
                                    <a href="#" class="btn btn-primary">Add Players</a>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        )
    }
}