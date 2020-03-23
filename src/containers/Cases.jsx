import React, { Component } from 'react';
import * as contentful from 'contentful';

class Cases extends Component {

    constructor() {
        super();
        this.state = {
            cases: []
        }
    }

    componentDidMount() {

        let client = contentful.createClient({
            space: 'cbkx0xry12h9',
            accessToken: 'v0LXZJ6KBt59JjlO6rVQDCDwL2DBFTV0kqBo7D900Bc'
        })

        client.getEntries({ content_type: 'case' }).then(response => {
            this.setState({ cases: response.items });
            console.log(this.state.cases);
        })

    }

    render() {

        return (
            <div className="cases-container" id="js-cases">
                {this.state.cases.map((items, i) => (
                    <div className="case-container">
                        <div className="case-background" style={{ backgroundImage: `url(${items.fields.background.fields.file.url})` }}>
                            <div className="case-background-overlay">
                                
                            </div>
                        </div>
                        <div className="case-foreground">
                        </div>
                        <div className="case-foreground-bg"></div>
                        <div className="case-inner">
                            {(() => {
                                if (i % 2) {
                                    return (
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-5" key={i}>
                                                <span className="case-sub">Case</span>
                                                <h4>{items.fields.title}</h4>
                                                <p className="case-text">{items.fields.content}</p>
                                                <div className="button-wrapper">
                                                    <div className="button primary"><span>{items.fields.site}</span></div>
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-6 off-sm-1">
                                                <div className="mockup-wrapper">
                                                    <img src={items.fields.mockup.fields.file.url} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div className="row">
                                            <div className="col-xs-12 col-sm-6">
                                                <div className="mockup-wrapper">
                                                    <img src={items.fields.mockup.fields.file.url} alt="" />
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-sm-5 off-sm-1" key={i}>
                                                <span className="case-sub">Case</span>
                                                <h4>{items.fields.title}</h4>
                                                <p className="case-text">{items.fields.content}</p>
                                                <div className="button-wrapper">
                                                    <div className="button primary"><span>{items.fields.site}</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })()}
                        </div>

                    </div>
                ))}
            </div>
        )
    };
}

export default Cases;