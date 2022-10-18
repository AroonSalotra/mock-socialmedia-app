const MarketItem = (props) => {
    const { item, itemImg, price, sellerName } = props;
    return (
        <div>
        
            <img src={itemImg} alt="" />
        </div>
    );
}

export default MarketItem;