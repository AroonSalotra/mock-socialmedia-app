import ListItem from "./ListItem";
import { useEffect, useState } from "react";
import StyledButton from "./StyledButton";
import CustomComponent from "./CustomComponent";
import { MdNavigateNext, MdClear, MdNavigateBefore } from "react-icons/md"

import { FcBusinessContact, FcBusiness, FcAlarmClock, FcHighPriority } from "react-icons/fc"

const Tabs = (props) => {
    const [crossStyle, setCrossStyle] = useState("opacity-40")
    const [ComponentType, setComponentType] = useState(null)
    const [isActive, setIsActive] = useState(false)

    const { marketCart } = props;

    const toggleSidebar = () => {
        setIsActive(state => !isActive)
    }

    const DATA = [
        {
            text: "Friends", icon: <FcBusinessContact />,
            clickEffect: (e) => handleClick(e)
        },
        {
            text: "Market", icon: <FcBusiness />,
            clickEffect: (e) => handleClick(e)
        },
        {
            text: "News", icon: <FcHighPriority />,
            clickEffect: (e) => handleClick(e)
        },
        {
            text: "Events", icon: <FcAlarmClock />,
            clickEffect: (e) => handleClick(e)
        }
    ]

    const handleClick = () => {
    }

    const goBack = () => {
    }

    useEffect(() => {
        const getID = (e) => {
            const id = e.target.id
            return id ? setComponentType(state => id) : null
        }

        window.addEventListener("click", getID)

        return () => window.removeEventListener("click", getID)

    }, [])

    return (
        <>
            <section className={`fixed border-gray-700 overflow-hidden h-fit mt-40 z-10 w-fit xl:border-y ${isActive ? "" : "pointer-events-none"} md:pointer-events-auto`}>
                {/* <h1>{isActive.toString()}</h1> */}
                <div className={`transition-all ${isActive ? "sidebar-open" : "sidebar-close"}  lg:-translate-x-0  lg: flex overflow-visible !pointer-events-auto`}>

                    <ListItem
                        ulClass={"flex gap-y-5 flex-col justify-between py-1 text-lg lg:flex bg-gray-800"}
                        liClass="flex"
                        iconClass={"text-3xl px-0 select-none pointer-events-none"}
                        data={DATA}
                        hideBtn={true}
                        hideText={true}
                    />

                    <StyledButton addClass={"hidden md:block"}
                        clickFunction={() =>
                            setComponentType(type => null)}>
                        <div className={"w-4 h-4 rounded-full border-2 border-gray-200"} />
                    </StyledButton>

                    <CustomComponent
                        setComponent={ComponentType}
                        marketCart={marketCart} />
                </div>

                {isActive ? <StyledButton
                    clickFunction={() => {
                        toggleSidebar();
                        setComponentType(type => null)
                    }}
                    addClass={`lg:hidden h-fit text-3xl ${crossStyle} my-auto `}>
                    <MdNavigateBefore />
                </StyledButton>
                    :
                    <StyledButton
                        clickFunction={() => toggleSidebar()}
                        addClass={`lg:hidden h-fit text-3xl ${crossStyle} my-auto pointer-events-auto`}>
                        <MdNavigateNext />
                    </StyledButton>}




            </section>
        </>
    );
}

export default Tabs;