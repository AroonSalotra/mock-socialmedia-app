import MarketItem from "../MarketItem";
import { Link } from "react-router-dom";
import StyledButton from "../StyledButton";

const Market = (props) => {
    const { marketCart } = props;
    return (
        <div className="flex flex-col p-5 w-fit">
            <Link to={"/mock-socialmedia-app/marketplace"}>
                <StyledButton>
                    Go to Marketplace
                </StyledButton>
            </Link>

            <p className="text-sm text-slate-400 font-semibold italic w-40">
                Your wishlisted items will appear here</p>

            {marketCart.map(({ id }) => {
                return <div key={id}>
                    <MarketItem
                        itemID={id}
                        hidePrice={true} />
                </div>
            })}
        </div>

    );
}

export default Market;