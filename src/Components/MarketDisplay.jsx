import MARKET from "../data/MARKET.json"
import MarketItem from "./MarketItem";

const MarketDisplay = (props) => {
    const { marketCart, setMarketCart, customClass } = props
    return (
        <section>
        
            <div className={customClass ? customClass :
                "flex flex-col items-center md:grid grid-cols-3 justify-center gap-20 pt-4 lg:mx-64"}>

                {MARKET.map(({ itemID, posterID }) => {
                    return <MarketItem
                        key={itemID}
                        itemID={itemID}
                        posterID={posterID}
                        marketCart={marketCart}
                        setMarketCart={setMarketCart}
                        showBtn={true}
                        showPoster={true}
                    />
                })}
            </div>

        </section>
    );
}

export default MarketDisplay;