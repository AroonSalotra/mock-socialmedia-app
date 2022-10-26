import StyledButton from "./StyledButton";
import MARKET from "../data/MARKET.json"
import { useEffect, useState } from "react";
import UserDisplay from "./UserDisplay";

const MarketItem = (props) => {
    const [inCart, setInCart] = useState(false)
    const { itemID, marketCart, setMarketCart, showBtn, posterID, showPoster } = props;

    const getItem = MARKET[itemID]
    const { itemImg, price, item } = getItem

    // Load cart state
    useEffect(() => {
        const getCart = window.localStorage.getItem(`inCart ${item}`)
        if (getCart !== JSON.stringify(inCart)) setInCart(oldCart => JSON.parse(getCart))
    }, [])

    // Save cart state
    useEffect(() => {
        const setCart = window.localStorage.setItem(`inCart ${item}`, JSON.stringify(inCart))
        return setCart
    }, [inCart])

    const handleClick = () => {
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

    return (
        <div key={itemID}
            className="w-fit mt-4">

            {showPoster ? <div className="pb-4">
                <p>Listed By:</p>
                <UserDisplay
                    userId={posterID}
                    showName={true}
                />
            </div>
                : null}




            <p className="bg-gray-700 max-w-fit font-semibold px-4">{item}</p>
            <div>
                <img className="w-40 h-40 object-cover"
                    src={itemImg}
                    alt="" />
                <p className="absolute translate-x-24 -translate-y-4 bg-gray-700 px-4 rounded-md">£ {price} </p>
            </div>

            {showBtn ?
                <StyledButton
                    clickFunction={() => handleClick()}>
                    {inCart ? "Remove" : "Add"}
                </StyledButton>
                : null}

        </div>
    );
}

export default MarketItem;