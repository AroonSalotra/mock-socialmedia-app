import SearchBar from "./SearchBar";
import { AiFillMessage, AiFillCustomerService, AiFillNotification } from "react-icons/ai"
import Status from './Status';


import ListItem from "./render-components/ListItem";

const Navbar = () => {

    const data = {
        listA: [
            { text: "Home" },
            { text: "Watch" },
            { text: "Marketplace" },
            { text: "Gaming" },
        ],
        listB: [
            { icon: <AiFillMessage /> },
            { icon: <AiFillCustomerService /> },
            { icon: <AiFillNotification /> }
        ]
    }

    const classList = "flex flex-col items-center gap-0 sm:flex-row justify-center gap-5 py-2 bg-gray-800"

    // translate-x-1/2 left-1/2 w-full

    return (
        <nav className="fixed w-full -translate-x-1/2 border-b-2 border-gray-900 px-4  left-1/2 bg-gray-800 hidden lg:block">

            <div className="flex justify-between">
                <ListItem
                    classList={classList}
                    data={data.listA}>
                </ListItem>

                <Status />

                {/* <SearchBar /> */}
                <ListItem
                    classList={classList}
                    data={data.listB}>
                </ListItem>
            </div>

        </nav>
    );
}

export default Navbar;