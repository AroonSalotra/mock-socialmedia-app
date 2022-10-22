import Friends from "./SidebarComponents,/Friends";
import Market from "./SidebarComponents,/Market";
import MarketDisplay from "./MarketDisplay";

import { useState } from "react";

const CustomComponent = (props) => {
    const [customProps, setCustomProps] = useState(false)

    const { setComponent  } = props;

    console.log(setComponent)

    let CustomComponent;

    switch (setComponent) {
        case "Friends":
            CustomComponent = Friends
            break;
        case "Market":
            CustomComponent = Market
            break;
        default:
            return undefined
    }
    return (
        <>
            <CustomComponent   />

            {/* {customProps ? <CustomComponent  /> : null} */}
        </>
    );
}

export default CustomComponent;