import Friends from "./SidebarComponents,/Friends";
import Market from "./SidebarComponents,/Market";

const CustomComponent = (props) => {

    const { setComponent } = props;

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
            <CustomComponent />
        </>
    );
}

export default CustomComponent;