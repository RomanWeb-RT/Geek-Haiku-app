import React, {Component} from 'react';
import classes from './Main.css';
import Haiku from "../../components/Haiku/Haiku";
import Loader from "../../components/Loader/Loader";

class Main extends Component {
    state = {
        haiku: [],
        loading: true
    };

    async componentDidMount() {
        try {
            let haikuList = [];
            let response = await fetch('https://geek-haiku-app.firebaseio.com/haikus.json')
                .then(resp => resp.json());
            Object.keys(response).forEach((key) => {
                haikuList.push(response[key])
            });
            this.setState({
                haiku: haikuList,
                loading: false
            })
        } catch (e) {
            console.error(e)
        }
    }

    haikuListRender() {
        return this.state.haiku.map(haiku => {
            const {date, image, text} = haiku;
            const result = {
                text: [
                    {text: text[0].text, id: text[0].id},
                    {text: text[1].text, id: text[1].id},
                    {text: text[2].text, id: text[2].id}
                ],
                image: image
            };
            return (
                <Haiku image={result.image} text={result.text} key={Math.random()}/>
            )
        })

    }


    render() {
        return (
            <div className={classes.Main}>
                {this.state.loading ?
                    <Loader/> :
                    this.haikuListRender()}
            </div>
        )
    }
}

export default Main;