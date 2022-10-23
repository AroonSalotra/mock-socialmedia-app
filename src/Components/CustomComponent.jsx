import Friends from "./SidebarComponents,/Friends";
import Market from "./SidebarComponents,/Market";
import MarketDisplay from "./MarketDisplay";
import News from "./News";
import Events from "./SidebarComponents,/Events";

import { useState } from "react";

const CustomComponent = (props) => {
    const [customProps, setCustomProps] = useState(false)

    const { setComponent } = props;

    return (
        <>
            {/* <CustomComponent /> */}
            <div className="bg-gray-800 h-112 overflow-auto">

                {setComponent === "Friends" ? <Friends /> :
                    setComponent === "Market" ? <MarketDisplay
                        customClass={"flex-col"}
                    /> :
                        setComponent === "News" ? <News
                            imgClass={"w-full h-40"}
                            customClass={"w-72"}
                        />
                            : setComponent === "Events" ? <Events />
                                : null}
            </div>




            {/* {customProps ? <CustomComponent  /> : null} */}
        </>
    );
}

export default CustomComponent;