import DebugComponent from "./DebugComponent";
import { useEffect, useRef } from "react";
import Events from "./SidebarComponents,/Events";
import SelectButtons from "./SelectButtons";
import Market from "./SidebarComponents,/Market";

const Debug = () => {

    useEffect(() => {

        const getID = (e) => {
            // console.log(e.target.id)
            const target = e.target.id
            return target ? console.log(target) : null
        }

        window.addEventListener("click", getID)

        return () => window.removeEventListener("click", getID)
    }, [])


    return (
        <>
            <DebugComponent
                userId={2}
            />

            <div className="fixed bottom-0 right-10">

                <div className="">

                    <DebugComponent
                        userId={2}
                    />

                    <DebugComponent
                        userId={3}
                    />

                    <DebugComponent
                        userId={4}
                    />

                </div>

            </div>
        </>

    );
}

export default Debug;