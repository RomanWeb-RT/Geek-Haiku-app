import styles from './Pagination.css'
import React, {Component} from "react";
import Button from "../Ui/Button/Button";

class Pagination extends Component {
    state = {
        pages: [0, 1, 2, 3],
        currentPage: null
    };

    componentDidMount() {
        this.setState({
            currentPage: this.state.pages[0]
        })
    }

    prevClickHandler = () =>{
        this.setState({
            currentPage: this.setNewCurrentPage(-1)
        })
    };

    nextClickHandler = () =>{
        this.setState({
            currentPage: this.setNewCurrentPage(1)
        })
    };

    setNewCurrentPage(increment){
        let newCurrentPage;
        this.state.pages.forEach((page, index) =>{
            if(page === this.state.currentPage)
                newCurrentPage = this.state.pages[index + increment]
        });
        return newCurrentPage;
    }

    pageButtonsRender() {

    }

    render() {
        console.log(this.state.currentPage);
        if (!this.props.loading) {
            return (
                <div className={styles.Pagination}>
                    <Button type="navigation" onClick={this.prevClickHandler}
                            disabled={this.state.currentPage === this.state.pages[0]}>Назад</Button>
                    <ul>
                        {this.pageButtonsRender()}
                    </ul>
                    <Button type="navigation" onClick={this.nextClickHandler}
                            disabled={this.state.currentPage === this.state.pages[this.state.pages.length-1]}>Вперед</Button>
                </div>
            )
        } else {
            return (<div/>)
        }
    }
}

export default Pagination;