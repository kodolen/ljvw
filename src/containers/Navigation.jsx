import React, { Component } from 'react';

class Navigation extends Component {

    componentDidMount() {

        const header = document.getElementById("navigation");
        const hamburger = document.getElementById("navigation_hamburger");
        const menu = document.getElementById("navigation_menu");
        const inner = document.getElementById("navigation_inner")
        let menuOpen = false;

        document.addEventListener("scroll", function () {
            if (window.pageYOffset > 0) {
                header.classList.add('scrolled')
            } else if (window.pageYOffset === 0) {
                header.classList.remove('scrolled')
            }
        })

        hamburger.addEventListener("click", function () {
            if (menuOpen === false) {
                menu.classList.add('open')
                inner.classList.add('open');
                hamburger.classList.add('open');
                menuOpen = true;
                console.log("open");
            } else {
                menu.classList.remove('open');
                inner.classList.remove('open');
                hamburger.classList.remove('open');
                menuOpen = false;
                console.log("dicht");
            }
        })

    }

    render() {
        return (
            <div className="navigation" id="navigation">
                <div className="navigation_inner" id="navigation_inner">
                    <div className="navigation_menu" id="navigation_menu">
                        <span>Over mij</span>
                        <span>Cases</span>
                        <span>Contact</span>
                    </div>
                </div>
                <div className="navigation_hamburger" id="navigation_hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        )
    };
}

export default Navigation;