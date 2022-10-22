import MARKET from "../../data/MARKET.json"
import MarketItem from "../MarketItem";
import { Link } from "react-router-dom";

const Market = () => {
    return (
        <div className="flex flex-col pl-10">
            <Link to={"/mock-socialmedia-app/marketplace"}>
                Go to Marketplace
            </Link>
            {MARKET.map(({ itemID }) => {
                return <>
                    <MarketItem
                        itemID={itemID}
                    />
                </>
            })}
        </div>

    );
}

export default Market;