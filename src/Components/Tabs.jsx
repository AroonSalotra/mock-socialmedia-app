import ListItem from "./ListItem";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Friends from "./SidebarComponents,/Friends";
import Post from "./Post";
import StyledButton from "./StyledButton";

import { FcBusinessContact, FcBusiness, FcAlarmClock, FcHighPriority, FcAdvertising, FcBinoculars, FcNook, FcNfcSign, FcPlus, FcRatings } from "react-icons/fc"

const Tabs = () => {
    const [index, setIndex] = useState(0)
    const [ComponentType, setComponentType] = useState(null)

    const DATA = [
        {
            text: "Friends", icon: <FcBusinessContact />,
            clickEffect: (e) => handleClick(e)
        },
        {
            text: "Groups", icon: <FcAdvertising />,
            clickEffect: (e) => handleClick(e)
        },
        // { text: "Marketplace", icon: <FcBusiness /> },
        {
            text: "Watch", icon: <FcBinoculars />,
            clickEffect: (e) => handleClick(e)
        },
        {
            text: "Memories", icon: <FcNfcSign />,
            clickEffect: () => handleClick()
        },
        {
            text: "Saved", icon: <FcPlus />,
            clickEffect: (e) => handleClick(e)
        },
        {
            text: "Pages", icon: <FcNook />,
            clickEffect: (e) => handleClick(e)
        },
        {
            text: "News", icon: <FcHighPriority />,
            clickEffect: (e) => handleClick(e)
        },
        {
            text: "Events", icon: <FcAlarmClock />,
            clickEffect: (e) => handleClick(e)
        },
        {
            text: "Most Recent", icon: <FcRatings />,
            clickEffect: (e) => handleClick(e)
        }
    ]

    const handleClick = () => {
        const checkIndex = index === 0 ?
            setIndex(state => 40) :
            setIndex(state => 0)

        return checkIndex
    }

    const goBack = () => {
        const resetIndex = index !== 0 ? setIndex(index => 0) : null
        const resetComponentType = setComponentType(current => null)

        return resetIndex & resetComponentType
    }

    useEffect(() => {
        console.log(ComponentType)
    }, [ComponentType])

    useEffect(() => {
        const getID = (e) => {
            const id = e.target.id
            return id ? setComponentType(state => id) : null
        }

        window.addEventListener("click", getID)

        return () => window.removeEventListener("click", getID)

    }, [])

    useEffect(() => {
        console.log(index)
    }, [index])

    let MyComponent;

    switch (ComponentType) {
        case "Friends":
            MyComponent = Friends
            break;
        default:
            MyComponent = null
    }


    return (
        <>
            <section className="fixed border-2 border-white overflow-x-hidden w-70 mt-5">
                <div className={`flex gap-5 overflow-visible transition-all -translate-x-${index}`}>

                    <ListItem
                        ulClass={"flex flex-col py-1 text-lg hidden lg:flex gap-10 bg-gray-800"}
                        liClass="flex"
                        data={DATA} />

                    {/* <h1 onClick={() => goBack()}>
                        Back</h1> */}

                    <StyledButton clickFunction={() => goBack()}>
                        Back
                    </StyledButton>

                    {MyComponent ? <MyComponent /> : null}
                </div>

            </section>


        </>
    );
}

export default Tabs;