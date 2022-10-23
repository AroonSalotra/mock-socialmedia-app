import StyledButton from "./StyledButton";
import MARKET from "../data/MARKET.json"
import { useState } from "react";

const MarketItem = (props) => {
    const [inCart, setInCart] = useState(false)
    const { itemID, marketCart, setMarketCart, showBtn } = props;

    const getItem = MARKET[itemID]
    const { itemImg, price, item } = getItem

    console.log(itemID)

    const handleClick = () => {
        // console.log("this item's ID is", itemID)

        if (inCart) {
            let cartClone = [...marketCart]
            const matchItem = cartClone.findIndex(elem => {
                return elem.id === itemID
            })
            cartClone.splice(matchItem, 1)
            setMarketCart(cartClone)
            setInCart(state => false)
        }
        else {
            setMarketCart(current => [...current, { id: itemID, name: item }])
            setInCart(state => true)
        }
    }

    // console.log(MARKET[itemID])

    return (
        <div>
        
            <p>{item}</p>
            <img className="w-40 h-40 object-cover"
                src={itemImg}
                alt="" />

            {showBtn ?
                <StyledButton
                    clickFunction={() => handleClick()}>
                    {inCart ? "Remove" : "Add"}
                </StyledButton>
                : null}

            <p>
                {price}
            </p>

        </div>
    );
}

export default MarketItem;