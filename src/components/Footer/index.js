import React from 'react';


function Footer() {
    return (
        <>
        <div className="footer-container">
        <img className="footer-logo" src={require('../../images/facebook.jpg')} alt="facebook logo"/>
        <img className="footer-logo" src={require('../../images/insta.png')} alt="instagram logo" />
        </div>
        </>
    )
};

export default Footer;