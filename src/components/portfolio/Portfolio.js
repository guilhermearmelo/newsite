import React from 'react';

import smartbrain_photo from '../../resources/smartbrain_photo.png';
import robofriends_photo from '../../resources/robofriends_photo.png';

const Portfolio = () => {
    return (
        <section id="portfolio">
            <div>
                <article>
                    <h2 class="f3 fw4 pa3 mv0">Portfolio</h2>
                    <div class="cf pa2">
                        
                        <div class="fl w-50 w-25-m w-20-l pa2">
                        <a href="https://smart-brain-guilherme.herokuapp.com/" class="db link dim tc" target="_blank" rel="noopener noreferrer">
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
                        <a href="https://guilhermearmelo.github.io/robofriends/" class="db link dim tc" target="_blank" rel="noopener noreferrer">
                            <img src={robofriends_photo} alt="Frank Ocean Blonde Album Cover" class="w-100 db outline black-10"/>
                            <dl class="mt2 f6 lh-copy">
                            <dt class="clip">Title</dt>
                            <dd class="ml0 black truncate w-100">Robofriends</dd>
                            <dt class="clip">Artist</dt>
                            <dd class="ml0 gray truncate w-100">Robot Searcher based on End Point</dd>
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