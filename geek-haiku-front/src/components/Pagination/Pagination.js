import styles from './Pagination.css'
import React, {Component} from "react";
import Button from "../Ui/Button/Button";

class Pagination extends Component {
    state = {
        pages: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        buttonList: [],
        currentPage: null
    };

    componentDidMount() {
        this.setState({
            currentPage: this.state.pages[0]
        })
    }

    prevClickHandler = () => {
        this.setState({
            currentPage: this.setNewCurrentPage(-1)
        })
    };

    nextClickHandler = () => {
        this.setState({
            currentPage: this.setNewCurrentPage(1)
        })
    };

    setNewCurrentPage = (increment) => {
        let newCurrentPage;
        this.state.pages.forEach((page, index) => {
            if (page === this.state.currentPage)
                newCurrentPage = this.state.pages[index + increment]
        });
        return newCurrentPage;
    };

    clickOnPageNumber = page => {
        this.setState({
            currentPage: this.state.pages[page]
        })
    };

    pageButtonsRender() {
        let pageCounter = 5;
        return this.state.pages.map(page => {
            if (pageCounter > 0) {
                pageCounter -= 1;
                return <Button
                    type="navigation"
                    onClick={() => this.clickOnPageNumber(page)}
                    disabled={this.state.currentPage === page}
                    key={page}
                >{page + 1}</Button>
            } else if (pageCounter === 0) {
                pageCounter -= 1;
                return <Button
                    type="navigation"
                    key={0}
                >...</Button>
            }
        })
    }

    render() {
        console.log(this.state.currentPage);
        if (!this.props.loading) {
            return (
                <div className={styles.Pagination}>
                    <Button type="navigation" onClick={this.prevClickHandler}
                            disabled={this.state.currentPage === this.state.pages[0]}>Назад</Button>
                    {this.pageButtonsRender()}
                    <Button type="navigation" onClick={this.nextClickHandler}
                            disabled={this.state.currentPage === this.state.pages[this.state.pages.length - 1]}>Вперед</Button>
                </div>
            )
        } else {
            return (<div/>)
        }
    }
}

export default Pagination;