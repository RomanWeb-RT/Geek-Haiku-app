import styles from './Pagination.css'
import React, {Component} from "react";
import Button from "../Ui/Button/Button";

// class Pagination extends Component {
//     state = {
//         pages: [],
//         buttonList: [],
//         currentPage: null
//     };
//
//     constructor(props){
//         super(props)
//         this.setState({
//             pages: props.pages
//         })
//     }
//
//     prevClickHandler = () => {
//         this.setState({
//             currentPage: this.setNewCurrentPage(-1)
//         })
//     };
//
//     nextClickHandler = () => {
//         this.setState({
//             currentPage: this.setNewCurrentPage(1)
//         })
//     };
//
//     setNewCurrentPage = (increment) => {
//         let newCurrentPage;
//         this.state.pages.forEach((page, index) => {
//             if (page.id === this.state.currentPage.id)
//                 newCurrentPage = page
//         });
//         return newCurrentPage;
//     };
//
//     clickOnPageNumber = page => {
//         this.setState({
//             currentPage: this.state.pages[page]
//         })
//     };
//
//     pageButtonsRender() {
//         let pageCounter = 5;
//         return this.state.pages.map(page => {
//             if (pageCounter > 0) {
//                 pageCounter -= 1;
//                 return <Button
//                     type="navigation"
//                     onClick={() => this.clickOnPageNumber(page)}
//                     disabled={this.state.currentPage === page}
//                     key={page}
//                 >{page.id + 1}</Button>
//             } else if (pageCounter === 0) {
//                 pageCounter -= 1;
//                 return <Button
//                     type="navigation"
//                     key={0}
//                 >...</Button>
//             }
//         })
//     }
//
//     render() {
//         console.log(this.state.pages)
//         if (!this.props.loading) {
//             return (
//                 <div className={styles.Pagination}>
//                     <Button type="navigation" onClick={this.prevClickHandler}
//                             disabled={this.state.currentPage === this.state.pages[0]}>Назад</Button>
//                     {this.pageButtonsRender()}
//                     <Button type="navigation" onClick={this.nextClickHandler}
//                             disabled={this.state.currentPage === this.state.pages[this.state.pages.length - 1]}>Вперед</Button>
//                 </div>
//             )
//         } else {
//             return (<div/>)
//         }
//     }
// }

const Pagination = props => {
    if (!props.loading && (props.pages.length !== 0)) {
        const pagesButtons = () => {
            let pageCounter = 5;
            return props.pages.map(page => {
                if (pageCounter > 0) {
                    pageCounter -= 1;
                    return <Button
                        id={page.id}
                        type="navigation"
                        onClick={() => props.showPage(page)}
                        disabled={page.id === props.currentPage.id}
                        key={page.id}
                    >{page.id + 1}</Button>
                } else if (pageCounter === 0) {
                    pageCounter -= 1;
                    return <Button
                        type="navigation"
                        key={0}
                    >...</Button>
                }
            })
        };
        return (
            <div className={styles.Pagination}>
                <Button type="navigation" onClick={() => props.showPage(props.pages[props.currentPage.id - 1])}
                        disabled={props.currentPage.id === 0}>Назад</Button>
                {pagesButtons()}
                <Button type="navigation" onClick={() => props.showPage(props.pages[props.currentPage.id + 1])}
                        disabled={props.currentPage.id === props.pages.length - 1}>Вперед</Button>
            </div>
        )
    } else {
        return (<div className={styles.Pagination}></div>)
    }
};

export default Pagination;