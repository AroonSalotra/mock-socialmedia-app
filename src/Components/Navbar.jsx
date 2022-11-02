import { AiFillMessage, AiFillCustomerService, AiFillNotification, AiFillHome, AiFillHdd } from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi"
import ListLinkTo from "./ListLinkTo";
import ListItem from "./ListItem";
import { useState } from "react";

const Navbar = () => {
    const [display, setDisplay] = useState("hidden")

    const handleClick = () => {
        display === "hidden" ?
            setDisplay(state => "") :
            setDisplay(state => "hidden")
    }

    const navbarContent = {
        listA: [
            { text: <AiFillHome />, linkTo: "", id: "nav-home" },
            { text: <AiFillNotification />, linkTo: "marketplace", id: "nav-mkt" },
            { text: <AiFillHdd />, linkTo: "news", id: "nav-nws" },
            { text: "Debug", linkTo: "debug", id: "nav-dbg" },
        ],
        listB: [
            { icon: <AiFillMessage />, id: "icon-nav-msg" },
            { icon: <AiFillCustomerService />, id: "icon-nav-csv" },
            { icon: <AiFillNotification />, id: "icon-nav-not" }
        ]
    }

    return (
        <nav className="fixed -translate-x-1/2 left-1/2 w-screen lg:border-b-2 border-gray-900 z-40">

            <div className="flex px-5 bg-gray-800 w-fit text-2xl lg:w-full">

                <button
                    onClick={() => handleClick()}
                    className="h-fit w-screen fixed left-5 top-1 lg:hidden">
                    <GiHamburgerMenu className="text-4xl" />
                </button>

                <ListLinkTo
                    ulClass={`${display} flex flex-col pt-14 lg:flex-row lg:pt-0 lg:flex gap-5 items-center m-auto`}
                    data={navbarContent.listA}>
                </ListLinkTo>
            </div>

        </nav>
    );
}

export default Navbar;