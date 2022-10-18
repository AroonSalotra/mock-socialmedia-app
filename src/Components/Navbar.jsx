import SearchBar from "./SearchBar";
import { AiFillMessage, AiFillCustomerService, AiFillNotification } from "react-icons/ai"
import { GiHamburgerMenu } from "react-icons/gi"
import Status from './Status';

import ListItem from "../render-components/ListItem";
import { useState } from "react";

const Navbar = () => {
    const [display, setDisplay] = useState("hidden")

    const handleClick = () => {
        display === "hidden" ?
            setDisplay(state => "") :
            setDisplay(state => "hidden")
    }

    const data = {
        listA: [
            { text: "Home" },
            { text: "Watch" },
            { text: "Marketplace" },
            { text: "Gaming" },
        ],
        listB: [
            { icon: <AiFillMessage />, id: "icon-nav-msg" },
            { icon: <AiFillCustomerService />, id: "icon-nav-csv" },
            { icon: <AiFillNotification />, id: "icon-nav-not" }
        ]
    }


    return (
        <nav className="fixed w-full -translate-x-1/2 left-1/2 lg:block">

            <div className="flex justify-between px-5 bg-gray-800 text-2xl lg:border-b border-gray-900">

                <button
                    onClick={() => handleClick()}
                    className="h-fit lg:hidden">
                    <GiHamburgerMenu className="text-3xl" />
                </button>

                <ListItem
                    ulClass={`${display} bg-gray-800 absolute left-14 text-1xl px-4 pb-2 lg:flex gap-5 flex-row items-center mt-7`}
                    data={data.listA}>
                </ListItem>

                {/* <Status /> */}

                <ListItem
                    ulClass={"hidden flex-row w-full justify-end gap-10 px-4 lg:flex justify-end gap-10"}
                    data={data.listB}>
                </ListItem>
            </div>

        </nav>
    );
}

export default Navbar;