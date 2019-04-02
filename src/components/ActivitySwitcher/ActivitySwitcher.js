import React from 'react';
import Me from '../Pages/Me/Me';
import Work from '../Pages/Work/Work';
import Contact from '../Pages/Contact/Contact';

const ActiviySwitcher = (props) => {
    const menu = props.menu;
    console.log(menu);
    if (menu[0].active === true) {
        return <Me/>;
    }
    if (menu[1].active === true) {
        return <Work/>;
    }
    if (menu[2].active === true) {
        return <Contact/>;
    }
    else {
        return null;
    }
}

export default ActiviySwitcher;