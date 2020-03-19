import React, { Component } from 'react';
import Express from '../node_modules/express';
import ExpressFilter from '../node_modules/express-ipfilter';

class IpTracker extends Component {

    componentDidMount() {
        const ips = ['5.132.3.14']

        // Create the server
        app.use(ipfilter(ips))
        app.listen(3000)
    }

    // render() {
    //     return (

    //     )
    // };
}

export default IpTracker;