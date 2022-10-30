import ListItem from "./ListItem";
import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Friends from "./SidebarComponents,/Friends";
import Market from "./SidebarComponents,/Market";
import Post from "./Post";
import StyledButton from "./StyledButton";
import MarketDisplay from "./MarketDisplay";
import CustomComponent from "./CustomComponent";
import { GrNext, GrPrevious } from "react-icons/gr"
import { MdNavigateNext, MdClear } from "react-icons/md"

import { FcBusinessContact, FcBusiness, FcAlarmClock, FcHighPriority, FcAdvertising, FcBinoculars, FcNook, FcNfcSign, FcPlus, FcRatings } from "react-icons/fc"

const Tabs = (props) => {
    const [index, setIndex] = useState(0)
    const [crossStyle, setCrossStyle] = useState("opacity-40")
    const [ComponentType, setComponentType] = useState(null)
    const [clickThrough, setClickThrough] = useState(null)

    const { marketCart } = props;

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
        if (index === 0) {
            setIndex(state => 20)
        } else setIndex(state => 0)

    }

    const goBack = () => {
        if (index === 0) {
            setIndex(index => 20)
            setComponentType(current => null)
            setCrossStyle("opacity-100")
        }
    }

    const toggleShow = (value) => {

        if (index !== 20 & value === "show") {
            setIndex(index => 20)
            setCrossStyle("opacity-60")
            setComponentType(null)
        } else {
            setIndex(index => 0)
            setCrossStyle("opacity-100")
        }
    }

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

    return (
        <>
            <section className="fixed overflow-hidden h-fit mt-40 z-10 w-fit">
                <h1>{index}</h1>
                <div className={`transition-all -translate-x-${index} md:-translate-x-0 lg:-translate-x-${index} flex overflow-visible`}>

                    <ListItem
                        ulClass={"flex gap-y-5 flex-col justify-between py-1 text-lg lg:flex bg-gray-800"}
                        liClass="flex"
                        iconClass={"text-3xl px-0 select-none pointer-events-none"}
                        data={DATA}
                        hideBtn={true} />

                    <StyledButton addClass={"hidden md:block"}
                        clickFunction={() => goBack()}>
                        <div className={"w-4 h-4 rounded-full border-2 border-gray-200"} />
                    </StyledButton>

                    <CustomComponent
                        setComponent={ComponentType}
                        marketCart={marketCart} />
                </div>

                {index !== 20 ? <StyledButton clickFunction={() => toggleShow("show")}
                    addClass={`md:hidden h-fit text-3xl ${crossStyle} my-auto`}>
                    <MdClear />
                </StyledButton>
                    :
                    <StyledButton clickFunction={() => toggleShow("hide")}
                        addClass={`md:hidden h-fit text-3xl ${crossStyle} my-auto`}>
                        <MdNavigateNext />
                    </StyledButton>
                }

            </section>
        </>
    );
}

export default Tabs;