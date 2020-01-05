import classes from './Navbar.css'
import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Navbar extends Component {
    state = {
        showNavbar: true
    };

    componentDidMount() {
        window.addEventListener("scroll", this.handleScroll);
    };

    handleScroll = () => {
        if (window.pageYOffset > 150) {
            this.setState({
                showNavbar: false,
            });
        } else {
            this.setState({
                showNavbar: true,
            });
        }
    };

    render() {
        let nav = [classes.Navbar];
        if (!this.state.showNavbar) {
            nav.push(classes.hide)
        }
        return (
            <React.Fragment>
                <nav className={nav.join(' ')}>
                    <NavLink to={"/"} exact={true}/>
                    <strong>Geek Haiku</strong>
                </nav>
            </React.Fragment>
        )
    };
}

export default Navbar;