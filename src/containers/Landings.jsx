import React, { Component } from 'react';
import BG from '../assets/background-len.jpg';
import {Waypoint} from "react-waypoint";

class Landings extends Component {
    render() {
        return (
            <div className="landings">
                <div className="side-text-wrapper">
                    <span className="side-text">LENNART JOHANNES VAN WELZEN</span>
                </div>
                <div className="foreground"></div>
                <div className="background">
                    <img src={BG} alt="" />
                </div>
                <div className="inner">
                    <div className="row">
                        <div className="col-xs-10 col-sm-6 off-sm-1">
                            <div className="intro">
                                <div className="intro-content">
                                    <span className="thin-title">Freelance</span>
                                    <h1>WEB DESIGNER & DEVELOPER</h1>
                                    <p>Ik ben Lennart, ik ben gespecialiseerd in het realiseren van professionele, op maat gemaakte websites.</p>
                                </div>
                                <div className="button-wrapper">
                                    <div className="button primary"><span>Contact</span></div>
                                    <div className="button secondary"><span>Portfolio</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default Landings;