import React from 'react';
import './Download.css'
type downloadPropsType = {
    callback: () => void
}

export  const Download = (props: downloadPropsType) => {
    const onClickHeader = () => {
        props.callback()
    }
    return (
        <div>
            <button className='glow-on-hover' type="button">
                <a href="https://drive.google.com/file/d/1ELbKw8avtcHhsPwtNU0NGZT55GH-OSLE/view"
                   target={"_blank"}>
                    Download CV
                </a></button>
        </div>
    );
};