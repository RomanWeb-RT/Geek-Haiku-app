import styles from './Pagination.css'
import React from "react";
import Button from "../Ui/Button/Button";

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