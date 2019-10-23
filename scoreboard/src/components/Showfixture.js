import React from "react";
import axios from "axios";
import Nav from "./Nav";

export default class Showfixture extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            arr:[]
        }
    }
    componentDidMount=(e)=>{
        axios({
            method: 'get',
            url: "http://localhost:5000/show_fixture",
        })
            .then((response) => {
                console.log(response.data.data)
                // obj={
                //     item:response.data.all.item
                // }
                // console.log(response)
                // console.log(response.data.items[0].snippet.title)
                this.setState({
                    arr: [...response.data.data],
                });
            })
            .catch((err) => alert(err))
    }
    render() {
        return (
            <div>
                <Nav/>
                <div className="container mt-5">
                    <h1 className="text-center"style={{fontFamily: 'Turret Road, cursive'}}><u>Tournament Fixtures</u></h1><br/>
                    <div className="row">
                        <div className="col-lg-12">
                            {this.state.arr.map((item,index)=>{
                                return(
                                    <React.Fragment>
                                    <div class="card">
                                    <h5 class="card-header text-center">Match {index+1}</h5>
                                    <div class="card-body">
                                        <h2 class="card-title text-center" style={{fontFamily: 'Turret Road, cursive'}}>{item.team1}</h2>
                                        <h5 className="text-center">Vs</h5>
                                        <h2 class="card-title text-center" style={{fontFamily: 'Turret Road, cursive'}}>{item.team2}</h2>
                                        <p className="text-center"><a href="#" class="btn btn-lg btn-info">Match Summary</a></p>
                                    </div>
                                </div>
                                <br/><br/>
                                </React.Fragment> 
                                )
                            })}
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}