import styles from './NotFoundPage.css';
import React, {Component} from "react";

class NotFoundPage extends Component{
    render() {
        return (
            <div className={styles.NotFoundPage}>
                <h1>- 404 -</h1>
                <h2>＼(º □ º|||)/</h2>
                <h2>Sorry...but you page in another castle...</h2>
            </div>
        )
    }
}

export default NotFoundPage;