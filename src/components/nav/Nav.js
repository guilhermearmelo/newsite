import React from 'react';

const Nav = () => {
    return (
        <div id="home">
            <nav className="db dt-l w-100 border-box pa3 ph5-l bb bg-black-90">
            <a className="db dtc-l v-mid white link dim w-100 w-25-l tc tl-l mb2 mb0-l" href="#home" title="Home">
                GUILHERME MELO
            </a>
            <div className="db dtc-l v-mid w-100 w-75-l tc tr-l">
                <a className="link dim white f6 f5-l dib mr3 mr4-l" href="#home" title="Home">Home</a>
                <a className="link dim white f6 f5-l dib mr3 mr4-l" href="#tecnologies" title="Tecnologies">Tecnologies</a>
                <a className="link dim white f6 f5-l dib mr3 mr4-l" href="#portfolio" title="Portfolio">Portfolio</a>
                <a className="link dim white f6 f5-l dib" href="#" title="Contact">Contact</a>
            </div>
            </nav>
        </div>
    );
}

export default Nav;