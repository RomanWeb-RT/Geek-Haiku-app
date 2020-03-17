import styles from './Navbar.css'
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
        let nav = [styles.Navbar];
        if (!this.state.showNavbar) {
            nav.push(styles.hide)
        }
        return (
            <React.Fragment>
                <nav className={nav.join(' ')}>
                    <NavLink to={"/"} exact={true} className={styles.NavbarIcon}/>
                    <NavLink to={"/"} exact={true}><strong>Geek Haiku</strong></NavLink>
                    <div>
                        <div><NavLink to={"/create"} exact={true}><strong>Create</strong></NavLink></div>
                        <NavLink to={"/auth"} exact={true}><strong>Log In</strong></NavLink>
                    </div>
                </nav>
            </React.Fragment>
        )
    };
}

export default Navbar;