import React, {Component} from "react";
import classes from './Layout.css';
import Navbar from "../../components/Navigation/Navbar/Navbar";

class Layout extends Component {
    render() {

        return (
            <div className={classes.Layout}>
                <Navbar/>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layout