import React, { Component } from 'react';

class Landings extends Component {
    render() {
        return (
            <div className="landings">
                <div className="side-info">
                    <span className="side-text">LENNART JOHANNES VAN WELZEN</span>
                </div>
                <div className="inner">
                    <div className="row">
                        <div className="col-md-6 off-md-1">
                            <div className="intro">
                                <div className="intro-content">
                                    <span className="thin-title">Freelance</span>
                                    <h1>DESIGNER & DEVELOPER</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                </div>
                                <div className="button-wrapper">
                                    <div className="button primary"><span>Contact</span></div>
                                    <div className="button secondary"><span>Bekijk portfolio</span></div>
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