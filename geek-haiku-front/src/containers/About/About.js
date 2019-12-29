import classes from './About.css';
import React, {Component} from "react";

class About extends Component {
    age() {
        const birthday = new Date(1994, 10, 28);
        const today = new Date().getFullYear()
        return today - birthday.getFullYear()
    }

    render() {
        return (
            <div className={classes.About}>
                <ul>
                    <p>Main info: </p>
                    <li>Age: {this.age()}</li>
                    <li>Sex: Male</li>
                    <li>City: Minsk</li>
                    <li>E-mail: <a href={'mailto: tomal.roman.work@gmail.com'}>tomal.roman.work@gmail.com</a> —
                        preferred means of communication
                    </li>
                    <hr/>
                    <p>Key skills: </p>
                    <li>Knowledge of Javascript</li>
                    <li>Basic knowledge of Html / Css</li>
                    <li>Experience in React.js</li>
                    <li>Experience in Vue.js</li>
                    <li>Experience in develop of SPA - apps</li>
                    <li>Basic in Git</li>
                    <li>Basic knowledge of Sql</li>
                    <li>Pre-intermediate english level(most reading than speaking</li>
                </ul>
                <ul>
                    <p>Github: </p>
                    <li>https://github.com/RomanWeb-RT</li>
                    <li>This app - <a href={'https://github.com/RomanWeb-RT/Geek-Haiku-app'}>Geek Haiku App</a></li>
                    <li>Another</li>
                    <li>Another</li>
                    <li>Another</li>
                    <hr/>
                    <p>Technologies using in this app: </p>
                    <li>JavaScript</li>
                    <li>React + redux</li>
                    <li>Python</li>
                    <li>Django</li>
                </ul>
            </div>
        )
    }
}

export default About;