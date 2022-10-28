import DebugComponent from "./DebugComponent";
import { useEffect, useRef, useState } from "react";
import Events from "./SidebarComponents,/Events";
import SelectButtons from "./SelectButtons";
import Market from "./SidebarComponents,/Market";
import InputChat from "./InputChat";
import StyledButton from "./StyledButton";

const Debug = () => {
    const [height, setHeight] = useState(40)
    const [size, setSize] = useState({
        width: 20,
        height: 40,
        showName: false,
        setText: "hidden"
    })

    const debugClick = () => {
        if (height === 10) setHeight(height => 40)
        else setHeight(height => 10)
    }

    const changeSize = () => {
        const sizeSmall = {
            width: 20, height: 40,
            showName: false, setText: "hidden"
        }
        const sizeLarge = {
            width: 80, height: 96,
            showName: true, setText: "block"
        }

        if (size.width === 20) return setSize(state => sizeLarge)
        setSize(state => sizeSmall)
    }

    // const { height } = size;


    return (
        <>
            <div className={`w-20 h-${height} bg-red-700 m-auto transition-all`}
                onClick={() => debugClick()}

            >
                {height}
            </div>


        </>

    );
}

export default Debug;