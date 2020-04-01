import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-xs-12 col-md-6 off-md-3">
                    <div className="contact">
                        <p className="hl-text">Kunt u niet wachten om met mij aan de slag te gaan? Ik ga die <span className="bold">uitdaging</span> graag met u aan!</p>
                        <p className="hl-subtext">U kunt contact op nemen via: <a href="mailto:info@ljvw.nl">info@ljvw.nl</a></p>
                    </div>
                </div>
            </div>
        )
    };
}

export default Contact;