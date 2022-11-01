import { useState } from "react";
import UserDisplay from "./UserDisplay";
import InputText from "./InputText";
import USERS from "../data/USERS.json"
import { useEffect } from "react";

const DebugComponent = (props) => {
    const [isActive, setIsActive] = useState(false)

    const { id, addClass } = props;

    useEffect(() => {
        console.log(isActive.toString())
    }, [isActive])
    // ${isActive ? "height-cap" : ""}
    return (
        <>
            <div className="flex flex-col justify-cente items-center">

                <div className={`w-32 h-20 bg-lime-700 select-none ${isActive ? "" : "debug-class"} transition-all`} />
                <div className={`w-40 h-10 bg-lime-900 cursor-pointer`}
                    onClick={() =>
                        setIsActive(state => !isActive)} />
            </div>
        </>
    );
}

export default DebugComponent;