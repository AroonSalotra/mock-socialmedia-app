import SearchBar from "../SearchBar";

const ListItem = (props) => {
    const { data, classList, query } = props;


    return (
        <ul
            className={classList} >
            {props.children}
            {data.map(({ text, icon, clickEffect }) => {
                return <li
                    className="hover:bg-gray-700 cursor-pointer flex py-4 px-4 rounded-md"

                    key={text}

                    onClick={() => clickEffect()}>

                    {icon ?
                        <span className="text-3xl px-4">
                            {icon}</span> : null}

                    {text}
                </li>
            })}

        </ul>
    );
}

export default ListItem;