import { Link } from "react-router-dom";
import MarketDisplay from "./MarketDisplay";
import Friends from "./SidebarComponents,/Friends";
import Market from "./SidebarComponents,/Market";

const DebugComponent = (props) => {

    const { MyComponent } = props;

    console.log(MyComponent)

    let CustomComponent;

    switch (MyComponent) {
        case "Friends":
            CustomComponent = Friends
            break;
        case "Market":
            CustomComponent = Market
            break;
        default:
            return undefined
    }

    // let Custom;
    // Custom = MarketDisplay

    return (
        <div>
            {/* <MyComponent /> */}
            <CustomComponent />
        </div>
    );
}

export default DebugComponent;