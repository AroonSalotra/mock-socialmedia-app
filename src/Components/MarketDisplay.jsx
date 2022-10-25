import { useEffect } from "react";
import MARKET from "../data/MARKET.json"
import MarketItem from "./MarketItem";
import Post from "./Post";

const MarketDisplay = (props) => {
    const { users, marketCart, setMarketCart, customClass } = props

    // useEffect(() => {
    //     const getCart = window.localStorage.getItem("CART")
    //     setMarketCart(current => JSON.parse(getCart))
    // }, [])


    return (
        <section>
            <h1 className="text-white text-center text-3xl">This is the marketplace!</h1>
            <div className={customClass ? customClass :
                "flex justify-center gap-20 flex-wrap"}>
                {/* {MARKET.map(({ item, itemImg, price, sellerName }) => {
                    return <MarketItem
                        item={item}
                        itemImg={itemImg}
                        price={price}
                        sellerName={sellerName} />
                })} */}

                {MARKET.map(({ itemID }) => {
                    return <MarketItem
                        key={itemID}
                        itemID={itemID}
                        marketCart={marketCart}
                        setMarketCart={setMarketCart}
                        showBtn={true}
                    />

                })}
            </div>

            {/* {marketCart.map(({ id, name }) => {
                return <p className="text-center">
                    {name}
                </p>
            })} */}

        </section>
    );
}

export default MarketDisplay;