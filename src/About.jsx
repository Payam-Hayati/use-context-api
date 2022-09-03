import React, { useContext } from "react";
import { createContext } from 'react'
import { AppContext } from './App'

const About = () => {
    const { username } = useContext(AppContext);
    return (
        <div>
            <h2>About {username}</h2>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero,
                doloremque magnam! Dolor quae consequuntur, praesentium corporis illo
                neque aliquid? Veritatis illum, placeat unde consequatur labore eligendi
                dolore hic obcaecati reiciendis!
            </p>
        </div>
    );
};

export default About;
