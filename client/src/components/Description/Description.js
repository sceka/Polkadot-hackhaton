import React from "react";
import "./Description.scss";
import polkadot from "../../static/polkadot.png";
import axios from "axios";
const Description = () => {
    async function testApi() {
        const data = await axios
            .get("https://api.coingecko.com/api/v3/ping")
            .then((res) => {
                console.log(res);
            });
    }

    return (
        <div className="description-container" onClick={testApi}>
            <div className="description-background">
                <div>
                    <div className="description-text">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </div>
                    {/* <div style={{ color: "white" }}>Carousel</div> */}
                </div>
                <div>
                    <img src={polkadot} />
                </div>
            </div>
            <div className="description-second-part">
                <div>
                    <button className="description-start-button">
                        Start Trading
                    </button>
                </div>
                <div>
                    <button className="description-buy-button">Buy DOT</button>
                </div>
            </div>
        </div>
    );
};

export default Description;
