import React from 'react';
import './ScrollToTop.css'

export const ScrollToTop = () => {
    const offset = 100;
    const scrollUp = document.querySelector(".scroll_up");
    // const scrollUpSVGPath = document.querySelector('.scrollUp_path');

    // const pathLength = scrollUpSVGPath.getTotalLength()
    //
    // scrollUpSVGPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    // scrollUpSVGPath.style.transition = `stroke-dashoffset 20ms`;

    //updateDashoffset
    // const updateDashoffset = () => {
    //     const height = document.documentElement.scrollHeight - window.innerHeight;
    //     const dashoffset = pathLength - (getTop() * pathLength / height)
    //     scrollUpSVGPath.style.strokeDashoffset = dashoffset;
    // };
    // const getTop = () => window.pageYOffset || document.documentElement.scrollTop

    //onScroll
    // window.addEventListener('scroll', () => {
    //     updateDashoffset();
    //     if (getTop() > offset) {
    //         scrollUp.classList.add('scrollUp_up--active');
    //     } else {
    //         scrollUp.classList.remove('scrollUp_up--active');
    //     }
    // })

    //click
const scroll = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

    return (
        <div className={"scrollUp_up"} onClick={scroll}>

            <svg className={"scrollUp_svg"} viewBox={'-2 -2 52 52'}>
                <path
                    className={"scrollUp_path"}
                    d="
                   M24,0
                   a24,24 0 0,1 0,48
                   a24,24 0 0,1 0,-48
                  "
                />
            </svg>
        </div>
    );
};
