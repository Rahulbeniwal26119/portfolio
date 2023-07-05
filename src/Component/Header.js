import React from 'react';
import './Header.css';

class Header extends React.Component {
    render() {
        if (this.props.data) {
            var name = this.props.data.name;
            var occupation = this.props.data.occupation;
            var description = this.props.data.description;
            // var city = this.props.data.address.city;
            var network = this.props.data.social.map((network) => {
                return <li key={
                    network.name
                }>
                    <a href={
                        network.url
                    }>
                        <i className={
                            network.className
                        }></i>
                    </a>
                </li>
            })
        }
        return (
            <header id="home">
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show Navigation</a>
                    <a className="mobile-btn" href="#home" title="Hide navigation">Hide Navigation</a>

                    <ul id="nav" className="nav" style={{background :  'background: rgba(6, 12, 25, 0);'}}>
                        <li>
                            <a className="smoothscroll" href="#home">Home</a>
                        </li>
                        <li >
                            <a className="smoothscroll" href="#about">About</a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#resume">Resume</a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#portfolio">Work</a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#testimonials">Testimonials</a>
                        </li>
                        <li>
                            <a className="smoothscroll" href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">I'm {name}.</h1>
                        <h3><span>{description}</span>. {occupation}</h3>
                        <hr/>
                        <ul className="social">
                            {network}
                        </ul>
                    </div>
                </div>
                <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                </p>
            </header>
        )
    }
}

export default Header;
