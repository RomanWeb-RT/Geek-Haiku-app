import React, {Component} from "react";
import classes from './Layout.css';
import Navbar from "../../components/Navigation/Navbar/Navbar";
import Footer from "../../components/Navigation/Footer/Footer";
import Clock from "../../components/Clock/Clock";

class Layout extends Component {
    render() {

        return (
            <div className={classes.Layout}>
                <Navbar/>
                <main>
                    {this.props.children}
                </main>
                <Footer/>
            </div>
        )
    }
}

export default Layout