import React from "react";
import axios from "axios";
import Nav from "./Nav";

export default class Showdetails extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            arr1: []
        }
    }
    componentDidMount = (e) => {
        axios({
            method: 'get',
            url: `http://localhost:5000/details/${this.props.match.params.team_name}`,
        })
            .then((response) => {
                console.log(response.data.data)
                this.setState({
                    arr1: [...response.data.data],
                });
            })
            .catch((err) => alert(err))
    }
    render() {
        return (
            <div>
                <Nav/>
                <div className="container mt-4">
                <h1 className="text-center">{this.props.match.params.team_name}</h1>
                    <div className="row">
                        
                            {this.state.arr1.map((item, index) => {
                                return (
                                    <div className="col-lg-6">
                                        <div class="list-group">
                                            <a href="#" class="list-group-item list-group-item-action">
                                                <div class="d-flex w-100 justify-content-between">
                                                    <h2 class="mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>{item.p1}</h2>
                                                </div>
                                                <p class="mb-1" style={{ fontFamily: "'Montserrat', sans-serif" }}>{item.pr1}</p>
                                            </a>
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