import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-md-6 off-md-3">
                    <div className="about">
                        <p className="hl-text">Nadat ik afgestudeerd was als <span className="bold">graphic</span> en <span className="bold">interactive designer</span> heb ik me doorontwikkeld als <span className="bold">web developer</span>.</p>
                        <p className="hl-subtext">Met een grote passie voor alles wat het web te bieden heeft ben ik altijd bezig met de nieuwste trends en technologieën. Samen kunnen wij uw bedrijf naar een grotere hoogte brengen in de online wereld!</p>
                        <p className="hl-subtext">Heeft u een idee die u altijd al werkelijkheid wilt maken of wilt u een bestaande site nieuw leven inblazen? Neem dan contact op!</p>
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