import SearchBar from "../Components/SearchBar";

const ListItem = (props) => {
    const { data, classList, query } = props;

    const thisClass = "hover:bg-gray-700 cursor-pointer flex py-4 px-4 rounded-md"

    return (
        <ul
            className={classList} >
            {props.children}
            {data.map(({ text, icon, clickEffect }) => {
                return clickEffect ?
                    // Return <li with onclick if key exists
                    <li onClick={() => clickEffect()}
                        className={thisClass}>
                        {icon ?
                            <span className="text-3xl px-4">
                                {icon}</span> : null}
                        {text ? text : null}
                    </li>
                    :
                    // Return <li without onclick otherwise
                    <li className={thisClass}>
                        {icon ?
                            <span className="text-3xl px-4">
                                {icon}</span> : null}
                        {text ? text : null}

                    </li>
            })}

        </ul>
    );
}

export default ListItem;