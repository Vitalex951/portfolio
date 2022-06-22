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
                <a href="https://drive.google.com/file/d/1VnTPCQnsBHyHAwBn9hW9R18Hn9-Yjm6Z/view?usp=sharing"
                   target={"_blank"}>
                    Download CV
                </a></button>
        </div>
    );
};