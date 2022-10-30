import DebugComponent from "./DebugComponent";
import { useEffect, useRef, useState } from "react";
import Events from "./SidebarComponents,/Events";
import SelectButtons from "./SelectButtons";
import Market from "./SidebarComponents,/Market";
import InputChat from "./InputChat";
import StyledButton from "./StyledButton";

const Debug = () => {
    const [isActive, setIsActive] = useState(false)

    // const changeState = () => isActive ? setIsActive(false) : setIsActive(true)

    const changeState = () => setIsActive(state => !isActive)



    return (
        <>
            <div className="flex justify-center gap-10">
                <div className={`w-10 h-10 bg-red-500 ${isActive ? "myClass" : ""}`} />
                <button onClick={() => changeState()}>
                    DEBUG
                </button>
            </div>
        </>

    );
}

export default Debug;