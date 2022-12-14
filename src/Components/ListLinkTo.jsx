import { Link } from "react-router-dom";

const ListLinkTo = (props) => {

    const { data, ulClass, liClass, iconClass } = props;

    const hoverClass = "hover:bg-gray-700 cursor-pointer rounded-full p-4 active:scale-95"
    const verifyLiClass = liClass ? liClass : ""
    const verifyUlClass = ulClass ? ulClass : ""
    const baseClass = `${hoverClass} ${verifyLiClass}`


    return (
        <ul
            className={verifyUlClass} >
            {props.children}
            {data.map(({ text, icon, clickEffect, id, linkTo }) => {
                return clickEffect ?
                    // Return <li with onclick if key exists
                    <Link to={`/mock-socialmedia-app/${linkTo}`}
                        key={id}
                        onClick={() => clickEffect()}
                        className={baseClass}>
                        {icon ?
                            <span className={iconClass ?
                                iconClass : "text-3xl px-4"}>

                                {icon}</span> : null}
                        {text ? text : null}
                    </Link>
                    :
                    // Return <li without onclick otherwise
                    <Link to={`/mock-socialmedia-app/${linkTo}`}
                        key={id}
                        className={baseClass}>
                        {icon ?
                            <span className={iconClass ?
                                iconClass : "text-3xl px-4"}>

                                {icon}</span> : null}
                        {text ? text : null}
                    </Link>
            })}

        </ul>
    );
}

export default ListLinkTo;