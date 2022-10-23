import Friends from "./SidebarComponents,/Friends";
import Market from "./SidebarComponents,/Market";
import MarketDisplay from "./MarketDisplay";
import News from "./News";

import { useState } from "react";

const CustomComponent = (props) => {
    const [customProps, setCustomProps] = useState(false)

    const { setComponent } = props;

    return (
        <>
            {/* <CustomComponent /> */}
            <div className="bg-gray-800 h-112 overflow-auto">

                {setComponent === "Friends" ? <Friends /> :
                    setComponent === "Market" ? <Market /> :
                        setComponent === "News" ? <News
                            imgClass={"w-full h-40"}
                            customClass={"w-72"}
                        />
                            : null}
            </div>




            {/* {customProps ? <CustomComponent  /> : null} */}
        </>
    );
}

export default CustomComponent;