import React from "react";
import { Link } from "react-router-dom";

export default class Nav extends React.Component {
    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <Link to="/" class="navbar-brand size" href="#"><img src="logo.png" style={{height:"40px",width:"50px"}} alt="..."/></Link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul class="navbar-nav">
                            <li class="nav-item">
                                <Link to="/team" class="nav-link size text-dark" href="#">Add Member</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/addteam" class="nav-link size text-dark" href="#">Add Team</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/team_details" class="nav-link size text-dark" href="#">Team Details</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/add_fixture" class="nav-link size text-dark" href="#">Add fixture</Link>
                            </li>
                            <li class="nav-item">
                                <Link to="/show_fixture" class="nav-link size text-dark" href="#">Show fixture</Link>
                            </li>
                            {/* <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle size" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Teams
                                        </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <a class="dropdown-item size" href="#">INDIA</a>
                                    <a class="dropdown-item size" href="#">BANGLADESH</a>
                                    <a class="dropdown-item size" href="#">PAKISTAN</a>
                                </div>
                            </li> */}
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}