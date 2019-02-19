import React from 'react';

import smartbrain_photo from '../../resources/smartbrain_photo.png';

const Portfolio = () => {
    return (
        <section id="portfolio">
            <div>
                <article>
                    <h2 class="f3 fw4 pa3 mv0">Portfolio</h2>
                    <div class="cf pa2">
                        <div class="fl w-50 w-25-m w-20-l pa2">
                        <a href="https://smart-brain-guilherme.herokuapp.com/" class="db link dim tc">
                            <img src={smartbrain_photo} alt="Frank Ocean Blonde Album Cover" class="w-100 db outline black-10"/>
                            <dl class="mt2 f6 lh-copy">
                            <dt class="clip">Title</dt>
                            <dd class="ml0 black truncate w-100">Smart Brain</dd>
                            <dt class="clip">Artist</dt>
                            <dd class="ml0 gray truncate w-100">Face-Recognition app</dd>
                            </dl>
                        </a>
                        </div>
                        
                        <div class="fl w-50 w-25-m w-20-l pa2">
                        <a href="https://geo.itunes.apple.com/us/album/jeffery/id1146718343?at=1l3vqFJ&mt=1&app=music" class="db link dim tc">
                            <img src="http://is1.mzstatic.com/image/thumb/Music71/v4/c8/2d/b1/c82db1cd-9dc5-d7cb-2a34-735cf47bb809/source/400x40000bb.png" alt="Young Thug - Jeffery Album Cover" class="w-100 db outline black-10"/>
                            <dl class="mt2 f6 lh-copy">
                            <dt class="clip">Title</dt>
                            <dd class="ml0 black truncate w-100 ttu">Jeffery</dd>
                            <dt class="clip">Artist</dt>
                            <dd class="ml0 gray truncate w-100">Young Thug</dd>
                            </dl>
                        </a>
                        </div>
                        
                        <div class="fl w-50 w-25-m w-20-l pa2">
                        <a href="https://geo.itunes.apple.com/us/album/untitled-unmastered./id1089846273?at=1l3vqFJ&mt=1&app=music" class="db link dim tc">
                            <img src="http://is5.mzstatic.com/image/thumb/Music49/v4/1b/36/43/1b3643c6-e6a3-41bc-7f6d-7c2b64b5d60b/source/400x40000bb.png" alt="Kendrick Lamar untitled unmastered. Album Cover" class="w-100 db outline black-10"/>
                            <dl class="mt2 f6 lh-copy">
                            <dt class="clip">Title</dt>
                            <dd class="ml0 black truncate w-100">untitled umastered.</dd>
                            <dt class="clip">Artist</dt>
                            <dd class="ml0 gray truncate w-100">Kendrick Lamar</dd>
                            </dl>
                        </a>
                        </div>
                        
                    </div>
                </article>
            </div>
        </section>
    );
}

export default Portfolio;