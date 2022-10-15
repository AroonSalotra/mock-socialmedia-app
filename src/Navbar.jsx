import SearchBar from "./SearchBar";

import ListItem from "./render-components/ListItem";

const Navbar = () => {

    const data = [
        { text: "Home" },
        { text: "Watch" },
        { text: "Marketplace" },
        { text: "Gaming" },
    ]

    const classList = "flex flex-col items-center gap-0 sm:flex-row justify-center gap-5 py-2"

    return (
        <nav className="bg-orange-300">

            <ListItem
                classList={classList}
                data={data}>
                <SearchBar />
            </ListItem>

        </nav>
    );
}

export default Navbar;