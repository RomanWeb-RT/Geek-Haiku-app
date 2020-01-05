import classes from './HaikuImage.css';
import React from "react";

const HaikuImage = props => {
    return(
        <div className={classes.HaikuImage}>
            <img src={props.image} alt={'Выберите изображение чтобы увидеть'}/>
        </div>
    )
};

export default HaikuImage;