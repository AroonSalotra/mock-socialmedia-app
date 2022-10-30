import Friends from "./SidebarComponents,/Friends";
import Market from "./SidebarComponents,/Market";
import MarketDisplay from "./MarketDisplay";
import News from "./News";
import Events from "./SidebarComponents,/Events";

import { useState } from "react";

const CustomComponent = (props) => {
    const [customProps, setCustomProps] = useState(false)

    const { setComponent, marketCart } = props;

    // console.log(marketCart)

    return (
        <>
            {/* <CustomComponent /> */}
            <div className="bg-gray-800 overflow-auto h-112 sm:w-fit">

                {setComponent === "Friends" ? <Friends /> :
                    setComponent === "Market" ? <Market
                        marketCart={marketCart}
                    /> :
                        setComponent === "News" ? <News
                            showLink={true}
                            imgClass={"w-full h-40"}
                            customClass={" sm:w-72 bg-gray-900 px-4 my-4"}
                        />
                            : setComponent === "Events" ? <Events />
                                : null}
            </div>

            {/* {customProps ? <CustomComponent  /> : null} */}
        </>
    );
}

export default CustomComponent;