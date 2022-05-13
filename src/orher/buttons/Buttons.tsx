import React from 'react';
import './buttons.css'

const Buttons = () => {
    return (
        <div>
            <button className="dir-control">Click Me!<span></span><span></span><span></span><span></span><b
                aria-hidden="true">Click Me!</b><b aria-hidden="true">Click Me!</b><b aria-hidden="true">Click Me!</b><b
                aria-hidden="true">Click Me!</b>
            </button>
            <a className="dir-control">Link Me!<span></span><span></span><span></span><span></span><b
                aria-hidden="true">Link Me!</b><b aria-hidden="true">Link Me!</b><b aria-hidden="true">Link Me!</b><b
                aria-hidden="true">Link Me!</b></a>
            <button className="dir-control dir-control--secondary">Click
                Me!<span></span><span></span><span></span><span></span><b aria-hidden="true">Click Me!</b><b
                    aria-hidden="true">Click Me!</b><b aria-hidden="true">Click Me!</b><b aria-hidden="true">Click
                    Me!</b>
            </button>
            <a className="dir-control dir-control--secondary">Link
                Me!<span></span><span></span><span></span><span></span><b aria-hidden="true">Link Me!</b><b
                    aria-hidden="true">Link Me!</b><b aria-hidden="true">Link Me!</b><b aria-hidden="true">Link Me!</b></a>
            <button className="dir-control dir-control--filled">Click
                Me!<span></span><span></span><span></span><span></span><b aria-hidden="true">Click Me!</b><b
                    aria-hidden="true">Click Me!</b><b aria-hidden="true">Click Me!</b><b aria-hidden="true">Click
                    Me!</b>
            </button>
            <a className="dir-control dir-control--filled">Link
                Me!<span></span><span></span><span></span><span></span><b aria-hidden="true">Link Me!</b><b
                    aria-hidden="true">Link Me!</b><b aria-hidden="true">Link Me!</b><b aria-hidden="true">Link Me!</b></a>
        </div>
    );
};

export default Buttons;