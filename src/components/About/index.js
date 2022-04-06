import React from 'react';


function About () {
    return (
        <>
        <span className="palm-img"/>
        <div className="about-container">
            <img className="partners-img" src={require('../../images/partners.jpg')} alt="partners" />
            <p className="who-we-are"><strong><em>Who we are--</em></strong>I figured this could be the about them section? idk its up to you i'm going to fill it in with jibberish. Praesent et aliquet urna, ut rhoncus augue. Donec aliquet, ipsum non commodo facilisis, orci ligula hendrerit elit, eget sagittis massa nulla quis elit. Integer a tellus a mi ornare lobortis sed vel eros. Morbi at accumsan leo. Nam non orci in nibh facilisis fermentum. Praesent in volutpat felis. Cras consectetur imperdiet bibendum. Aliquam eu nunc odio. Vestibulum vit</p>
        </div>

        </>
    )
}

export default About;