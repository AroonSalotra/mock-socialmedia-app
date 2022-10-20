import ListItem from "./ListItem";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Sidebar from "./Sidebar";
import Post from "./Post";
import StyledButton from "./StyledButton";

import { FcBusinessContact, FcBusiness, FcAlarmClock, FcHighPriority, FcAdvertising, FcBinoculars, FcNook, FcNfcSign, FcPlus, FcRatings } from "react-icons/fc"

const Tabs = () => {
    const [index, setIndex] = useState(40)

    const DATA = [
        { text: "Friends", icon: <FcBusinessContact /> },
        { text: "Groups", icon: <FcAdvertising /> },
        // { text: "Marketplace", icon: <FcBusiness /> },
        { text: "Watch", icon: <FcBinoculars /> },
        { text: "Memories", icon: <FcNfcSign /> },
        { text: "Saved", icon: <FcPlus /> },
        { text: "Pages", icon: <FcNook /> },
        { text: "News", icon: <FcHighPriority /> },
        { text: "Events", icon: <FcAlarmClock /> },
        { text: "Most Recent", icon: <FcRatings /> },
    ]

    const handleClick = () => {
        index === 0 ? setIndex(state => 40) : setIndex(state => 0)
    }

    useEffect(() => {
        console.log(index)
    }, [index])

    const classList = "flex flex-col py-1 gap-10 text-lg hidden lg:flex gap-10 bg-gray-800"

    let MyComponent;
    MyComponent = Sidebar

    return (
        <>
            <section className="border-2 border-white overflow-x-hidden w-fit mt-5">
                <div className={`flex gap-20 overflow-visible transition-all -translate-x-${index}`}>
                    <ListItem
                        ulClass={classList}
                        liClass="flex"
                        data={DATA} />

                    {/* <Component/> */}
                    {/* <MyComponent /> */}
                    {MyComponent ? <MyComponent /> : null}

                </div>
            </section>

            <StyledButton clickFunction={() => handleClick()}>
                BTN
            </StyledButton>
        </>
    );
}

export default Tabs;