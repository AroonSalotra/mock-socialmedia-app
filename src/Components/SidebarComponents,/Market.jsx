import MARKET from "../../data/MARKET.json"
import MarketItem from "../MarketItem";
import { Link } from "react-router-dom";
import StyledButton from "../StyledButton";

const Market = (props) => {
    const { marketCart } = props;

    console.log("state", marketCart)

    return (
        <div className="flex flex-col p-5">
            <Link to={"/mock-socialmedia-app/marketplace"}>
                <StyledButton>
                    Go to Marketplace
                </StyledButton>
            </Link>
            <p className="text-sm text-slate-400 font-semibold italic w-40">
                Your wishlisted items will appear here</p>

            {marketCart.map(({ id }) => {
                return <>
                    <MarketItem
                        itemID={id} />
                </>
            })}
        </div>

    );
}

export default Market;