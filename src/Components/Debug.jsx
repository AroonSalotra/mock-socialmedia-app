import DebugComponent from "./DebugComponent";
import { useEffect, useRef } from "react";

const Debug = () => {
    const debugRef = useRef(null)

    useEffect(() => {
        const getID = (e) => {
            const id = e.target.id
            return id ? console.log(id) : null

        }

        const getREF = (e) => {
            // debugRef.current
            const value = e.target
            console.log(value)
        }

        const funcSelect = getID

        window.addEventListener("click", funcSelect)

        return () => window.removeEventListener("click", funcSelect)

    }, [])
    return (
        <>
            <div id="debug" ref={debugRef}
                className="border-2 border-white flex justify-center mt-4 w-fit m-auto px-4" >
                <li className="flex gap-5 select-none pointer-events-none">
                    <span className="select-none">
                        ICON
                    </span>
                    DEBUG TEXT
                </li>
            </div>
        </>

    );
}

export default Debug;