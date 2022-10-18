const ListItem = (props) => {
    const { data, ulClass, liClass, iconClass } = props;

    const hoverClass = "hover:bg-gray-700 cursor-pointer rounded-md"


    const verifyLiClass = liClass ? liClass : ""
    const verifyUlClass = ulClass ? ulClass : ""

    return (
        <ul
            className={verifyUlClass} >
            {props.children}
            {data.map(({ text, icon, clickEffect, id }) => {
                return clickEffect ?
                    // Return <li with onclick if key exists
                    <li key={text ? text : id}
                        onClick={() => clickEffect()}
                        className={`${hoverClass} ${verifyLiClass}`}>
                        {icon ?
                            <span className={iconClass ?
                                iconClass : "text-3xl px-4"}>

                                {icon}</span> : null}
                        {text ? text : null}
                    </li>
                    :
                    // Return <li without onclick otherwise
                    <li key={text ? text : id}
                        className={`${hoverClass} ${verifyLiClass}`}>
                        {icon ?
                            <span className={iconClass ?
                                iconClass : "text-3xl px-4"}>

                                {icon}</span> : null}
                        {text ? text : null}
                    </li>
            })}

        </ul>
    );
}

export default ListItem;