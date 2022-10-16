import ListItem from ".././render-components/ListItem";

import { FcBusinessContact, FcBusiness, FcAlarmClock, FcHighPriority, FcAdvertising, FcBinoculars, FcNook, FcNfcSign, FcPlus, FcRatings } from "react-icons/fc"

const Tabs = () => {

    const DATA = [
        { text: "Friends", icon: <FcBusinessContact /> },
        { text: "Groups", icon: <FcAdvertising /> },
        { text: "Marketplace", icon: <FcBusiness /> },
        { text: "Watch", icon: <FcBinoculars /> },
        { text: "Memories", icon: <FcNfcSign /> },
        { text: "Saved", icon: <FcPlus /> },
        { text: "Pages", icon: <FcNook /> },
        { text: "News", icon: <FcHighPriority /> },
        { text: "Events", icon: <FcAlarmClock /> },
        { text: "Most Recent", icon: <FcRatings /> },
    ]

    const classList = "flex flex-col py-1 gap-1 pr-1 w-fit text-lg hidden lg:flex bg-gray-800"

    return (
        <>
            <div className="fixed top-20">
                <ListItem
                    classList={classList}
                    data={DATA} />
            </div>
        </>
    );
}

export default Tabs;