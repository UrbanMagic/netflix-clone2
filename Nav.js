import React, { useState, useEffect } from 'react';
import './Nav.css';


function Nav() {
    const [show, handleShow] = useState(false);


    useEffect(()=> {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100 ) {

                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };

    }, []);


  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img
            className="nav__logo"
            src="data:image/png;base64,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"
            alt="Netflix Logo"
            />

           
      
    </div>
  )
}

export default Nav
