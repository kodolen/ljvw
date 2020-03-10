import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-md-6 off-md-3">
                    <div className="about">
                        <p className="hl-text">Ik ben een student aan de Hogeschool Rotterdam en een freelance <span className="bold">grafisch vormgever</span> en <span className="bold">web developer</span></p>
                        <p className="hl-subtext">Wil jij jouw idee werkelijkheid maken of een nieuw leven blazen in een bestaande site?</p>
                        <div className="button-wrapper">
                            <div className="button primary"><span>Contact</span></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

export default About;