import React from "react";
import Nav from "./Nav";

export default class Home extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                {/* <div style={{marginTop:"100px"}}></div> */}
                <div class=" p-1 text-center image-fluid">
                    <div class="product-device shadow-sm d-none d-md-block"></div>
                    <div class="product-device product-device-2 shadow-sm d-none d-md-block"></div>
                    <img src="wc.jpg" className="img-fluid w-100" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}