import React from "react";
import CardItem from "../src/components/CardItem";
import "../components/Cards.css";



function Start() {
    return (
        <div className="main">
            <div id="basics" className="cards">
                <h1>Learn REGARDS basics</h1>
                <div className="cards__container">
                    <div className="cards__wrapper">
                        <ul className="cards__items">
                            <CardItem
                                src="/img/icons/satellite.svg"
                                title="Safely preserve your data"
                                text={
                                    <div>
                                        <p></p>
                                    </div>
                                }
                            />
                            <CardItem
                                src="/img/icons/server.svg"
                                title="Harvest any metadata from anywhere."
                                text={
                                    <div>
                                        <p></p>
                                    </div>
                                }
                            />
                            <CardItem
                                src="/img/icons/browser.svg"
                                title="Deep search"
                                text={
                                    <div>
                                        <p></p>
                                    </div>
                                }
                            />
                        </ul>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Start;
