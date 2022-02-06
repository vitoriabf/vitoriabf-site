import React from 'react';
import './index.scss';

export function SectionPortfolio() {
    return (
        <>
            <section id="portfolio">
                <div className="portfolio-title">
                    <hr/>
                    <h1>Portfolio</h1>
                    <hr/>
                </div>

                <ul className="portfolio-content">
                    <li className="portfolio-items">
                        Can I get you a ☕? <br/><br/>
                        *in production*
                    </li>
                    <li className="portfolio-items">
                        Can I get you a ☕? <br/><br/>
                        *in production*
                    </li>
                    <li className="portfolio-items">
                        Can I get you a ☕? <br/><br/>
                        *in production*
                    </li>
                </ul>

                <div className="portfolio-options">
                    <button><a href="#" >More</a></button>
                    <button><a href="https://github.com/vitoriabf?tab=repositories" target="__blank">Repositories at Github</a></button>
                </div>


            </section>
        </>
    )
}