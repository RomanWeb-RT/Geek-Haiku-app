import classes from './ImageUploader.css'
import React from "react";

const ImageUploader = props => {

    return(
        <div className={classes.ImageUploader}>
            <input type={'file'} onChange={props.onChange}/>
        </div>
    )
};

export default ImageUploader;