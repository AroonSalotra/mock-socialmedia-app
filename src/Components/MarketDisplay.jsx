import MARKET from "../data/MARKET.json"
import MarketItem from "./MarketItem";
import Post from "./Post";

const MarketDisplay = (props) => {
    const { users } = props

    console.log(MARKET)

    return (
        <section className="">
            <h1 className="text-white text-center text-3xl">This is the marketplace!</h1>
            <div className="flex flex-wrap justify-center lg:grid grid-cols-4 gap-5 px-20 3xl:flex">
                {/* {MARKET.map(({ item, itemImg, price, sellerName }) => {
                    return <MarketItem
                        item={item}
                        itemImg={itemImg}
                        price={price}
                        sellerName={sellerName} />
                })} */}

                {MARKET.map(({ item, itemImg, price, sellerName, posterID, text }) => {
                    return <Post
                        userName={users[posterID].userName}
                        userImg={users[posterID].userImg}
                        postType={"market"}
                        postImg={itemImg}
                        customClass={"h-fit"}
                        item={item}
                        price={price}
                        // postText={text}
                        imgClass="w-64 h-64 object-cover"
                    />
                })}
            </div>
        </section>
    );
}

export default MarketDisplay;