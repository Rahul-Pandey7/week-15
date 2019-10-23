import React from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import axios from "axios";
export default class AddMember extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            p1: '',
            p2:'',
            p3:'',
            p4:'',
            p5:'',
            p6:'',
            p7:'',
            p8:'',
            p9:'',
            p10:'',
            p11:'',
            pr1: '',
            pr2:'',
            pr3:'',
            pr4:'',
            pr5:'',
            pr6:'',
            pr7:'',
            pr8:'',
            pr9:'',
            pr10:'',
            pr11:'',
        }
    }
    get_data = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    add_member = (e) => {
        e.preventDefault();
        const name = { item: this.state.name }
        const profile = { quaMembercardntity: this.state.profile }

        let obj = {
            p1: this.state.p1,
            pr1: this.state.pr1,
            p2: this.state.p2,
            pr2: this.state.pr2,
            p3: this.state.p3,
            pr3: this.state.pr3,
            p4: this.state.p4,
            pr4: this.state.pr4,
            p5: this.state.p5,
            pr5: this.state.pr5,
            p6: this.state.p6,
            pr6: this.state.pr6,
            p7: this.state.p7,
            pr7: this.state.pr7,
            p8: this.state.p8,
            pr8: this.state.pr8,
            p9: this.state.p9,
            pr9: this.state.pr9,
            p10: this.state.p10,
            pr10: this.state.pr10,
            p11: this.state.p11,
            pr11: this.state.pr11,
        }
        axios({
            method: 'post',
            url: `http://localhost:5000/player/${this.props.match.params.team_name}`,
            data: obj
        })

            .then((response) => {
                console.log(response)
                // console.log(response.data.items[0].snippet.title)
                // this.setState({
                //     collections: [...response.data.items],
                // });
            })
            .catch((err) => alert(err))
    }
    render() {
        return (
            <div>
                <Nav />

                <div className="container mt-3">
                   
                        <form>
                            <div class="row">
                                <div class="col">
                                <label for="exampleInputEmail1">Player 1 Name</label>
                                    <input type="text" name="p1" onChange={this.get_data} value={this.state.p1} class="form-control" placeholder="Enter name" />
                                </div>
                                <div class="col">
                                <label for="exampleInputPassword1">Profile</label>
                                    <input type="text" name="pr1" onChange={this.get_data} value={this.state.pr1} class="form-control" placeholder="Profile" />
                                </div>
                            </div><br/>
                            <div class="row">
                                <div class="col">
                                <label for="exampleInputEmail1">Player 2 Name</label>
                                    <input type="text" name="p2" onChange={this.get_data} value={this.state.p2} class="form-control" placeholder="Enter name" />
                                </div>
                                <div class="col">
                                <label for="exampleInputPassword1">Profile</label>
                                    <input type="text" name="pr2" onChange={this.get_data} value={this.state.pr2} class="form-control" placeholder="Profile" />
                                </div>
                            </div><br/>
                            <div class="row">
                                <div class="col">
                                <label for="exampleInputEmail1">Player 3 Name</label>
                                    <input type="text" name="p3" onChange={this.get_data} value={this.state.p3} class="form-control" placeholder="Enter name" />
                                </div>
                                <div class="col">
                                <label for="exampleInputPassword1">Profile</label>
                                    <input type="text" name="pr3" onChange={this.get_data} value={this.state.pr3} class="form-control" placeholder="Profile" />
                                </div>
                            </div><br/>
                            <div class="row">
                                <div class="col">
                                <label for="exampleInputEmail1">Player 4 Name</label>
                                    <input type="text" name="p4" onChange={this.get_data} value={this.state.p4} class="form-control" placeholder="Enter name" />
                                </div>
                                <div class="col">
                                <label for="exampleInputPassword1">Profile</label>
                                    <input type="text" name="pr4" onChange={this.get_data} value={this.state.pr4} class="form-control" placeholder="Profile" />
                                </div>
                            </div><br/>
                            <div class="row">
                                <div class="col">
                                <label for="exampleInputEmail1">Player 5 Name</label>
                                    <input type="text" name="p5" onChange={this.get_data} value={this.state.p5} class="form-control" placeholder="Enter name" />
                                </div>
                                <div class="col">
                                <label for="exampleInputPassword1">Profile</label>
                                    <input type="text" name="pr5" onChange={this.get_data} value={this.state.pr5} class="form-control" placeholder="Profile" />
                                </div>
                            </div><br/>
                            <div class="row">
                                <div class="col">
                                <label for="exampleInputEmail1">Player 6 Name</label>
                                    <input type="text" name="p6" onChange={this.get_data} value={this.state.p6} class="form-control" placeholder="Enter name" />
                                </div>
                                <div class="col">
                                <label for="exampleInputPassword1">Profile</label>
                                    <input type="text" name="pr6" onChange={this.get_data} value={this.state.pr6} class="form-control" placeholder="Profile" />
                                </div>
                            </div><br/>
                            <div class="row">
                                <div class="col">
                                <label for="exampleInputEmail1">Player 7 Name</label>
                                    <input type="text" name="p7" onChange={this.get_data} value={this.state.p7} class="form-control" placeholder="Enter name" />
                                </div>
                                <div class="col">
                                <label for="exampleInputPassword1">Profile</label>
                                    <input type="text" name="pr7" onChange={this.get_data} value={this.state.pr7} class="form-control" placeholder="Profile" />
                                </div>
                            </div><br/>
                            <div class="row">
                                <div class="col">
                                <label for="exampleInputEmail1">Player 8 Name</label>
                                    <input type="text" name="p8" onChange={this.get_data} value={this.state.p8} class="form-control" placeholder="Enter name" />
                                </div>
                                <div class="col">
                                <label for="exampleInputPassword1">Profile</label>
                                    <input type="text" name="pr8" onChange={this.get_data} value={this.state.pr8} class="form-control" placeholder="Profile" />
                                </div>
                            </div><br/>
                            <div class="row">
                                <div class="col">
                                <label for="exampleInputEmail1">Player 9 Name</label>
                                    <input type="text" name="p9" onChange={this.get_data} value={this.state.p9} class="form-control" placeholder="Enter name" />
                                </div>
                                <div class="col">
                                <label for="exampleInputPassword1">Profile</label>
                                    <input type="text" name="pr9" onChange={this.get_data} value={this.state.pr9} class="form-control" placeholder="Profile" />
                                </div>
                            </div><br/>
                            <div class="row">
                                <div class="col">
                                <label for="exampleInputEmail1">Player 10 Name</label>
                                    <input type="text" name="p10" onChange={this.get_data} value={this.state.p10} class="form-control" placeholder="Enter name" />
                                </div>
                                <div class="col">
                                <label for="exampleInputPassword1">Profile</label>
                                    <input type="text" name="pr10" onChange={this.get_data} value={this.state.pr10} class="form-control" placeholder="Profile" />
                                </div>
                            </div><br/>
                            <div class="row">
                                <div class="col">
                                <label for="exampleInputEmail1">Player 11 Name</label>
                                    <input type="text" name="p11" onChange={this.get_data} value={this.state.p11} class="form-control" placeholder="Enter name" />
                                </div>
                                <div class="col">
                                <label for="exampleInputPassword1">Profile</label>
                                    <input type="text" name="pr11" onChange={this.get_data} value={this.state.pr11} class="form-control" placeholder="Profile" />
                                </div>
                            </div>
                        </form>
                        <br/><br/>
                        <button type="button" onClick={this.add_member} class="btn-lg  btn-primary">Submit</button>
                    
                </div>
            </div>
        )
    }
}