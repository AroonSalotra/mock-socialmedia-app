import SearchBar from "./SearchBar";
import { AiFillMessage, AiFillCustomerService, AiFillNotification } from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi"
import Status from './Status';
import { Link } from "react-router-dom";
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
            { text: "Home", linkTo: "home" },
            // { text: "Watch" },
            { text: "Marketplace", linkTo: "marketplace" },
            { text: "Gaming", linkTo: "gaming" },
            { text: "Debug", linkTo: "debug" }
        ],
        listB: [
            { icon: <AiFillMessage />, id: "icon-nav-msg" },
            { icon: <AiFillCustomerService />, id: "icon-nav-csv" },
            { icon: <AiFillNotification />, id: "icon-nav-not" }
        ]
    }


    return (
        <nav className="fixed -translate-x-1/2 left-1/2 lg:block w-full">

            <div className="flex px-5 bg-gray-800 w-fit text-2xl border-b border-gray-900 lg:w-full">

                <button
                    onClick={() => handleClick()}
                    className="h-fit lg:hidden">
                    <GiHamburgerMenu className="text-3xl" />
                </button>

                <ListLinkTo
                    ulClass={`${display} flex flex-col lg:flex-row lg:flex gap-5 items-center justify-between`}
                    data={navbarContent.listA}>
                </ListLinkTo>

                {/* <Status /> */}

                <ListItem
                    ulClass={"hidden flex-row w-full justify-end gap-10 px-4 lg:flex justify-end gap-10"}
                    data={navbarContent.listB}>
                </ListItem>
            </div>

        </nav>
    );
}

export default Navbar;