import ListItem from "./ListItem";

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

    const classList = "flex flex-col py-1 gap-10 text-lg hidden lg:flex gap-10 bg-gray-800"

    return (
        <>
            <section className="fixed hidden top-36 xl:block">
                <ListItem
                    ulClass={classList}
                    liClass="flex"
                    data={DATA} />
            </section>
        </>
    );
}

export default Tabs;