import SearchBar from "../SearchBar";

const ListItem = (props) => {
    const { data, classList, query } = props;


    return (
        <>
            <ul
                className={classList} >
                {props.children}
                {data.map(({ text, icon }) => {
                    return <li
                        className="hover:bg-gray-700 cursor-pointer flex lg:px-12"
                        key={text} >

                        {icon ?
                            <span className="text-3xl px-4">{icon} </span> : null}
                        {text}

                    </li>
                })}

            </ul>
        </>
    );
}

export default ListItem;