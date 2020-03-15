import React, {Component} from 'react';
import classes from './Main.css';
import Haiku from "../../components/Haiku/Haiku";
import Loader from "../../components/Loader/Loader";
import Pagination from "../../components/Pagination/Pagination";

class Main extends Component {
    state = {
        haikuList: [],
        pageList: [],
        currentPage: '',
        loading: true
    };

    async componentDidMount() {
        try {
            let haikuList = [];
            let pageList = [];
            let id = 0;
            let response = await fetch('https://geek-haiku-app.firebaseio.com/haikus.json')
                .then(resp => resp.json());
            Object.keys(response).forEach((key) => {
                if (response[key].date === `2020-1-${5 + id}`)
                    haikuList.push(response[key]);
                else {
                    pageList.push(this.addNewPage(id, `2020-1-${5 + id}`, haikuList));
                    id++;
                    haikuList = [];
                    haikuList.push(response[key])
                }
            });
            if (!haikuList.isEmpty)
                pageList.push(this.addNewPage(id, `2020-1-${5 + id}`, haikuList));
            haikuList = pageList[0].haikuList;
            this.setState({
                haikuList,
                pageList,
                currentPage: pageList[0],
                loading: false
            })
        } catch (e) {
            console.error(e)
        }
    }

    addNewPage(id, date, haikuList) {
        return {
            id, date, haikuList
        }
    }

    showPage = page => {
        this.setState({
            haikuList: page.haikuList,
            currentPage: page
        })
    };

    haikuListRender() {
        return this.state.haikuList.map(haiku => {
            const {date, image, text} = haiku;
            const result = {
                text: [
                    {text: text[0].text, id: text[0].id},
                    {text: text[1].text, id: text[1].id},
                    {text: text[2].text, id: text[2].id}
                ],
                image,
                date
            };
            return (
                <Haiku image={result.image} text={result.text} key={Math.random()} date={result.date}/>
            )
        })
    }

    render() {
        return (
            <div className={classes.Main}>
                {this.state.loading ?
                    <Loader/> :
                    this.haikuListRender()
                }
                <Pagination loading={this.state.loading} pages={this.state.pageList}
                            currentPage={this.state.currentPage} showPage={haikuList => this.showPage(haikuList)}/>
            </div>
        )
    }
}

export default Main;