import React from 'react';
import './Footer.css';

const Footer = ()=> (
    <div className="foot-nav">
        <ul>
            <li> For BounceInsight </li>
            <li> Copyright &copy; {new Date().getFullYear()} </li>
            <li> Olatunji Yusuf </li>
        </ul>
    </div>
);


export default Footer;