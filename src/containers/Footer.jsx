import React, { Component } from 'react';
import FB from '../assets/Facebook.png';
import Insta from '../assets/Instagram.png';
import LinkedIN from '../assets/LinkedIN.png';
import Mail from '../assets/Mail.png';
import Github from '../assets/Github.png';


class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="row">
                    <div className="col-sm-5 col-xs-12">
                        <h3>LJVW</h3>
                        <p className="footer-text">Ik ben Lennart, ik ben gespecialiseerd in het realiseren van professionele, op maat gemaakte websites.</p>
                        <div className="site-index">
                            <span className="index-name">HOME</span>
                            <span className="index-name">OVER MIJ</span>
                            <span className="index-name">PORTFOLIO</span>
                            <span className="index-name">CONTACT</span>
                        </div>
                    </div>
                    <div className="col-sm-5 off-sm-1 col-xs-12">
                        <h3>Andere kanalen</h3>
                        {/* <p className="footer-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p> */}
                        <div className="site-index">
                            <span className="index-name"><a href="#"><img src={Mail} alt="" /></a></span>
                            <span className="index-name"><a href="#"><img src={LinkedIN} alt="" /></a></span>
                            <span className="index-name"><a href="#"><img src={Insta} alt="" /></a></span>
                            <span className="index-name"><a href="#"><img src={FB} alt="" /></a></span>
                            <span className="index-name"><a href="#"><img src={Github} alt="" /></a></span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <span className="footer-bottom-text">2020 LJVW Development</span>
                    </div>
                </div>
            </div>
        )
    };
}

export default Footer;