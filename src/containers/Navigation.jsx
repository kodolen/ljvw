import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";

class Navigation extends Component {

    componentDidMount() {

        const header = document.getElementById("navigation");
        const hamburger = document.getElementById("navigation_hamburger");
        const menu = document.getElementById("navigation_menu");
        const inner = document.getElementById("navigation_inner")
        let pageLinks = document.querySelectorAll('.page-link');
        let menuOpen = false;

        pageLinks.forEach(item => {
            item.addEventListener('click', event => {
                if (window.innerWidth <= 768) {
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
                }
            })
        })

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
                        <span className="page-link"><Link activeClass="active" to="js-about" spy={true} smooth={true} offset={-70} duration={500} className="anchor-link">Over mij</Link></span>
                        <span className="page-link"><Link activeClass="active" to="js-cases" spy={true} smooth={true} offset={-70} duration={500} className="anchor-link">Cases</Link></span>
                        <span className="page-link"><Link activeClass="active" to="js-contact" spy={true} smooth={true} offset={-70} duration={500} className="anchor-link">Contact</Link></span>
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